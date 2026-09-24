import {
  error_400_epochs,
  error_400_integer_param,
  error_400_pools,
  error_404,
} from '../../errors/index.js';

// Network-independent error paths of /epochs/{number}/*.
// Epoch 1 exists on every network, 69696969 on none.
export default [
  {
    id: 'epochs-number-negative-epoch_ae59c7b0451b',
    testName: 'epochs/:number/* - negative epoch',
    endpoints: [
      'epochs/-1',
      'epochs/-1/next',
      'epochs/-1/previous',
      'epochs/-1/stakes',
      'epochs/-1/stakes/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/-1/blocks',
      'epochs/-1/blocks/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/-1/parameters',
    ],
    response: error_400_epochs,
  },
  {
    id: 'epochs-number-out-of-range-epoch_08dabf885a4f',
    testName: 'epochs/:number/* - out of range epoch',
    endpoints: [
      'epochs/696969696969/stakes',
      'epochs/696969696969/stakes/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/696969696969/blocks',
      'epochs/696969696969/blocks/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/696969696969/parameters',
    ],
    response: error_400_epochs,
  },
  {
    id: 'epochs-number-non-integer-epoch_62a28aec6c41',
    testName: 'epochs/:number/* - non-integer epoch',
    endpoints: [
      'epochs/stonks',
      'epochs/stonks/next',
      'epochs/stonks/previous',
      'epochs/stonks/stakes',
      'epochs/stonks/stakes/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/stonks/blocks',
      'epochs/stonks/blocks/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/stonks/parameters',
    ],
    response: error_400_integer_param('number'),
  },
  {
    id: 'epochs-number-epoch-not-on-chain_303271d05cb8',
    testName: 'epochs/:number/* - epoch not on-chain',
    endpoints: [
      'epochs/69696969/stakes',
      'epochs/69696969/stakes/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/69696969/blocks',
      'epochs/69696969/blocks/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/69696969/parameters',
    ],
    response: error_404,
  },
  {
    id: 'epochs-number-stakes-blocks-pool-id-malformed-pool-id_fae779f94ebc',
    testName: 'epochs/:number/{stakes,blocks}/:pool_id - malformed pool id',
    endpoints: ['epochs/1/stakes/pool1kek', 'epochs/1/blocks/pool1kek'],
    response: error_400_pools,
  },
  {
    id: 'epochs-number-stakes-blocks-pool-id-pool-not-on-chain_70e902b595a2',
    testName: 'epochs/:number/{stakes,blocks}/:pool_id - pool not on-chain',
    endpoints: [
      'epochs/1/stakes/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/1/blocks/pool1kyx0q4a3pnc90vgv7ptmzr8s27cseuzhkyx0q4a3pnc9wq4g4w2',
      'epochs/1/stakes/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
      'epochs/1/blocks/b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057b10cf057',
    ],
    response: error_404,
  },
];
