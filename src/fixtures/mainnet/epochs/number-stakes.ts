import { getPaginationFixtures } from '../../../index.js';

const paginationFixtures = getPaginationFixtures('epochs/242/stakes').filter(
  ({ type }) => type !== 'order',
);

export default [
  ...paginationFixtures,
  {
    id: 'epochs-number-stakes-generic-shelley-epoch_c1b766ad325c',
    testName: 'epochs/:number/stakes generic shelley epoch',
    endpoints: ['epochs/242/stakes'],
    response: [
      {
        stake_address: 'stake1uyqqqj9kvqnnc4t6qt39nj5sdr5tpae906cejuyjvrhpuvssqn32g',
        pool_id: 'pool1qqqqqdk4zhsjuxxd8jyvwncf5eucfskz0xjjj64fdmlgj735lr9',
        amount: '648135347',
      },
      {
        stake_address: 'stake1uyqqr23f3gvakvuneaxgc2009zvztuattzkuufq2qnzvw9snvmd03',
        pool_id: 'pool1myvgx4ef424e6nw2strqq7dxcepav52plyyhxrk0avaw7y098l2',
        amount: '1784786398',
      },
      {
        stake_address: 'stake1uyqqrsc5gs3fay9nvewsrd7xzlgslwmw0jrqsug5k78x57cl6hnmk',
        pool_id: 'pool1afv4cmmjdkujtd5r9t63090a3frwwqy8f3e46gz003vyzjcj63r',
        amount: '673648067',
      },
      {
        stake_address: 'stake1uyqq9fy0vpypzh7vsu0xutnh3t9rt887vxy7mcg7v3faz6qethxnh',
        pool_id: 'pool1uk2f28awascuhrhuwrp7x6y87x8ch33vwx8jtmrysp7l5ngq78j',
        amount: '4562159929',
      },
      {
        stake_address: 'stake1uyqqx5v0f49c8rgymszw9gdgrea9yanhrk5fcg9ymgs2jnctyyj94',
        pool_id: 'pool104re5tajgh4mpp7c744khap56lf609cfjlna5ysjkum8qn8fel9',
        amount: '60215600669',
      },
      {
        stake_address: 'stake1uyqqgafwk7k54nludepv0kz9sqp8kvu29xg70scafurc0ncgcst7e',
        pool_id: 'pool15wkxegrfflzcyhurrjxsm9ljqtz09xr5rtnqsarnp7hmsz5um3t',
        amount: '2394340',
      },
      {
        stake_address: 'stake1uyqqg7zqfzh38je3hmszkhgx7pjmxxypept8rus8rzs8pygcw4kf2',
        pool_id: 'pool1ynxx88cq0y8vg8yrq3jrw6epm7rq9a8859v34sq9lzjy7ztg90u',
        amount: '808745177',
      },
      {
        stake_address: 'stake1uyqqf54egtkt6sszpgn3x2m8m5lgq3e88f7d3myx4gn9vsq3sjht0',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '1182052579',
      },
      {
        stake_address: 'stake1uyqq2a22arunrft3k9ehqc7yjpxtxjmvgndae80xw89mwyge9skyp',
        pool_id: 'pool1wxn9nsl8rvxa6r8e5eaak0ml6etfxnz2n9vqrmsw5nzgyexgkrn',
        amount: '1083402761',
      },
      {
        stake_address: 'stake1uyqqtzt22qg0d0vfzv96608m7fhv66j7cuulm9sgcqd7zasslsxzx',
        pool_id: 'pool17rns3wjyql9jg9xkzw9h88f0kstd693pm6urwxmvejqgsyjw7ta',
        amount: '254736946347',
      },
      {
        stake_address: 'stake1uyqqtuwtdxg5ktzmc2nfcjfpwa33xhje86rp2x6g49r7g3g3xxqu7',
        pool_id: 'pool1j6zqawj6f58lp4p00t26eqe58gxx4pa3cudlzpkv23y92nlxjzd',
        amount: '300409073364',
      },
      {
        stake_address: 'stake1uyqqv2yjr6ymktjdmf39phx87jflkyt2zyqf2nygdhjn07cq4wdq2',
        pool_id: 'pool1ynxx88cq0y8vg8yrq3jrw6epm7rq9a8859v34sq9lzjy7ztg90u',
        amount: '311487474',
      },
      {
        stake_address: 'stake1uyqqvlluuzqvge7347hyhy43nrmqvzqnmwxfzp8rx886psq95fh0t',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '344059000',
      },
      {
        stake_address: 'stake1uyqqwf3gr0eaw40wh9ph78456zzluuzrh8vtf39xmn4ff9cz3435f',
        pool_id: 'pool1s79cqtwk5s24lcske704ckx7k2pagn8hc95rxvy3xfda6r62pg9',
        amount: '4358706679',
      },
      {
        stake_address: 'stake1uyqqsx2nc6zjujxtw0dtmm8v9fhcadx88jly8kqem63jgdcay4mv5',
        pool_id: 'pool19w5khsnmu27au0kprw0kjm8jr7knneysj7lfkqvnu66hyz0jxsx',
        amount: '144705873521',
      },
      {
        stake_address: 'stake1uyqqskl6r95m53nycsl2mq2xc3a62ta47pdv39kwfzy24nqyt42td',
        pool_id: 'pool1xlphlhnjvfeh40vcqf9fdewztsj6kyxq6604kaccpv00umjfu0d',
        amount: '3446806122',
      },
      {
        stake_address: 'stake1uyqq34q8tt3xpw4szyvyq8j5fwydn83lqkz3jujldfeax8c5ak28u',
        pool_id: 'pool10akpqvczl93ep4rc59c0aqyn3dm0env2ydysuwmdm670wl24pd8',
        amount: '4664489996',
      },
      {
        stake_address: 'stake1uyqq3hk9mznu9ctvzwazmfsr5azvj6efxg3az0jnl4xgptq965mzk',
        pool_id: 'pool16fyda57p3c8gp5r6gmcq5tvqsp6mnzwvkxswgznkuh8wztrp6vv',
        amount: '95032712',
      },
      {
        stake_address: 'stake1uyqqjqc44njcakp0zzl0h2y8nx03a47d8l5d9rhphqexw8cnlttqt',
        pool_id: 'pool1uautzneywzapn03te7q3sd737xdfejgjlu4mdfjz7mweq92dugg',
        amount: '1007155773',
      },
      {
        stake_address: 'stake1uyqqnz8ae9rcj2unmgjn9rskmxg3k3u52n8w9pa0ldvczzcjyflwr',
        pool_id: 'pool1smy2r8jdvgna5ykhe8rrch7h4qalyfafyzyh0rmanmq0jxptww7',
        amount: '36918457899',
      },
      {
        stake_address: 'stake1uyqqnvev9fv32crtpr04h6djzq52fystumqyk06tgny2pqc9k2zvx',
        pool_id: 'pool1qqqyv9pn9typyqwcxqk5ewpxy5p27g5j2ms58hpp2c2kuzs5z77',
        amount: '104312',
      },
      {
        stake_address: 'stake1uyqq55tflgplgttf6pa7s6dqe4s56tmwnjwrgx0patqemlgj3jd9f',
        pool_id: 'pool1dxwgzj66pual956mnv9delkelg873yvgr2dd8s279m0hxqvr475',
        amount: '71305301780',
      },
      {
        stake_address: 'stake1uyqq5essh2lanrx9f39drqmxl7jlzk0tnejws5mht666wmcwm6qnh',
        pool_id: 'pool15wkxegrfflzcyhurrjxsm9ljqtz09xr5rtnqsarnp7hmsz5um3t',
        amount: '2487125828',
      },
      {
        stake_address: 'stake1uyqq5lzgy5eds9xymnjj58hgrkl06phvjd759tcuagw89ngmtx9zn',
        pool_id: 'pool14enw2643rn9nn6yzv60jyz3hj4kxs0jvap87lkgsqykh508jxm6',
        amount: '1626005850',
      },
      {
        stake_address: 'stake1uyqqhlceeq54xhx7ujmczxv29cc9n6m4zal5vlnyd2zthasmq6auc',
        pool_id: 'pool1jst7rrhucnp93hepezv5yqy6fx982xs2v0udwfc5ea6my3kfak7',
        amount: '24388301',
      },
      {
        stake_address: 'stake1uyqq68rsvfmceggwx0yg87aykuyr29ht8vzsvestedrpc8gtwthxr',
        pool_id: 'pool1kkfkdces5mdcyc9dn2hgg3463jggjvw3h89nejjarkz25uavaqu',
        amount: '37238475014',
      },
      {
        stake_address: 'stake1uyqqmyurghmlyaf9cyqukq4ruhhcserzjageujalt9cnvqczv928x',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '53770957744',
      },
      {
        stake_address: 'stake1uyqquwmqzsg3tkcjwyj59jwpgu2mcefnyp6lxf6yxrt906g4jw8de',
        pool_id: 'pool15wkxegrfflzcyhurrjxsm9ljqtz09xr5rtnqsarnp7hmsz5um3t',
        amount: '5418758072',
      },
      {
        stake_address: 'stake1uyqqu3r7s05zjzp0cfjevlucyezj9zxhjcz47mz7aru562qr2fxr2',
        pool_id: 'pool1jst7rrhucnp93hepezv5yqy6fx982xs2v0udwfc5ea6my3kfak7',
        amount: '12468743455',
      },
      {
        stake_address: 'stake1uyqqa2qra7c2zlmcav8sdnnpfhy4d3hee3k8jt342fdegwcv8zxtw',
        pool_id: 'pool19r8kcmqpajlm6h5q0lv8jye0q7evdur39wfsgs4z98fcqpz9lct',
        amount: '93275781449',
      },
      {
        stake_address: 'stake1uyqpqar52qqytghe2vsdedkvewl6phc8a46vknzn6eydrzqyy83ds',
        pool_id: 'pool1jdhjfcu34lq88rypdtslzwyf27uh0h3apcr9mjd68zhc69r29fy',
        amount: '40588668094',
      },
      {
        stake_address: 'stake1uyqpp8avw8vf05sm2caxydh7jpltzn5fenpfsp52r5hh6lsm4d3cf',
        pool_id: 'pool1dxwgzj66pual956mnv9delkelg873yvgr2dd8s279m0hxqvr475',
        amount: '16227389314',
      },
      {
        stake_address: 'stake1uyqpzsurq6ftza2hdvqg84e84qykgtdmneukdl23wj2jteqnx0z0n',
        pool_id: 'pool1jst7rrhucnp93hepezv5yqy6fx982xs2v0udwfc5ea6my3kfak7',
        amount: '817907744',
      },
      {
        stake_address: 'stake1uyqpyxpnd06e3flxctq7fs394wu2ulhamltuzhtgxgrwgrqqe95ql',
        pool_id: 'pool1jst7rrhucnp93hepezv5yqy6fx982xs2v0udwfc5ea6my3kfak7',
        amount: '964936245',
      },
      {
        stake_address: 'stake1uyqpy2q5e4j56hqrxgpa59upurk0f076ef0nk5n9r5lha6grn57jn',
        pool_id: 'pool167n02n48l5hfgfu6e46xq8n3yefccm9dcnmefkmxuymhc8ncrjm',
        amount: '1593874436',
      },
      {
        stake_address: 'stake1uyqpya4lwc8300j920pwk47flugvpwrkk2nct7segnxm58gyh2cpq',
        pool_id: 'pool1jg3fmnmc9n52sgzslhhvhye5e3xeqmrwkekdhh82sma47r47zg0',
        amount: '4712075216',
      },
      {
        stake_address: 'stake1uyqp9vntuxn5jnf4gf88g702xm6ul3djrvra87x3qkdw7zs3alxtn',
        pool_id: 'pool1zc7vxe3ymyej76h8wu8gm79chtt7w9c3adkza4uhrjvagr9w4zp',
        amount: '66312850706',
      },
      {
        stake_address: 'stake1uyqp90w93y854mxp24g807kr9vg42nhrepcsenpzs376xcccmp75w',
        pool_id: 'pool1x2h98z6e5xvrg5zw3v3dlu8hqdtj6lhp6r3w5ge7rvcqcx3pafq',
        amount: '8557687',
      },
      {
        stake_address: 'stake1uyqpxwcesrqeyxv5fduv8437hy229xrp4l4uwgek00t28yqauwag3',
        pool_id: 'pool1lkpj6fa4l0sy39qfvyl4pcsnnd22y8np8j98vzwula2kuxgers4',
        amount: '484770820',
      },
      {
        stake_address: 'stake1uyqpf4ldyw52h4s2aks8e9es4s4pchhphtpyls05ux4s9qgms3j4j',
        pool_id: 'pool1nudasuv0lljpe0tswcverqvlh0v4226vgnpsuxn0e9nkvnvcvne',
        amount: '31625221897',
      },
      {
        stake_address: 'stake1uyqp2xngqm42tdqrfkvnug6nrmt3x2ug5jmynjyrdcprnkgnakdce',
        pool_id: 'pool1jpz5m45ff4r6tnq7n5tw63fkhpmw3cyv8sn569w24x8lj3kl68c',
        amount: '237759814882',
      },
      {
        stake_address: 'stake1uyqp2fdccux0w4a8hfm2wnxtq86pr66kh9gg2sz6wulet5qev9tyu',
        pool_id: 'pool1k6knum588fm9fe5tmljeytyx65rv6h5jn8au824t86zt62nyd9e',
        amount: '49672499556',
      },
      {
        stake_address: 'stake1uyqp2dqxf22ndzu6h7fq2wzdp48sqs5pjl7x433j9amhugqhmw5uu',
        pool_id: 'pool1gclysx2h7fndj0jdajlmwvqr8q9tzu3rurjknacu0ff954fsg9a',
        amount: '10625562123',
      },
      {
        stake_address: 'stake1uyqp234k2rc6vyahkng9c8lkfuhkc3s98lu955fa9fg9phg6sne5j',
        pool_id: 'pool1ksazs9mzcuyr3mfrvw48dc5wkgsjceztakymmv7jpxle7l2nfs0',
        amount: '10155774408',
      },
      {
        stake_address: 'stake1uyqp2e3kcf78atcju4mdq00k9hmyjf6sdvkts4e67x5z9ns5qchxe',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '163905763',
      },
      {
        stake_address: 'stake1uyqptz947hhvgvvhc063cf560l4gweyspaa8fyjrvs0uc2cvufe4a',
        pool_id: 'pool1lvsa8e0dw6z8g2fkw7prnfa7627wuy5jjexaadck6w5sxw5xkvm',
        amount: '2023833891',
      },
      {
        stake_address: 'stake1uyqptvlxul9jju6myrje3t2qctvflmjz88p8wf9qhwnncwgrkjwgv',
        pool_id: 'pool1jeu74g86ys4fekhykqcww99kdsq3nlym8a6kfw8s8ff3vskad70',
        amount: '277825567',
      },
      {
        stake_address: 'stake1uyqpthxg0trkrwcex8259pam2jpqnhu2pnydt8tshr0rcasqrksdw',
        pool_id: 'pool1ksazs9mzcuyr3mfrvw48dc5wkgsjceztakymmv7jpxle7l2nfs0',
        amount: '15148316545',
      },
      {
        stake_address: 'stake1uyqpwqw523vszuwv2vzvxwnd4ed7pze4eq0nxhwwk60x3xs8pzhqd',
        pool_id: 'pool10ljdn3zwsh7vjkxf6t250423l5qy487x83st7m8a53jxznrkw5g',
        amount: '12737205081',
      },
      {
        stake_address: 'stake1uyqpwupqyn9g08h42f2qncckr0xadyv20tzjq2cexhl4knctjqy8u',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '753037',
      },
      {
        stake_address: 'stake1uyqpwlg2djufkde6w32nznq2p9w0jyz0vkzmf6m9r97mc9gn22q59',
        pool_id: 'pool16kus5xvdysgmtjp0hhlwt72tsm0yn2zcn0a8wg9emc6c75lxvmc',
        amount: '1000204228',
      },
      {
        stake_address: 'stake1uyqp0czfwr54anjwnmgnz9m5dm3k02tcv7quj33nsnunhjgjjw3em',
        pool_id: 'pool1qvhss6kxmtl27nr4ugvypayhvt4a4vzll8p9csdg2v8q7d22llu',
        amount: '8144998120',
      },
      {
        stake_address: 'stake1uyqp0l470pfghpdxw0y8rk47zxuem7axxk3e3tlf5f6mnjqrfrj7s',
        pool_id: 'pool18rhzlrv83a7ygj7cp5uv8dx07qkn5drhe8nh6f3qvhv66xcyj2m',
        amount: '90998310914',
      },
      {
        stake_address: 'stake1uyqpsd0ue8v20px4fcf586my8uguwrq4uywxyxlql8qhnpgd2u3wv',
        pool_id: 'pool155cu3s06js3llfh07vnzepatfuvt3s5s7uwldt9rzz55wz7pugt',
        amount: '202396705685',
      },
      {
        stake_address: 'stake1uyqpsdmrnj7qtcwy94tvvavl0r4yvgagxd5qd3zj47ak7lg0ha9ew',
        pool_id: 'pool15wkxegrfflzcyhurrjxsm9ljqtz09xr5rtnqsarnp7hmsz5um3t',
        amount: '7543859909',
      },
      {
        stake_address: 'stake1uyqpndnp4dr6k3ys4uhdntqq45aujfc78qpyvyt9dyhlgkcrr0vgr',
        pool_id: 'pool19frt3kaxxk4vr4x3wnaapntu0ul0dsesu77wfqaawc5h5ffgfgt',
        amount: '1260572570913',
      },
      {
        stake_address: 'stake1uyqp5px7707d5kwywv3ggfcg43v37ndpefxv59jflg8vwwgr38gfd',
        pool_id: 'pool18hkq2t8ss45h4fkr92f52flhc4mpzedx5mcz4xhnpj0dzp76028',
        amount: '18059051',
      },
      {
        stake_address: 'stake1uyqp5k0jczfuy7cuk56xu6lkjzac02palx084vwzpfvmvhqmhd4un',
        pool_id: 'pool1lurfk0k0wwx54hlg8a7zp3jtstu57u59aeq7aketl55hknmmtu0',
        amount: '39814372',
      },
      {
        stake_address: 'stake1uyqpkpu8at9gcnculyc353nvlv6fgyezx6z33ssnur9lwzckvqr7y',
        pool_id: 'pool1vc8jp7uagxgh8trzx7r260ndcydz89ges8sws05cyv7jj8q8gqs',
        amount: '3112757163',
      },
      {
        stake_address: 'stake1uyqpk222tkyjteluftq7azfrtyjuwgkpatdl5a8eps05krggf2yyz',
        pool_id: 'pool1crprz3rdcwvfxmc0s4gxquh3qeqmscww2qfvpl93q52yyn7agsc',
        amount: '9674945057',
      },
      {
        stake_address: 'stake1uyqphjpm55alyz06ufj5cd8h4qu5s7lk6j0re9jgy6x603g27dm68',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '2064636579',
      },
      {
        stake_address: 'stake1uyqphnyez6psvgf89glh6a9z2jx3x53xxpha8rszkaldnrc2rurg0',
        pool_id: 'pool1rpjjz68kmmetyxztmrstrwgz8lxf6v0d7vqgw98r5x8rc50jrdf',
        amount: '277469275',
      },
      {
        stake_address: 'stake1uyqpckuw0rx9xy0ds6c53085cw7l3k9jnj7wmm8cr4s867q79we2c',
        pool_id: 'pool1pshqcksxywy68lt04lw6uf35f4yssekh5dx2mxqmyrukke2z5y3',
        amount: '5000199603',
      },
      {
        stake_address: 'stake1uyqpekxflwz6a97cm7r7rfqr5zwfscpaahwt2nat3ymxghsgszypq',
        pool_id: 'pool1g3ssnndd8e7lcmstkjl9ane9mup0eshv3aklg63u5tznwl4ch87',
        amount: '4642944717',
      },
      {
        stake_address: 'stake1uyqpe7uxznhlu8ax9p7vf22d4q0qyyyh2p7p550g2700lvqr837et',
        pool_id: 'pool1spus7k8cy5qcs82xhw60dwwk2d4vrfs0m5vr2zst04gtq700gjn',
        amount: '8699186202',
      },
      {
        stake_address: 'stake1uyqp66zs78ce87t4jqxxdqas5mxc784fzenjgy5dp7ktfwqvf3c9r',
        pool_id: 'pool1lhz4gsk5ezdl5s4mv2kxgrkhzzhad6me2v0xmwuyt845vensdlc',
        amount: '273176299262',
      },
      {
        stake_address: 'stake1uyqpafmrcdp2m46aqrthql3hvtuvjja2n2v9vjutp4325dcgsh8dh',
        pool_id: 'pool12jnulzs7j8lsku4r2a7q6tee6tt66872vwhqh8jxvgzn6837jtl',
        amount: '499310516519',
      },
      {
        stake_address: 'stake1uyqpa3prwcvkmu9ctd4dvc88gx080dgmzm763wf364v4vtswn6fju',
        pool_id: 'pool1qqqqrwzy7njvjq9wph7usj5gghm3py9c97688ek8pgc7uem9cfz',
        amount: '1033712074',
      },
      {
        stake_address: 'stake1uyqp7cnj2xay8y2xy5evg63ac0kzhgfu70ne3mg8jgp2z3c7jn0nq',
        pool_id: 'pool14skj6e4rpjanzclx3fc880xnl8xafgg63tmw93t9xspvwx985qu',
        amount: '597244165',
      },
      {
        stake_address: 'stake1uyqplvt34zr9r25k0ndsgc0gv976mk7gf6lrtl947lvf68smj4vt5',
        pool_id: 'pool1xlphlhnjvfeh40vcqf9fdewztsj6kyxq6604kaccpv00umjfu0d',
        amount: '12411260689',
      },
      {
        stake_address: 'stake1uyqzq2286sc3zguqm9jh05xwg98lefuh02wwhdzzlkwjpwqjesgn2',
        pool_id: 'pool1num5a9mvz02pncerh6d8xdcvd7474l9p44jkrwk8srzz7563yrj',
        amount: '2358285159',
      },
      {
        stake_address: 'stake1uyqzpkwya73fqqkwffg0njwnepv05aa5vfyc0f3986t8mecvzj3vu',
        pool_id: 'pool1x0qm7xsyh2za3ltprxsgael544je4hg8tc3q3v5gv232z8jt4wp',
        amount: '3043326601',
      },
      {
        stake_address: 'stake1uyqzpc2c0evuljw6j5s706jhkqldte9x886t6cm8ud967dc9230c6',
        pool_id: 'pool1qqqqrwzy7njvjq9wph7usj5gghm3py9c97688ek8pgc7uem9cfz',
        amount: '669448',
      },
      {
        stake_address: 'stake1uyqzr8z2yp9t5xua0zyur9lggc9qpknusptxaa0ngelp0wcqyk0ym',
        pool_id: 'pool1ksazs9mzcuyr3mfrvw48dc5wkgsjceztakymmv7jpxle7l2nfs0',
        amount: '35240958202',
      },
      {
        stake_address: 'stake1uyqzxs5dz05chtwhvypfe68jguxe0tt4f9lrsn0easm3z6cp5gy8t',
        pool_id: 'pool1y86v7u4544ts98g6d34nwz75d9llejardpmqz40rnufwkmmpjef',
        amount: '17982830821',
      },
      {
        stake_address: 'stake1uyqzx3rmd5xjrlk9w7dlskzxtvzpu2yw68rqxdxlhsav8fs2jycls',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '976355714290',
      },
      {
        stake_address: 'stake1uyqz8rrn22xu62vmatpvutrmuxs040mf2q7tzzhpdd3cj0q4ttztw',
        pool_id: 'pool1qq2vm2xpcj9kf42z4cnw3djancv48sx42chwvgxkjq85ceu8k0x',
        amount: '293854103',
      },
      {
        stake_address: 'stake1uyqz8mv8zwwlatp9dcc403yjrthf2wwh9jsw8vt83yz7zmcllzcgj',
        pool_id: 'pool1s79cqtwk5s24lcske704ckx7k2pagn8hc95rxvy3xfda6r62pg9',
        amount: '559625567',
      },
      {
        stake_address: 'stake1uyqzfkeejm5qm7t4ulewshvcwlykr50vcghz8ugtt6ydk3cw4xlyf',
        pool_id: 'pool1ekcsyzwexl7p2kwxxh34hy28l6772vrmff7jwmuxsa6u6fzty9z',
        amount: '200266675',
      },
      {
        stake_address: 'stake1uyqz23wv69kcrcsz9zqyn530pfgv87l4yr8j5grve4mktlc7w0r4w',
        pool_id: 'pool1ksrg8a964464las0ymw88slrwxkychjz9lh09lqltu5m7nw3pq0',
        amount: '2720465',
      },
      {
        stake_address: 'stake1uyqzvqn5hwujrwsd0tcs7uzgcmz9vlshjg9u76ke4p3pzhcj7pky6',
        pool_id: 'pool1qqqqqdk4zhsjuxxd8jyvwncf5eucfskz0xjjj64fdmlgj735lr9',
        amount: '3247261459',
      },
      {
        stake_address: 'stake1uyqzvr2tztkfyjdp4dv54y6uuar8c9gmuj04lh3ruqxp0ccdvxewu',
        pool_id: 'pool1ccr56kt2f5tzjvztlkf8zhkpvaawkduwfye8ydsk646lz0m4h5x',
        amount: '11404225479',
      },
      {
        stake_address: 'stake1uyqzvrhvuef0t3qfan5043c9ncm88cal4apwmylyqlk68fqmdhdhq',
        pool_id: 'pool16hs0jxw7h6pwg3ru7rcq3yvg4csj7lhmcpj68kqem2sh5nt8mwk',
        amount: '1406226016',
      },
      {
        stake_address: 'stake1uyqzdt4gmp8vhljjc26yjgawcjz8wql24krz5la4sxrwe6c7gmnq8',
        pool_id: 'pool1x0qm7xsyh2za3ltprxsgael544je4hg8tc3q3v5gv232z8jt4wp',
        amount: '10908152058',
      },
      {
        stake_address: 'stake1uyqzwcpmyn7tdw46fap26yxu5gntasfulzsh8gz722pfwsch9vdyz',
        pool_id: 'pool10akpqvczl93ep4rc59c0aqyn3dm0env2ydysuwmdm670wl24pd8',
        amount: '19357422477',
      },
      {
        stake_address: 'stake1uyqzwea9vvtzlhxe9xe2exnpdykdgp9t6a9js3lmx3wj4xspa2jjl',
        pool_id: 'pool1qzlw7z5mutmd39ldyjnp8n650weqe55z5p8dl3fagac3ge0nx8l',
        amount: '18021605745',
      },
      {
        stake_address: 'stake1uyqz07z6fsrp2sltrrxlwsrmr6ldaxvhdkng03mnhmdx5qsmg8zws',
        pool_id: 'pool10quq4wlghwrvmhdzc7geq22pyhzegccwj56ax2g8hx0cjfahufs',
        amount: '91744102208',
      },
      {
        stake_address: 'stake1uyqzscz0kpn85fnafuaua5d25gm6v6p39ey8kpd8zc2pnwqvml4u4',
        pool_id: 'pool12l453n0jtxqq88cgwgr67z06ldyhqqvwxgkn0sgungjfvhtp2el',
        amount: '558619',
      },
      {
        stake_address: 'stake1uyqz3pe5cafuwphqf99804vkk9hdtz8uq5za68m3z3sshuq70t6qt',
        pool_id: 'pool14skj6e4rpjanzclx3fc880xnl8xafgg63tmw93t9xspvwx985qu',
        amount: '40286288718',
      },
      {
        stake_address: 'stake1uyqznqr5ryg4dnv5a25eafdvtyue237shaufzxzw4ta37ygk3jzcu',
        pool_id: 'pool1pemnlylem2e94xguhd3fytj90848kpv4agvr6rthx2tp58z79ek',
        amount: '4615347968125',
      },
      {
        stake_address: 'stake1uyqzkp7deqza4mlf04ql0lv69zu7rk7yq0vvmcm3hfga0qqm0d8d0',
        pool_id: 'pool1ty7lh3nvtwxlcpqg2x30fkr3j9ys6nprztr9m4zp3aajxyjk2vz',
        amount: '48356760',
      },
      {
        stake_address: 'stake1uyqzkzpc3wrs2jakp0q6r509kfmeffjcqtf0gr89s2z4hagm0l7ch',
        pool_id: 'pool1lurfk0k0wwx54hlg8a7zp3jtstu57u59aeq7aketl55hknmmtu0',
        amount: '910327727',
      },
      {
        stake_address: 'stake1uyqzkrvfnslzwwdcq6a3pldeyqstwe02n63ml82ry6eh80swgms2j',
        pool_id: 'pool1qqqyv9pn9typyqwcxqk5ewpxy5p27g5j2ms58hpp2c2kuzs5z77',
        amount: '17119240',
      },
      {
        stake_address: 'stake1uyqzk0nd2fzr3cfz597cvyae6cqc0xj0xmsgqyuffu7k30ge935g6',
        pool_id: 'pool15mv5w2vvfv2kplkrt40ylylyvdudv5axq5nyw6ln3v0gkd2auew',
        amount: '9820976408',
      },
      {
        stake_address: 'stake1uyqzk4ux862szpffagf4jza9jl93nj0w489kt8vyhuxee5cc75t3y',
        pool_id: 'pool1wf7wk3802jxtkmek6uprm77cgqx53t4qep9kwkl078w3yw0ff69',
        amount: '4408250492',
      },
      {
        stake_address: 'stake1uyqzcqnc99pfakq0amwly98evtrzw3qtevm52qdtcum8ctcn3qxnw',
        pool_id: 'pool1c0xj2fa97zuz4phld87atg6yphz3hju409fm5xgnwuuvqww25qj',
        amount: '100825556304',
      },
      {
        stake_address: 'stake1uyqzc60hsqpawy3vdj6fehhgd4ycfl4ujm22yjpw04t2uqc7z957p',
        pool_id: 'pool1jst7rrhucnp93hepezv5yqy6fx982xs2v0udwfc5ea6my3kfak7',
        amount: '71521137',
      },
      {
        stake_address: 'stake1uyqzexw8ycjdezp0rdjmr3h4agcrjz7yefpsgeu3kcz7j6qa6axfz',
        pool_id: 'pool190a9js7lk9lvmrngre7w268z9tz9xs9yz77audvw8ag4jerfdhx',
        amount: '4467685071',
      },
      {
        stake_address: 'stake1uyqz607ghjgerpce006y2etx0yk2kxganfuf5v6jdfrfnscedcdq5',
        pool_id: 'pool1wwzctexlp70mj00vv65mlhwhwresn58s9x7jl4tswvkg77eu7n7',
        amount: '36109051479',
      },
      {
        stake_address: 'stake1uyqz66huzyejywu3maxh6vngap9u29ha6mucejr76vfdcqssvunul',
        pool_id: 'pool1s6x6kltycpxq82hyqhlqllqj3q5l2m8w499gvtu4xrfv29c0q2q',
        amount: '142915174958',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-queryparams-epochs-w-out-stakes_9f26f0b9454d',
    testName: 'epochs/:number/stakes?queryparams epochs w/out stakes',
    endpoints: ['epochs/207/stakes', 'epochs/208/stakes', 'epochs/209/stakes'],
    response: [],
  },
  {
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes-middle-page_a6f353b554fc',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, middle page',
    endpoints: ['epochs/210/stakes?page=100&count=2'],
    response: [
      {
        stake_address: 'stake1uypsh5cvqr2zmnwc6a9k55d45fn5uzs5ftjsrd6qv9xp62gett944',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '17897636438',
      },
      {
        stake_address: 'stake1uyp32wrtz9fdgq8erddwhz4p5s0thadxhenp7guqmpprelqa8ctt9',
        pool_id: 'pool1mldur87x0z7j5wrfw0uh04twv0jem4c0cafsl3lhexfnka2ngxh',
        amount: '55279714902',
      },
    ],
  },
  {
    id: 'epochs-number-stakes-queryparams-first-epoch-with-stakes-last-page_588e7033234f',
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, last page',
    endpoints: ['epochs/210/stakes?page=172'],
    response: [
      {
        stake_address: 'stake1u8l8yzy5le2whmlefkp7zfwvvc7mnurgcyf839f48ymcrqcw5hc6k',
        pool_id: 'pool1jeu74g86ys4fekhykqcww99kdsq3nlym8a6kfw8s8ff3vskad70',
        amount: '23456649742',
      },
      {
        stake_address: 'stake1u8l8tqeg6l8h6q00qmztclzyuadruyw09dldarnz4raf78czg9vxu',
        pool_id: 'pool1sffl322qgsrsmkcedzzwk05396dkmj56pcepqvj6px3n2re3qu4',
        amount: '696902415',
      },
      {
        stake_address: 'stake1u8l8t7h8m9l9n6rklxzyggspte57vvuwjrdwmrehynrl73glh83gz',
        pool_id: 'pool16d004c5q7k7wyf223kgct26zjcpjqql04rvnx8vtc0t5ckmnzaa',
        amount: '1812719',
      },
      {
        stake_address: 'stake1u8l8v2a89n3s0u5f0yd9aujl4q3azlsmzpcm6j3tzj48srcch49cr',
        pool_id: 'pool1nudasuv0lljpe0tswcverqvlh0v4226vgnpsuxn0e9nkvnvcvne',
        amount: '97658570',
      },
      {
        stake_address: 'stake1u8lg2sqsrw7n0crhuns52e66tyr0r0h8tp2f0xpq8d3wprg6k84se',
        pool_id: 'pool1u4sxd6x0qsy7evljt24vtnyhpxd098n609sfcmly6c096mr3jgq',
        amount: '4997479693',
      },
      {
        stake_address: 'stake1u8lfx63cn3z6hx0hms38ux0lczdmn4c9rxu2xzttq486crqfmxumg',
        pool_id: 'pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt',
        amount: '1996656854',
      },
      {
        stake_address: 'stake1u8lf5s3mcr44gt8zhhpy6prg597qlm7qjglv393e3s0szmg6t6mr3',
        pool_id: 'pool1qnrqc7zpwye2r9wtkayh2dryvfqs7unp99f2039duljrsaffq5c',
        amount: '37674616463',
      },
      {
        stake_address: 'stake1u8lfmaxn7260qwefwdceuz4a2lj7myj9wzpm93qtlrfxg5cepldyd',
        pool_id: 'pool1vc8jp7uagxgh8trzx7r260ndcydz89ges8sws05cyv7jj8q8gqs',
        amount: '47816656502',
      },
      {
        stake_address: 'stake1u8lfu9fuxfvmd52za448mlmg5g65tjmwrtxhdszfuntchscmlqcej',
        pool_id: 'pool1pshqcksxywy68lt04lw6uf35f4yssekh5dx2mxqmyrukke2z5y3',
        amount: '50010000000',
      },
      {
        stake_address: 'stake1u8l2q7s7vqs0eqtjaxvccse9zv6u7q5ew2rewg0pn7zthwqsvx8lv',
        pool_id: 'pool1zhue4h6hpaq4pzt4fru7kwhvcxr0pwakanrzxy63ajfgyzrd9we',
        amount: '503611310418',
      },
      {
        stake_address: 'stake1u8l2wmu2caadq4w2tn5tnjcc093xr5fp2lmw5mtyn6y5dksw3p966',
        pool_id: 'pool1rj6apcqxcvavaxp22f75zs9upphena7ntsnut2efvq98g4404up',
        amount: '274997825567',
      },
      {
        stake_address: 'stake1u8l2srdw22y2fcgh37cf30php0fayn80qa59wen6edlytyqmtsk66',
        pool_id: 'pool1lvsa8e0dw6z8g2fkw7prnfa7627wuy5jjexaadck6w5sxw5xkvm',
        amount: '291707412445',
      },
      {
        stake_address: 'stake1u8l2jw84fhld5qffshrl6na7y7an4x7vqnx7rwv463tk8mg3hqvhy',
        pool_id: 'pool1qzlwlyu92fsx94qu6u5nw3sy334f5yat3dv3jgx0grrsv0kp422',
        amount: '227028902641',
      },
      {
        stake_address: 'stake1u8l2u766z99ymnyht04sueq3s0fql7ypcq3d64uqgpv4w0g8v6jgs',
        pool_id: 'pool14lr9ef5a22ng5xcu2rhpkkc86u5fp24r5gnj6hvnjxmsv8t8rtj',
        amount: '495943042',
      },
      {
        stake_address: 'stake1u8lt2nsqdzw2m0yds70339a6pmgnq8gxf7j5tjzhl0970ygl387pn',
        pool_id: 'pool1u4sxd6x0qsy7evljt24vtnyhpxd098n609sfcmly6c096mr3jgq',
        amount: '117701181733',
      },
      {
        stake_address: 'stake1u8ltsle8fejaagv44dedayjufwmt2agmj247udjvt97s4uc2kttyz',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '105667879562',
      },
      {
        stake_address: 'stake1u8ltjnj0jx6a86hg4qa43c3a4h3dsj0hd08lvaprhhw9ncctdt6dq',
        pool_id: 'pool1w8ham64lthvzzxzn5hknq4yrj8xt2nark409s2xmntlwvt4ag3r',
        amount: '119199467687',
      },
      {
        stake_address: 'stake1u8lthher0zp0pxqg46pvwkljfe0p6c0eyju3rr6al57nukqxl2gep',
        pool_id: 'pool1py2uxkvuj926h42s40wxl26dh0ggaq882v4m0hkd99m86vzmwnz',
        amount: '100090246297',
      },
      {
        stake_address: 'stake1u8ltazyz9eywrwml25ye79fs3tr85rgkeqzsecx7dta3kfslllmy9',
        pool_id: 'pool1c89d4drtwn0048mekkdkzllz559ahnntxelyw2mppxnmc36hjlx',
        amount: '27369582318',
      },
      {
        stake_address: 'stake1u8lv3lcx4yeq0l30fdeznu2qhs5pmwveknhcmnh00vmll6shxfgh8',
        pool_id: 'pool1lagcrwhhy24grdxpetj5vwwey6z8ncp7gx9gdd5p7gnd5f6urcc',
        amount: '743895490',
      },
      {
        stake_address: 'stake1u8ldv9rjjph84zwv7kaedv03x7pms7myrpu50zlcus2gufgkxysxd',
        pool_id: 'pool1vafsg5t78rnx3qr3fv7ys9h50pnvxqhd4l8tj629l5zk7tc39ch',
        amount: '39997825567',
      },
      {
        stake_address: 'stake1u8ldsr6kr3kjvcxpy433gdha6zn8l6xx892wz0wen8kkc7cxfdysf',
        pool_id: 'pool1pshqcksxywy68lt04lw6uf35f4yssekh5dx2mxqmyrukke2z5y3',
        amount: '41002619234',
      },
      {
        stake_address: 'stake1u8ldnlzuqveld99k6ef7kj064evazxhr66q5830n0e6waxqg7cnmu',
        pool_id: 'pool1qqqz9vlskay2gv3ec5pyck8c2tq9ty7dpfm60x8shvapguhcemt',
        amount: '1379629526',
      },
      {
        stake_address: 'stake1u8ldknwyzsaxhljaymatzupgdp29wpmtknfly8krych0g0c7cjeva',
        pool_id: 'pool1hntu7agmt8u5j9c20ejen7dvq0jfkvkpnul3mrdd8tppqvwfvt2',
        amount: '69997631844',
      },
      {
        stake_address: 'stake1u8l0d00m7sfd5h0rer265nvmrccwa7xyf053k8ht8taj0xshmhyjq',
        pool_id: 'pool1qqqqvmpm9v2l0tkwx4dpzth3g85lapxjug2j6sucnphyqlt4fuu',
        amount: '5400000',
      },
      {
        stake_address: 'stake1u8l0sw704upztcfrt540gjtxy0aeqf0m6h3g28ett0a5c7qe0xw5h',
        pool_id: 'pool1vh4y864hcq2r66ak37w4dsnkhnsfxaaacs0p5s4vj5676m6txwm',
        amount: '5002647482',
      },
      {
        stake_address: 'stake1u8ls7udntjtu84e4n78wfgzv5mygljm2q3s2as80k2743rgca4vwv',
        pool_id: 'pool1ywt7jqfsmxg0yplku4mtdwtm476rp72z6fns9mhevf7u72pkupj',
        amount: '50176082314',
      },
      {
        stake_address: 'stake1u8l34tsp0sxrv74z3h3xc4wlmhaf5c2ehjtv36ak97w5mugg65hp7',
        pool_id: 'pool1smy2r8jdvgna5ykhe8rrch7h4qalyfafyzyh0rmanmq0jxptww7',
        amount: '1347573024823',
      },
      {
        stake_address: 'stake1u8l36yvruwaz8pj0y0gz3xpcpumehap3vu26qvsgznep5yqm76mla',
        pool_id: 'pool1qqqqpanw9zc0rzh0yp247nzf2s35uvnsm7aaesfl2nnejaev0uc',
        amount: '10184195595',
      },
      {
        stake_address: 'stake1u8ljx27w3et2n2ff5utpp2dxplm5894kzeyt9h9hcvvktrq2vdexn',
        pool_id: 'pool10zdg2macln78u7h2uh3jxudxam6y0an8sa4dcmm5k86j536cmqa',
        amount: '15385855391',
      },
      {
        stake_address: 'stake1u8ljk8h6xhzkxjkqf7khn4fjhawd6v4fm7jgdt0w7ejl56qaw9x23',
        pool_id: 'pool1lvsa8e0dw6z8g2fkw7prnfa7627wuy5jjexaadck6w5sxw5xkvm',
        amount: '214159798721',
      },
      {
        stake_address: 'stake1u8ljkvzl6958q3hwfvlpdukxk7c8y2ds023qn4x8ltdhmgscqa5fh',
        pool_id: 'pool1xxhs2zw5xa4g54d5p62j46nlqzwp8jklqvuv2agjlapwjx9qkg9',
        amount: '22400842277',
      },
      {
        stake_address: 'stake1u8lnpllk94ctp7yc58mhfam4e95hpzyv0sjqem82xuayhes2grnh2',
        pool_id: 'pool1h08araxldht60j00vp8lzllmwyevjwqd5zwyprc62536gk4s5ge',
        amount: '16497225567',
      },
      {
        stake_address: 'stake1u8lng7hwl6jwrq4vk095d9kx9hy3km23l2pdxcdw3h8g8yq63vyha',
        pool_id: 'pool1afv4cmmjdkujtd5r9t63090a3frwwqy8f3e46gz003vyzjcj63r',
        amount: '15904271604',
      },
      {
        stake_address: 'stake1u8lnfrvuqkc6n9yu9pe3ew40c3eyn2kluxcsdjxscat356qxdspsn',
        pool_id: 'pool155cu3s06js3llfh07vnzepatfuvt3s5s7uwldt9rzz55wz7pugt',
        amount: '30996656502',
      },
      {
        stake_address: 'stake1u8lntfchfuwu808qr9t6chscygykp4j7nzqrgf7q2gfhw4qmuag2j',
        pool_id: 'pool1qnrqc7zpwye2r9wtkayh2dryvfqs7unp99f2039duljrsaffq5c',
        amount: '188059840849',
      },
      {
        stake_address: 'stake1u8lnm4ws7uhvvkd48c2zmmpn8ta55schswlul2aasts3dtq9sjq5m',
        pool_id: 'pool18v9r8afalh50l4lstct2awdc3zspnvurcs7t45nv29uc2mnxc6c',
        amount: '2454043507',
      },
      {
        stake_address: 'stake1u8l4r99akghchh0xcqxjkg0kmrlmtwqw2k04hpa4f02ra8g0e857e',
        pool_id: 'pool10efuydxjnasr0309lqklmj9xahupdnzqd59r5dqjeh4twz06tr0',
        amount: '565261103878',
      },
      {
        stake_address: 'stake1u8l4rks0w6jwzezgn70ta3fyr75rqt8agyfvhrq2tctyhdqnvpeeh',
        pool_id: 'pool1ufx9c77avvds5eas2uqc5anxh3wjrr93vhxqeecsm4xuqzf9mtj',
        amount: '78460659805',
      },
      {
        stake_address: 'stake1u8l4gdd2cgpwpd0t7xgjpelermq7ndeeektxtyya4kdqpdcmxg7ru',
        pool_id: 'pool1a2nh3ktswllhwf07fjahpdg5mpqyq7j950pyftq9765r6t4cefl',
        amount: '467379786084',
      },
      {
        stake_address: 'stake1u8l4txrdmx5n855z2pzzvqzwun7vk3un888qdd9mke6hzqgzsuu85',
        pool_id: 'pool1r8938r4ts8f4t8nsp9xl9dktzapt7f67jgpsp4wrju39xrdnaye',
        amount: '120651911441',
      },
      {
        stake_address: 'stake1u8l4vj88su79wx8655gnnz5dlmql4puqm8sy2fnd5z9qr0szx09ee',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
        amount: '101822861838',
      },
      {
        stake_address: 'stake1u8l40g9me24d5u4ku0tdjpzvggx34rwew72gsnfeqg03agcrkeva9',
        pool_id: 'pool1qzlw7z5mutmd39ldyjnp8n650weqe55z5p8dl3fagac3ge0nx8l',
        amount: '175537970751',
      },
      {
        stake_address: 'stake1u8l403ktgvgk5w4tkyterlmdlpz2g9jkg5ecz27vfja28acehe8hg',
        pool_id: 'pool1ld9hkah2dkzh73pvh9tf6xr0x28us34msv3zcv2sase5vhvq962',
        amount: '36348496467',
      },
      {
        stake_address: 'stake1u8l40uckc6xgglyt2v83mljemkcw6wuz42nske05dzkk7cgfmdd47',
        pool_id: 'pool1jjry6f6q0swaq457ft9eclaxaskvrxnpj0v3w8edsyfryml3vj6',
        amount: '8074472233',
      },
      {
        stake_address: 'stake1u8l4jjfnuvs8fh6pkgk96wgedqfv35txcke7gguupd2x3ycuh965v',
        pool_id: 'pool1d70vllztcsgx3ku8h5vnukzz2a7lpzjxfjmuqqvxtj9kq27hygs',
        amount: '30915642261',
      },
      {
        stake_address: 'stake1u8l445svs4l53pjmv2zq8u4w70kjwfc6zm9vxft5r9wqzzsa7gef3',
        pool_id: 'pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
        amount: '150276443721',
      },
      {
        stake_address: 'stake1u8l4cmcrnelpnw73keuua25gsny5mnyarqpuvp9qnkh4z7qa36zt0',
        pool_id: 'pool155cu3s06js3llfh07vnzepatfuvt3s5s7uwldt9rzz55wz7pugt',
        amount: '73220641848',
      },
      {
        stake_address: 'stake1u8lkqlkhzwme23j5krg7v75dxe6kcmm4g4ds9mhfpwg457g637e7f',
        pool_id: 'pool1llxh8l0h8g9ghz3nrzh7ndvev4x43vnk72nsemzm795vxqs6dp8',
        amount: '9826816502',
      },
      {
        stake_address: 'stake1u8lk3mz7cj7l49a3anmquhemj4zn92d3d7ydekk7wjsfxhq99p3ps',
        pool_id: 'pool1vxvdypctdecvc2j7xu9y8h2fdxvkpjy2pp8luwg2h6dx5jlv0nk',
        amount: '1999997825567',
      },
      {
        stake_address: 'stake1u8lk4sfcx4xa5zae2mervjdv9gyel3fffhckdhel94cy3xgcp8x28',
        pool_id: 'pool19wr27r3dqt77nd0qv7zcwzajw8fl3y0v69x5pf63sznuugg9p35',
        amount: '17145816138',
      },
      {
        stake_address: 'stake1u8lkhh04jkrmweyxe7ndar8m67jnhl0kydxsd3p0rry467qpuqjqe',
        pool_id: 'pool14ga7m2hv6y89u4jv9yf8mf28tjs078j43l5h4zgpxqp7q6ey4d6',
        amount: '41097619058',
      },
      {
        stake_address: 'stake1u8lkapr3wzj2jvgw9xkm8ysa5rzutlt2xf5ltyuyzc6uh0q6tdtcu',
        pool_id: 'pool1qzlwlpcsgflr9z3f24fg836tyq45p0kf5cnrp20s8v0psp6tdkx',
        amount: '161781817343',
      },
      {
        stake_address: 'stake1u8lhfse06jzm8jdmpuu3plgvkag25lemragp5mwwtgrc2uqcf44g5',
        pool_id: 'pool1supp67ypelmgzuzqqvarc6czgmg3ggwpnrnfr90xpfcqqf8h05t',
        amount: '576622832586',
      },
      {
        stake_address: 'stake1u8lh2vretrk73xd5r55kep04gddlw0dzu67pe4q9s6u5p3g9d68w6',
        pool_id: 'pool1supp67ypelmgzuzqqvarc6czgmg3ggwpnrnfr90xpfcqqf8h05t',
        amount: '380180656502',
      },
      {
        stake_address: 'stake1u8lcymtxfa5l65ra3nx6kyrp0kgdqq5nrcfjvvljpcq90zc7qgu6t',
        pool_id: 'pool1myvgx4ef424e6nw2strqq7dxcepav52plyyhxrk0avaw7y098l2',
        amount: '20535156502',
      },
      {
        stake_address: 'stake1u8lc9l0ncrngftlsf5xayp5967r060k6e0q93hup8hujc8qlvtxcc',
        pool_id: 'pool190a9js7lk9lvmrngre7w268z9tz9xs9yz77audvw8ag4jerfdhx',
        amount: '199997825567',
      },
      {
        stake_address: 'stake1u8lcvgvm4y60m3gnpvnns5snm8ky5pyqkmvmzyk8jtugejgkracpa',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '419233854',
      },
      {
        stake_address: 'stake1u8lck0tqarw4faxtvdwem7eqvph2n0z2ehg6d4lythj4yjsjf2u3e',
        pool_id: 'pool1xxhs2zw5xa4g54d5p62j46nlqzwp8jklqvuv2agjlapwjx9qkg9',
        amount: '15000825567',
      },
      {
        stake_address: 'stake1u8lewgdhvvrk7eygt6j3aj7cpp4thcfuym0v83jtgr0854grlezpz',
        pool_id: 'pool1u4sxd6x0qsy7evljt24vtnyhpxd098n609sfcmly6c096mr3jgq',
        amount: '22196352092',
      },
      {
        stake_address: 'stake1u8leeh8ur8nd2r5gsvd4ym7xg7dasguk5fxvfcal8zse2uq48uzes',
        pool_id: 'pool195gdnmj6smzuakm4etxsxw3fgh8asqc4awtcskpyfnkpcvh2v8t',
        amount: '57009992426',
      },
      {
        stake_address: 'stake1u8le7za2l8537fjz58xzqkgt5yr5flfru0m02qmk2ka5p5c6gxmu0',
        pool_id: 'pool1ctzja2cdwyeqnvehmrlclc5wrn9w9acwklk3acn73jrx56d66vs',
        amount: '43849116772',
      },
      {
        stake_address: 'stake1u8l6pc250rukpgrlusyzy3g0xlyhkaa2dveewzgpp52j4fcp6sxsc',
        pool_id: 'pool1qnrqc7zpwye2r9wtkayh2dryvfqs7unp99f2039duljrsaffq5c',
        amount: '1141647225',
      },
      {
        stake_address: 'stake1u8l6zp37enpxrhxj764t8peysjhlwgd49kve5r5h45a247sf2ye5x',
        pool_id: 'pool1qwa8x4u4a2pff0xdv0haxpgk3tyrvl5adl2lpf3ztcftqruhea0',
        amount: '53046385421',
      },
      {
        stake_address: 'stake1u8l6j4f0hy86dw96d25zjqnm94lhdx2fwxtjs6n9r6mlzegr5ztj6',
        pool_id: 'pool19wpsykyg3gy7s34kx36vvs4dfcv2anggmta372jdv5lgqx0gs2t',
        amount: '34074718284',
      },
      {
        stake_address: 'stake1u8lmzsq3ufa793ydz7f20jp3qphk2wdakhw838ga48q7l8sy07uq4',
        pool_id: 'pool1ku2ppcx5zgas98hfrl23xtak8u2wj3hsy3hglxhg9xp4qck5awm',
        amount: '58931648962',
      },
      {
        stake_address: 'stake1u8lmz6d2m5k4mwa4vv8u97dvkrnkcpkznw08sz57ek5uhqgry6jyd',
        pool_id: 'pool1vx9tzlkgafernd9vpjpxkenutx2gncj4yn88fpq69823qlwcqrt',
        amount: '11045657998',
      },
      {
        stake_address: 'stake1u8lm54720vxfustt02h6mftaeunqncga050waluzd75pr5swkxe5l',
        pool_id: 'pool1ty7lh3nvtwxlcpqg2x30fkr3j9ys6nprztr9m4zp3aajxyjk2vz',
        amount: '8326776691',
      },
      {
        stake_address: 'stake1u8lmm5z29qectxny37m6kumnagmy8m4p3erp0mjzy587g9q2k46z7',
        pool_id: 'pool1supp67ypelmgzuzqqvarc6czgmg3ggwpnrnfr90xpfcqqf8h05t',
        amount: '26361428',
      },
      {
        stake_address: 'stake1u8luz7qyqamhec6rf2d9umm5q23zmdt4r674nqt7dux9xeq5mtydh',
        pool_id: 'pool1g5gmej3cj67td4pmvmacnls8nuq0gjld2pwfeg3jwpxujdx6lmu',
        amount: '271440967676',
      },
      {
        stake_address: 'stake1u8lugtphds6cmfapnjm0r2zmsjcldcfhk68m7sau8dd88eg56ud9w',
        pool_id: 'pool126mkma8nv5axltmz7mmg8qz9e70nmhnf58hwx5772fhwgkhk6ag',
        amount: '993233445592',
      },
      {
        stake_address: 'stake1u8lum0rtskxqgz5v29ruwy9xrf79309vn434zt53xwvfxfqkxkmqt',
        pool_id: 'pool1nudasuv0lljpe0tswcverqvlh0v4226vgnpsuxn0e9nkvnvcvne',
        amount: '49353667045',
      },
      {
        stake_address: 'stake1u8laq2hz3k54x3zctea2rlddx293rjvh5a36jsskcmvs85sf0vdl6',
        pool_id: 'pool1d054kj5nmzn0vmcsy3feyn56ehesn0hjaanucaep2n7qzyz0pv3',
        amount: '109499801675',
      },
      {
        stake_address: 'stake1u8layzqv998l9lp09paqa3yx7auj0p7p7npcdkgwrpz46eqa9v350',
        pool_id: 'pool12vs4c3cm0tr49c7alrevfs0xa5g3s4al4fn46h33e69uusat04v',
        amount: '31414344418',
      },
      {
        stake_address: 'stake1u8laglfcvquvnuh5evu4wj5uyzyydzn5wcsx2t6f95ssu8ga9q4ul',
        pool_id: 'pool1jhzf2mm6zdlhl6w89uhgx8nq8p6ykcc86qq58vjy0ejyxrrksfj',
        amount: '121891701567',
      },
      {
        stake_address: 'stake1u8lantdmw926cv0yxqkdd4gc38x09degdz6e3vahqjkk9vq5hrelv',
        pool_id: 'pool1qqqqqdk4zhsjuxxd8jyvwncf5eucfskz0xjjj64fdmlgj735lr9',
        amount: '627327789657',
      },
      {
        stake_address: 'stake1u8l7xtpdeks6cau7grd7d3y9238hfs6yjzjktq0jm2ln5zqzrsyvl',
        pool_id: 'pool1kkfkdces5mdcyc9dn2hgg3463jggjvw3h89nejjarkz25uavaqu',
        amount: '44350398219',
      },
      {
        stake_address: 'stake1u8l78kf853nkcqa68taulszzrwecs58gcf2gmlt09arrt4qzy2tvm',
        pool_id: 'pool1smy2r8jdvgna5ykhe8rrch7h4qalyfafyzyh0rmanmq0jxptww7',
        amount: '4342046522826',
      },
      {
        stake_address: 'stake1u8l7g4jjew20g0sycd49pd742xat53f2my36xxtsn5jav6cjtm80d',
        pool_id: 'pool1v4wgyctxyxlcf90qtgflznv5f4fcm6cy0z80mchctekt20d3cww',
        amount: '10232835010',
      },
      {
        stake_address: 'stake1u8llf58ln0jwjnlmwfqhgejytgc3m25pmzes8shp69gu65sc5tut5',
        pool_id: 'pool1rkyc3ss904h066sffergss99r9p2kqa4k6ds0g4u5ud4x7yaajd',
        amount: '10015782978',
      },
      {
        stake_address: 'stake1u8llsqzda220vxfuf5q2gshazv5zdqd94gyc89y4m2uamkc9ul5dw',
        pool_id: 'pool1lllmq2jgcqrag5c77lpc5m34fsqn63leadyx9tzx842n66ly3ql',
        amount: '220869894750',
      },
      {
        stake_address: 'stake1u8lleau29hqczr23hpkggu5h9aemdt67h4tygw3qy5lsx4chcx35x',
        pool_id: 'pool158ag8p06qm4apd750ekep6een9cdldqsq434ll2mp0ykgunmguy',
        amount: '20711996526',
      },
      {
        stake_address: 'stake1u8ll7p8qa7sjyqqqfmam8mxp30u8wsc4glc55mmvhd979ssp3jnmk',
        pool_id: 'pool1ctzja2cdwyeqnvehmrlclc5wrn9w9acwklk3acn73jrx56d66vs',
        amount: '499997656502',
      },
    ],
  },
];
