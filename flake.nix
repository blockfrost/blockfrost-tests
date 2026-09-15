{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      forAllSystems = nixpkgs.lib.genAttrs [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      networks = [ "mainnet" "preprod" "preview" ];
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          nodejs = pkgs.nodejs_24;
          yarn = pkgs.yarn-berry_4;
          src = pkgs.lib.cleanSource ./.;

          tests = pkgs.stdenv.mkDerivation (finalAttrs: {
            pname = "blockfrost-tests";
            version = "0.0.0";
            inherit src;

            nativeBuildInputs = [ nodejs yarn yarn.yarnBerryConfigHook ];

            # after changing yarn.lock, regenerate this file and refresh `hash` below:
            # nix run nixpkgs#yarn-berry_4.yarn-berry-fetcher -- missing-hashes yarn.lock > missing-hashes.json
            missingHashes = ./missing-hashes.json;

            offlineCache = yarn.fetchYarnBerryDeps {
              inherit src;
              inherit (finalAttrs) missingHashes;
              hash = "sha256-gCFgA1clZStwKcsZ9PNSQmNI1a6pvL1QzXxALu06mB0=";
            };

            installPhase = ''
              mkdir -p $out/lib
              cp -r . $out/lib/blockfrost-tests
            '';
          });

          runner = network: pkgs.writeShellScriptBin "blockfrost-tests-${network}" ''
            cd ${tests}/lib/blockfrost-tests
            export NETWORK=${network}
            # store is read-only: --configLoader runner skips vite's temp config bundle, --no-cache skips node_modules/.vite
            exec ${nodejs}/bin/node node_modules/vitest/vitest.mjs run -c ./vitest.config.integration.ts --configLoader runner --no-cache "$@"
          '';
        in
        builtins.listToAttrs (map (n: { name = "blockfrost-tests-${n}"; value = runner n; }) networks)
      );

      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = pkgs.mkShell {
            packages = [ pkgs.nodejs_24 pkgs.yarn-berry_4 ];
            shellHook = ''
              export PATH="$PATH:$(pwd)/node_modules/.bin"
              yarn
            '';
          };
        });
    };
}
