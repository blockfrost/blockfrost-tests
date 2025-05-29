import { error_404, error_400_epochs } from "../../errors/index.js";

export default [
  {
    testName: "epochs/:number - first",
    endpoints: ["epochs/0"],

    response: {
      epoch: 0,
      start_time: 1_506_203_091,
      end_time: 1_506_635_091,
      first_block_time: 1_506_203_091,
      last_block_time: 1_506_635_071,
      block_count: 21_587,
      tx_count: 33,
      output: "10378568796482912",
      fees: "3458053",
      active_stake: null,
    },
  },
  {
    testName: "epochs/:number - generic byron",
    endpoints: ["epochs/123"],

    response: {
      epoch: 123,
      start_time: 1_559_339_091,
      end_time: 1_559_771_091,
      first_block_time: 1_559_339_091,
      last_block_time: 1_559_771_071,
      block_count: 21_600,
      tx_count: 18_347,
      output: "8850393846891182",
      fees: "3499911417",
      active_stake: null,
    },
  },
  {
    testName: "epochs/:number - generic shelley",
    endpoints: ["epochs/242"],

    response: {
      epoch: 242,
      start_time: 1_610_747_091,
      end_time: 1_611_179_091,
      first_block_time: 1_610_747_091,
      last_block_time: 1_611_179_076,
      block_count: 21_418,
      tx_count: 74_057,
      output: "63148817438049616",
      fees: "16905060417",
      active_stake: "21755094259019945",
    },
  },
  {
    testName: "epochs/:number - out of range epoch",

    endpoints: ["epochs/696969696969"],
    response: error_400_epochs,
  },
  {
    testName: "epochs/:number - not found epoch",
    endpoints: ["epochs/69696969"],

    response: error_404,
  },
];
