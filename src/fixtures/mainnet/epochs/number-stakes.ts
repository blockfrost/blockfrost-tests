import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures('epochs/242/stakes').filter(({ type }) => type !== 'order');

export default [
  ...paginationFixtures,
  {
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
        stake_address: 'stake1uyqpjsqavm6tm3p9n62dmck6uzrlysy6pk6d93stj6dzn7sdf9evr',
        pool_id: 'pool1w7c2j0px43jmudhf48ezp7dy8j7904c9l3wc7809lhh2z026hch',
        amount: '0',
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
    ],
  },
  {
    testName: 'epochs/:number/stakes?queryparams epochs w/out stakes',
    endpoints: ['epochs/207/stakes', 'epochs/208/stakes', 'epochs/209/stakes'],
    response: [],
  },
  {
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, middle page',
    endpoints: ['epochs/210/stakes?page=100&count=2'],
    response: [
      {
        stake_address: 'stake1uyps8fguv8mecqnsgzghtxfvu9f4q2t6q4cwe3uu89rwvhshsmvy3',
        pool_id: 'pool1gtphgrdj8sluxm9e7ca2spcwcq2p0dxj9zf5v0yv3gsagzq704n',
        amount: '175581325567',
      },
      {
        stake_address: 'stake1uypsfzyavxpq9mym8hfrzrr6zdxk7dsg9w5d88xlvcgumlqt0vjjg',
        pool_id: 'pool1dxkf7k3qwnpgpxqfye8y9jvk7lver3fk8dq7c4dpzezyyx8cf5c',

        amount: '311834983268',
      },
    ],
  },
  {
    testName: 'epochs/:number/stakes?queryparams first epoch with stakes, last page',
    endpoints: ['epochs/210/stakes?page=174'],
    response: [
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
