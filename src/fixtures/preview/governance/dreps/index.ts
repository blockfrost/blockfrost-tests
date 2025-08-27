import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures('governance/dreps');

export default [
  ...paginationFixtures,
  {
    id: 'governance-dreps-list_1cc0cb3cc8cc',
    testName: 'governance dreps list',
    endpoints: ['governance/dreps'],

    response: [
      {
        drep_id: 'drep1y2ldnl4ugmhx873hpw7x23rvqe7krtwvgmvqjn3hy62xv6c8ashc0',
        hex: '22bed9febc46ee63fa370bbc65446c067d61adcc46d8094e372694666b',
      },
      {
        drep_id: 'drep1yf52tuf5svq2mfkua3nljssmmtrzhf3pqpjq3m8gerj4r4s4f8cjn',
        hex: '2268a5f1348300ada6dcec67f9421bdac62ba621006408ece8c8e551d6',
      },
      {
        drep_id: 'drep1y285lm709qqh54a5z5t6vl2kaaxqmszpsxs36dgh3h2n7nqltj46y',
        hex: '228f4fefcf28017a57b41517a67d56ef4c0dc04181a11d35178dd53f4c',
      },
      {
        drep_id: 'drep1yghw6f8vp7wtzrda86yg79xva8taac45lkprj7ynu35te0slwd0q5',
        hex: '222eed24ec0f9cb10dbd3e888f14cce9d7dee2b4fd82397893e468bcbe',
      },
      {
        drep_id: 'drep1yg8yhhtf3dxv9uh9rz6tr7j3jrgtc4n2cshe8snfsmk257gl87pyg',
        hex: '220e4bdd698b4cc2f2e518b4b1fa5190d0bc566ac42f93c26986ecaa79',
      },
      {
        drep_id: 'drep1yfeewq0yz8f59e4rshwtas0h3mwrzs626xk3vmfqj4y394cz4mfl3',
        hex: '22739701e411d342e6a385dcbec1f78edc31434ad1ad166d20954912d7',
      },
      { drep_id: 'drep_always_abstain', hex: '' },
      { drep_id: 'drep_always_no_confidence', hex: '' },
      {
        drep_id: 'drep1yvvxuvh64q9zdqgrjt76d42eclk5wgdxtnsun4808cwg0dquhj65s',
        hex: '23186e32faa80a26810392fda6d559c7ed4721a65ce1c9d4ef3e1c87b4',
      },
      {
        drep_id: 'drep1yfvl3je6fh9zewfpystuzlxfdgmv94dpatvv6hkfruwt4gst9ny0g',
        hex: '2259f8cb3a4dca2cb9212417c17cc96a36c2d5a1ead8cd5ec91f1cbaa2',
      },
      {
        drep_id: 'drep1ytp0gksk5e59v9h9vmqqlsyplevl30t6keu7u90fecsrg3sc63386',
        hex: '22c2f45a16a6685616e566c00fc081fe59f8bd7ab679ee15e9ce203446',
      },
      {
        drep_id: 'drep1yt2emvl35tdwnar7sxlaalepnar4u7l7uen0vjjq4ts8j8srcq5wn',
        hex: '22d59db3f1a2dae9f47e81bfdeff219f475e7bfee666f64a40aae0791e',
      },
      {
        drep_id: 'drep1ytg6la0qnt7lag3vypvwv34j5z2lreutsw4te5w72l7wudsjrp8lg',
        hex: '22d1aff5e09afdfea22c2058e646b2a095f1e78b83aabcd1de57fcee36',
      },
      {
        drep_id: 'drep1yfus3eg3tr384fx6ltew20n9j9ph7aduk743y6a77lgcy0cjl30y9',
        hex: '227908e51158e27aa4dafaf2e53e6591437f75bcb7ab126bbef7d1823f',
      },
      {
        drep_id: 'drep1yfzcnn53dd4t4xd225cnvj4zvg7huz578s6llln8qzasapsx5pvjs',
        hex: '224589ce916b6aba99aa5531364aa2623d7e0a9e3c35fffe6700bb0e86',
      },
      {
        drep_id: 'drep1y2e96usyjhhhda96ndcsykzy6z9jf4grf9jvt3v7f84sstqkyn2ne',
        hex: '22b25d720495ef76f4ba9b71025844d08b24d5034964c5c59e49eb082c',
      },
      {
        drep_id: 'drep1yt8rkalvjyyxzht3qc0cd3r0ua57wa2m0krt8dg2vfmnmqgj46mhe',
        hex: '22ce3b77ec9108615d71061f86c46fe769e7755b7d86b3b50a62773d81',
      },
      {
        drep_id: 'drep1yfy5e3nahwfydlsq84zz3ve5erd98yd836m74vj9qltwdnqgt95tk',
        hex: '22494cc67dbb9246fe003d4428b334c8da5391a78eb7eab24507d6e6cc',
      },
      {
        drep_id: 'drep1yfz3nu55mq9slnrxj7773umx9xlga0u4y7lqy0l8xeelr2gmgtk4c',
        hex: '224519f294d80b0fcc6697bde8f36629be8ebf9527be023fe73673f1a9',
      },
      {
        drep_id: 'drep1y2qkg2ahz82nxy7aa8danywky9q5cmftmur2jxqextep2ssdm6tvl',
        hex: '2281642bb711d53313dde9dbd991d621414c6d2bdf06a9181932f21542',
      },
      {
        drep_id: 'drep1yfw5agf8rpwa85k35mrxj606du69ujdkxpwsguvzxuyem6qt86k5z',
        hex: '225d4ea127185dd3d2d1a6c66969fa6f345e49b6305d04718237099de8',
      },
      {
        drep_id: 'drep1y2q252gsm6r3998yw6p32gr4v35jmhcm59wxmcwpkk3yc6qlr2ve9',
        hex: '2280aa2910de871294e4768315207564692ddf1ba15c6de1c1b5a24c68',
      },
      {
        drep_id: 'drep1ytze3qa9a5vg3zpgmhgrde0w0yzywh7tezxq92lpe9zt6rglfw774',
        hex: '22c59883a5ed18888828ddd036e5ee7904475fcbc88c02abe1c944bd0d',
      },
      {
        drep_id: 'drep1yfj2tt6ynx7wpunwguaamfewq6q9agdjcuerd3lhed5j6ggjeu7v8',
        hex: '2264a5af4499bce0f26e473bdda72e06805ea1b2c73236c7f7cb692d21',
      },
      {
        drep_id: 'drep1ytvk7yslg948lk54xehn4ct9jh2ef8s4vgglhhuph9ymefg9grd6j',
        hex: '22d96f121f416a7fda95366f3ae16595d5949e156211fbdf81b949bca5',
      },
      {
        drep_id: 'drep1yt5dr68azzrthyd9vhqt5xlfazu4vdd38hzd2lxumcqmlusn2wx7a',
        hex: '22e8d1e8fd1086bb91a565c0ba1be9e8b95635b13dc4d57cdcde01bff2',
      },
      {
        drep_id: 'drep1y2e0v2wu7uv6az9rp0udsf67sjw4qnvqu20nr4erhu8j6jgrgfr6j',
        hex: '22b2f629dcf719ae88a30bf8d8275e849d504d80e29f31d723bf0f2d49',
      },
      {
        drep_id: 'drep1ygh6kjwm5c2z5p6577a22hxet9knegakg8esp309w68enmsqmqls6',
        hex: '222fab49dba6142a0754f7baa55cd9596d3ca3b641f300c5e5768f99ee',
      },
      {
        drep_id: 'drep1yt76he02dprm2af6x26vg76mhs2vajlg43cr9jh9dq3f2qs68ts3s',
        hex: '22fdabe5ea6847b5753a32b4c47b5bbc14cecbe8ac7032cae568229502',
      },
      {
        drep_id: 'drep1y22k4k0rhmh7lm9dgsd8fv8f2g7zpxax294mdrk9m9u4h2q66zvlj',
        hex: '22956ad9e3beefefecad441a74b0e9523c209ba6516bb68ec5d9795ba8',
      },
      {
        drep_id: 'drep1ytkdk7j6g4jpnuamve0uy9kv2fyvlprdauv0ymtdpvkrt2gla0chu',
        hex: '22ecdb7a5a456419f3bb665fc216cc5248cf846def18f26d6d0b2c35a9',
      },
      {
        drep_id: 'drep1yt0aljj4ansq49ef9pyd3defntqk5u002yypkljsdredt2c3pytup',
        hex: '22dfdfca55ece00a97292848d8b7299ac16a71ef51081b7e5068f2d5ab',
      },
      {
        drep_id: 'drep1yte7sk3chauyse8t532sdw0257uwd5rvxgzurg2ht97auagzz57s7',
        hex: '22f3e85a38bf784864eba45506b9eaa7b8e6d06c3205c1a157597dde75',
      },
      {
        drep_id: 'drep1ytcw6qzpqqclx2yd0zy64ztvlkkhnf6yrzza8whgnq4vz5gh89626',
        hex: '22f0ed00410031f3288d7889aa896cfdad79a7441885d3bae8982ac151',
      },
      {
        drep_id: 'drep1y2042s3vtxpdp7e60v043vrqp5fgtp2hnwkju64x7ccf2rgvetjkv',
        hex: '229f55422c5982d0fb3a7b1f58b0600d128585579bad2e6aa6f630950d',
      },
      {
        drep_id: 'drep1y2rm8tr96q2836y3srhfl3ngk8sqza39c9u0c93anmklnlcxe3p9c',
        hex: '2287b3ac65d01478e89180ee9fc668b1e0017625c178fc163d9eedf9ff',
      },
      {
        drep_id: 'drep1yf3w5wxgp6slvqugrrxqk0c4ktg6z6lyrj5vvu0epmc0u9q2fawj6',
        hex: '2262ea38c80ea1f6038818cc0b3f15b2d1a16be41ca8c671f90ef0fe14',
      },
      {
        drep_id: 'drep1yt2v0x99yh0ksyv7rp2xjhkzqy6qhn0fms5gmfqejgdvnzcwsetgw',
        hex: '22d4c798a525df68119e1854695ec201340bcde9dc288da419921ac98b',
      },
      {
        drep_id: 'drep1ygccr4qs075s7ajjxv4nc6ax2km930u0mna6xzxwmlzwujcaczyrp',
        hex: '223181d4107fa90f7652332b3c6ba655b658bf8fdcfba308cedfc4ee4b',
      },
      {
        drep_id: 'drep1ygqpqgdfk5u0dyl49yae44m7nlf0a0j7e4nvlzajs3954rgf3wcqa',
        hex: '22001021a9b538f693f5293b9ad77e9fd2febe5ecd66cf8bb2844b4a8d',
      },
      {
        drep_id: 'drep1ygwkyyf3a6gucvlk37rhcutlrtaheupgcd5rvfqc97v6tmsnaesgd',
        hex: '221d621131ee91cc33f68f877c717f1afb7cf028c3683624182f99a5ee',
      },
      {
        drep_id: 'drep1y26gl2kcpt4ps9lc3efs0l0lhxm7atmhc0kjnugr2w90yxqctpdw4',
        hex: '22b48faad80aea1817f88e5307fdffb9b7eeaf77c3ed29f103538af218',
      },
      {
        drep_id: 'drep1ytg60fstya0khfndc7l29gujdujhdawgkkea64hehle7aks8lqcxv',
        hex: '22d1a7a60b275f6ba66dc7bea2a3926f2576f5c8b5b3dd56f9bff3eeda',
      },
      {
        drep_id: 'drep1yfc7z0v37wm4dmvup2l33w8grhedgs3hfq3sa95dh5h3jjcghkuk9',
        hex: '2271e13d91f3b756ed9c0abf18b8e81df2d4423748230e968dbd2f194b',
      },
      {
        drep_id: 'drep1yt457w37784w7np93t6vk4wrfptrmnnsg4cnvea432cmwfg2pe9l7',
        hex: '22eb4f3a3ef1eaef4c258af4cb55c348563dce7045713667b58ab1b725',
      },
      {
        drep_id: 'drep1yf0qp8m5e9mdfl8rk90v0x3rgrvyw97ee4jlc2j80l3l8yckwzsgn',
        hex: '225e009f74c976d4fce3b15ec79a2340d84717d9cd65fc2a477fe3f393',
      },
      {
        drep_id: 'drep1ygg8d9n078fueupj4fzjqzquccyw6vae5uq8qdn9rgppzagrlg88a',
        hex: '221076966ff1d3ccf032aa4520081cc608ed33b9a7007036651a021175',
      },
      {
        drep_id: 'drep1ygqr6dy6rl0qvr7hnvss9g92pzzt4kfsur7sf8jmy6nytms6s87cz',
        hex: '22003d349a1fde060fd79b2102a0aa0884bad930e0fd049e5b26a645ee',
      },
      {
        drep_id: 'drep1y2wsprutpljs4dqn7wafhwhse4h0crd7tsn2ek7zk8h4yrsy4d0te',
        hex: '229d008f8b0fe50ab413f3ba9bbaf0cd6efc0dbe5c26acdbc2b1ef520e',
      },
      {
        drep_id: 'drep1yt26jd7he3slqv3985lfllcqfx928444n52f5q8szm3ra9g6dxxrw',
        hex: '22d5a937d7cc61f032253d3e9fff00498aa3d6b59d149a00f016e23e95',
      },
      {
        drep_id: 'drep1yg2nrnr27sgfxt3neg60glvf7tr8vfussgz00qmj487sz4gfk6rye',
        hex: '221531cc6af410932e33ca34f47d89f2c67627908204f78372a9fd0155',
      },
      {
        drep_id: 'drep1yglgx9tzudmq7mazv2q4f5w8msshnrkmyyq4902jvk0zq8c27qszh',
        hex: '223e831562e3760f6fa2628154d1c7dc21798edb210152bd52659e201f',
      },
      {
        drep_id: 'drep1y2qn0rf74zdk3u8upx2yk8un7tlts5f33uvklx96gq5a32qmwj3xg',
        hex: '2281378d3ea89b68f0fc09944b1f93f2feb851318f196f98ba4029d8a8',
      },
      {
        drep_id: 'drep1ytmgu92lmachsqzjnnmm48q6pdhhzj35ycw74pu04zg9pxqllw6m7',
        hex: '22f68e155fdf717800529cf7ba9c1a0b6f714a34261dea878fa8905098',
      },
      {
        drep_id: 'drep1yf220645y558fhsz7jd3anssstxyvd4yn9klprvjgm0sgas8av5jf',
        hex: '2254a7eab4252874de02f49b1ece1082cc4636a4996df08d9246df0476',
      },
      {
        drep_id: 'drep1yg2rnlwqsytyhssz06p6ypxacarxx4v3xvtcmkm2crnes5cfyhx5s',
        hex: '221439fdc081164bc2027e83a204ddc74663559133178ddb6ac0e79853',
      },
      {
        drep_id: 'drep1yfhyq6tztjksqqpd5lglc3zr2tn8vylgjh9xzz7n2p4l4lgk3qam3',
        hex: '226e4069625cad00002da7d1fc444352e67613e895ca610bd3506bfafd',
      },
      {
        drep_id: 'drep1ygkwp3xc58jlgtx437vmn9vp3fv2m3u4eww393yhxmpumcq0je3x5',
        hex: '222ce0c4d8a1e5f42cd58f99b995818a58adc795cb9d12c49736c3cde0',
      },
      {
        drep_id: 'drep1ytax4rwzvdwamnu67j2uk9z00660lpzcvmlys6266l9kt5c262k7m',
        hex: '22fa6a8dc2635dddcf9af495cb144f7eb4ff845866fe48695ad7cb65d3',
      },
      {
        drep_id: 'drep1yf6dakmlsleca55xmss06thlnapnu4e2l977dax0yk6nhgsevfd0d',
        hex: '2274dedb7f87f38ed286dc20fd2eff9f433e572af97de6f4cf25b53ba2',
      },
      {
        drep_id: 'drep1y22swams8xvw30jvd42790xhkqdsv2qehh5p56fhcrkz9gqrqmswp',
        hex: '22950777703998e8be4c6d55e2bcd7b01b062819bde81a6937c0ec22a0',
      },
      {
        drep_id: 'drep1ytz9782u0n7qe58x02nw2m89a4egr0k9jk50z23k76ylalqzgfqcx',
        hex: '22c45f1d5c7cfc0cd0e67aa6e56ce5ed7281bec595a8f12a36f689fefc',
      },
      {
        drep_id: 'drep1yff9usc98s9rxvrhrjt44yj33pdwd6nse727n64qk5kcr6sxmjtga',
        hex: '22525e43053c0a3330771c975a9251885ae6ea70cf95e9eaa0b52d81ea',
      },
      {
        drep_id: 'drep1ygy7rr5lnnchdl0csa3a798z4meweuk6kpmltws4vaxvxvcaa7rl8',
        hex: '2209e18e9f9cf176fdf88763df14e2aef2ecf2dab077f5ba15674cc333',
      },
      {
        drep_id: 'drep1y2jn2g6gsg9sj7lpmxl3x0e3hmtlq9gmhulny7v5mw7qp6gy8ww0x',
        hex: '22a5352348820b097be1d9bf133f31bed7f0151bbf3f327994dbbc00e9',
      },
      {
        drep_id: 'drep1yt73a8a38mu6f0wsclj84mctlsr9ajnvftymvyuxrn8jpjcsxfsf0',
        hex: '22fd1e9fb13ef9a4bdd0c7e47aef0bfc065eca6c4ac9b613861ccf20cb',
      },
      {
        drep_id: 'drep1y2sl7t3z4cxlsmmy7x8wvx3vskce3ptx3k7y2rs26dlh3xcxsdz9y',
        hex: '22a1ff2e22ae0df86f64f18ee61a2c85b19885668dbc450e0ad37f789b',
      },
      {
        drep_id: 'drep1ygqwhzzmlgeh7yvnfvtfmxcrpd0s8l6ezv7zgda33ewphess6y42m',
        hex: '2200eb885bfa337f11934b169d9b030b5f03ff59133c2437b18e5c1be6',
      },
      {
        drep_id: 'drep1yfvpdnyexpv3s4ppzeq6u0mn9ym8szk09cm4fv98vr8qkxcwd0g9a',
        hex: '225816cc9930591854211641ae3f732936780acf2e3754b0a760ce0b1b',
      },
      {
        drep_id: 'drep1ytxhymvft3klrjgtt8m9m8gv5sjhv0ut03z4fxhl6anmm9sxlpkqf',
        hex: '22cd726d895c6df1c90b59f65d9d0ca425763f8b7c45549affd767bd96',
      },
      {
        drep_id: 'drep1ygpmm3ufdh048lfej9q77ae7ferxfw6fg2ck9mmraxnxq8s3wdywp',
        hex: '2203bdc7896ddf53fd399141ef773e4e4664bb4942b162ef63e9a6601e',
      },
      {
        drep_id: 'drep1ytd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgc9me7as',
        hex: '22db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23',
      },
      {
        drep_id: 'drep1ytmtzs0rt5gq8u4s32mh40g0xuru0zs4veqkw76alqqh0hq52jgwm',
        hex: '22f6b141e35d1003f2b08ab77abd0f3707c78a156641677b5df80177dc',
      },
      {
        drep_id: 'drep1y23y32wq2047y59509qyvjutk7dmqdgv09kkvegrh8r6elczx5rwf',
        hex: '22a248a9c053ebe250b47940464b8bb79bb0350c796d666503b9c7acff',
      },
      {
        drep_id: 'drep1y2c8t4k0qvhmar7ysmtdvwcgeej3jxzeum8s28ecxyl88xsuraxwf',
        hex: '22b075d6cf032fbe8fc486d6d63b08ce65191859e6cf051f38313e739a',
      },
      {
        drep_id: 'drep1ygln6j5yhqqtxn4cf3s4r224ehvz8g9encacsmrjtwrknegzsmh5a',
        hex: '223f3d4a84b800b34eb84c6151a955cdd823a0b99e3b886c725b8769e5',
      },
      {
        drep_id: 'drep1yfm66g77aau5r06j0xm4nc4ljf8v2hnkdp6hcs8mwzxnulslc2ecs',
        hex: '2277ad23deef7941bf5279b759e2bf924ec55e7668757c40fb708d3e7e',
      },
      {
        drep_id: 'drep1ytee8ue66qdqkfquq5c9hld7trhxvqdra5plfhyuragcfsgrqen4n',
        hex: '22f393f33ad01a0b241c05305bfdbe58ee6601a3ed03f4dc9c1f5184c1',
      },
      {
        drep_id: 'drep1ygymv6g9kxrcjpcvlkaxeeq4n0esjyc8rdar43lzs75ncrqa6ep3r',
        hex: '2209b66905b18789070cfdba6ce4159bf30913071b7a3ac7e287a93c0c',
      },
      {
        drep_id: 'drep1yw9zlct3e7vtjlfklvh2050lr78t55cavfjahjhnh5v3e7s2h3c8k',
        hex: '238a2fe171cf98b97d36fb2ea7d1ff1f8eba531d6265dbcaf3bd191cfa',
      },
      {
        drep_id: 'drep1yfkg5ryqwaleunwqg0dtcj8g8yw8sgd9kskg2zlzdr8355gpghcvv',
        hex: '226c8a0c80777f9e4dc043dabc48e8391c7821a5b42c850be268cf1a51',
      },
      {
        drep_id: 'drep1ytwmwvtd0a8lr45ssner2tjxzv5y8q03w3606yeald9mdmgmwecja',
        hex: '22ddb7316d7f4ff1d69084f2352e4613284381f17474fd133dfb4bb6ed',
      },
      {
        drep_id: 'drep1y23wflfehz8ek539jtscdu3f7ua3g8axk964c65x242v7aqktt0cc',
        hex: '22a2e4fd39b88f9b522592e186f229f73b141fa6b1755c6a865554cf74',
      },
      {
        drep_id: 'drep1yfx9wupcwgrepdepkqfw4ud2lnhqedv37t3pduhrt9sutdsqqen0z',
        hex: '224c577038720790b721b012eaf1aafcee0cb591f2e216f2e35961c5b6',
      },
      {
        drep_id: 'drep1ytwz2ryz6d4636tn733wlayx7s4aene6e9h9n0xxmw2s29qzq9t08',
        hex: '22dc250c82d36ba8e973f462eff486f42bdccf3ac96e59bcc6db950514',
      },
      {
        drep_id: 'drep1yfrud5mk40ttv4z5l4ltvcgfstmjzwyv73hczmmpue4dv0gus8kge',
        hex: '2247c6d376abd6b65454fd7eb6610982f721388cf46f816f61e66ad63d',
      },
      {
        drep_id: 'drep1yf7rhr6k8gfecdn8z5r38uqyaafcfr785lsgzsvc7ye3m9g3z20kj',
        hex: '227c3b8f563a139c3667150713f004ef53848fc7a7e0814198f1331d95',
      },
      {
        drep_id: 'drep1ygfa6qqqzy6ppfz8neuck5j4hcrfa2pj0gnkq34rj7jh8vqpx5f0k',
        hex: '2213dd0000113410a4479e798b5255be069ea8327a276046a397a573b0',
      },
      {
        drep_id: 'drep1yfzwh6dd7pdf2hhpjhfj2zml52nwna5e66glqk2wsqegrjs037657',
        hex: '2244ebe9adf05a955ee195d3250b7fa2a6e9f699d691f0594e803281ca',
      },
      {
        drep_id: 'drep1ygwk39j52lh9kdkk2hxyyt3upa5r8e54e6vzj6hzfjuk38gpu3pp8',
        hex: '221d68965457ee5b36d655cc422e3c0f6833e695ce98296ae24cb9689d',
      },
      {
        drep_id: 'drep1yt27gd2vx376u93n0w70wtrsh90zfc3jljgxq6jfnvztqkcuzwewn',
        hex: '22d5e4354c347dae16337bbcf72c70b95e24e232fc90606a499b04b05b',
      },
      {
        drep_id: 'drep1y25fwf6t6ndp9jeassrwkfaeksgqckvvz5a8exnm9h9hm8qvxeryd',
        hex: '22a897274bd4da12cb3d8406eb27b9b4100c598c153a7c9a7b2dcb7d9c',
      },
      {
        drep_id: 'drep1yf2le3jq74jk4gaw4a54yc5zplhhxvylv2czpqcgm6cwehqhh53p9',
        hex: '2255fcc640f5656aa3aeaf695262820fef73309f62b0208308deb0ecdc',
      },
      {
        drep_id: 'drep1yff65vq4g4jcr80r2tqawmdezyrv64x0728zfcf04nvlssc9nf9t3',
        hex: '2253aa30154565819de352c1d76db91106cd54cff28e24e12facd9f843',
      },
      {
        drep_id: 'drep1yt0n05825f7s4w5tvykgmdq3n6w50w5cuam74x3nhpx2fqcc4m226',
        hex: '22df37d0eaa27d0aba8b612c8db4119e9d47ba98e777ea9a33b84ca483',
      },
      {
        drep_id: 'drep1y2zpa7e9f23g7snuhfqss73ufeshsqhdt4qqfu74p9y4kfqcpsxym',
        hex: '22841efb254aa28f427cba41087a3c4e617802ed5d4004f3d509495b24',
      },
      {
        drep_id: 'drep1ytwx8am2dnqn5umayy5pg0cw80rzem5v35pxnz30uxkqr6qlntcwx',
        hex: '22dc63f76a6cc13a737d2128143f0e3bc62cee8c8d02698a2fe1ac01e8',
      },
      {
        drep_id: 'drep1y2dp66yme5pf7ktvxagrcwltpfr2rwwymcyq35lc4nuyj2g8durwl',
        hex: '229a1d689bcd029f596c37503c3beb0a46a1b9c4de0808d3f8acf84929',
      },
      {
        drep_id: 'drep1y2zj567cky5sj03farq3pmdlxvvr5e2cx86dqk39l434yzgee9ulp',
        hex: '22852a6bd8b129093e29e8c110edbf33183a655831f4d05a25fd635209',
      },
      {
        drep_id: 'drep1yt4m3d3jpqqzv92pp25qysxqu0fggh9wkhpaey4szdxj3qslpgxjx',
        hex: '22ebb8b63208002615410aa80240c0e3d2845caeb5c3dc92b0134d2882',
      },
    ],
  },
];
