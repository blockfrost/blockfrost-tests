import { error_400_accounts, error_404 } from '../../errors/index.js';
import { getPaginationFixtures } from '../../../index.js';

const bf_stake_address = 'stake_test1uq70zpxr7jdqxdlj895x9lvnwn9lrcknwpx8cswlld7x76gtzvrjp';

const paginationFixtures = getPaginationFixtures(`accounts/${bf_stake_address}/addresses/assets`);

export default [
  ...paginationFixtures,
  {
    testName: 'accounts/:stake_address/addresses/assets - BF account',

    endpoints: [
      `accounts/${bf_stake_address}/addresses/assets`,
      `accounts/${bf_stake_address}/addresses/assets?order=asc`,
      `accounts/${bf_stake_address}/addresses/assets?order=asc&page=1`,
      `accounts/${bf_stake_address}/addresses/assets?order=asc&page=1&count=100`,
    ],
    response: [
      {
        unit: '56455542e52eb9b2a823a045d679ae063c09b2c8c4d9c376294315c0000de140426c6f636b66726f7374',
        quantity: '1',
      },
      {
        unit: '56455542e52eb9b2a823a045d679ae063c09b2c8c4d9c376294315c0000de140426c6f636b66726f73744e4654',
        quantity: '1',
      },
      {
        unit: '65d08640ec164353832b2425a3b1895c1c3fb7b461c67082e7f6e79946696e616e636542696e6172696573434950323576325465737430',
        quantity: '1000000',
      },
      {
        unit: 'e31c1656c2e6d1766187ed2d1f7340c47b0c4f191fb2363142ddb42f',
        quantity: '1000000',
      },
      {
        unit: '10c6c46f8e48850fcb416745e3fdbe35bacb80bb560d6cb31889cc00',
        quantity: '1000000',
      },
      {
        unit: '524311279cd7fde1c26d6c4b4f58f176d9bdd66d767700fc46a5ebed48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'c96b4bf623c72d252605a17ffbe1a3b7b15e7a9a809ddf751b9cc48848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '54af19fb31a343e78e7aebc90b3ee1253a002d7d2f26f3aa27ae1ed048656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '4b68f88bee76c4a431fb2f881c27a3e138a3c09d77e3b49503945ac648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '21ad075431e46be0a9e831f630284aa8dce7afeb092494450862e82648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '939266a667bc362a47e0c47fb452c65bb0102d606e9a8ea8753cd3d048656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ba2b04214174ac732a47a2f5c5c183f04b2a0222fbbd9f8d6099a92f48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '766d492095b12ddfe91b67cb09de735090988123ea9733e3df42060648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'd4558b7c8b461098b15cfb404ac374311a9359ae91208914667a8ee948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '3c67940b92f227b2a0214ae7e038937300a7d802d143198007c6a83448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '812ba0ede531ebe5acc73dc16c1f74235b449f6ed86b3b53d91fc4d748656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'fae9c076ec9a7dbfa8fe8f6edfc9d8b044be42dcb3ed9490f3c1833148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'fb0581a3a632ef24c1b196287e5034fe8a31d5fa68fe3530fdaf7b7848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '9339d0afc09ec70526b48985910b9339e6afb2d9aeaac51a44938be148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '0916da0f16aa83a217f2d1d146fa0600d5075067dcd11ceaa8a3e7be48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '828a08977a4905b2b9674e37b0929941620002a598374eb1badfa55848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '9ee6bd4cc235b639e44c3b3a052d4650721f57b8aaf5986ce8b7a02648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '253b9b6f30646d2bf1c5ee3f5c972dd224460e63e897df7d933bacfd48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'a499897abc9f8216c0043534a78097048e33a9b57de42cc3f61a6baf48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '41a31d187b13cb5f3044db8621e86d948d30781a19e657b673348bfe48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'c503f448837dd49c81b61aea969a769e71e0bddc6e5a1f2441c576bd48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '9547e232b2033944c6b5b43a0d23cde9b8fe4b070aaa0b3019c6ed6148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '932d94056d6b11c14843ee6032e8472c089892992e4cfbe850fe396d48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '1a95164addd7ba71e1aa0742eaa3a7493289ea8c3c7561d719eb5b7e48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '59a3b2d914dfbfcaa9afa5ac725989e100aa0074aa5b02d841b3806848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ad5818a3172140832c2128e64fa35363c0ad45944ffa120ff188b8ce48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'db54a74bd9e845fc3c97ac32e57ead565ca5840b29f4cdfa4789c4b948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '821d247159745a770ea3cfbe799498f601eda92964c07e2f67d3890848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'a790334330ce95d0fa74c27af947fe8b53f9ae298fb81c4ad0623bb448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '417ecce280fc9047c7db36d5155218e39f01814af5a6d7dad0648f2348656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '774ea3278eb2c7573072780b2a64a2a7d460bb9e7ac28017b2205b2b48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '7245be18a8a0ff3155fd281957b4e953ccc49030ab88b42624bf2beb48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '0a458acdf5f5db99994d8ab3ebf05003e5b0482add8a9aaa2021400748656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'dbd61c3765eb5358d8a90c3ad81ae3d798b6004f8ddf473cf323763d48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'beb5ba7e8a7bd9845d9cb26657902ec77c1344d41a460334f2c3f30148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '175cbf38519cbc86790824b2c9d844c0b39f34a77d8b92ed83d5d50948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'eb5c8d53abceed98bcc8d9b438372919818fecd6e718012771b2ca4848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'd1a23a7941c500e8cc18d0c64ee56306d905f024a8146e6f62e4a87a48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '953e0e03169ba42b6d2239c84283df0a1680fb38a8d78cadd4654fbb48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ca271541f2cb2ef344bacb219a16d668e3358ec2622c349d3b916c1c48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '59a0df9d93690a86cff11e9e6ee4e850296ae108e7ac854223d4525e48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '13bd31af23e0be3d8bc31e1d379b28b0068bcab0e5819d4e2f0d22b448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'c8c3d75fce5d6a4046cf7988410a5bfb92169e08b93a2f238d7140d748656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'e50ad3c9486a28acbc6a335a887d083ee2fe38b199c032118295f3bc48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ada2c7d4202f3582b829da26dd9fcbdcd4aaede80fcc90bf8ef632fb48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '7bac2171e15f7c27bd3d20d8fa3407a9c0d3a624c0f08969d35f4cd848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ae16039496bd4450f7e5a5d697b346919e2ccafe5f0878c7058480d748656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '76335ddf38fa50f1dfb12a137733f0183eb23496602762b36c0dc63c48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '5b1163b621be46bc675f7303bb07b679b71fb1f54390aaad1b347b5648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '127d67df147c8eabe4c7363509f5cec8b4d317da1e3369b327fec9e848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'f191093fb37e3e738964401d4045e2550ed085e8e7663ad808cac48348656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '83351602a1471f052ea287ea78de1a469d3c4c455f26c222c6cf902348656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '6e9f8a906d4080712d96d08f20113aa2dd651e1d651fa2f4cad2f44648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'a36065eb20be937ab56be533dd401d1a19e36a41b1deffc6f588e40048656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '7d28649ff6dbb3a3bdb315382ae2b9c0b5cb7c46fe98c7fb0633535c48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'aa4e4f7fd422c5e1097abe1f2830225ff015fbf1d16df64f7631326748656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'cf4ab6d0eb56153765979d56b9799fe7e43b2a8c099cc0b15bcc49e448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '58540f17f46c20e8e2f6f99b8ada260d9d054e51360f714b85531d0d48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '572835794bcd0570a44463d09956b9d2e9b34cad0caefc52465cef7b48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'b058d9923b251dfb0212533309401522874f5c3d66c7f4e518bb1af148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '937396176e89a821125beddd6fdbf734684499237cc5005bbfefefe048656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'f7bac983cce3859ca0cc3e5d25d354e26d5920dbea8f6585f287105948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '17742f9d605e32c9f0da11f6a95288ae3bb7b86fd6c519251ec3eb3248656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '20cb3108e237bff77e72bacb9acc8ea9518b59d054f8b93ce0062d0a48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'f97b460e2a614204a39598cfed1ddaaf7cce447d8cfa233d40ecd25948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '02d0c36b01c252b39bd052d58e0359acebee7ddd6ba999876edf1dbe48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'b1191f2f3aa41fdb7918f22ce4ce9d64d5493b91e2e28fe81d0f1a4a48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ba1fe40b356fb8573c3975a5034a8132dbd160252f0b1338ffc078a248656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ccf8d702cf89c170bfbabf8b014f8140fa8bf207c2939d3c56df4a9248656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '1c724ed1f16d53fc3c9b02285c85502c48673603b401d58b0822173448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '584c6df61da7260d45d4cf6880f99bfa441d50393ee0ed7bfd89300448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '5721b6b84527be0e9cd6daa6b92be15921d06b8959d598199999601d48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '1fce8f36f021f6c22ca764ebfc3a65a1cc3652acd2f974d340f775c048656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'ad222ae80af4fd458204009b08d4e5937ac9ca864dcedd51f6ab023c48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '887f53e04ec42eb177694bfb5acbbd2cd7ac90e382036c0b0547e8bf48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '791acc2973a64dfd07c6d21e681c92ca1573adcc96fcc2c5cffae63b48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '4f1e0ccf8fcd6dcac099954bbd124ba48255085aefe2a15d2a9dff7648656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'f0afdae2a6ebba5071f6f42ebb401691167031539c837ac5390244bc48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '407074d786d3ceaf9afb09f0eb9edbb81b815ba0f6b06e8fa76ad36e48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '2ff0245f53510d6f5f29303d6f02ff8d9f3bae715338cc4d8bd0123e48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '45d4a27c60991f5e7d2e4f7df6457778e7aa8fe16fc539b9467a500d48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '4f5ef7c1407e4d21a03abd31cf6c52baf8c6f448ecf1aa6c29de27ad48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'd5f647938df182aa364a156dd860fd9f2ae587d412bd3aebd1a108e948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '4d32ecf433d3f7b6a218664899ed398f651136c9aed683b7b769308248656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '82cfacc86efcf5f8383543449018a1c5105b4a3815e19154d2471b1448656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '01bcc4766f52879ad569e130c3a3913e4c8c950f55a25584f3b9339e48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'bded5d1949518db2fd3b5702301a19d8d68134a35ebaa8d3b19f0caa48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '9b42e93c93861ab67af6fcb130e963613c3aa9609c24d35621dabe4a48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '90d3c8960ca19bb11090d95da08f82921479cfa68636c91a0a946c6b48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'c571565f23af7490e3632388ceaa4124c79cafe4229a3e8b107cc5e148656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'e34ea34ea729ee808ee8ca0cb84457da019b7f422613128267717a1948656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '7775e73dda46279ba6362dc17f2e8ba368fc786980f7c4ecd7bd57b848656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'f04f7dbdd78fe1ec6be1e08fa473a352c68ef2771b9197d54749fe8248656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: '8a9ff9cc2e84e86a5db0b98b2ef80b9dfa00137be569b3edc441eaea48656c6c6f4e4654',
        quantity: '1',
      },
      {
        unit: 'bf2270b6ee2f887fefbf8229c51c5e84bfc83bcd124c8159abae410b48656c6c6f4e4654',
        quantity: '1',
      },
    ],
  },
  {
    testName: 'accounts/:stake_address/addresses/assets - generic stake address without tokens',
    endpoints: [
      'accounts/stake_test1ur2pejlgfqa5e4stqg529tqj06k6gamweaawgphvewkdgtqqkuwlr/addresses/assets',
    ],
    response: [],
  },
  {
    testName: 'accounts/:stake_address - non-valid account',
    response: error_400_accounts,
    endpoints: ['accounts/stake1kek/addresses/assets'],
  },
  {
    testName: 'accounts/:stake_address - valid not on-chain account',
    response: error_404,
    endpoints: [
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses/assets',
    ],
  },
  {
    testName: 'accounts/:stake_address/addresses/assets - valid not on-chain account',
    response: error_404,
    endpoints: [
      'accounts/stake_test1upzvx3z7hlhjrvzzsu4gxknwjdjmhz08x3x7ddmhfw445dc7u96sn/addresses/assets',
    ],
  },
];
