import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures('metadata/txs/labels/1967');

export default [
  ...paginationFixtures,
  {
    testName: 'metadata/txs/labels/label',
    endpoints: ['metadata/txs/labels/2?count=2&page=2'],
    response: [
      {
        tx_hash: '3b81efcd4f2d7fb1491a3974aa0e552af967a188d1fcbe779ad6268fdeb96d50',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'e9d920419a95e4a11fa8d615da6052021df779d38913574134191aa392b1cbf5',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
    ],
  },
  {
    testName: 'metadata/txs/labels/label',
    endpoints: ['metadata/txs/labels/2'],
    response: [
      {
        tx_hash: '5331a14e596dc14616a533b5968a9ae6c3846cd69cbbd553ad57304309c700c1',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '98a9eeb50ee68a2dcb461bbcdf115ee5b395ff797f2904c6ddca7ffb449dc2ec',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3b81efcd4f2d7fb1491a3974aa0e552af967a188d1fcbe779ad6268fdeb96d50',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'e9d920419a95e4a11fa8d615da6052021df779d38913574134191aa392b1cbf5',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '50f8245a6b110c067c3185de2cb691e18280977e879d0ebff98201f4c68e8844',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f3fbfbf0406c888f658e5b021197a2ec308f0cc003ba7374523b9f999602814b',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '9dfacd5da9f77927840fca3698314d325b8158038c5042f27b5f516f4ded37ff',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'b2c636b75905c53b01a7093cb656d87e12e46b99ac04f35d851ef4340687a9de',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '74eb00cc4dc20566af5dbd4a642e96e93c699dde0fb94e618aae125c659f72a7',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '9db1466de8e8edbae0b4b1e48887837e2ad848df6ada69078ca83b2c8e332309',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '865d2da11ae2c79f90603a89eb4b2e1953a0940ac96d4fd277022e40f10a6ee4',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f6765be8302e289c093b4ff91adf661fcbb967223c5e2a1d82c99c8734c30ebc',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'da8567cc33e9231c366899b58ce87a77013242f44ebc42c3eee303b2ada66e9d',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'aee2cbed0a833ebba5041b306083f598f66bc468c4e66cdc0de993002aec9aa5',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'c19b581f634b959dddf41369e6e50509cd7d51e8c0a5e6f95c9a2c459b4f0893',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '2cc16c84abd24776be583ac8a8fe1e2abc131e8fa675e85b7dcf24e6bdbec62a',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'a5ce8dc1a266cc88c2e2188a7ecedf93c2965b1fc077195fee581313950756d0',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f93ec616b1c9df05369dbf1e3c7f2c9ff8df5ccb4bcac5284b6355de87582726',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '8f17a3e440fdcceef0ab74547c04537850ad93ec8d3040251d2479a5432c3068',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '9e0759c9eb69dfa9f1c6eed3ecf5222b5fd0ba983aa4c103157c6effed7357f3',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '4420994f9cdfe09f49e570ce152d5759752593a422fe685dc169438f1a709370',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'c48751ae437fe4aaa572365bc9011ed712cf7d44c235a95672288647905d6e9d',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'eac70ce304ccf5781942f5bfea0b41ca5a30ab68f190c35862d8aa8a2626e09e',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '67c16284cd7edfeeac6aa2e540e3f0b2a1c7c10a37865caf76d503f44ad43884',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'cf41ceccadf2514aa24ef74bfd69bcb3ddced895192f7d9f51e3ae4d8642fc59',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f32d73d4e4f0a0f69e5ae2989370bd2d4a79e5812b58fae90288d8c0edcac0a6',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3348a37deffa660b562fcc3b394a9bc18093fa36818d94826d09804d271ccd52',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '8c6feb32ca233b66333799f9a4d7a354881a31f456b2e7db197387926bdb27da',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '77da12aa0e56eea92f7de1fc5ffd77fdaf302923f5e1c915059dcb9718ae9eae',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '18e2371cf5a22fd98b228d56221e1e2b46cf1f3adb07a8a420da388ba695aeb0',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'd4883a56e5e300d83ba9f2654d0b4917773e4f2d6a98658b69673168a76c13ae',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'fff95aa7206cc9b44aa623c453869f18b3302a0988922c3a2e9b06006de76ecf',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '979cce84e31050e4a5fe8291b29b4c55d8bca3920222d452fbda40b33d9cf8a9',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '356808c2447815a9acb5ac5a62ab6287e4c82f97e1da87f1711e682c52d56523',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '70a3e9cd1a30c44142d4a93f3a28fc6dacd7c55f05a0aa6772f260b22b598ef6',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'efb230dfeec034a69a3983de8d43d0babe861548e50efac83e2865f371e554d8',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'e25a5da264922f92a32f2e1e8608df446c544868c3d62ed96c2af70d94b44295',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '73d4f035b5bed42f6ca5494cc8756148773a461fc71afdac8d9b68206017e422',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '00d068f263424c2e3581a3a01658dba07fbea903b8ba46ec8d5a192ebe498e80',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7efad5d15a21ea45a3d26e5db1ea603c39090ec51970fe3217d9c23739737428',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '0c368c1a5da35e9845d02f0498a4bf1de0321c45cbe16bbe8fa1eb6d51bc3214',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'b019a8342bcb14fd3b81b8385ca3601a888f9af05709270cd3efadebf2b8a921',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3e351408a34fd76b79e1c289d0479dcf690d853c58c089c36caa8dbaf8a40914',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3fb1310f45792e57ded8aa782066447b302b32f6a9e2b6c9e2320c9d9cbf7193',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7687a67038b2274f1f9e822ecb1b725eed4382d71a0ae3b2f8907fee8eff990a',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'd42996ee716eacfe9c1c10be7081c7e0904a2b9ddd528149ecf66aabebeceefe',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '174a99dd619a91d61b08729fe60924a97b6884d4ef9851c4b2cdf60981bb3452',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '1a29835ce5bf5f978bd6b4c580a42ee6376bc40fc6daa322b4e492566b30dbbb',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'd0b25b8ffddec2dd45de82c26a070182de7783f81cf10e5935e36e9f4058bb93',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7a7c8dc4b9c18e11ce39c14db7b7ed6baa76008982c7250907de09cf32c73e93',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f148d836a306adbfad09bee7b8817ff1eb946ef44f22deb2a05e3ef2e0d419a2',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '9bbaf0f084cf0168840792fe9609e788ff3d7513ee0b32d5c43c48628ac78c16',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'feda4c526f880f7ffc845c07865e98d982947714f10f00072e07b7878b837fbf',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'c87e33ffdc258ba9b4b668d1f582297382e53acc3df74fc2daf1ea10605391ef',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'e15876710f9655acd187161e4b1d526824ddb2a9b0363b4e20fd99e7d5ad3ccc',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'd28d0179d378eceb2a91538e6a8718570aa27c9209a55b0b6430cdba87c9e77f',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'ff6157626541b55bcf53149fbc590b06a3f8f6a19e08dd33907f64d287a74a4b',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7ad019a762e334cdcb4a08ae5805be4911e7c96d547b65f08d82351f625e4c9c',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7bd55dd4f8b45dc3f167e395d0a49dc0a195117e5eaab87fe1bbb4573b66e67d',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '44dd0c40d270083f97c72699d2fec6b82a54aa0f1d37bea412d034083ecf0050',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'b414ca9755858a1a19f9fa15175706d2d57268b7901a8ddf3dc681f6ac49daf3',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'c5af01b9503349a9ecdd99f80f0bf6769da5299bb9b890b89192f6be65da26b9',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '2a3feaae3e8f382cd2c5fc2ad9fda45c215228abf0a1cf46e72f1f6ab23be4d7',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '09ca3c34f0a7e0b0285b4734e0a53f6b01548a1ff63b72b3c8b74296410cea1b',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '263a11c6668e96f921c1e0799c59454e5a1e79e2469ba19c221c3686711525fd',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '6ec4a7e18be4435452461193ff136178c6d348f2b38317ef03bdf6588371c6a2',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '21ec92c29564603829c95852827c48d56288446522b06f764090343bf7c5ad47',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '12515b8edeecbe993f4b46d1678ccd24bbd1240736b4c71c420fc23d3bee46ae',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'e0328b301b487abeb8097f6ac9137b7ce6fd755a3ea311fd2fc8e9a41fcb2e2c',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'fdc9cf5a88d064e672b61a021dd7244c4d2cd445d82a84fafdf15ca1e7d9c71f',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3774125368c6663c25f5cadbc2741115719bc2bcc59f71425fe8137a6575602e',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'feb0191493c0ed2dbee5191b5bec8048c81634fb4283ead0d863c9464f648aff',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '9ec69729aa9221c19c33a8bfb27df7834e6d80c2ad241fb628d724151ac34570',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '40e332f12cd2909e59cf04d43dd7f05477379f4e23ee73152019347a7f677b11',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'dc9423f765bc57ccbc2509df5cc7227e0871b5881ec0ee070f16faadb7848e0e',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'ad84b13b1a848624c8a731c7242811cab3e80191e9a0b09dfe90d822f63e4552',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '3e57804d4b2c295db277e67de1b399703f7889fc1ff7de02aa50888ae443f188',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'd6c1a83ebc518198452c9362d9024f8b8d2376e95cf877072e591e1a1a562438',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '733495c452d7f8895369609519e3272203aa2b0d86b2aa636acd8cc4588bfbd9',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '704f0f66359717d4b604215fc477a889edd7481d64312fd7ccced79f3cb45d82',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'fc046928949da525ae236e0d7da842b6bce337691bf4eee9df0996e32e1c9c94',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'ea17cb86f6acdbf9eb9e323d310cb980365ef332eaf6d44eceda72f0b70b3cc0',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '55c4a1260ed2584f5bfbf9f759de6b38e4e04124735c4325a1529a27c6a5ca00',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'c67ad515e8d0b4d0b399800c18018ecdd1aefd8af46ba015e421c1f3debbadab',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '1c5b5f8fb728d3fd5bf786f42cd823eb9d720bf528938676414e586f9b8321be',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '1da6d9fdb89f70941750fd61d0310b81b3877781b82543490c6506a6b9eee38b',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '67edbdbd73aa0a414b4d451fa245d8712929136ee8aa9cdc9a89acab0eaa5489',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '0241d3c0365b5ddac2dff1737d5bfade17650dd47b6fecbe06f75f59860e7298',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '82795c78ec3ab28c284c1dda91c8d79d0a66f0b56920fa4a914f5a89692c3bb1',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '7eface50477b5746e9f34b40c0fed769baf336074d9b50c0a1aeb49473abe6c3',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'f10c43213cef4f886beff48bcdfdae6ebd2fcc3efdf97c52babe76daba485966',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '2ea5b7febc3617355cc8caa6ee04eb245311774f557f8ccdf3d95b031f08673d',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'efd6fe624e2076573d8969cc16df4ab3e33fb3049c11b3fbab71f29a048d4d7a',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '17a3928030f62cceaaec69a1d0608cac04dcc2a932e66952916e324d1eecbc89',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '49347f20435a6e37f3d8fb4c637b025c76432fd182318a0f324050882ba41cfd',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'b2e8e023f17441ea6f4ef5cc2c68c4c0196999504f32ed7cb662b66c59118d93',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '4856dde729caf890b6952cfe56bdf22e10ef44b869e11dfb2da7af5212df9db2',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '02ca091653f8c980fc34ec0e4b694194f0905c8f4f79dbfe47bfc4cbe7317b69',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: 'fd963eb8d21685b6a95c134ed9efe89760365124c424bde5dc5016195baba172',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
      {
        tx_hash: '2d9f48d83bff83591d177845be134a6a531d121838131a3b956f57b25d18272a',
        json_metadata: '0x2512a00e9653fe49a44a5886202e24d77eeb998f',
      },
    ],
  },
];
