import { getPaginationFixtures } from "../../../../utils.js";

const paginationFixtures = getPaginationFixtures(
  "governance/dreps/drep1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhquq6gltn/updates"
);

export default [
  ...paginationFixtures,
  {
    testName: "governance drep keyHash updates",

    endpoints: ["governance/dreps/drep1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhquq6gltn/updates"],
    response: [],
  },
  {
    testName: "governance drep scriptHash updates",

    endpoints: [
      "governance/dreps/drep_script1wcl0w4np7rxceraptxne67dlaru6w6rchk407uq9nrhqu0c4hhj/updates",
      "governance/dreps/drep1ydmraa6kv8cvmry059v608tehl50nfmg0z764lmsqkvwurs40sw2z/updates", // CIP129 id
    ],
    response: [
      {
        tx_hash: "744fb092ab6d8a4d8ca8f66ea3c0abb6b9d49381205aa41c75c8597e91137948",
        cert_index: 0,
        action: "registered",
      },
      {
        tx_hash: "ebab27b88379f662d5bdcd2db7c0be391fd94674a889255411d540b6684e5c13",
        cert_index: 0,
        action: "updated",
      },
    ],
  },
  {
    testName: "governance drep_always_abstain updates",

    endpoints: ["governance/dreps/drep_always_abstain/updates"],
    response: [],
  },
  {
    testName: "governance drep_always_no_confidence updates",

    endpoints: ["governance/dreps/drep_always_no_confidence/updates"],
    response: [],
  },
];
