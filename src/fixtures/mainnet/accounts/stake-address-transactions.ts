import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions',
);

export default [
  {
    testName:
      'accounts/:stake_address/transactions BF account (16 txs on 4 addresses, 11 txs without sent to self duplicates)',
    endpoints: [
      'accounts/stake_vkh10q4vn64gz0rd98hxqcr5dsztvmvj8f5hkadfhjlwanxeq37txjz/transactions',
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions',
    ],
    response: [
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: 'bd78e0e73fb1691f08746a331bd764d11552c3a36ef766d4f1a3bbdc7f29918d',
        tx_index: 34,
        block_height: 7900364,
        block_time: 1666114079,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696',
        tx_index: 6,
        block_height: 7900557,
        block_time: 1666118180,
      },
      {
        address:
          'addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq',
        tx_hash: '67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696',
        tx_index: 6,
        block_height: 7900557,
        block_time: 1666118180,
      },
      {
        address:
          'addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq',
        tx_hash: '94753e4e393f9ccfc89534f002f2702ab4ce88bf394c9b5db815b446df75b987',
        tx_index: 12,
        block_height: 7900568,
        block_time: 1666118446,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '94753e4e393f9ccfc89534f002f2702ab4ce88bf394c9b5db815b446df75b987',
        tx_index: 12,
        block_height: 7900568,
        block_time: 1666118446,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '23fcdaa4d5f374101bae1ed21fa4d482b3e02804e9bd6b3ade6792d944a44c69',
        tx_index: 8,
        block_height: 7900573,
        block_time: 1666118548,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '07d30afe9dd6eca75122e04d4f198421e2b44377ba62b5de17da9794db5b56de',
        tx_index: 18,
        block_height: 7900764,
        block_time: 1666122528,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '4eaa60c5ca9050493d4e34632f30fd46dfcb303637a9ae63bc53ff74abd18fdc',
        tx_index: 52,
        block_height: 8038272,
        block_time: 1668961200,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '72c014fccc4c02ed8993087ae0faddd2517d6ed2060173ba6154fb476615a512',
        tx_index: 22,
        block_height: 8038275,
        block_time: 1668961302,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '99e4b01005ab6e1f440e2d3600b631df997d349e66789eaf876feb6bf03212c9',
        tx_index: 60,
        block_height: 8042180,
        block_time: 1669043581,
      },
      {
        address:
          'addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz',
        tx_hash: '99e4b01005ab6e1f440e2d3600b631df997d349e66789eaf876feb6bf03212c9',
        tx_index: 60,
        block_height: 8042180,
        block_time: 1669043581,
      },
      {
        address:
          'addr1qy6qvd3szupa7ayqf6zw7cd0ple7w3yg5f3xh5gkkc4q9zmc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq52e2en',
        tx_hash: '59c8328e8e5e7fee082c47a5967d39aeb4a7c2a777005cf8775d60fc8b501764',
        tx_index: 22,
        block_height: 8223590,
        block_time: 1672766581,
      },
      {
        address:
          'addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1qy6qvd3szupa7ayqf6zw7cd0ple7w3yg5f3xh5gkkc4q9zmc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq52e2en',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '619c90076e587b000856cc1a0830c45a51ec6ba9f8f8fb00dc9f4406b06ccf72',
        tx_index: 17,
        block_height: 8516712,
        block_time: 1678809637,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions huge stake account (22k+ txs)',
    endpoints: [
      'accounts/stake1u89xt5ewlfl0ww0a7zvn2ent0cmgl8yhh2865ppwzss9d4gltk92h/transactions?count=2&page=1',
    ],
    customTimeout: 10000,
    response: [
      {
        address:
          'addr1qyq7a3dg7ejlg3t0h3pxarxxx6j064w70su8qg5w6g9emxx2vhfja7n77uulmuyex4nxkl3k37wf0w504gzzu9pq2m2sf7ew7h',
        tx_hash: '03a43111578651c7cfc3aa2187e741fed4595fff97dc5ad91a6f225406a68719',
        tx_index: 31,
        block_height: 7882195,
        block_time: 1665742434,
      },
      {
        address:
          'addr1qyq7a3dg7ejlg3t0h3pxarxxx6j064w70su8qg5w6g9emxx2vhfja7n77uulmuyex4nxkl3k37wf0w504gzzu9pq2m2sf7ew7h',
        tx_hash: '4436584c0e9ad1020fb5d1cb0e009537ceacf4af794b1588401db1e229979f67',
        tx_index: 33,
        block_height: 7882682,
        block_time: 1665752284,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions scriptHash stake account',
    endpoints: [
      'accounts/stake17xzc8pt7fgf0lc0x7eq6z7z6puhsxmzktna7dluahrj6g6ghh5qjr/transactions?count=2&page=1',
      'accounts/script1skpc2lj2ztl7rehkgxshsks09upkc4jul0n0l8dcukjxjfe7wyl/transactions?count=2&page=1',
    ],
    response: [
      {
        address:
          'addr1xxzc8pt7fgf0lc0x7eq6z7z6puhsxmzktna7dluahrj6g6v9swzhujsjlls7dajp59u95re0qdk9vh8mumlemw89535s4ecqxj',
        tx_hash: '182f8efed8110d65708cf2d03d4946238b32bad661536e463e90427d1af1d666',
        tx_index: 8,
        block_height: 12126891,
        block_time: 1752551105,
      },
      {
        address:
          'addr1xxzc8pt7fgf0lc0x7eq6z7z6puhsxmzktna7dluahrj6g6v9swzhujsjlls7dajp59u95re0qdk9vh8mumlemw89535s4ecqxj',
        tx_hash: '0f591dc544ae14102dbb4a74d5311a6acffc1772b163d8b7a9656b9525950b17',
        tx_index: 6,
        block_height: 12132613,
        block_time: 1752670310,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions generic account stake_vk (cip19 test vector)',
    endpoints: [
      'accounts/stake_vk1px4j0r2fk7ux5p23shz8f3y5y2qam7s954rgf3lg5merqcj6aetsft99wu/transactions?count=1&page=1',
      'accounts/stake1uyehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gh6ffgw/transactions?count=1&page=1&order=asc',
    ],
    response: [
      {
        address:
          'addr1z8phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gten0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgs9yc0hh',
        tx_hash: '85a0254af5acff7a1b2a76e719d5360a4d26ad12255664af0b659a016dd5f085',
        tx_index: 3,
        block_height: 12361806,
        block_time: 1757302050,
      },
    ],
  },
  // query params tests
  {
    testName: 'accounts/:stake_address/transactions BF account from param',
    endpoints: [
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions?from=8223596',
    ],
    response: [
      {
        address:
          'addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1qy6qvd3szupa7ayqf6zw7cd0ple7w3yg5f3xh5gkkc4q9zmc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq52e2en',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '619c90076e587b000856cc1a0830c45a51ec6ba9f8f8fb00dc9f4406b06ccf72',
        tx_index: 17,
        block_height: 8516712,
        block_time: 1678809637,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions BF account to param',
    endpoints: [
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions?to=7900557',
    ],
    response: [
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: 'bd78e0e73fb1691f08746a331bd764d11552c3a36ef766d4f1a3bbdc7f29918d',
        tx_index: 34,
        block_height: 7900364,
        block_time: 1666114079,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: '67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696',
        tx_index: 6,
        block_height: 7900557,
        block_time: 1666118180,
      },
      {
        address:
          'addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq',
        tx_hash: '67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696',
        tx_index: 6,
        block_height: 7900557,
        block_time: 1666118180,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions BF account from&to param',
    endpoints: [
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions?from=8223596:9&to=8223596:9',
    ],
    response: [
      {
        address:
          'addr1q9x625ny9y42s5z8n78afjg9meyeknvt5kwm3y6sdlrz66tc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqsyx3uz',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1qy6qvd3szupa7ayqf6zw7cd0ple7w3yg5f3xh5gkkc4q9zmc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq52e2en',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
      {
        address:
          'addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2',
        tx_hash: 'c34c232d6574d35a92f3bdcc6159b6d0b04f98de9f311db629f8973ac66dec10',
        tx_index: 9,
        block_height: 8223596,
        block_time: 1672766667,
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/transactions BF account from&to param empty result',
    endpoints: [
      'accounts/stake1u9uz4j024qfud557ucrqw3kqfdndjgaxj7m44x7tamkvmyqzdwe7v/transactions?from=8223596:8&to=8223596:8',
    ],
    response: [],
  },
  ...paginationFixtures,
];
