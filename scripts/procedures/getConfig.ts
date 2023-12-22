// To utilize the default config system built, this file is required. It defines the *structure* of the configuration file. These structured options display as changeable UI elements within the "Config" section of the service details page in the StartOS UI.
import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  // "tor-address": {
  //   name: "Tor Address",
  //   description: "The Tor address of the network interface",
  //   type: "pointer",
  //   subtype: "package",
  //   "package-id": "jam",
  //   target: "tor-address",
  //   interface: "main",
  // },
  // "lan-address": {
  //   name: "Network LAN Address",
  //   description: "The LAN address for the network interface.",
  //   type: "pointer",
  //   subtype: "package",
  //   "package-id": "jam",
  //   target: "lan-address",
  //   interface: "main",
  // },
  // username: {
  //   type: "string",
  //   name: "JAM Username",
  //   description: "Administrator username for JAM",
  //   nullable: false,
  //   copyable: true,
  //   masked: false,
  //   default: "jam",
  // },
  // password: {
  //   type: "string",
  //   name: "JAM Password",
  //   description: "Administrator password for JAM",
  //   nullable: false,
  //   copyable: true,
  //   masked: true,
  //   default: {
  //     charset: "a-z,A-Z,0-9",
  //     len: 22,
  //   },
  // },
  "bitcoind-user": {
    type: "pointer",
    name: "RPC Username",
    description: "The username for Bitcoin Core's RPC interface",
    subtype: "package",
    "package-id": "bitcoind",
    target: "config",
    multi: false,
    selector: "$.rpc.username",
  },
  "bitcoind-password": {
    type: "pointer",
    name: "RPC Password",
    description: "The password for Bitcoin Core's RPC interface",
    subtype: "package",
    "package-id": "bitcoind",
    target: "config",
    multi: false,
    selector: "$.rpc.password",
  },
});
