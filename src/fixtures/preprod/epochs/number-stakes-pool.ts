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
        stake_address: 'stake_test17qudzeu5wwrrdnlcaz28yfsuls2e2r0k28dpex4eka2gjlsxe5nt5',
        amount: '0',
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
        stake_address: 'stake_test17r22usgxx2746ga3dqn9cyenr9yvwm2yn4sfyype24kcdtca97ah6',
        amount: '0',
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
        stake_address: 'stake_test1uqqpkk4xgnj8g9ajdmc95djdscax3q542cegys8r0pewk0se5nxss',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqqvmjnletx9zcenwput5tykulw40l85rptgv9ntk9nktzcuvqr25',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqqcgs0zrh6w8rnjlqnvfr9gu4h6unrrgprhg52y57rgshgr4uc0j',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqq72lunt5nl3nsqlmrsget0y60rvpve3z3j2kv38kjn38ge2x2vn',
        amount: '0',
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
        stake_address: 'stake_test1uqydmw72prvyv76fhn8d7scs4t407ftnfvzktpl4fat58nsfq9uvu',
        amount: '0',
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
        stake_address: 'stake_test1uq8ml4apld0kn62jj2f6zhh64cfs75fl3ljeqyt8fkv6sqgjj75ws',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqgjpag67q7e8xcd0n9t7f3c6pkmpztv56yzefrhdsuc4agrmjrjw',
        amount: '10130709365',
      },
      {
        stake_address: 'stake_test1uqfdm0vp8vmvfq4zee0l5dd42ddjrps3l4uy5m7p7wkpggquqv6cq',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqfnku625y8r9dkm38ezszu64eu5eapckk6jawmfygs4y0gdcz0nu',
        amount: '4545330403',
      },
      {
        stake_address: 'stake_test1uqf4xx7qd529he7gytgt45c7wad2wr3yunldgtalql9lewqurhmm2',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq2xdqt588yx7pqgzcmjka4rd6sz8nnqgnszyjxjyl6xj2g40g9m3',
        amount: '7902109',
      },
      {
        stake_address: 'stake_test1uq2f352ha0s0283mf2tymzh0cxcux0d9p0vaq52scvgg6pq5q7dys',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq2s3epgcpu26xrnttghyq393l6qj2l0typu9mtqmee73sgs0sddk',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqtyp55t423u53pvmaegk2x4tm7nfu7zrl39e63cpsfvqsszyutlh',
        amount: '0',
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
        stake_address: 'stake_test1uqdpkphpfyy2s54ygtr5sul5dqhv9sgz4tskvfykp5rprjgwnw7wr',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqdfg9auhrqwej8hepkd3227gdqpn4tqqre7q6kq8cjlefgkcmhzx',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqdtpjug03qfcwt5ftgyfrehgf42jyvwnqtkr4s3u5g57hsqqhlum',
        amount: '9886974504',
      },
      {
        stake_address: 'stake_test1uqw9a50dyxjzrf0m65a4qjzvna0xeux69r9e6lq37qxacfc5344mp',
        amount: '0',
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
        stake_address: 'stake_test1uq00vgwl8h6yyude0m5r278gwh2n9n357508a8zyvduekkqu7v8js',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq0754fld6xump3d4frkvdwu98ldxwqx4zju6h2tstsms5ceafj4w',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqspxnk0xps2ya6vantnaeck7gh4vcx7q3kxkm7sf8wvcusu7qp0w',
        amount: '102901351',
      },
      {
        stake_address: 'stake_test1uqsp7jvg3t7m5x44tep0k8eunn7evycqxkefzd7ulx7zxccjqjfkn',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqs5yugey346pgthas9vf6zsjkzst7dru36x84hcvumu7psdhttca',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqs6ljurpgg9x08c394yjqhee8ys0yajp0eyf5a70zl5e3qld8e84',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq3ga3efqs3hgj24wdtgjex88x2njsuvsdhrqdu0qr2yqaq0ztnzj',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq3vaju3pweqmk3cs7lyt4k4nvz0pjesdkdjd4p35pptkeqysqlc4',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq3d8sjv7656dhk0hgkjkye9muypx4x7wddg4n9vyt5v2sgsurxp3',
        amount: '11006940',
      },
      {
        stake_address: 'stake_test1uqjqumuyrw6ev47zgvez0wregvat5sfrj99nsdq0rth04ks3sf5xc',
        amount: '0',
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
        stake_address: 'stake_test1uq56tmdsga5k7fhnv2elvxs3pe0af7xsv8x92y9pk6h5rycq9arhc',
        amount: '0',
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
        stake_address: 'stake_test1uqk48w7lfcmxau2dmvtenhpxfvmyzgdze9n5n89hua6mhaqhgjk20',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqkhmtxczplqfawfqaeardqx5lcxj496wsmfklt0gvcq80gkjjkw7',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqkepk8tjjqj76h2eduaukwnzl9ypmxgdhw225kknc92gvg6eh5r9',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqh9fwp78e0qteaxw63f25gvzlc8xyemu9qc6ppy5hmalzs5cfck5',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqchnl0mfan8jn39gylsyq6fw5kym45f7jh6v2rd5apcw7s9cxla4',
        amount: '4513515900338',
      },
      {
        stake_address: 'stake_test1uqet2d74rpze8p7hh4s54q8z0n3enk3w7uqrrj7svd4u4ks3eagmk',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqempwsv82ddpsjrvnntj2c0sc39lwds69fdrry0jet9s9sf50tfr',
        amount: '1123045408',
      },
      {
        stake_address: 'stake_test1uqeugja3uy0ukqfw9k9vc8uy69drds68e8z7t24kg3l2g4cunyykf',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uq6wm69ywmrl0fl7ddh7jprnggjrmx62z877x06h7xfgz2s6f9dar',
        amount: '10097671070',
      },
      {
        stake_address: 'stake_test1uq64z20je7jpzqp4mywpft0468s4t20ej9qz6spn7p5xqtcz8ggxc',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqmq0uch3r4eqdmzwxlssffzlwme7pw0v2pgc7pf2r7zqmg4cn7za',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqm3s7c7nl8qzwnmp06cz48m04ezq7pxqk0twkzaructxsskcgayu',
        amount: '515580064',
      },
      {
        stake_address: 'stake_test1uqu9335x44jy8ckrwvqngvvlj8fcehrvc60fjem35s7s7es0uld9q',
        amount: '0',
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
        stake_address: 'stake_test1uqlen3wr6528xm6ja4yqrw72y5c9es7hjmtqzhmdls3g5vqah95w5',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uqlmz0j5a0f6pqt98s6rcgj0krpe2rjyf8twqj05humfq4qx9vh8e',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upqzjdpk59cw6mn7mcn5c2f3qs2vur4jp6x5gwpr3lf66nc69sjr0',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upq47me99y9zn3xp683p8ctl4z6meadl3tqk24r00y9cg7cwqpr4p',
        amount: '0',
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
        stake_address: 'stake_test1upry2wfdr307a7p68hcj548redm862tlxhvetpm550f7lkqz0z2k2',
        amount: '0',
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
        stake_address: 'stake_test1upyf4hljjug3ght30vpmh55zn4lnhgn3c2g7ecujq97fcega402ua',
        amount: '0',
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
        stake_address: 'stake_test1upxqtmyfpr5epv3nrhg5p5hw0fx5aq5kqnlge95z3gslp8qk2wrev',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upx46ckfgyle2p5jdxr2cjs8vj6g47uyyj2yplvqzrcwkcqrv94f7',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upxmfus7k2ngr4ahc665uvpugfndt0v58raq94tqkm45ytg08e5ld',
        amount: '0',
      },
      {
        stake_address: 'stake_test1up82ha8j7va6dcd9jj3mv7zjyttk3u6ue43aj7t3tw8x3xsvusx0h',
        amount: '0',
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
        stake_address: 'stake_test1upt92evfqg500m3rzs0uyvv4kqvxpg8c20x8k4epexlsdxq7ms6er',
        amount: '0',
      },
      {
        stake_address: 'stake_test1upt4t6kje70vj8twmauu7nz9dpf3ccxn49z2z5tx6rjmkuqpvml6r',
        amount: '10285820964',
      },
      {
        stake_address: 'stake_test1upthd5u9g45mxthrx7afqqxa7mfde54249c4sclh8g4gh2cg9zq30',
        amount: '0',
      },
      {
        stake_address: 'stake_test1uptmhzuke47cupj8mxd8z3zhzfhvuy708t2r6sdt33wcanqjlu5kh',
        amount: '10222289135',
      },
      {
        stake_address: 'stake_test1upvyx7l2edkdh87fewdzqkxpma2jzranfhjx26xf36r8sfsxs8fmq',
        amount: '0',
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
