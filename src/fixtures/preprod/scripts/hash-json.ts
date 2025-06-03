export default [
  {
    testName: "scripts/:hash/json",
    endpoints: ["scripts/12108f654f8a58118e06fa8cccf5b6def94b07eab73f03ae0dbf8e3d/json"],
    response: {
      json: null,
    },
  },
  {
    testName: "scripts/:hash/json timelock",
    endpoints: ["scripts/e2bab64ca481afc5a695b7db22fd0a7df4bf930158dfa652fb337999/json"],
    response: {
      json: {
        type: "all",
        scripts: [
          {
            slot: 15_688_803,
            type: "before",
          },
          {
            type: "sig",
            keyHash: "1f3af84024d2b2df54ab84c2a1ba55df164611d24602c1d92edfb619",
          },
        ],
      },
    },
  },
];
