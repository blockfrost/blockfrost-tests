import { error_invalid_path } from '../../errors/index.js';

export default [
  {
    testName: 'addresses/:address - [object%20Object]',
    endpoints: ['addresses/[object%20Object]'],
    response: error_invalid_path,
  },
];
