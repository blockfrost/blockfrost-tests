import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'pools/pool1n935yzlmu7528fx4qjf2gak0cdv2nune9cku730zg7vh707rnnd/history'
);

export default [
  ...paginationFixtures,
  {
    testName: 'pools/:pool_id/history - best pool history',
    endpoints: [
      'pools/pool1n935yzlmu7528fx4qjf2gak0cdv2nune9cku730zg7vh707rnnd/history?count=10',
      'pools/9963420bfbe7a8a3a4d50492a476cfc358a9f2792e2dcf45e247997f/history?count=10',
    ],
    response: [
      {
        epoch: 344,
        blocks: 21,
        active_stake: '1009515693764',
        active_size: 0.00691932262650034,
        delegators_count: 2,
        rewards: '503117797',
        fees: '344077944',
      },
      {
        epoch: 345,
        blocks: 33,
        active_stake: '1009515693764',
        active_size: 0.006818229263725338,
        delegators_count: 2,
        rewards: '801746040',
        fees: '351543651',
      },
      {
        epoch: 346,
        blocks: 33,
        active_stake: '1009515693764',
        active_size: 0.006759278243075131,
        delegators_count: 2,
        rewards: '808164284',
        fees: '351704107',
      },
      {
        epoch: 347,
        blocks: 38,
        active_stake: '1010018811561',
        active_size: 0.006707861650796481,
        delegators_count: 2,
        rewards: '937561272',
        fees: '354939031',
      },
      {
        epoch: 348,
        blocks: 26,
        active_stake: '1010820557601',
        active_size: 0.006659235237615154,
        delegators_count: 2,
        rewards: '646233437',
        fees: '347655835',
      },
      {
        epoch: 349,
        blocks: 22,
        active_stake: '1011628721885',
        active_size: 0.006609620974079026,
        delegators_count: 2,
        rewards: '550981242',
        fees: '345274531',
      },
      {
        epoch: 350,
        blocks: 28,
        active_stake: '1012566283157',
        active_size: 0.006606084636742416,
        delegators_count: 2,
        rewards: '701822276',
        fees: '349045556',
      },
      {
        epoch: 351,
        blocks: 29,
        active_stake: '1013212516594',
        active_size: 0.006599893060619533,
        delegators_count: 2,
        rewards: '727533728',
        fees: '349688343',
      },
      {
        epoch: 352,
        blocks: 31,
        active_stake: '1013763497836',
        active_size: 0.006770316450247288,
        delegators_count: 2,
        rewards: '758031487',
        fees: '350450787',
      },
      {
        epoch: 353,
        blocks: 32,
        active_stake: '1014465320112',
        active_size: 0.0066251653338649415,
        delegators_count: 2,
        rewards: '799608202',
        fees: '351490205',
      },
    ],
  },
  {
    testName: 'pools/:pool_id/history - pool history with more margin/cost updates',
    endpoints: [
      'pools/pool15jqsjphnxg7hcx2rvd0ryhg5xwshg7xktthj3zf70nmxx9ffjet/history?page=4&count=1',
      'pools/a4810906f3323d7c1943635e325d1433a17478d65aef28893e7cf663/history?page=4&count=1&order=asc',
    ],
    response: [
      {
        epoch: 258,
        blocks: 39,
        active_stake: '1009502032745',
        active_size: 0.008366790124342011,
        delegators_count: 2,
        rewards: '821882150',
        fees: '793305286',
      },
    ],
  },
];
