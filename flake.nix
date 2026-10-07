{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";

  outputs = { self, nixpkgs }:
    let
      forAllSystems = nixpkgs.lib.genAttrs [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" ];
      networks = [ "mainnet" "preprod" "preview" ];
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          nodejs = pkgs.nodejs_24;
          pnpm = pkgs.pnpm_12;
          src = pkgs.lib.cleanSource ./.;

          tests = pkgs.stdenv.mkDerivation (finalAttrs: {
            pname = "blockfrost-tests";
            version = "0.0.0";
            inherit src;

            nativeBuildInputs = [ nodejs pnpm pkgs.pnpmConfigHook ];

            # after changing pnpm-lock.yaml, set `hash = ""`, build and paste the `got:` hash back
            pnpmDeps = pkgs.fetchPnpmDeps {
              inherit (finalAttrs) pname version src;
              inherit pnpm;
              fetcherVersion = 4;
              # pnpm 12 materializes packages into <store>/v11/links (incl. JSONC tsconfigs the fixup's jq chokes on);
              # it's a derivable cache, offline install only needs files/ + index.db
              postInstall = "rm -rf $storePath/v11/links";
              hash = "sha256-zixDJY28hqImcRxPA92I/l6JPcGLVihpj5aKTroLDCA=";
            };

            installPhase = ''
              # only what vitest needs at runtime; skips .github, flake.*, ...
              mkdir -p $out/lib/blockfrost-tests
              cp -r node_modules src endpoints-allowlist.json package.json tsconfig.json vitest.config.integration.ts \
                $out/lib/blockfrost-tests/
            '';
          });

          runner = network: pkgs.writeShellScriptBin "blockfrost-tests-${network}" ''
            export NETWORK=${network}
            # keep the caller's cwd and preload dotenv so ./.env is honoured; --root points vitest at the store copy
            # store is read-only: --configLoader runner skips vite's temp config bundle, --no-cache skips node_modules/.vite
            exec ${nodejs}/bin/node -r ${tests}/lib/blockfrost-tests/node_modules/dotenv/config \
              ${tests}/lib/blockfrost-tests/node_modules/vitest/vitest.mjs run \
              --root ${tests}/lib/blockfrost-tests -c ${tests}/lib/blockfrost-tests/vitest.config.integration.ts \
              --configLoader runner --no-cache "$@"
          '';
        in
        { blockfrost-tests = tests; default = tests; }
        // builtins.listToAttrs (map (n: { name = "blockfrost-tests-${n}"; value = runner n; }) networks)
      );

      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = pkgs.mkShell {
            packages = [ pkgs.nodejs_24 pkgs.pnpm_12 ];
            shellHook = ''
              export PATH="$PATH:$(pwd)/node_modules/.bin"
              pnpm install
            '';
          };
        });
    };
}
