import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures('pools/extended');

export default [
  ...paginationFixtures,
  {
    testName: 'pools/extended?queryparams',

    endpoints: ['pools/extended?count=5&page=3', 'pools/extended?count=5&page=3&order=asc'],
    response: [
      {
        pool_id: 'pool10c40pnzz3e00kuej05xfcs2ptkekhys48q7qc4jjcsysypj46qv',
        hex: '7e2af0cc428e5efb73327d0c9c41415db36b9215383c0c5652c40902',
        active_stake: expect.toBeGreaterThan('0'),
        live_stake: expect.toBeGreaterThan('0'),
        live_saturation: expect.toBeGreaterThan(0),
        blocks_minted: expect.toBeGreaterThan(1079),
        margin_cost: 0.15,
        fixed_cost: '340000000',
        declared_pledge: '8000000',
        metadata: {
          hash: expect.any(String),
          ticker: expect.any(String),
          url: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          homepage: expect.any(String),
        },
      },
      {
        pool_id: 'pool1cv9fr477zeznqrk8uxa5hh72tsjukkuqtnet7wgyxx3rq700kl5',
        hex: 'c30a91d7de1645300ec7e1bb4bdfca5c25cb5b805cf2bf390431a230',
        active_stake: expect.toBeGreaterThan('0'),
        live_stake: expect.toBeGreaterThan('0'),
        live_saturation: expect.toBeGreaterThan(0),
        blocks_minted: expect.toBeGreaterThan(1079),
        margin_cost: 0.02,
        fixed_cost: '340000000',
        declared_pledge: '300000000000',
        metadata: {
          hash: expect.any(String),
          ticker: expect.any(String),
          url: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          homepage: expect.any(String),
        },
      },
      {
        pool_id: 'pool1wwh3k3ldzujdvgxllfwlnnkxyheafkacqlufnvpr77n5q72f9hw',
        hex: '73af1b47ed1724d620dffa5df9cec625f3d4dbb807f899b023f7a740',
        active_stake: expect.toBeGreaterThan('0'),
        live_stake: expect.toBeGreaterThan('0'),
        live_saturation: expect.toBeGreaterThan(0),
        blocks_minted: expect.toBeGreaterThan(1079),
        margin_cost: 0.1,
        fixed_cost: '340000000',
        declared_pledge: '100000000',
        metadata: {
          hash: expect.any(String),
          ticker: expect.any(String),
          url: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          homepage: expect.any(String),
        },
      },
      {
        pool_id: 'pool1w75ukvh77hhz8c2u6rhfjvqlxyptwg37yrkddzatu99qxwwlqhd',
        hex: '77a9cb32fef5ee23e15cd0ee99301f3102b7223e20ecd68babe14a03',
        active_stake: expect.toBeGreaterThan('0'),
        live_stake: expect.toBeGreaterThan('0'),
        live_saturation: expect.toBeGreaterThan(0),
        blocks_minted: 0,
        margin_cost: 0.05,
        fixed_cost: '340000000',
        declared_pledge: '0',
        metadata: {
          description: null,
          hash: '6bf124f217d0e5a0a8adb1dbd8540e1334280d49ab861127868339f43b3948bf',
          homepage: null,
          name: null,
          ticker: null,
          url: 'https://your_pool_website.com',
        },
      },
      {
        pool_id: 'pool14rn9dq87dgj2z8g3lp4n0a78fewxff3gkgjkmz72ew44ym79xpp',
        hex: 'a8e65680fe6a24a11d11f86b37f7c74e5c64a628b2256d8bcacbab52',
        active_stake: expect.toBeGreaterThan('0'),
        live_stake: expect.toBeGreaterThan('0'),
        live_saturation: expect.toBeGreaterThan(0),
        blocks_minted: expect.toBeGreaterThan(1079),
        margin_cost: 0.05,
        fixed_cost: '340000000',
        declared_pledge: '0',
        metadata: {
          hash: 'c0719d1437e1bf09915b0dbfaae2e384d737e326f17d8f1ae82d6a40111a1035',
          url: 'https://f7ca89d1.cardano-metadata.stagebison.net/metadata.json',
          description: null,
          homepage: null,
          name: null,
          ticker: null,
        },
      },
    ],
  },
  {
    testName: 'pools/extended?queryparams - we are not there yet',

    endpoints: ['pools/extended?page=694269'],
    response: [],
  },
];
