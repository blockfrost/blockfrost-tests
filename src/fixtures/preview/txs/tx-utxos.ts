export default [
  {
    testName: 'txs/:tx/utxos - alonzo tx with a script',
    endpoints: ['txs/5d438ccecf62ad384ec1e75c5ff0ed60217c37fd6cfefd1625622e3bf8e8a71b/utxos'],
    response: {
      hash: '5d438ccecf62ad384ec1e75c5ff0ed60217c37fd6cfefd1625622e3bf8e8a71b',
      inputs: [
        {
          address: 'addr_test1wpy0klwqgllz99rkyetram77anc66rmqfgqj490ytsk7a5gqeya2d',
          amount: [{ unit: 'lovelace', quantity: '60990810' }],
          tx_hash: '52fa590cddde104fc9f61f640410fb54ac2a79a2d8c7469089591da45868cd73',
          output_index: 0,
          data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
          inline_datum: 'd87980',
          reference_script_hash: 'a73da6d58ba98ea23bf64b39a72f76208a7cc7ea595e178b95a22330',
          collateral: false,
          reference: true,
        },
        {
          address: 'addr_test1wznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxvqjqqvlw',
          amount: [
            { unit: 'lovelace', quantity: '2000000' },
            {
              unit: '773830f49fe4992d72f0f16613c7ab46adaa0d930195b9e2131628bf4261736b65745374617465',
              quantity: '1',
            },
          ],
          tx_hash: 'd916fdc77c327d1e28b81cb7dc1d381c0799697d24cadf9d334880a12fd602b6',
          output_index: 0,
          data_hash: 'd5fd982246d5ce1588c05915822e76026cc8c4bfdb385f897d56881e6a5eee05',
          inline_datum: null,
          reference_script_hash: null,
          collateral: false,
          reference: true,
        },
        {
          address:
            'addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9qqzx826xam2hmn3xgztqw4z9dxccepawxs2e3vh8urmls2jzned',
          amount: [
            { unit: 'lovelace', quantity: '3777432778894' },
            {
              unit: '4d608aacba39f97a2a69d25e469cba6a67778f8483ea3d55a17dfb0b5374616b65506f6f6c',
              quantity: '1',
            },
          ],
          tx_hash: '146b8f67a0563dff1a2cf5130cc4158f4963cbc90f22d8d631841a87774d252a',
          output_index: 0,
          data_hash: '2fda976aa08e241031ec10ffcd28c75d11240e79c3db27111a48c4627d5f11cd',
          inline_datum:
            'd8799fd8799f581c5a50d6730709c43d92e6c29075373335866e10ad3500e104bf31e864ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address:
            'addr_test1qq969yp0wz6qw9kcfh3ansqamsvm29x337dkjyf3nfefqrtwu22xqq55v3vnm4fu69p4qf0zu4s57c97qcgyc495wt4smkcg42',
          amount: [{ unit: 'lovelace', quantity: '1584489777' }],
          tx_hash: '8db8f6df0785f8aec08440b5a8779ff9f97ed507b9ac9955bb33c240c76d6e5f',
          output_index: 11,
          data_hash: null,
          inline_datum: null,
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address:
            'addr_test1qq969yp0wz6qw9kcfh3ansqamsvm29x337dkjyf3nfefqrtwu22xqq55v3vnm4fu69p4qf0zu4s57c97qcgyc495wt4smkcg42',
          amount: [{ unit: 'lovelace', quantity: '3059307354' }],
          tx_hash: 'd52faf145379b5eb0e5bcb648fd22aa8877c08e0999badb774a5d8e11572e375',
          output_index: 11,
          data_hash: null,
          inline_datum: null,
          reference_script_hash: null,
          collateral: true,
          reference: false,
        },
      ],
      outputs: [
        {
          address:
            'addr_test1qq969yp0wz6qw9kcfh3ansqamsvm29x337dkjyf3nfefqrtwu22xqq55v3vnm4fu69p4qf0zu4s57c97qcgyc495wt4smkcg42',
          amount: [{ unit: 'lovelace', quantity: '832873020' }],
          output_index: 0,
          consumed_by_tx: 'f4e1ff07beb1c3b2cb2eafeadb41cb0e498a9365a598674b43ac230d98d7930a',
          data_hash: null,
          inline_datum: null,
          collateral: false,
          reference_script_hash: null,
        },
        {
          address:
            'addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9qqzx826xam2hmn3xgztqw4z9dxccepawxs2e3vh8urmls2jzned',
          amount: [
            { unit: 'lovelace', quantity: '3784928636074' },
            {
              unit: '4d608aacba39f97a2a69d25e469cba6a67778f8483ea3d55a17dfb0b5374616b65506f6f6c',
              quantity: '1',
            },
          ],
          output_index: 1,
          data_hash: '2fda976aa08e241031ec10ffcd28c75d11240e79c3db27111a48c4627d5f11cd',
          inline_datum:
            'd8799fd8799f581c5a50d6730709c43d92e6c29075373335866e10ad3500e104bf31e864ff00ff',
          consumed_by_tx: '4a22786be50ec1f8af901062ffa14efd28c25660e14f09007c38f32ad880ae9d',
          collateral: false,
          reference_script_hash: null,
        },
        {
          address:
            'addr_test1qq969yp0wz6qw9kcfh3ansqamsvm29x337dkjyf3nfefqrtwu22xqq55v3vnm4fu69p4qf0zu4s57c97qcgyc495wt4smkcg42',
          amount: [{ unit: 'lovelace', quantity: '1584063143' }],
          output_index: 2,
          data_hash: null,
          consumed_by_tx: '020a51c0ac82f32bb172170b6ec9df2d4e6e427efad65ed84e507f08e415e095',
          inline_datum: null,
          collateral: false,
          reference_script_hash: null,
        },
        {
          address:
            'addr_test1qq969yp0wz6qw9kcfh3ansqamsvm29x337dkjyf3nfefqrtwu22xqq55v3vnm4fu69p4qf0zu4s57c97qcgyc495wt4smkcg42',
          amount: [{ unit: 'lovelace', quantity: '3054307354' }],
          output_index: 3,
          consumed_by_tx: null,
          data_hash: null,
          inline_datum: null,
          collateral: true,
          reference_script_hash: null,
        },
      ],
    },
  },
  {
    testName: 'txs/:tx/utxos - generic shelley tx with huge size',
    endpoints: ['txs/f34e11ba32554a149be664d0adec57b6829b3af045f678445af158fa09721a9a/utxos'],
    response: {
      hash: 'f34e11ba32554a149be664d0adec57b6829b3af045f678445af158fa09721a9a',
      inputs: [
        {
          address: 'addr_test1wzjwvgn5k3m9ekmrceh6c0azywhh3d8l5jq09tpm7cwp0es5ksry9',
          amount: [{ unit: 'lovelace', quantity: '16627980' }],
          tx_hash: '350ed211ac8f218418ad8d9a0160a5e6fe40aeed5bc711909e01374e32a41c0a',
          output_index: +0,
          data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
          inline_datum: null,
          reference_script_hash: '4eae3950061c988c567395bdd1148494ad67f0d2ab2769020b2549a1',
          collateral: false,
          reference: true,
        },
        {
          address: 'addr_test1wqzwpaeqty24g73cnp6h7qyvm68hht5dxsvpnsus0tprv4gceyth2',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            { unit: '08a4fd7110beefc4d925803fe6a7fe0aa0de8f4627b612d726e62f86', quantity: '1' },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 1,
          data_hash: 'da3545c1a538e445a49330e6975e3a7f82303200c1de039445c74ebd195b60a4',
          inline_datum:
            '9f1b0000060ece1100ca051b00012e6053d789c41ad8dea6ba1a01ca5af41b003e4379e5407f6b9f1b327ce854975f10fbc24c09c9ba3c7ae2e8c2d0340000ff1b00000196ca5b8e401b00000196ca7095109f1b0000060fa85e56ad1b00012e6053d789c4ff1a002dc6c0ff',
          reference_script_hash: null,
          collateral: false,
          reference: true,
        },
        {
          address: 'addr_test1wzjwvgn5k3m9ekmrceh6c0azywhh3d8l5jq09tpm7cwp0es5ksry9',
          amount: [{ unit: 'lovelace', quantity: '14102320' }],
          tx_hash: 'a3839e95369a0440cef381078e7d28238ae0766b479623450220365866229466',
          output_index: +0,
          data_hash: '923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec',
          inline_datum: null,
          reference_script_hash: '5e26aa4b932d656580a16e1002425b3a9485cdf2f71fc303c955e119',
          collateral: false,
          reference: true,
        },
        {
          address: 'addr_test1wzccrw3f4n7qavr67uvupxm4jd46uv0f9evgzpytlwz4zgq6sfuv9',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            { unit: 'ef20052bbf1f18149e5346d9e5cc2b2aa7b95685e4693ea9712967ee', quantity: '1' },
          ],
          tx_hash: 'b74df8d9dc2b94d773f77e93d422bf4a4381966eea495e4d3d84648620444c56',
          output_index: 13,
          data_hash: '04dafa206f3e6758a71f8277f7abac978120f51cb1193d2c4e94191fa4bbd33e',
          inline_datum:
            '9f9f011832ff1a04b571c09f0a080101ff1a003d09001a002f4d60011a000dbba01080581cd15625774c2cc59671e72cdbe329055c5fd374ec8f9eb62b21b3e1bb1a001e84809f9f0001ff9f1b0000000514690d5f1b002386f26fc10000ff9f1b0000002369aab0531b0001c6bf52634000ff9f0405ffff9f1a000186231a000186a0ff9f0101ff069f011904e2ff9f0101ff9f0101ff9f0101ff9f0101ff581c4eae3950061c988c567395bdd1148494ad67f0d2ab2769020b2549a1581c5e26aa4b932d656580a16e1002425b3a9485cdf2f71fc303c955e119581c763f629f0680085a30d405a5a54ff5cf3d2750332bdcc3607168278ed8799f43d87980ff581c5fdb949e213262210a7f0c8bf25227430f1021cddbf85b5e1ae9d71fd8799f43d87980ff80000000d87a80d87a80d8799f9f090affffd87a80ff',
          reference_script_hash: null,
          collateral: false,
          reference: true,
        },
        {
          address: 'addr_test1wp0zd2jtjvkk2evq59hpqqjztvaffpwd7tm3lscre927zxg36etun',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            { unit: '4330f26c4f8a20a338c52aa6dddff2b7c8f20d80aaf36c21067e30ed', quantity: '1' },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: +0,
          data_hash: '9a977f5c5e80185295efb7cecc28513979666242c9ddab7822ff379c7c74dbbb',
          inline_datum: '9f0000000000ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 2,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 3,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 4,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 5,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 6,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 7,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 8,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 9,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 10,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 11,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 12,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 13,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 14,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 15,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033100',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 16,
          data_hash: '9a11add348ea2a9e8fdb1c83c91efbbb3926026dd0cf8698a5ed4b02e1f635b2',
          inline_datum: '9f9f0000000000ff00ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address: 'addr_test1wp82uw2sqcwf3rzkww2mm5g5sj226els624jw6gzpvj5nggymcl22',
          amount: [
            {
              unit: 'lovelace',
              quantity: '3000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '416291033115',
            },
          ],
          tx_hash: '8207c3f95272da19b3906432956b14744622d144b3e3308692d1cdd27eab2fd9',
          output_index: 17,
          data_hash: 'cd8d79c638f5f7389c7ad69e0e92fc45cda30a272f03b534fa867cb4ac8aec49',
          inline_datum: '9f9f0000000000ff05ff',
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address:
            'addr_test1qruhen60uwzpwnnr7gjs50z2v8u9zyfw6zunet4k42zrpr54mrlv55f93rs6j48wt29w90hlxt4rvpvshe55k5r9mpvqjv2wt4',
          amount: [{ unit: 'lovelace', quantity: '5152989114' }],
          tx_hash: 'e790833993b7a65387719e654bc853fbe98a1f1ddf71b9ea195df2d655607c87',
          output_index: 7,
          data_hash: null,
          inline_datum: null,
          reference_script_hash: null,
          collateral: false,
          reference: false,
        },
        {
          address:
            'addr_test1qruhen60uwzpwnnr7gjs50z2v8u9zyfw6zunet4k42zrpr54mrlv55f93rs6j48wt29w90hlxt4rvpvshe55k5r9mpvqjv2wt4',
          amount: [{ unit: 'lovelace', quantity: '5152989114' }],
          tx_hash: 'e790833993b7a65387719e654bc853fbe98a1f1ddf71b9ea195df2d655607c87',
          output_index: 7,
          data_hash: null,
          inline_datum: null,
          reference_script_hash: null,
          collateral: true,
          reference: false,
        },
      ],
      outputs: [
        {
          address: 'addr_test1wr4c5ruvn9ss5r4davqh8nf964c8t2hu7kl8cqmxt42hdwqhuqp46',
          amount: [
            {
              unit: 'lovelace',
              quantity: '51000000',
            },
            {
              unit: '25df95e4715420554350deb8fda2bd03513abeb8b9cfe05c365974ed',
              quantity: '16',
            },
            {
              unit: '4330f26c4f8a20a338c52aa6dddff2b7c8f20d80aaf36c21067e30ed',
              quantity: '1',
            },
            {
              unit: '919d4c2c9455016289341b1a14dedf697687af31751170d56a31466e745348454e',
              quantity: '6660656529615',
            },
          ],
          output_index: +0,
          data_hash: '9a977f5c5e80185295efb7cecc28513979666242c9ddab7822ff379c7c74dbbb',
          inline_datum: '9f0000000000ff',
          collateral: false,
          reference_script_hash: null,
          consumed_by_tx: '006db1989e83dfa6c21468a1b6358564b417f70e413aba112228ebfbb44ff333',
        },
        {
          address:
            'addr_test1qruhen60uwzpwnnr7gjs50z2v8u9zyfw6zunet4k42zrpr54mrlv55f93rs6j48wt29w90hlxt4rvpvshe55k5r9mpvqjv2wt4',
          amount: [{ unit: 'lovelace', quantity: '5152422175' }],
          output_index: 1,
          data_hash: null,
          inline_datum: null,
          collateral: false,
          reference_script_hash: null,
          consumed_by_tx: '006db1989e83dfa6c21468a1b6358564b417f70e413aba112228ebfbb44ff333',
        },
        {
          address:
            'addr_test1qruhen60uwzpwnnr7gjs50z2v8u9zyfw6zunet4k42zrpr54mrlv55f93rs6j48wt29w90hlxt4rvpvshe55k5r9mpvqjv2wt4',
          amount: [{ unit: 'lovelace', quantity: '5152138705' }],
          output_index: 2,
          data_hash: null,
          inline_datum: null,
          collateral: true,
          reference_script_hash: null,
          consumed_by_tx: null,
        },
      ],
    },
  },
];
