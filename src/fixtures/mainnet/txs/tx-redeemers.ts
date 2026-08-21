import { expect } from 'vitest';

export default [
  {
    id: 'txs-tx-redeemers_e2125bf4c8ce',
    testName: 'txs/:tx/redeemers',
    endpoints: ['txs/7ec5dd9f2fdd33b73786106b95be7737f6de5d53bb5e7b0610d1b9e947474d3c/redeemers'],
    response: [
      {
        tx_index: 1,
        purpose: 'spend',
        script_hash: 'e24268acb75d8613becf77027b810028d17c776fbdb8ec97b0a69b8e',
        redeemer_data_hash: 'e6238ac7da2575a8f266afbecd5fe0471b9e9aa4ae5697a938321b52cf4889fb',
        datum_hash: 'e6238ac7da2575a8f266afbecd5fe0471b9e9aa4ae5697a938321b52cf4889fb',
        unit_mem: '1426968',
        unit_steps: '512081024',
        fee: '119258',
      },
    ],
  },
  {
    // cert-purpose redeemer with resolved script_hash. the tx registers a
    // script DRep, so the single redeemer witnesses the drep_registration
    // certificate.
    id: 'txs-tx-redeemers-cert-purpose_cdc10ffe51fb',
    testName: 'txs/:tx/redeemers cert purpose',
    endpoints: ['txs/cb177a185ab0629134ebcd0b0c94ee876f0afc0397a2a915b9fa8b1b14757d97/redeemers'],
    response: [
      {
        tx_index: 0,
        purpose: 'cert',
        script_hash: '199ad2959c8c4e4d50a04a0f3d873b692ff86fbc6a195dd44d17b746',
        redeemer_data_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        datum_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        unit_mem: '555672',
        unit_steps: '142528061',
        fee: '42339',
      },
    ],
  },
  {
    // reward-purpose redeemer with resolved script_hash (withdraw-zero
    // batcher). the tx mixes spend and reward purposes; db-sync orders rows
    // by redeemer index only, and cross-tag index ties make row order
    // backend-specific — compare as same-members.
    id: 'txs-tx-redeemers-reward-purpose_c522b7f519c0',
    testName: 'txs/:tx/redeemers reward purpose',
    endpoints: ['txs/014d5b9ce70b0156f823d350a5a87ba9caf98386393f5ce9deb61f1a8d383d24/redeemers'],
    response: expect.toIncludeSameMembers([
      {
        tx_index: 0,
        purpose: 'spend',
        script_hash: '9e130eb0323f31df50bfbb731f35f5a795a630ef727b4ba272460b55',
        redeemer_data_hash: '8392f0c940435c06888f9bdb8c74a95dc69f156367d6a089cf008ae05caae01e',
        datum_hash: '8392f0c940435c06888f9bdb8c74a95dc69f156367d6a089cf008ae05caae01e',
        unit_mem: '162000',
        unit_steps: '60000000',
        fee: '13674',
      },
      {
        tx_index: 2,
        purpose: 'spend',
        script_hash: '7f052cfce3ba771cc2a413c09a4ac458fc48af4108927b743de6659f',
        redeemer_data_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        datum_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        unit_mem: '75000',
        unit_steps: '21000000',
        fee: '5842',
      },
      {
        tx_index: 0,
        purpose: 'reward',
        script_hash: '56661cf4ade72946ede31a3f406950dcd4b6864310e3f2a2dec9e1dd',
        redeemer_data_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        datum_hash: '45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
        unit_mem: '573000',
        unit_steps: '211044000',
        fee: '48279',
      },
    ]),
  },
  {
    // a mainnet parameter-change proposal: the constitution guardrails
    // script executes with a propose redeemer. pins two current-API facts:
    // the propose row is served ahead of the published schema, and
    // script_hash is empty — db-sync does not attribute governance
    // redeemers. a ledger-attributing backend returns the guardrails hash
    // (fa24fb30…) here instead.
    id: 'txs-redeemers-propose-purpose_c48e858a027e',
    testName: 'txs/:hash/redeemers with a propose redeemer',
    endpoints: ['txs/51f495aa23f4b3b3aa90afde4a0e67823bb7ac4ac65f5ffbb138373b863f2f74/redeemers'],
    response: [
      {
        tx_index: 0,
        purpose: 'propose',
        script_hash: '',
        redeemer_data_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        datum_hash: 'd36a2619a672494604e11bb447cbcf5231e9f2ba25c2169177edc941bd50ad6c',
        unit_mem: '478665',
        unit_steps: '104574320',
        fee: '35159',
      },
    ],
  },
];
