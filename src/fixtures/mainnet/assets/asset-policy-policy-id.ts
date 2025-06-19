import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'assets/policy/b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f'
);

export default [
  ...paginationFixtures,
  {
    testName: 'assets/policy/:policy_id?queryparams - general asset',
    endpoints: [
      'assets/policy/b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f',
      'assets/policy/b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f?page=1',
      'assets/policy/b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f?page=1&count=100',
      'assets/policy/b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f?page=1&count=100&order=asc',
    ],
    response: [
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279416c6261',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279416d657468797374',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417175616d6172696e65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417368',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727941756275726e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417572656c6961',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417572656f6c696e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417765736f6d65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279417a756c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794265696765',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279426572796c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279426c61636b',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279426c7565',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279426f6e65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279427269636b',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727942726f776e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727942797a616e74696e65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794361646574',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727943616d656c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794361707269',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727943617264696e616c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436572756c65616e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727943686172747265757365',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436865727279',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727943696e6e616d6f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436c656d656e74696e65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436f616c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436f62616c74',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436f66666565',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279436f72616c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794379616e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727945626f6e79',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279456d6572616c64',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727946756368736961',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279476f6c64',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727947726179',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279477265656e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727948617a656c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727948756d62726f6c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279496e6469676f',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727949726973',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794a616465',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794a657474',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794b656c6c79',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794b68616b69',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794c617661',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794c6176656e646572',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794c656d6f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794c696d65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794c757374',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d61726f6f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d61757665',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d656c616e6965',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d656c6f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d696e74',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d6f7261646f',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d6f7373',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d757374617264',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794d7972746c65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794e617679',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794f6c697665',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794f6e7978',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794f72616e6765',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272794f7263686964',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795065616368',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727950656172',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727950696e6b',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727950697374616368696f',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279506c6174696e756d',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279507572706c65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795261636b6c6579',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279526173706265727279',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279526176656e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279526564',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279526f7365',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279526f7578',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727952756279',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279527573736574',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795275737479',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953616666726f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953616765',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953616c6d6f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953616e64',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795361707068697265',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279536361726c657474',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795369656e6e61',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953696c766572',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953696e6f706961',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727953756e676c6f77',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727954616e67656c6f',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795465616c',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279546f6d61746f',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727954757271756f697365',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727956616e696c6c61',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f42657272795665726d696c696f6e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727956696f6c6574',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f4265727279566972696469616e',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727957696e65',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727958616e616475',
        quantity: '1',
      },
      {
        asset: 'b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f426572727959656c6c6f77',
        quantity: '1',
      },
    ],
  },
];
