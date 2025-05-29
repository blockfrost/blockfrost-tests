# This is a minimal `default.nix` by yarn-plugin-nixify. You can customize it
# as needed, it will not be overwritten by the plugin.

{ pkgs ? import
    (builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/9790f3242da2152d5aa1976e3e4b8b414f4dd206.tar.gz";
      sha256 = "1y6zipys4803ckvnamfljb8raglgkbz1fz1fg03cxp4jqiiva5s1";
    })
    { }
}:

rec {
  blockfrost-tests-mainnet =
    let
      src = pkgs.lib.cleanSource ./.;

      project = pkgs.callPackage ./yarn-project.nix { nodejs = pkgs.nodejs_20; } { inherit src; };
    in
    project.overrideAttrs (oldAttrs: rec {

      name = "blockfrost-tests-mainnet";

      HOME = "/build";

      buildPhase = ''
        yarn build

        mkdir -p $out/bin
        cat <<EOF > $out/bin/${name}
        yarn test:mainnet
        EOF
        chmod +x $out/bin/${name}
      '';

      dontStrip = true;

    });

  blockfrost-tests-preprod =
    let
      src = pkgs.lib.cleanSource ./.;

      project = pkgs.callPackage ./yarn-project.nix { nodejs = pkgs.nodejs_20; } { inherit src; };
    in
    project.overrideAttrs (oldAttrs: rec {

      name = "blockfrost-tests-preprod";

      HOME = "/build";

      buildPhase = ''
        yarn build

        mkdir -p $out/bin
        cat <<EOF > $out/bin/${name}
        yarn test:preprod
        EOF
        chmod +x $out/bin/${name}
      '';

      dontStrip = true;

    });


  blockfrost-tests-preview =
    let
      src = pkgs.lib.cleanSource ./.;

      project = pkgs.callPackage ./yarn-project.nix { nodejs = pkgs.nodejs_20; } { inherit src; };
    in
    project.overrideAttrs (oldAttrs: rec {

      name = "blockfrost-tests-preview";

      HOME = "/build";

      buildPhase = ''
        yarn build

        mkdir -p $out/bin
        cat <<EOF > $out/bin/${name}
        yarn test:preview
        EOF
        chmod +x $out/bin/${name}
      '';

      dontStrip = true;

    });

}
