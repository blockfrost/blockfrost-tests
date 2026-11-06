import {
  error_400_integer_param,
  error_400_xpub,
  error_400_xpub_index,
  error_400_xpub_role,
} from '../../errors/index.js';

// Error paths of /utils/addresses/xpub/{xpub}/{role}/{index} (checked before any derivation).
export default [
  {
    id: 'utils-addresses-xpub-xpub-role-index-malformed-xpub_f355331a6f89',
    testName: 'utils/addresses/xpub/:xpub/:role/:index - malformed xpub',
    endpoints: [
      'utils/addresses/xpub/stonks/0/0',
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af871021/0/0',
    ],
    response: error_400_xpub,
  },
  {
    id: 'utils-addresses-xpub-xpub-role-index-negative-or-out-of-range-role_3085d6109a11',
    testName: 'utils/addresses/xpub/:xpub/:role/:index - negative or out of range role',
    endpoints: [
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/-1/0',
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/2147483649/0',
    ],
    response: error_400_xpub_role,
  },
  {
    id: 'utils-addresses-xpub-xpub-role-index-negative-or-out-of-range-index_313234f4391a',
    testName: 'utils/addresses/xpub/:xpub/:role/:index - negative or out of range index',
    endpoints: [
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/0/-1',
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/0/2147483649',
    ],
    response: error_400_xpub_index,
  },
  {
    id: 'utils-addresses-xpub-xpub-role-index-non-integer-role_327faeb0cc7f',
    testName: 'utils/addresses/xpub/:xpub/:role/:index - non-integer role',
    endpoints: [
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/stonks/0',
    ],
    response: error_400_integer_param('role'),
  },
  {
    id: 'utils-addresses-xpub-xpub-role-index-non-integer-index_58a16692a205',
    testName: 'utils/addresses/xpub/:xpub/:role/:index - non-integer index',
    endpoints: [
      'utils/addresses/xpub/7ec9738746cb4708df52a455b43aa3fdee8955abaf37f68ffc79bb84fbf9e1b39d77e2deb9749faf890ff8326d350ed3fd0e4aa271b35cad063692af87102152/0/stonks',
    ],
    response: error_400_integer_param('index'),
  },
];
