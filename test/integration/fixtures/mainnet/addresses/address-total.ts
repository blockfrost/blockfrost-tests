import { expect } from "vitest";

export default [
  {
    testName: "addresses/:address/total generic dormant exchange byron address",

    endpoints: [
      "addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT/total",
    ],
    response: {
      address:
        "DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT",
      received_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThan("20180619991547028"),
        },
      ],
      sent_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThan("20180619991547028"),
        },
      ],
      tx_count: expect.toBeGreaterThan(150_965),
    },
  },
  {
    testName: "addresses/:address/total generic shelley address",
    endpoints: [
      "addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y/total",
    ],

    response: {
      address:
        "addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y",
      received_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThanOrEqual("2430412032"),
        },
      ],
      sent_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThanOrEqual("2430412032"),
        },
      ],
      tx_count: expect.toBeGreaterThanOrEqual(6),
    },
  },
  {
    testName: "addresses/:address/total generic shelley address payment cred",
    endpoints: [
      "addresses/addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju/total",
    ],

    response: {
      address: "addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju",
      received_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThanOrEqual("2430412032"),
        },
      ],
      sent_sum: [
        {
          unit: "lovelace",
          quantity: expect.toBeGreaterThanOrEqual("2430412032"),
        },
      ],
      tx_count: expect.toBeGreaterThanOrEqual(6),
    },
  },
];
