import { getPaginationFixtures } from '../../../utils.js';

const paginationFixtures = getPaginationFixtures(
  'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy'
).filter(({ type }) => type !== 'order');

export default [
  ...paginationFixtures,
  {
    testName: 'epochs/:number/stakes/pool?queryparams generic pool',
    endpoints: [
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy',
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1',
      'epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1&count=100',
    ],
    response: [
      {
        stake_address: 'stake1uyq0yr438xvf533765w8s62eh5cmj33sed73cypt37l2m9ch78kup',
        amount: '2505577',
      },
      {
        stake_address: 'stake1uyzrq7fqfyk3nz3z7wtcxpehf9euz6x7u739pyvc25zm8ec30p6h6',
        amount: '2768757218',
      },
      {
        stake_address: 'stake1uyyr6da2au8kmm52xjljtzs3zu43pg3e9alflh6jaw0eelqmlf8mt',
        amount: '178817967718',
      },
      {
        stake_address: 'stake1uy9p0g3t59xjgkrg64kycxaqrsg5a6u6lzla5avtrc5jrkqwfq43k',
        amount: '106381303049',
      },
      {
        stake_address: 'stake1uy9ynpevcnv32efnh3v73cm2ap4ys3d4dc82yxm7ccntlzcrdza5z',
        amount: '792845148',
      },
      {
        stake_address: 'stake1uy9xjxmldxflvxaz2znpkmgcq8z3svuq0v7tv6y3l4kja7clta3gj',
        amount: '101739755348',
      },
      {
        stake_address: 'stake1uyxygu3cupvpfjtypquf9mhfvlyl59lq0mmjyt3cxhyghgq08e46t',
        amount: '229826423954',
      },
      {
        stake_address: 'stake1uyxecs9at5t7muamfwxhdnyjxv290ypylwapcksmvrmqagcu4qv3u',
        amount: '151307758391',
      },
      {
        stake_address: 'stake1uyf3vf85t5jcmfjpdxurwwu4fkzqgvf6cpztsn0pnpqp0wq96vk05',
        amount: '108983232',
      },
      {
        stake_address: 'stake1uytyf93u4f93rphtd3r4vhh7lxpygcnfvkpmc5a0aelpv9g63qfxc',
        amount: '14796129',
      },
      {
        stake_address: 'stake1uyvxhwsjarwzr67sutmer7dplwx0jl2czzsp8cvku0wjftgdn3weh',
        amount: '4886659',
      },
      {
        stake_address: 'stake1uyvhvmyp62p9ymn3d0cwstwluvav03453kk4m5y6agsz24gv86gv3',
        amount: '10165626123',
      },
      {
        stake_address: 'stake1uydsrwxmy82mj2t8ld0w74sm0cqrhk6syngs96hv80umdvg6szppp',
        amount: '11455934705',
      },
      {
        stake_address: 'stake1uydmvadzrnxkhelvawvxej5n942qwt9h8ucsjcmn90dz7kskf2vmr',
        amount: '21587762',
      },
      {
        stake_address: 'stake1uy0uykuukdn7wpx3qcp2sy37v2zpayxvm8d90ufj5rf3gucpl7697',
        amount: '2359492736019',
      },
      {
        stake_address: 'stake1uysyqxkrsdcr8qxwc0yugr5hpwn7r92glrhv00elkn273cs884acl',
        amount: '149567969026',
      },
      {
        stake_address: 'stake1uysdadgpm3h6nm8gx79h30pjc59undxxqrzd7prd3nvn76sczzla4',
        amount: '1818200539016',
      },
      {
        stake_address: 'stake1uy3rjeujvm2dxjxwza7ezn0qudgmnf67hvk3a0ajkycymqqhpl50w',
        amount: '32545535455',
      },
      {
        stake_address: 'stake1uyjqzj2hc83r02dtm3h2d5pjxdpjtnxrc0zh258m5htay3cwn4lps',
        amount: '7207619',
      },
      {
        stake_address: 'stake1uyjf0rje45zta2pdaev4myrx28yrt9uzffnz0q0smd8hldgdunu3c',
        amount: '69550066026',
      },
      {
        stake_address: 'stake1uyn549x0g5zj8urqusjyh5ggj7jzgrun2gsn6u59ey56pesrlg275',
        amount: '168787041644',
      },
      {
        stake_address: 'stake1uy5e66lc4u5qzhqed04v6kxq933canz2ugs7je7u6pptqgs56sfaa',
        amount: '42',
      },
      {
        stake_address: 'stake1uy4pv6a7y0l3qaqjsz2u4pglwrjn2s4kvta8cac4ufxjtygc3m3yl',
        amount: '2157315255',
      },
      {
        stake_address: 'stake1uy4tj75aw3zg7hds70n80a2wn00d4vrmgulc9m42e35mdqgrtm0en',
        amount: '43256831',
      },
      {
        stake_address: 'stake1uyhgxrwermdh7ydl5htdkvxc28g39hpeamukl0ma5dffpsqav5gpu',
        amount: '5147568513',
      },
      {
        stake_address: 'stake1uycgj9v9r0kaeepzvvashvh8zzkj472ds2ce2anqnmx95kcq338nj',
        amount: '4760510281',
      },
      {
        stake_address: 'stake1uyc2qhfmr60y486gdsrdmxatagj5ggfummhke9lec5azx4qgrhycj',
        amount: '7023068558',
      },
      {
        stake_address: 'stake1uyel249dq0xjp6ltdln32y6eac5gwxesfgjex0hyyw22dlqa6ay7m',
        amount: '29821957556',
      },
      {
        stake_address: 'stake1uy6lu35lzkcmxl79wlrd7kanxq8tvxp2vdtue4cawz5e02gkgp3gf',
        amount: '112445564324',
      },
      {
        stake_address: 'stake1uyml8a70d4a8wsvgw0wq5m20zvkhfyrg02s09spvk39dm7cj00kjq',
        amount: '149029363',
      },
      {
        stake_address: 'stake1uy7v0n6ekvmfp0a7w2vth8su5we0z3ekj6gxd3x9qt3vr4cdau9kj',
        amount: '149827154',
      },
      {
        stake_address: 'stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq568r5u',
        amount: '77925391115',
      },
      {
        stake_address: 'stake1u9pyhfle66uzdk5gmm8vjkrwszl2nur3mxj8cykq0ss45tqzvl4c8',
        amount: '129334142',
      },
      {
        stake_address: 'stake1u9rxyjzlqvq65cketdry7436ayjz8tas2d670thr6ujfv3gld4ddv',
        amount: '1168108896',
      },
      {
        stake_address: 'stake1u9rmtxshykdew5pm3yltd0yp72thxp5dwz63ys7trtxjf9sgghn64',
        amount: '4542427',
      },
      {
        stake_address: 'stake1u9y03sa58el3za7csvhwnnpprejgy3yusctg78uc3v7dewgqvm98g',
        amount: '918245118414',
      },
      {
        stake_address: 'stake1u9y3qt57glwuyl5gmhtf07jfcmn8u2xs9sa2vy4zhegprdqvugs8v',
        amount: '7821870243',
      },
      {
        stake_address: 'stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc',
        amount: '0',
      },
      {
        stake_address: 'stake1u99pjll22qd04nltp5waq7d5h6yfzyj9yxyrcevsdy4028cfr267r',
        amount: '2448333957',
      },
      {
        stake_address: 'stake1u98jauh9jcqrhwjqt4y2426wvz396fut9mf7nr3776qudgchgvdl5',
        amount: '3170394782',
      },
      {
        stake_address: 'stake1u98ndqlvadudtyluhqxhpjm72utfgzyctvj2g0pdswnng2q4v9gya',
        amount: '1849687454',
      },
      {
        stake_address: 'stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v',
        amount: '895005088265',
      },
      {
        stake_address: 'stake1u9fzg77vrgfqlplkjqe9hntdcvsurpvxd60yp2fhn73002qsv9pdk',
        amount: '218622752138',
      },
      {
        stake_address: 'stake1u9f3z33uth8pstn2456jn2mgqnfgqp6xk836l5e83uy74qq57ekjw',
        amount: '2907356249',
      },
      {
        stake_address: 'stake1u9f7frtxgunh4ys94hpy7gxrvw9dvtuh0zwdggtuszhp6qsmmkxwe',
        amount: '218654903686',
      },
      {
        stake_address: 'stake1u9vdy5k6uuhetg0xnyyhu7rjqep3fkuf0lf3j46esl7cs5gsdhd0u',
        amount: '410978512',
      },
      {
        stake_address: 'stake1u9vcfpy000gfmxuyurg920zad3kptlhesy33u894vf5etach0gw4v',
        amount: '2986496',
      },
      {
        stake_address: 'stake1u9dw5v93z78tpyace6p5r99qv5zdz9hgjj8y5n0yz5mvpts4gkxd6',
        amount: '109668623',
      },
      {
        stake_address: 'stake1u9w9u7nnxgwq0qj0muckv7zdyxtc2tr9udlhhkgm3smc8jscmzt22',
        amount: '1750548329',
      },
      {
        stake_address: 'stake1u90lfvdwmqqlngh6mtzl63pz6u98uv06p49fg80d36c52cgpd2hws',
        amount: '0',
      },
      {
        stake_address: 'stake1u9jyw6e97pguykpn9kw6jsrvq3x42tehhhzld9vlvhg6ecsw0k3u8',
        amount: '11895546866',
      },
      {
        stake_address: 'stake1u9nqz4978j8tlp5mzhelfulk0dtfu5t0vpv8jlqtqskjk5sfw3urs',
        amount: '5231265',
      },
      {
        stake_address: 'stake1u9n3dthmlunm5kg543uxsxhv4deejk74l2wdhvw69kdwkmq3ne6dx',
        amount: '33279758158',
      },
      {
        stake_address: 'stake1u9n5vsxm9knufzt54k3088szc2ljqlk0v40jnx5wx2vdanqcnu0am',
        amount: '128427777449',
      },
      {
        stake_address: 'stake1u9nc4tw2m4e8x4dp4zt9ejhexw0df9z4wq7gasknwf6sn7cn7dadj',
        amount: '2850296444',
      },
      {
        stake_address: 'stake1u95gm0zwtrkjhek807vltedas9a8gnhvnjrj7dz3w8v9kmchcp82p',
        amount: '122479089304',
      },
      {
        stake_address: 'stake1u95tv57wq9y9mwenzey685vu9huql532drmyqfknj27t0vcgd7kcr',
        amount: '14175769104',
      },
      {
        stake_address: 'stake1u957hx96r6zpwr6hu7uaztkn6rjwg4qxy6ngldfa2lzxzngdlajur',
        amount: '54005565224',
      },
      {
        stake_address: 'stake1u940lesgftj65q2zuewfshca2nnljz4lcewh6n2wpge55ccvkx0q7',
        amount: '70141518987',
      },
      {
        stake_address: 'stake1u9ksxng3jvjl8d8v6e6hk5lsu6wk2sar6cv0a8fffk9r97c70zmk7',
        amount: '205075',
      },
      {
        stake_address: 'stake1u9hl5swsk70wu25jxmmktm53c7w7nzgwrdk5ut8zmx43wrstykxrg',
        amount: '20842390858',
      },
      {
        stake_address: 'stake1u9cr8aj02pjdpxmzcknmk6ul8h8se04zscv98r6um89jueqzqtyug',
        amount: '4739781045497',
      },
      {
        stake_address: 'stake1u9mz627ck7pgx3umeur68nwgfq84tg4uu278yjy04qx0wrcvyjhuu',
        amount: '771923243',
      },
      {
        stake_address: 'stake1u9mzu5pxevxct2gufceye0smhcg00yx8t9ezy9dfljzgn2gpcsdq3',
        amount: '112826537932',
      },
      {
        stake_address: 'stake1u9m9pnjlyjnmq2hprtaanrgeqezs74ays7haym7smkmqj0c53tw5r',
        amount: '513797601',
      },
      {
        stake_address: 'stake1u9mmtph3pyslj99a30wy7dzughqm5rn8lunw6jsj2awx03st3pr6f',
        amount: '1209854722',
      },
      {
        stake_address: 'stake1u9m78x2qlpvq9ssvsv9w58600kxeqnphmj52dwaylhwmvlgs5qsa5',
        amount: '11670235250',
      },
      {
        stake_address: 'stake1u9ac5kvkm36ddjqj3rgevr20m8exddhveyjt0fr24c0nndg8dtacn',
        amount: '2001969862',
      },
      {
        stake_address: 'stake1u9756q4uk28zx25qq67vp0ej647zqdm39qktud9e20kce5czmqw8e',
        amount: '56874312',
      },
      {
        stake_address: 'stake1u9lcwux6wfd39t4leh273xxtnxar2akdzfndvsf5hjxj4ts0q9a6v',
        amount: '26740736813',
      },
      {
        stake_address: 'stake1uxpwtvxvwe8fgg6rmvvgc42x2r0a3cfu3hdgjeg8as3kdqccmn8l9',
        amount: '5159519235',
      },
      {
        stake_address: 'stake1uxpc0kpkvy4htz6rur8eay2at5z7y3vzzeqwl09mlhe2elcpklse6',
        amount: '498187999',
      },
      {
        stake_address: 'stake1uxz95cldgyy3mgf49pclyqqe3znuhdkhd3pygxv0wp433esx8pzff',
        amount: '4092903006',
      },
      {
        stake_address: 'stake1uxy8d4ex0am77a7vm38jvmss0enqfh5wm8xma04x6t5jlecuyqtdf',
        amount: '750529962032',
      },
      {
        stake_address: 'stake1uxyls3m5425aum7y4vwwej9jhpr9zmlpc2tulvzzxatv8qqstz4uc',
        amount: '3835749',
      },
      {
        stake_address: 'stake1uxx06kd8hjspel3kanp73apq09m0ck7ylav3cm3fjs2m7fs4mmcnl',
        amount: '6083579556',
      },
      {
        stake_address: 'stake1uxxj0xjumm2wn8prrusj2ervuaxrfh9lzhm54x477dkm4uq2vr5nm',
        amount: '3880526',
      },
      {
        stake_address: 'stake1uxfnteagust55euzs2ctgfufea4g69ukwxdaflxvnapdlgqhjjg4f',
        amount: '51056331740',
      },
      {
        stake_address: 'stake1uxtl9pz3zahhefhaze9gj3hmah8t26kauk0r3cgrnx0uw3q2d9a6k',
        amount: '856097714',
      },
      {
        stake_address: 'stake1uxdyc084dytyq8dgeh66cjct39wdvh0e87kgdm92q43fh0cq97z0u',
        amount: '72715927049',
      },
      {
        stake_address: 'stake1uxdgauat7wzmvl5a0e5pw29yu4jlzkv2nsyp842eapvgxngmh08g2',
        amount: '4978681',
      },
      {
        stake_address: 'stake1uxdm2xwuc7yef0ng09e0azzhnglt4gwtyjhrd2zaj5fsd5cmjnace',
        amount: '1037959948',
      },
      {
        stake_address: 'stake1ux390nyhyyah03qdw459cwdgj3zkw962dmzeq90gkwsahuq75xhmh',
        amount: '57004248245',
      },
      {
        stake_address: 'stake1ux3u6x5cs388djqz6awnyuvez2f6n8jzjhqq59s4yxhm8jskeh0t9',
        amount: '1102182',
      },
      {
        stake_address: 'stake1uxjfwrj2k29wv77q4rzlxu0jvsr5dcdyx3crl5f2mnx3agcnzd5vx',
        amount: '0',
      },
      {
        stake_address: 'stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn6kha',
        amount: '1975859151626',
      },
      {
        stake_address: 'stake1ux4h77s8qz6eqs7ynllafnq9pyev32xtjz0hgnh5ld969jc8rj8aq',
        amount: '41249373',
      },
      {
        stake_address: 'stake1uxewr3qc9jf4uaa7ly4z9n9t0wp03ks6h53kxkcg5aper5ckn0jra',
        amount: '24750549',
      },
      {
        stake_address: 'stake1uxesk0qucuhgcq5yt0j0kfvn5avv6vz2uxjzk5r6ld7xcfs689zv4',
        amount: '566038003302',
      },
      {
        stake_address: 'stake1uxeaw345e8nr0ljnp34m5dtp6cdmr98heffnwrdug4jw7jgvjtgq5',
        amount: '198158789929',
      },
      {
        stake_address: 'stake1ux60dz3xle8uhqdgd6q8kmyldcupfqrkaksjsrrd9uv0q6gmqzcf4',
        amount: '34130',
      },
      {
        stake_address: 'stake1uxm5ldtqtmve38e5uwz9cwkdcu0arnd7prr7642wyp5f9gshne5uy',
        amount: '106663347401',
      },
      {
        stake_address: 'stake1uxlzw749sp3nwfy9frckhe73dr3lvay6rpnt609zsyutcqgtvp06f',
        amount: '59994223983',
      },
      {
        stake_address: 'stake1uxlhhjrhtjm7qq8dva3dxazuej5yuxdu6lhvnh8289wnlqshrlgv5',
        amount: '63745302085',
      },
      {
        stake_address: 'stake1u8qg9kh8nd5gdslgmf8fa6kwydfytwvux8zel6agywv9peshd5a0j',
        amount: '320774438265',
      },
      {
        stake_address: 'stake1u8qncrs76msdum7j5jlcefunp30rwymqleq5mzf5ky3xvycqerafh',
        amount: '106497193802',
      },
      {
        stake_address: 'stake1u8pxu4s4j4kgnx76kvg6t0rn4eq996ta2fys7qhnncrtz0cskplut',
        amount: '32553490775',
      },
      {
        stake_address: 'stake1u8pcjgmx7962w6hey5hhsd502araxp26kdtgagakhaqtq8squng76',
        amount: '4638270',
      },
      {
        stake_address: 'stake1u8zzwankan3ck7k00695kg39tj2e53y8q70ncre7h9q5mwqptn555',
        amount: '2196801816',
      },
      {
        stake_address: 'stake1u8zkrjr4nm5rwflqvgrpcj9nsemdp3zsutyv3vpxfufng4sq3fkwm',
        amount: '123440748326',
      },
    ],
  },
  {
    testName: 'epochs/:number/stakes/pool?queryparams page 1 best pool ever',
    endpoints: ['epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=1&count=2'],
    response: [
      {
        stake_address: 'stake1uyq0yr438xvf533765w8s62eh5cmj33sed73cypt37l2m9ch78kup',
        amount: '2505577',
      },
      {
        stake_address: 'stake1uyzrq7fqfyk3nz3z7wtcxpehf9euz6x7u739pyvc25zm8ec30p6h6',
        amount: '2768757218',
      },
    ],
  },
  {
    testName: 'epochs/:number/stakes/pool?queryparams page 2 best pool ever',
    endpoints: ['epochs/242/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy?page=2&count=2'],
    response: [
      {
        stake_address: 'stake1uyyr6da2au8kmm52xjljtzs3zu43pg3e9alflh6jaw0eelqmlf8mt',
        amount: '178817967718',
      },
      {
        stake_address: 'stake1uy9p0g3t59xjgkrg64kycxaqrsg5a6u6lzla5avtrc5jrkqwfq43k',
        amount: '106381303049',
      },
    ],
  },
  {
    testName:
      'epochs/:number/stakes/pool?queryparams generic new, old and expired pools without active delegators for that epoch',
    endpoints: [
      'epochs/224/stakes/pool1ezskfrplms9h6hxcw7adqghmfrtpn6cy7ax8ajrm5kn0crvl6sn',
      'epochs/242/stakes/pool14qacykhn8lzvltxrntkfvzakdn3acyj2m28lfc8q02gzylu8l9a',
      'epochs/247/stakes/pool105y08fgl97g255q7v9nk0x7aqyxaqcluve2jxhgwemkaxkeyd82',
      'epochs/200/stakes/pool105y08fgl97g255q7v9nk0x7aqyxaqcluve2jxhgwemkaxkeyd82',
    ],
    response: [],
  },
];
