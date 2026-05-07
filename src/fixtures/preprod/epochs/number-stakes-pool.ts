import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
).filter(({ type }) => type !== 'order');

export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-pool_66516d7917cf',
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',
    endpoints: [
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v',
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1',
      'epochs/121/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1&count=100',
    ],
    response: [
      {
        stake_address: 'stake_test17q2gqzjxlre8whyhj7m7rajdev63hqn0f4jvykvz2pk6fhcyhr3nn',
        amount: '26495369',
      },
      {
        stake_address: 'stake_test17qv2w43j8fqxud736rcw5x6ayfk0c8yw6ujvm99ct4s9m7c3p776x',
        amount: '281486560',
      },
      {
        stake_address: 'stake_test17pyn4d7pnskxq704fasj026mm0z94rlhh5adydx6rr3hwkc0nmjjc',
        amount: '4428635',
      },
      {
        stake_address: 'stake_test17zrte98379rmtkr7wxewc2kzk36g3nrc43mx0he3wdl3ggc3q356x',
        amount: '29353472',
      },
      {
        stake_address: 'stake_test17zgql08hfsnqkfjl52jf7fshu6tyzpz7pz8uz0ry55rlakcgty74d',
        amount: '16321899',
      },
      {
        stake_address: 'stake_test17z6lmj4507cn25nj2e69szk9jyuf0luc4v696ehyvkf89usmw30x5',
        amount: '208927920',
      },
      {
        stake_address: 'stake_test17rt4uhtmq4nhm28u792evp9h3udqff80ue5zfs7pyzrj2vgjk7lpj',
        amount: '417097685',
      },
      {
        stake_address: 'stake_test17rl64xglvgerwg6hxvzwtzgcddm8s2kgtax80r30hxtpwqcw32pkv',
        amount: '327392689',
      },
      {
        stake_address: 'stake_test1uqqly3ct6clj06zlfl7wdfgk2l67lh5ydmd7q8zxeqwgyfqmgcn49',
        amount: '365907600373',
      },
      {
        stake_address: 'stake_test1uqpqpug4cpghyehnmrsw2w53s9l8l3hdex6nvx9w63c45jc3sv54x',
        amount: '67978090253',
      },
      {
        stake_address: 'stake_test1uqzhjrvj0ttyxc4h6sxfztjelzn8syc06tppx82mnntr29cm3wtdg',
        amount: '39450655',
      },
      {
        stake_address: 'stake_test1uqrq9vqdsfv2qf6gyu524m7n3ddllx8ng5sq5q6duwqmlvcp8zpfe',
        amount: '10095731514',
      },
      {
        stake_address: 'stake_test1uqyuxnjx243dcmgq2z4agrce33a3a4q2tfc79zx5208trqgduzxf3',
        amount: '2970485348',
      },
      {
        stake_address: 'stake_test1uq939gwdq7u88pdt9a3js87ezxdrwvg8lkku4hctxeqa29gvhnypd',
        amount: '3818298487768',
      },
      {
        stake_address: 'stake_test1uq8dktl8anj9llfst58thyzyu203wr6y8cu3ey03h94urhsrewmmw',
        amount: '9822551488',
      },
      {
        stake_address: 'stake_test1uqgjpag67q7e8xcd0n9t7f3c6pkmpztv56yzefrhdsuc4agrmjrjw',
        amount: '10130709365',
      },
      {
        stake_address: 'stake_test1uqfnku625y8r9dkm38ezszu64eu5eapckk6jawmfygs4y0gdcz0nu',
        amount: '4545330403',
      },
      {
        stake_address: 'stake_test1uq2xdqt588yx7pqgzcmjka4rd6sz8nnqgnszyjxjyl6xj2g40g9m3',
        amount: '7902109',
      },
      {
        stake_address: 'stake_test1uqtenlr0tmmfuxp6u5lw7dq6vy9aqzuc02qzj0as4e4y8xgee6uc6',
        amount: '5186521533',
      },
      {
        stake_address: 'stake_test1uqvsfe74nszarw0emcsde8r8dur994mthpd47gx2x4mdq4qwr4p8z',
        amount: '2004870939',
      },
      {
        stake_address: 'stake_test1uqdtpjug03qfcwt5ftgyfrehgf42jyvwnqtkr4s3u5g57hsqqhlum',
        amount: '9886974504',
      },
      {
        stake_address: 'stake_test1uqwcmv2a3gqcwdm2ca905vmpmrkrna04pegycem848tcdmqz370h5',
        amount: '10233151579',
      },
      {
        stake_address: 'stake_test1uqwmq38z2lrt7q8a8yexh0dq3jpehap23xq05tfavcq62ssgaznxy',
        amount: '1355970802',
      },
      {
        stake_address: 'stake_test1uq0yzp5y7sfpfd9cq4z7k9cz7wsvrt6qtsyv6qc64lguspq9qt8u8',
        amount: '24888226',
      },
      {
        stake_address: 'stake_test1uq0thnh9my5q925uv2cmhqs9mnh9ugv7qhpnl8urqwnldggeq6lsj',
        amount: '14702207',
      },
      {
        stake_address: 'stake_test1uqspxnk0xps2ya6vantnaeck7gh4vcx7q3kxkm7sf8wvcusu7qp0w',
        amount: '102901351',
      },
      {
        stake_address: 'stake_test1uq3d8sjv7656dhk0hgkjkye9muypx4x7wddg4n9vyt5v2sgsurxp3',
        amount: '11006940',
      },
      {
        stake_address: 'stake_test1uqn65rcnd97c3pwuw2glgwk3vn9pv2ze2d34jsw50len3zq4ss8xr',
        amount: '10295759713',
      },
      {
        stake_address: 'stake_test1uq58p6pr9lht2avmux5eq3l8flzd86ed0hrf94r2tm7xuacjhq43h',
        amount: '141465724',
      },
      {
        stake_address: 'stake_test1uq5sf8h75mtvwhm3ggy7enmjeltm96dr8fdn3pty6c2nvpgar6lna',
        amount: '3594726241',
      },
      {
        stake_address: 'stake_test1uq564juc509zf50spywkkmkk8vr85qedc4n3gyjj0mc9pkcdzce38',
        amount: '6517163',
      },
      {
        stake_address: 'stake_test1uqkz5nrqm4ulge025x2q02dnq7m7k36rqnflutlnta5lpzg4svc9h',
        amount: '114899590',
      },
      {
        stake_address: 'stake_test1uqchnl0mfan8jn39gylsyq6fw5kym45f7jh6v2rd5apcw7s9cxla4',
        amount: '4513515900338',
      },
      {
        stake_address: 'stake_test1uqempwsv82ddpsjrvnntj2c0sc39lwds69fdrry0jet9s9sf50tfr',
        amount: '1123045408',
      },
      {
        stake_address: 'stake_test1uq6wm69ywmrl0fl7ddh7jprnggjrmx62z877x06h7xfgz2s6f9dar',
        amount: '10097671070',
      },
      {
        stake_address: 'stake_test1uqm3s7c7nl8qzwnmp06cz48m04ezq7pxqk0twkzaructxsskcgayu',
        amount: '515580064',
      },
      {
        stake_address: 'stake_test1uq7ntknkqguyygcnp070zf3n3gtt09k36lfdn32lkhj5r0clgc4kz',
        amount: '35196576',
      },
      {
        stake_address: 'stake_test1uqljplv6pysvqsj5l4nmdfdm4dhx3xzu9dewrgwxcn8a7kqamv254',
        amount: '535710131',
      },
      {
        stake_address: 'stake_test1uql5egcksqu2380p6fx0ax86juxrvq8y2uyl3znnk7cjfzggq8d62',
        amount: '5340304119',
      },
      {
        stake_address: 'stake_test1upq65m6p9fsgq8zan2ksg2x8spvrqeram5qcrg7njwgtj3sz5njzr',
        amount: '4598884887',
      },
      {
        stake_address: 'stake_test1upzr8x6my8u5qfx74vgjsfexf2xf3qrfnmd6uahvu866xugj26s8g',
        amount: '3238449',
      },
      {
        stake_address: 'stake_test1upzt0enjsa79wsjx4dlaq5zp85c6c07pd3tarlvsyr9uu9qus0489',
        amount: '20326909480',
      },
      {
        stake_address: 'stake_test1upr7s96vqkf32wje7qcrgdq6ts0r0lhlq6pasrfhpv6u7dggeqxn5',
        amount: '766842568594',
      },
      {
        stake_address: 'stake_test1upr7njt2tzgz7hlmnmsghcz4usl0yuznh4ly3w270m98z8s5z9f6w',
        amount: '337637412',
      },
      {
        stake_address: 'stake_test1upyhsvmhnxd8qehqfa3va02anu9jknazkwm5k8dvg3d3ljcm8ztam',
        amount: '67886296',
      },
      {
        stake_address: 'stake_test1upyhhyx43thwdjsasd34apnqz6qlqncw63amprj74ndlyqsv2tw5x',
        amount: '99535324',
      },
      {
        stake_address: 'stake_test1upgvzt9g5r936edeuzrftv7xr4fthnpkwpk8kkw877uxslcdczy3c',
        amount: '994052366',
      },
      {
        stake_address: 'stake_test1upgu6sedwc8rhzcz5neylje025nl4lysqfx2x5qfxsn2a5qtjr8ea',
        amount: '7655102390',
      },
      {
        stake_address: 'stake_test1upf82rkj35j3tcv9g6yzszcsf5g66cyd89esr7x20tez9hgfj76l7',
        amount: '3547072435',
      },
      {
        stake_address: 'stake_test1up2yd4rw2v0myhm52nwjalzyveedptnjf9nur8c8prt3mxswhaxw2',
        amount: '16763405',
      },
      {
        stake_address: 'stake_test1up2lnn86whlfu92jamcwc2ux072ptc2t5exkn23v2c5fkugl547re',
        amount: '143276862340',
      },
      {
        stake_address: 'stake_test1upt4t6kje70vj8twmauu7nz9dpf3ccxn49z2z5tx6rjmkuqpvml6r',
        amount: '10285820964',
      },
      {
        stake_address: 'stake_test1uptmhzuke47cupj8mxd8z3zhzfhvuy708t2r6sdt33wcanqjlu5kh',
        amount: '10222289135',
      },
      {
        stake_address: 'stake_test1upvxddwdenysyukzwza5xpjwe962p79jecxkr2hafyl9kzc9py3tr',
        amount: '99954877',
      },
      {
        stake_address: 'stake_test1upv4et7am0nkrlxu2n2qmgn07myruj42agq4gzsl5s8fdng3axalw',
        amount: '10285820964',
      },
      {
        stake_address: 'stake_test1upwh0td26dgfkttfrfhk587vhv0gm99yez6whfannsslp2qgv5xss',
        amount: '6293202',
      },
      {
        stake_address: 'stake_test1upse40rwt4xtftwqv7qlw67ujc3xstedgyzs62jpmh46y0qysjyq5',
        amount: '8989116',
      },
      {
        stake_address: 'stake_test1upjhaq6wg0cfftagjlmh55el6hm0gyhpzlgd8xtls37xevc22uwj2',
        amount: '99702622',
      },
      {
        stake_address: 'stake_test1up58s8mccwr482mam6kx0yqh843x79ycs7j62sdvat9vuqgfmdlpe',
        amount: '19110873668',
      },
      {
        stake_address: 'stake_test1up4ppalym00g7q452x8dj8r7akddqt28k0xgx7jekj3rgpg4r34fw',
        amount: '4486870411',
      },
      {
        stake_address: 'stake_test1upkjj8j08qxu9tgjcawt3z336v99ewklz8un5t0hllkzcgqxlpttp',
        amount: '6832162554',
      },
      {
        stake_address: 'stake_test1uphx3udg23uvvlmkvvzvv65t3rwscfd50nfd5gjmpqfclpq93wka2',
        amount: '1355452326',
      },
      {
        stake_address: 'stake_test1upcrncu7l7x9xvh9yzk97c0hsstsl3xj6s9tcwctw2lhkssue4l8c',
        amount: '10022393530',
      },
      {
        stake_address: 'stake_test1upefs48yu8k8lzfv8pqr30trc8dne6cjdkddsyrcch7n5ecjjark6',
        amount: '172241478',
      },
      {
        stake_address: 'stake_test1up6k4f98n7q44l8smw27mhs8shycgfwxg5atu3yk7tc2v5gcet009',
        amount: '1282476272899',
      },
      {
        stake_address: 'stake_test1up6eqgpwup4k6lwcfle64jmxsmg7pazelkz7uymdlyf3j8c7axvsu',
        amount: '710149694',
      },
      {
        stake_address: 'stake_test1up66myw582j3g0e4glsfd450k2f645exlkf74kdm28t533sca9d2n',
        amount: '19163001205145',
      },
      {
        stake_address: 'stake_test1up66lp0wdcxwk4cw0rundh3zlvdxepcw0n5lx2zttgjajgcejw8jf',
        amount: '559597251',
      },
      {
        stake_address: 'stake_test1upm88empv0kn0adacqe9rq27g058pmn7pf4aem6y60q3yyq7mvyzz',
        amount: '6031037132',
      },
      {
        stake_address: 'stake_test1upa9qlj5ljhx7w6f0h0k083f69cd442fqhseh08m05ucw4sx9t94t',
        amount: '2686448722348',
      },
      {
        stake_address: 'stake_test1uplqsmks8z9fqru86z0w8szc3scas3dsw0tfhpx4u9dp8esw9w7vz',
        amount: '10317553415',
      },
      {
        stake_address: 'stake_test1uzqpwtj2srj44vh3w4y3gaattl5mwplmz2slns4ehwmqv5gxmlxcv',
        amount: '1890636328836',
      },
      {
        stake_address: 'stake_test1uzq9wha36ygxvfg6gadlwjlgaddtl2whf8vp9sq3gk22clgs825zu',
        amount: '48974930',
      },
      {
        stake_address: 'stake_test1uzp80fzf6uv7v9xmcxp8ux2nreylc6mee3c5kkvt6tgep5gc5rw6l',
        amount: '149119783290',
      },
      {
        stake_address: 'stake_test1uzpfg4h2z3fa9twq65hr9ptl6627e7rh97l37gpl0g2s25g3f78x3',
        amount: '3749025445',
      },
      {
        stake_address: 'stake_test1uzpt0svqakr9vkah4acq7vfns8xaqqkyagvxl64kd02cwdgvpa40s',
        amount: '10801226763',
      },
      {
        stake_address: 'stake_test1uzpk6wpfu2w3usqxuuhgnadv3mjzuj9x5g5tlfgj7utemac2wn3ra',
        amount: '10167775325',
      },
      {
        stake_address: 'stake_test1uzryrya5tu0r08vdzxgknw9syfj44akvzsc2rq999s24uwqw63njy',
        amount: '183671565289',
      },
      {
        stake_address: 'stake_test1uzrlfgyl0e4n7djdzysxwpnk4xlsa8kevyhwc9exjmz2qug0c5acv',
        amount: '6749360108',
      },
      {
        stake_address: 'stake_test1uz9mq5wv7vt5cyu3hx5yw4n9ecseezmwm3vsfqcd72e8gsgtenzeg',
        amount: '771415706094',
      },
      {
        stake_address: 'stake_test1uzxg9mvr5z8737uy9r4ael2p6e4ktpwv80v0syfw4v8yqvg0msu69',
        amount: '13218216',
      },
      {
        stake_address: 'stake_test1uzxj2cez3jvr74sukrx5ly7dvyzld6k6j6vm0m4jc5gj86skxascl',
        amount: '553143588',
      },
      {
        stake_address: 'stake_test1uzx5jxjlt20w85zgxcxggnhq3yq9u56vexcdjffnm7yp8wcamcrll',
        amount: '3710131030',
      },
      {
        stake_address: 'stake_test1uz8qeh9f3dgdssyzdzjp6padp4pret7hvxcphf3z866r2kgxghumg',
        amount: '10402348799',
      },
      {
        stake_address: 'stake_test1uz854zsk85wn2r9f245kxzgd8j894zf7q5zkla6yx9gl5sqvnylua',
        amount: '59994675',
      },
      {
        stake_address: 'stake_test1uzffxmtg7d87tcjpkanxdpck77alhhxq9fx3kmx2esaw5sqft4uud',
        amount: '100885288',
      },
      {
        stake_address: 'stake_test1uz2sgxzlwpejajzy5657tfj26p0qwzdmq9hdtuhdum47dssz4fe8l',
        amount: '2559382596',
      },
      {
        stake_address: 'stake_test1uz2m3q8ksj7pazhgjf0he06sx5ddhtxxzkhvcrd78pzxymqg4kcm5',
        amount: '48736637',
      },
      {
        stake_address: 'stake_test1uztzf32ecxhxem5mmye3zrqc06fgzc0kqwzu0x7jtwa35hg39yvnw',
        amount: '13966983581',
      },
      {
        stake_address: 'stake_test1uzt3tszufvtk2gjnh5nwudf438weeca2qkaevh3mhxy8nnqwqvq3q',
        amount: '9446537174',
      },
      {
        stake_address: 'stake_test1uztcx3af25tdkzzd3693lqtt8cw9ss9p4zvy7muv5tgcc6swhs8ps',
        amount: '27185540',
      },
      {
        stake_address: 'stake_test1uzvqqnl5uha9vjgvlt47yz36h2jlw5zmuh8mte3mv440wtqqx0k7c',
        amount: '85711504',
      },
      {
        stake_address: 'stake_test1uz0wchy57pu54sffvkfusdlu494c4su5c3vg8muwn5n0uyc27h0et',
        amount: '11537266968',
      },
      {
        stake_address: 'stake_test1uz3hc28rhq6rd7mst48d2fww34v0qay2rt6285cpvmpdecgsfm8zx',
        amount: '112955563',
      },
      {
        stake_address: 'stake_test1uzn06ltf9w6g86dxwaxutpm72w4wswj9qn2j2h94hcvsmhqjxu059',
        amount: '13276550784798',
      },
      {
        stake_address: 'stake_test1uz4q2smxwqk0u4d8679az939z3mf2ww35yhlw6rf9hp4rrsp07sqd',
        amount: '11546427',
      },
      {
        stake_address: 'stake_test1uz40uegpay7a8cw7t34tp33zheu3khj8jhvjju8j5y74n6qskl4tf',
        amount: '10198975538',
      },
      {
        stake_address: 'stake_test1uz4u5q5q52x5r8xlmmv8t0qr8499jn4m052uftlxy5mkt2smca525',
        amount: '10224476777',
      },
      {
        stake_address: 'stake_test1uzkr53matg36w2vx46llqzgpsy7yx8j5k66l4zp35t0455qnwnqft',
        amount: '21125398392',
      },
      {
        stake_address: 'stake_test1uzkuh0hqftqehkrmfuftf7xn9hmjls00nt032twj3z5qg8gtlv36q',
        amount: '10189506022',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-1-best-pool-ever_236a8c875e08',
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',
    endpoints: [
      'epochs/71/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=1&count=2',
    ],
    response: [
      {
        stake_address: 'stake_test1uqvqu9jrzywh8qyz0ey4dq39vdfg6wvrg5vt5mru88s62lgjj5jv5',
        amount: '1000000000000',
      },
      {
        stake_address: 'stake_test1up4ppalym00g7q452x8dj8r7akddqt28k0xgx7jekj3rgpg4r34fw',
        amount: '4480761316',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-page-2-best-pool-ever_165bc9d8f176',
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',
    endpoints: [
      'epochs/71/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v?page=2&count=2',
    ],
    response: [
      {
        stake_address: 'stake_test1uz8qeh9f3dgdssyzdzjp6padp4pret7hvxcphf3z866r2kgxghumg',
        amount: '9997825699',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-pool-queryparams-generic-new-old-and-expired-pools-without-active-delegators-for-that-epoch_eaad20357f6b',

    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',
    endpoints: [
      'epochs/10/stakes/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v',
      'epochs/82/stakes/pool1dt5t2upg4mppj9y9trh6huq2qm8rcl86pqk6dmk04kfjg4e8ga6',
      'epochs/10/stakes/pool1z063uemr7k9zzg95ymz0gfqnfv5k58et8xrnk6ynfyqdgjjw0e7',
      'epochs/74/stakes/pool16lk5fgc4zfthjza8fardhmj4jn2tcuzc2558pterlw4gykhsnep',
    ],
    response: [],
  },
];
