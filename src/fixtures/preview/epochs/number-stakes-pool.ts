import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
).filter(({ type }) => type !== 'order');

export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-pool_696869b293ec',
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',

    endpoints: [
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08?page=1',
      'epochs/520/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08?page=1&count=100',
    ],

    response: [
      {
        stake_address: 'stake_test17qqky8t4wg8l8s8z7fusp7vjf0c98fvrwjhrscvyxmtqxqqtqafjc',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17qzuuxhqnz9vezy2wldxld04vy42pfc9cjjw78ymclnjllsq5gw70',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17qr5wzwzxp0rjl7905mq4alu7qgpnk6a7rn0s9upf46kwqqnt6htp',
        amount: '2287328',
      },
      {
        stake_address: 'stake_test17qycf984788lnt9ya22dw3mpu0vh8lsss5qs8cwpjg2mqpq0ynqst',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17q9nk78hcd24vs8xatrmpyuqfnve6zv6mmrsx0eh6wdmm5qcdt2v6',
        amount: '8799454',
      },
      {
        stake_address: 'stake_test17q89dfecfxsws8zvvmwvw0flghrrwe9g0eww5uv98nmevmqyvmrs8',
        amount: '3631367',
      },
      {
        stake_address: 'stake_test17q8ac3qphrpzxsg7s49ckhqlza38ynhtedw8yqv7dhewcaq8gl8ps',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17qguzh3w4vrw4nvgrnkaerx05q2fycc3vuxzta2gcwhe9tgemwzqc',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17qfw9hja5r0ah0skhdsxgex97phc2y72r9la242xh32u3mghjd2zt',
        amount: '24929548',
      },
      {
        stake_address: 'stake_test17q2hyncfxh6a8k0dzjd7c6sf6hzcjxdylt6f2qtpjhg67wgzhlexa',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17qtym75ykmznz49py8lxezv99ql0qu0k7xepngh0uv0cm6sp4jcy8',
        amount: '1652421819',
      },
      {
        stake_address: 'stake_test17qvwhjvyq4z8qecwrxudwzruzyz9amfwm7nq8wdjfv9zp4guqk7tm',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17qvjhxahemn92eua6sg3eqfr8tw39fdkf0tmjftsw66dyzsxrrjzx',
        amount: '648991',
      },
      {
        stake_address: 'stake_test17qvng2sp2w5m0s40pzcpuqr8l9da9dzwdazlvu0rksn8kwsveln5j',
        amount: '17894155',
      },
      {
        stake_address: 'stake_test17qw493ez6dgsqj63vfmvvccegugmst2jc08vpqttkfeun2csm6qr7',
        amount: '3012905',
      },
      {
        stake_address: 'stake_test17qsvzx4869vs55m8gvg94xvscwdyn66z5wlmy6702vgrraqvlu3ee',
        amount: '551147328',
      },
      {
        stake_address: 'stake_test17qs6fr042app7cd8mhjxcgcwl0wq3zf3flj452gr2rshq7sq40wsm',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17qj4pfgjq76flf59r27mxksqfhvaes2uwyu6mf0dkgn09fsc3pl5n',
        amount: '2996143',
      },
      {
        stake_address: 'stake_test17q44xkjd6g6d2jrrx4njv0s88vh90gq4dh3hrdulmuj62agpmhr5y',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17qc96md6gg8a932l7qjv5m7kqvwy5vgnrpw3g3lxjcj63aghjqknd',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17qm6eg7a3l86juhefk5eg462y5cx0ux6fsetnd2guw3l3aswar0tq',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17qa62f2werm4wvalmjpkzylqnfnj73fjjdl668gtpghrf5c5paskk',
        amount: '6024164',
      },
      {
        stake_address: 'stake_test17qlngcr339d5vhhtw3t4afk0pdt79pehwrqnm0ng0e09cgcmsr9z5',
        amount: '2470460',
      },
      {
        stake_address: 'stake_test17pqg0zs8nfnzngcghcgjpany3draxpttanxaayftp8engdcdcetzw',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17ppe86u9rhzmwl80xy5vr548vfugm5wgmmz380jfmyx2juq7lvlfj',
        amount: '2980963',
      },
      {
        stake_address: 'stake_test17pyze6zmvkqrzfa5xtngxdp2kpsgvjlpsrzcgcl6j7guzfsu9t5ty',
        amount: '7141780',
      },
      {
        stake_address: 'stake_test17py5rjm6kx8k0ees4g8l0758v0terqlt4sgdj8ff0qsp4cclgnce7',
        amount: '0',
      },
      {
        stake_address: 'stake_test17p9ykv8m5gx7yvskqzqhsryx8g65d8pay6l57csmpxseu0c5pgpnu',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17px0wy0afrsh7gwsa88usu69ghr5lcw4k2gsjyneutckj9gzryj8w',
        amount: '1404754385',
      },
      {
        stake_address: 'stake_test17pgwtz2g9dpcqjgd2p6hanfwsay7lcka5263frnt3gmw7rg4d723m',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17ptml5sgz7gu432tt425ne0ks9u88kkfvyx5qkddwcgepnq6stwyk',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17pvy5ucvtdxhnqcwa4d276gkwur4pht3jenf22rrjyr5rwcc83vev',
        amount: '49727262857',
      },
      {
        stake_address: 'stake_test17pdmueqy2ej2azp0etmvajgrht92te4e3su9day76j4z3zgr6rugd',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17pshtwwrhl458f5g7hqpvk9gd6npqpqjghh654sfjz224rszss82m',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17pjk7mnthcj437mq6d8vuu39u7xtarxaqjpkyw223ls39kgmkffxg',
        amount: '761172492',
      },
      {
        stake_address: 'stake_test17pngtwlgjk25kzr75t8nrl8d30uamj8c42sg2ahklz00rpssaq93w',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17p5nzxr5tad57uj0v26ymzw9eraesplwqlvrqak32hq4y9g3a7hfv',
        amount: '283795619',
      },
      {
        stake_address: 'stake_test17p49p4lt42jy5nmuc2r7pr9nwnejhw8j3sg00y8d9fjvf4s45mv4d',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17p4g7gwa94fwsz409j6frc7sxv0gtr3margetntm0897jhgxh2dcv',
        amount: '2000000',
      },
      {
        stake_address: 'stake_test17p47ytx4gl776kexy75gzkngk0swc9sad7r0p0wlt7jm34qjyae43',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17phr5qph289wrelg4l74vf0ck7hhdu8u65xhvnu7e8q23lszsvcmh',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17pc7c7vgrkkne3zgxt6skpru7z2nl5sf3c3grd0rlu8nzdq85sgaq',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17p6hwjpetptw65yz748wmw6l59d8psrzd629wrh8jkl80rgqxrdzk',
        amount: '3012905',
      },
      {
        stake_address: 'stake_test17pm5xjrrrdj8ujtthxpujkmudlf8l5xaqkndrwxefttuyrs30khq9',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17puyx7fhyz0u73nrp0tppjm0egwj4u0s298yw08rq3k79kguj0hyv',
        amount: '60140255854',
      },
      {
        stake_address: 'stake_test17pufx4e5udzgwdhd2x9hc4s9e6khykffk3x4qfgpr2hr4ws7lvsjt',
        amount: '1134571539',
      },
      {
        stake_address: 'stake_test17putd8sd3f0sjhv2rkq05w608z8w9mw5pham2we43plw6dsyjkvv6',
        amount: '3045998',
      },
      {
        stake_address: 'stake_test17pud73ltpujaxldfjqh0vvsxxv43rtjyen5n4h2zwmc075c4u35nw',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17p7m5ax3zfxmfylggmrggxnjxmth4qfqfn2mgw4rewk40tg846cty',
        amount: '604654329',
      },
      {
        stake_address: 'stake_test17zq8zg520fwqslwerq5ufhkhcszj942p2jtg3tccyfw65xgdqc9fj',
        amount: '8812573',
      },
      {
        stake_address: 'stake_test17zpw4u4vd6ag2c7kfetqx3e8r8nl8h9rnd8u47uck23zzegzs535z',
        amount: '926704962',
      },
      {
        stake_address: 'stake_test17zpu4yj2ndxje6p69xujl3ywjfmdzsm9vwksddv06mnq7wchjz9rl',
        amount: '7775537681',
      },
      {
        stake_address: 'stake_test17zr2tmu60zgx5ac289mkxxe8qrytzjndd9nzz74nf6fk3ngta2q40',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17z90lrs40mwjpvnx0xt5e38kntmt52gxww09a56degh7z7gljqdec',
        amount: '3012905',
      },
      {
        stake_address: 'stake_test17z8lkkut9u02ex7kfy627szcyk0mje523u7pq8qs67hncpc3j2ufm',
        amount: '35501645',
      },
      {
        stake_address: 'stake_test17zv9qw8zf69zau2lhes79kqwnnvvr08w4s29n46eynvrxvsm6sam0',
        amount: '72253774',
      },
      {
        stake_address: 'stake_test17zdp0mwl8japafufa7vud5j4379zmv7j9ugcjmgac7uvv3sxnjjxp',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17zwpp5ytkadxgratmxtsg5edzzxw5dw4f46pvp434unf2aqw4ykrg',
        amount: '3012905',
      },
      {
        stake_address: 'stake_test17z06nf7d7xnxnj35s05nc04w6xlmdf9k755ndexzv2xsg2qdhq85d',
        amount: '544557203',
      },
      {
        stake_address: 'stake_test17z0mq0ktshxfuvr2cjvl5an9kqvcw9d7nt6yla6wl2wt4ycxjczhh',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17zshfwrxzj3w2x74n8k2urdf2nvduj3f2d20wlk04uydypst50atl',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17zjmtl2gdatgcqcvv48xg5vdmd77cegapd904qluywm75cqmyarrr',
        amount: '19263259',
      },
      {
        stake_address: 'stake_test17z5hsdx64mrwtk9ma5k2m9qrd5f89saugsh6qqq9mf9phqgx05e2v',
        amount: '4164379412',
      },
      {
        stake_address: 'stake_test17z4552djapcp90qhm9xxjxdrxwq29rmctz8h97z2yfaq73spt8mm8',
        amount: '659799985',
      },
      {
        stake_address: 'stake_test17z4hswe9talr5cpa0frlf4y0nfg3garesrg49mmv86s6pwc932gjn',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17zkmvuy95yv6hq7mp2wku9rd2y3vc7j9vnqdvcsyu5ykt4qed8pu5',
        amount: '542070370',
      },
      {
        stake_address: 'stake_test17zkay6znn4z2wu23wnv85vqt6gez34gvrjc76nn2n0cz99qwjxn3p',
        amount: '2756255279',
      },
      {
        stake_address: 'stake_test17zkagsn359zlgf0g0j67jc6ac6q02sv9c9ywdmcg0x5jj0s0synl5',
        amount: '2980963',
      },
      {
        stake_address: 'stake_test17zhawnk4cvjxdqht4eag00rs2jv63qa5jffjfktlfhzhr0sf9ewae',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17zha69kv4vxv49edxkylvlrac8mfg2um65nljc72wj7udwc276wat',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17zczpzy05ujlt5cd4qeuztca3g5rfszf3huqelfjxdscy6q6hugjs',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17ze2lk7fzn5wdm6yha5f2swdg5zwlr29d7v9qnl5x8f6keqntvpj6',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17zmdhrparyqxknvhyjqyse3eaeh4f9mmez9v4e3y4m84a5cj5ptgn',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17zun6rcy3f4mff88gp6awmzcmuvygvs66kfqtvnaerjdm6gqs5rus',
        amount: '12064945589',
      },
      {
        stake_address: 'stake_test17zadlg0z5hmvktyh0m94zyxlwc2ufxraxhfg3z4crytau0ckgtrgc',
        amount: '5578548937',
      },
      {
        stake_address: 'stake_test17zlvmsh2r25xgsgdy8aak4ytx9azk9295zfe25jddrqgvlcuptqqx',
        amount: '769833295',
      },
      {
        stake_address: 'stake_test17rqzrmq3ap82z78v3jvfrmzmgve6denptq2zqfrskc6485sjgn44l',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17rp3j0t6cr9mx8ycst2u8rwl7sgkdcft5dakjddx067lj4q4czxlw',
        amount: '3662842',
      },
      {
        stake_address: 'stake_test17rzh2fh7krvgfx4qm3r35fu4rfhy406882y9hzryllkzqccsycjs6',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17rr0zva2nnp9tp5czxa24gx69wqxjhtmy84ge7u8l37v6qq0n9nvu',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17rrl22tac7as8j3vcvz08644n4nfjjfsg0pted05r4gg54gxrplz5',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17r9musppfwuhdzp9uhtq5tdmhjuyyjtzfzklne3vajsh9rq48et30',
        amount: '671796328',
      },
      {
        stake_address: 'stake_test17rxwefrl8e4ttnldhmaugyny3h0239k5h82ngrx8v0ejhrcdkgqxp',
        amount: '8269642777',
      },
      {
        stake_address: 'stake_test17rxevcf6glx2txls4e8wjguuyc3gq2w0kxddrs55gtp4m6c8vq39z',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17r8cg7w4t3a2tu0p5mnqqaahkx6qwp2enzs84p7nxve2h0cgjdgy8',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17rglh605y50ftp7z23zufeawx3lwrpcrhz88vz3x2a0s9tqpm20m2',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17rtvxr6hap8lr82nejxrlhq26q43rzxkh5xc9x00c9gtgmgdpnt8s',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17rdtlv3lv3d9xenvk965xtk032lppnucyjmmvzxkkldfhkcj5hkhe',
        amount: '11910421791',
      },
      {
        stake_address: 'stake_test17rdn5h8k8pf8kdxxl20sxs357xnu0csx35nydzc83muhk3g7vusyx',
        amount: '5686963',
      },
      {
        stake_address: 'stake_test17r0yqdsgfcepra49cegvpynpsatv83xv5ldeckjhjgvu4pcyzdydl',
        amount: '6871746',
      },
      {
        stake_address: 'stake_test17r0fsjkzw7fmwt6ute3zx3urlakak6jcukzj826jagpvxvscu7q8j',
        amount: '274548882',
      },
      {
        stake_address: 'stake_test17r0fkkf9rnkg485wgz3hvsqtur8jp6hqg9s2626n586yrkg5qe3ku',
        amount: '2980963',
      },
      {
        stake_address: 'stake_test17r0c2d85arr9kcf0c89xtwqp4p9q2t9zpkm7edqatjl32hcdae5pm',
        amount: '769179849',
      },
      {
        stake_address: 'stake_test17rswatj6erdgpjmw0l97h8fgg9aqn368z87vkvhsxw7a5uqx00zdy',
        amount: '549508667',
      },
      {
        stake_address: 'stake_test17rsjzrldwqjmynv48adsj9n9l6dc6fzzrrnl93vft3yxu3qtfg8mz',
        amount: '8277266',
      },
      {
        stake_address: 'stake_test17r32wn72a5l2z7a2vawyhtw4q8cek0rfdpssax8z9caudpsddjyzs',
        amount: '3217684',
      },
      {
        stake_address: 'stake_test17r3j5xz4tcm8mguzpamwv0dhp5hg2sl2dmffvgjkhyg02qgfpkzg8',
        amount: '3012905',
      },
      {
        stake_address: 'stake_test17rj5s9ak03rpnyy4rktq7a99ca8npdatphl5sqvfn8ps8gczm46wx',
        amount: '549250664',
      },
      {
        stake_address: 'stake_test17rjhk4qr3anr4qdrh5cm974lq0szfgnfwrl6s2frgutppssmu0dpp',
        amount: '10697237237',
      },
      {
        stake_address: 'stake_test17rn8gx8d2ktzcwhl2mtkeyn4rklpge8fg7pwzrs7kdnjm9qtx5jnh',
        amount: '3352208608',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-1-best-pool-ever_96402ffaf0f0',
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',

    endpoints: [
      'epochs/520/stakes/cbb2d3a93e5b7fc422d250203ec892ed840cba51cc7c15530d6f06b7?page=1',
    ],

    response: [
      {
        stake_address: 'stake_test1uqpr2kk9mxg60n5czt5lt95pwmrjve5e6t8dlutd9wlalkcunhnm9',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq958ug54czcx2kl3g6q9xdyd2f30jz66hz9rlelk8akyps5a2wc7',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq0c73usnzs3gpa7y83plg0mgr2yn22rmdqzjk5c5lkaurs77pfve',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upy80dt06d9j5lvyxzr4vshratrmysn5e2w4d9dldf04u8glqdn06',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upd2sewkr6j8ggj7yna82c5kj768a05285ymnqp8j82ferg7xqhcs',
        amount: '27126614',
      },
      {
        stake_address: 'stake_test1uzn99jy8eud3f4jp7pg6natdt3mn76mn33fx5na0a9utk7q03ttkv',
        amount: '198461261169',
      },
      {
        stake_address: 'stake_test1uzhvwv5u722n0rwpeke2rppdklkwfapj3v45tdhesg8yrmgtgfqhm',
        amount: '27595719',
      },
      {
        stake_address: 'stake_test1urq3s2szd7ledc2n46gjc26rq8c6zjd5xm4e99y645sr28gwph4t6',
        amount: '0',
      },
      {
        stake_address: 'stake_test1ur9250dpckg3x7rndacp4lavhdjrl9lfyle8frw4sndsuec65dq3c',
        amount: '0',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-2-best-pool-ever_c6eb1468b29c',
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',

    endpoints: [
      'epochs/510/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb?page=2&count=2',
    ],

    response: [
      {
        stake_address: 'stake_test1updz0lmdguf275prv3xjd8r7wj7qx0ctwnknl8ex07dkr7sph9jhj',
        amount: '1496348',
      },
      {
        stake_address: 'stake_test1up3xx7puhsnmmgw3zw96ruavd8fn06kmgmutckudahaz5egrjfygd',
        amount: '16250833153',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-new-old-and-expired-pools-without-active-delegators-for-that-epoch_763d761eda2b',

    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',

    endpoints: [
      'epochs/10/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/5/stakes/bfb0a90221db27149e575d79fba2fd8df4fb6a04e446ed077648ee08',
      'epochs/50/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb',
      'epochs/80/stakes/4bbc44d779ba790105a9521fcf291c3b4b5383bb77174c6a5b8b63fb',
    ],

    response: [],
  },
];
