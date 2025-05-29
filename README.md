<img src="https://blockfrost.io/images/logo.svg" width="250" align="right" height="90">

# Blockfrost Integration Tests

<br/>

You have three options how to run the tests.

- **mainnet** network - `yarn test:mainnet`
- **preview** network - `yarn test:preview`
- **preprod** network - `yarn test:preprod`

`-t` or `--testNamePattern` - run only tests with matching name

You can use a different environment variables to tweak the tests behaviour.

- `SERVER_URL` where to run the tests | default: _localhost:3000_
- `PROJECT_ID` set the header with token to use in every test

#### Command example

```
SERVER_URL=https://cardano-mainnet.blockfrost.io/api/v0/ PROJECT_ID=mainnetLZgT76GL3subckxt9Y1G8niouSCVwWtn yarn test:mainnet -t addresses/:address/utxos;
```

```javascript
import { expect } from 'vitest';

export default [
  {
    testName:
      'blocks/slot/:slot_number and blocks/epoch/:epoch_number/slot/:slot_number - generic shelley',
    endpoints: ['blocks/slot/16019999', 'blocks/epoch/234/slot/295199'],
    response: {
      time: 1607586290,
      height: 5058628,
      hash: '5d3df361b77ba7aff50a00ace1f00cec23126aa3b67af775dbf70c88c7e85ca4',
      slot: 16019999,
      epoch: 234,
      epoch_slot: 295199,
      slot_leader: 'pool1x0qm7xsyh2za3ltprxsgael544je4hg8tc3q3v5gv232z8jt4wp',
      size: 392,
      tx_count: 1,
      output: '6225908',
      fees: '173025',
      block_vrf: 'vrf_vk17hff333krucx82wjdhnwnfvusg8p4zn22lwmf2pmd2e5mghu52hqvpf8qj',
      previous_block: '7ee80a3c33b7ebb876671a936f57ec79f02a8b44a5132033c8860137e1c01c13',
      next_block: '94f96c20547b47e9668d5f42c88d0d3b92700c2614ec9bb3ad683bb0bba471f6',
      confirmations: expect.confirmations({ height: 5058628 }),
    },
  },
];
```
