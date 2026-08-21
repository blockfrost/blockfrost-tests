import { expect } from 'vitest';
import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/redeemers',
);

export default [
  ...paginationFixtures,
  {
    id: 'scripts-hash-redeemers_479c4b472ee2',
    testName: 'scripts/:hash/redeemers',
    endpoints: ['scripts/4f590a3d80ae0312bad0b64d540c3ff5080e77250e9dbf5011630016/redeemers'],
    response: [
      {
        tx_hash: 'a95d16e891e51f98a3b1d3fe862ed355ebc8abffb7a7269d86f775553d9e653f',
        tx_index: 0,
        purpose: 'spend',
        redeemer_data_hash: '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
        datum_hash: '5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4',
        unit_mem: '520448',
        unit_steps: '211535239',
        fee: '45282',
      },
    ],
  },
  {
    // a script DRep: its redeemers witness drep_registration and drep_update
    // certs. the DRep can update again, so pin the first rows of its history
    // with order=asc&count — those never change.
    id: 'scripts-hash-redeemers-cert-purpose_bd6f2f7d8f13',
    testName: 'scripts/:hash/redeemers cert purpose',
    endpoints: [
      'scripts/199ad2959c8c4e4d50a04a0f3d873b692ff86fbc6a195dd44d17b746/redeemers?order=asc&count=2',
    ],
    response: [
      {
        tx_hash: 'cb177a185ab0629134ebcd0b0c94ee876f0afc0397a2a915b9fa8b1b14757d97',
        tx_index: 0,
        purpose: 'cert',
        redeemer_data_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        datum_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        unit_mem: '555672',
        unit_steps: '142528061',
        fee: '42339',
      },
      {
        tx_hash: 'c5d51e9740e817fcfcf9dbeb9a2ae5962de28bd0aa33c5711c04d89a2fe9aad3',
        tx_index: 0,
        purpose: 'cert',
        redeemer_data_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        datum_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        unit_mem: '494426',
        unit_steps: '126134567',
        fee: '37623',
      },
    ],
  },
  {
    // a withdraw-zero batcher stake script: every execution is a reward
    // redeemer. the script is still active, so pin the first rows of its
    // history with order=asc&count — those never change.
    id: 'scripts-hash-redeemers-reward-purpose_2f6ab7e34e91',
    testName: 'scripts/:hash/redeemers reward purpose',
    endpoints: [
      'scripts/56661cf4ade72946ede31a3f406950dcd4b6864310e3f2a2dec9e1dd/redeemers?order=asc&count=3',
    ],
    response: [
      {
        tx_hash: 'e539c125b85732cccf25de4446b0dcfb749017e7c0ac8f981dd9cf25c47f5b1c',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        datum_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        unit_mem: '786000',
        unit_steps: '289988000',
        fee: '66261',
      },
      {
        tx_hash: 'ee49e0d7743be4fda75e19531a8d290947cd94e272ea0dfe9eafe80a5db1aec3',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        datum_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        unit_mem: '573000',
        unit_steps: '211044000',
        fee: '48279',
      },
      {
        tx_hash: 'e2be575c09c45e5c21a99bcc4a5a944fc8c2bdb1928c2fe83f3d1ffa4fdd5162',
        tx_index: 0,
        purpose: 'reward',
        redeemer_data_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        datum_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        unit_mem: '573000',
        unit_steps: '211044000',
        fee: '48279',
      },
    ],
  },
  {
    // the constitution guardrails script (fa24fb30…) has executed on every
    // enacted parameter change and treasury withdrawal, but db-sync leaves
    // propose redeemers unattributed, so the API finds no rows for it. a
    // backend that attributes governance redeemers from the ledger lists
    // those executions here. an empty page and propose-only rows both
    // pass; any other purpose under this script fails.
    id: 'scripts-hash-redeemers-guardrails-unattributed_f0c6fbe97beb',
    testName: 'scripts/:hash/redeemers guardrails script governance executions',
    endpoints: ['scripts/fa24fb305126805cf2164c161d852a0e7330cf988f1fe558cf7d4a64/redeemers'],
    response: expect.toSatisfy(
      (rows: { purpose: string }[]) =>
        Array.isArray(rows) && rows.every(row => row.purpose === 'propose'),
    ),
  },
];
