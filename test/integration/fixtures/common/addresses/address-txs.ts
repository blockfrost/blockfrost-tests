import { error_invalid_path } from "../../errors/index.js";

export default [
  {
    testName: "addresses txs [object%20Object]",
    endpoints: ["addresses/[object%20Object]/txs"],
    response: error_invalid_path,
  },
];
