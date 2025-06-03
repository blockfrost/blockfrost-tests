import { error_400_assets, error_404 } from "../../errors/index.js";
import { getPaginationFixtures } from "../../../utils.js";

const paginationFixtures = getPaginationFixtures(
  "assets/b43d4ad8386fc831db53cfa5c31bf37d42647eea60ce4b1cafddb247/addresses",
);

export default [
  ...paginationFixtures,
  {
    testName: "assets addresses",

    endpoints: [
      "assets/b43d4ad8386fc831db53cfa5c31bf37d42647eea60ce4b1cafddb247/addresses",
    ],
    response: [
      {
        address:
          "addr_test1qr3uhus8q7pat5a2h99t4ws4upt9excr5ce5k4fp7lv6qfcjvuw9j2fcs3xpgqxkt5f5zd0rtd8jnnw8n2s5qjswzyfqmyqptf",
        quantity: "1",
      },
    ],
  },
  {
    testName: "assets addresses - invalid asset",

    endpoints: ["assets/stonksasset/addresses"],

    response: error_400_assets,
  },
  {
    testName: "assets addresses - valid not on-chain asset",

    endpoints: [
      "assets/ddd01d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff444f4e545350414d/addresses",
    ],

    response: error_404,
  },
];
