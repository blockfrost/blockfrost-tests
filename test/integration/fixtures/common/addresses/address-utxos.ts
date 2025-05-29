import { error_invalid_path } from "../../errors/index.js";

export default [
  {
    testName: "addresses/:address/utxos - [object%20Object]",
    endpoints: ["addresses/[object%20Object]/utxos"],
    response: error_invalid_path,
  },
];
