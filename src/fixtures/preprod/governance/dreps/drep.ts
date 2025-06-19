import { expect } from "vitest";

export default [
  {
    testName: "governance scriptHash drep",

    endpoints: ["governance/dreps/drep_script16pxnn38ykshfahwmkaqmke3kdqaksg4w935d7uztvh8y5sh6f6d"],
    response: {
      drep_id: "drep16pxnn38ykshfahwmkaqmke3kdqaksg4w935d7uztvh8y5l48pxv",
      hex: "d04d39c4e4b42e9edddbb741bb6636683b6822ae2c68df704b65ce4a",
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 175,
      has_script: true,
      last_active_epoch: 181,
      retired: false,
      expired: true,
    },
  },
  {
    testName: "governance cip129 drep (same as legacy drep_script16pxnn38ykshfahwmkaqmke3kdqaksg4w935d7uztvh8y5sh6f6d)",

    endpoints: ["governance/dreps/drep1y0gy6wwyuj6za8kamwm5rwmxxe5rk6pz4ckx3hmsfdjuujsr70shz"],
    response: {
      drep_id: "drep1y0gy6wwyuj6za8kamwm5rwmxxe5rk6pz4ckx3hmsfdjuujsr70shz",
      hex: "23d04d39c4e4b42e9edddbb741bb6636683b6822ae2c68df704b65ce4a",
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: 175,
      has_script: true,
      last_active_epoch: 181,
      retired: false,
      expired: true,
    },
  },
  {
    testName: "drep drep_always_abstain",
    endpoints: ["governance/dreps/drep_always_abstain"],
    response: {
      drep_id: "drep_always_abstain",
      hex: "",
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: null,
      has_script: false,
      last_active_epoch: null,
      retired: false,
      expired: false,
    },
  },
  {
    testName: "drep drep_always_no_confidence",

    endpoints: ["governance/dreps/drep_always_no_confidence"],
    response: {
      drep_id: "drep_always_no_confidence",
      hex: "",
      amount: expect.toBeAdaQuantity(),
      active: true,
      active_epoch: null,
      has_script: false,
      last_active_epoch: null,
      retired: false,
      expired: false,
    },
  },
];
