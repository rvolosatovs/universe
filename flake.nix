{
  description = "Pinned documentation of crates relevant to me.";

  inputs.nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;
  inputs.flake-compat.flake = false;
  inputs.flake-compat.url = github:edolstra/flake-compat;
  inputs.flake-utils.url = github:numtide/flake-utils;
  inputs.rust-overlay.inputs.flake-utils.follows = "flake-utils";
  inputs.rust-overlay.inputs.nixpkgs.follows = "nixpkgs";
  inputs.rust-overlay.url = github:oxalica/rust-overlay;

  inputs.enarx.url = github:enarx/enarx;
  inputs.enarx.flake = false;

  outputs = { self, nixpkgs, rust-overlay, flake-utils, enarx, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ (import rust-overlay) ];
        };

        rust = (pkgs.rust-bin.fromRustupToolchainFile "${enarx}/rust-toolchain.toml").override {
          extensions = [ "rust-src" ];
        };
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = (with pkgs; [
            openssl.dev
            (writeShellScriptBin "build" ''
              cargo doc
            '')
            (writeShellScriptBin "open" ''
              cargo doc --open
            '')
          ]) ++ [
            rust
          ];

          nativeBuildInputs = with pkgs; [
            pkg-config
          ];
        };
      }
    );
}
