import { error_invalid_path } from "../../errors/index.js";

export default [
  {
    testName: "addresses transactions [object%20Object]/total",
    endpoints: ["addresses/[object%20Object]/transactions"],
    response: error_invalid_path,
  },
];
