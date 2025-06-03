import { error_invalid_path } from '../../errors/index.js';

export default [
  {
    testName: 'addresses/:address/utxos/:asset - [object%20Object]',
    endpoints: [
      'addresses/[object%20Object]/utxos/f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e506978656c54696c653235',
    ],
    response: error_invalid_path,
  },
];
