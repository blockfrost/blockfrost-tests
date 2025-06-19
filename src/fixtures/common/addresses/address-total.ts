import { error_invalid_path } from '../../errors/index.js';

export default [
  {
    testName: 'addresses total [object%20Object]',
    endpoints: ['addresses/[object%20Object]/total'],
    response: error_invalid_path,
  },
];
