import { error_400 } from "../../errors/index.js";

export default [
  {
    testName: "utils/txs/evaluate/utxos invalid GET request",
    endpoints: ["utils/txs/evaluate/utxos"],
    response: error_400,
  },
];
