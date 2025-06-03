import { getPaginationFixtures } from "../../../../utils.js";

const paginationFixtures = getPaginationFixtures(
  "governance/proposals/15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916/0/votes",
);

export default [
  ...paginationFixtures,
  {
    testName: "governance proposal votes",

    endpoints: [
      "governance/proposals/15f82a365bdee483a4b03873a40d3829cc88c048ff3703e11bd01dd9e035c916/0/votes",
    ],
    response: [
      {
        tx_hash:
          "7925c2e6848235f18440249b3b4ab0111dd6c56fdcc518ba6fd8f02e37e39d24",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1mt8sdg37f2h3rypyuc77k7vxrjshtvjw04zdjlae9vdzyt9uu34",
        vote: "yes",
      },
      {
        tx_hash:
          "3ac5339f6eecf31f39e4d0116a596cc90b2f100975e533b8d8565198b95d9fd0",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfkg5ryqwaleunwqg0dtcj8g8yw8sgd9kskg2zlzdr8355gpghcvv",
        vote: "no",
      },
      {
        tx_hash:
          "9c7dee939970fc97e14b34f492a92ef85aa9196116852a9e6120aa339790c80d",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytwmwvtd0a8lr45ssner2tjxzv5y8q03w3606yeald9mdmgmwecja",
        vote: "no",
      },
      {
        tx_hash:
          "65cf4091be550e86b41db03344300758daf8047e7f18d9411f655094cc8cfb47",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y296zyw2r8rcsy7slkd7l687hh88xc0m6ac2y3h2r3mvsdgc9q6yy",
        vote: "abstain",
      },
      {
        tx_hash:
          "8e18a32a24c2895adfe3d556b8e859ac37e62b38f6e2a530ba0462f7b91221d8",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1f4rs6v0cpsqa09ueddp6hhl8xwdwtdqglvcuce26srxdwmzxl6v",
        vote: "no",
      },
      {
        tx_hash:
          "2859b8f031ed85072832c23b262a5ad23343efc1e966f515472000037ce8aed3",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2pyv5v96qle0xp35fhlv2wwjudx8y2e0dcpvktj2xfr8ugdnlh4q",
        vote: "no",
      },
      {
        tx_hash:
          "dc22fed3a4bacc47c51b88d13a59c686a7f77e959afa8f474aeac0c8d602807e",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2zu74gt8sxtrxcngqsmrnupkzrtmlqshmvmm5qtuhxx6xqt7yhaw",
        vote: "no",
      },
      {
        tx_hash:
          "3625c64929ac6576e24188b648c0083b7e8c437648bdd98abda405d81e422746",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytwrrcldyr7wlgywsz3zn0vyxxry7kv4nxzm07t49ee4udsmz3s9l",
        vote: "yes",
      },
      {
        tx_hash:
          "5a5796645dad05d4a18e9cd015223c743b647a72898ea5cde0dce3af6ee83b6e",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool13daql23lkcwwj0gsz0dnu9tu20pugpswfped3kp05ekxkgmcumt",
        vote: "yes",
      },
      {
        tx_hash:
          "833e3854d7408c862a3a7dd24e9310bc1b50148da58200da89a9b564ad224c11",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool17n47upcpnzsdks0yd409nf79sg6hqy73twg87eddwh24uj745rt",
        vote: "no",
      },
      {
        tx_hash:
          "4ccfc05be55e4669481b745d54da819c8688eeb343f351a6221801deef6eefa4",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1rvng7n968748udkc5rxy4h9zp9hms4s3jsfwuues76ft28uc056",
        vote: "no",
      },
      {
        tx_hash:
          "a431f8f35085af503053fd063bff77c319316af94d11acea4a99d268102a5762",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1lvsa8e0dw6z8g2fkw7prnfa7627wuy5jjexaadck6w5sxw5xkvm",
        vote: "no",
      },
      {
        tx_hash:
          "fa12139ed9309abd628cd742346b4ce4a4fe314c7415263100d2aac68ad49037",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1ppznyu6qrvlw9uuqa3tslryjd40nh56jyvmaqw6kdf4kzq3y8kh",
        vote: "no",
      },
      {
        tx_hash:
          "9843e8854e6f83547346b9de9e50b2a01cbfcee80c8b792ba9d95433147eef7d",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1jz5ljsnj4fzmk84j0wcw9ldy866dn07nzqg2ktyuyjvfvr3jgtq",
        vote: "no",
      },
      {
        tx_hash:
          "002103f1988c570956c0463b6851402fa90ead77726f51359763a6d7e59f3255",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1jql92je87mrx5gpjhmwr6a8a766cktcf5p0p8wd0wxq87nu80yf",
        vote: "no",
      },
      {
        tx_hash:
          "a7c2daaf85b4ef8bacbf60f158a05490fff2170a64d87d1cd430687a744a4177",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool13pt7us94nw782t5v4d89sz8zqn8hcn8r8r7hhph5mvxvvp3c76v",
        vote: "no",
      },
      {
        tx_hash:
          "0d471a1ce04493b3eba775853df1c47076fb176a9f045963c5592962f8d89ddb",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1ekcsyzwexl7p2kwxxh34hy28l6772vrmff7jwmuxsa6u6fzty9z",
        vote: "abstain",
      },
      {
        tx_hash:
          "61e54d2fd0e390c66c7f6ca6bb4535d69f73ad983fde15398fdf1955e5547f04",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytnvazqpsj98pu7w6vtmeddcy9pnn6y6nl0psr5ajzge52s82zz8t",
        vote: "no",
      },
      {
        tx_hash:
          "7766d551a7cd0400fa95e8db6597667c1e7b4f64617e7e9fca5cf5cdbf5adb5d",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2rvnp40ea4zsl4hqm0ev4qju205jx7mz57u2vwjzzrf50c24jca9",
        vote: "no",
      },
      {
        tx_hash:
          "c985edd2415238274e05808b47ba50fb50015f78bfd10dc72cac00daeec7b576",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y20w8vxwd3venlvp0muxwzmdlr7a006dpz580czmaj422sqng6fkg",
        vote: "no",
      },
      {
        tx_hash:
          "5c791d785280885ee0fd07380a133aae120ea6563f2d9bfbf0c7fcfafe92cec8",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yg3gl27d62c6qdz4ffay9kkutywk2sxw2shvp4a8xjse0vg850rla",
        vote: "no",
      },
      {
        tx_hash:
          "dfe4ead3170e0de0e14ad40d6e83571282c5d2d17b7243260e02f9882149937f",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y25xtvu3d0gaf6cxktr9pkfgnywmqsh4fum93s8m3hlp4aqj3uqdp",
        vote: "no",
      },
      {
        tx_hash:
          "b7a3dba363e2a9a760b544d11094c5fff0700edecde251a433d1a2c2b98bd442",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygtvnwgsucstvesms2hv9vc8hw3tye5zhzldmszrxqd2rxsje5c6m",
        vote: "abstain",
      },
      {
        tx_hash:
          "8350176886ae34fea0d7839219af7cd48bb603f134be6815ff8932d692990946",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yf2jzhuc4f7eu2yay9d9ta3dykxxcwn34wz8kak7nhd7vcgrxn7ns",
        vote: "abstain",
      },
      {
        tx_hash:
          "0201395b8d750f4cef99dd61d6f1d0546ed6df00ed5f14f7f1de18183294be38",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2j2q9pcl855969ea9csrhdta6slnamctgzuvuqnnkl6fusqyjy36",
        vote: "no",
      },
      {
        tx_hash:
          "a3e6d4ef0570bf6db0e4d926b1583b920fae55e16f467adb4faba4da9530238f",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfpgzfymq6tt9c684e7vzata8r5pl4w84fmrjqeztdqw0sgpzw3nt",
        vote: "yes",
      },
      {
        tx_hash:
          "4df0aff05e898377ca93040f8aa9a1c9415d2add1233173824c54fa600d885bf",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2m0g4r66pyaw3p7u454wc0p4f0ygm8ueaev0mgd3tvwm7sskqwqp",
        vote: "no",
      },
      {
        tx_hash:
          "407eaced0a263c996c90bc81a9d1109e67120d5029e798be265b5c8c8b3c22d7",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygkfv2u7aazrfhqgh0qssramjd6av09rsh3ejd0rd95cmusezderl",
        vote: "no",
      },
      {
        tx_hash:
          "eee6d73640afa8f81cf961fcd1d178d746a26029740b3b007a2f3d7c22bb9d94",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yg04a5ulpxkwsu9wyf535mdt2vzsyxcvqupmsu42ucufensqkaw4r",
        vote: "no",
      },
      {
        tx_hash:
          "b58ef0f1c462058ad8e13d5bd6ac7b8430e24f9824a6dfe2253661bcb5d82d76",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yglrf4el8gghum239fggvfrau25k2576y4dvcz65r2ukj8sqpsc2k",
        vote: "no",
      },
      {
        tx_hash:
          "00ca304cfa6225b0046dfa5f77cd66ac1da5069a9e534ae987d9e144f8f66374",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytwn2u7qpy4ur7k3xqd7eehft3g2yjpxf46rugwzmndkyesd0m5nt",
        vote: "no",
      },
      {
        tx_hash:
          "f0da30fda170b8cb0c1ddaef0136d7e12433ba0ca6ee0e08819056d21c2a3bb6",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfc5nkp4kq7r72hal3eyvs9hvsar7yu8vt2j4z58m3wz7dq6c29vn",
        vote: "no",
      },
      {
        tx_hash:
          "5dabdbc7a373c61104b8883a8d29d09fa595f6b0b1d89f1fed9267a9c830a368",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yt49c9gfsrhf3uzl0ayw0rwykhqssmc6akyhwa7lyvuhltgehnnhv",
        vote: "no",
      },
      {
        tx_hash:
          "fd09b0e2578c388fe321cd0d274d48ebb40a93a91e129be2f99fcb238f57c785",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygc76qwd9jp4yae9jqeg8e89xhg2pfsqh2ep3zcxck09uzc5sl9s9",
        vote: "no",
      },
      {
        tx_hash:
          "5ff0d6d3952c365b0fc727080dbab8eab71516492775758185aaeaa55c3dc25f",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytkzpmmukjy6qn6xd5skqm0ypcj5juw9rxddr5mmlzgjvtcghwqjr",
        vote: "abstain",
      },
      {
        tx_hash:
          "a93b7de8c36df7f4453802b22419e6a114b6d14bcaddafd6340a53de3066c935",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytzshxuma6cwrnlv2ucyclfqw3k4nu4nuudmh2z87j9hncsk9dhy4",
        vote: "no",
      },
      {
        tx_hash:
          "a93b7de8c36df7f4453802b22419e6a114b6d14bcaddafd6340a53de3066c935",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1qqqqzyqf8mlm70883zht60n4q6uqxg4a8x266sewv8ad2grkztl",
        vote: "no",
      },
      {
        tx_hash:
          "be2a4ecd3fec8ba8d82b18b8761ef9f2e2d76889938bc1582e3b1cd67ce686f1",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfemdmjmxr59kecgqnzd8d0ankkue4rdnn35c8qfsuljt9cjree5m",
        vote: "yes",
      },
      {
        tx_hash:
          "e477a8e968c50548e20779ee8ad355a2f4e8f8f28c92a7f699cb239548b51b33",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygeyfh8nm03dnl5a2hxdtv09pu7uhep9l0cpg0zpr60jqys05cku2",
        vote: "abstain",
      },
      {
        tx_hash:
          "c407a9f789ba14e62d342900cdd2b7edf4a1e4f1c530e766256e97ba6ac1d3f2",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytj6hav29ur96ghu5mux7qsusr7jaff2gkfyvk0fur6f8xqyqh6dt",
        vote: "yes",
      },
      {
        tx_hash:
          "38aefcaa3a65f358ee12112a0d58627e7b58e146da30b556b2294d787e88fe2e",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1arsqn9w87wpqlm0sre66gs79dcs0jmwulytgke3vut7u62lttu7",
        vote: "no",
      },
      {
        tx_hash:
          "6c7ae19f0e26ec8ba4bfd1cdcab2ee0bf1a33eaa00fd4b2ba8e44e20946d4671",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yt9xg7l0dlgxj3lyewmndzrq5wzj3f4nusdkpfa9n7zf4ssayqnk0",
        vote: "no",
      },
      {
        tx_hash:
          "80f2775c2b353617dd58792fff73c285f6e5e0c1bb3bd69cec38b9c5de338e3d",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2cxf9uqcy5ge6980xfkjas89uwgzpd23amqqnlyjn8p2ygh7j7na",
        vote: "no",
      },
      {
        tx_hash:
          "5e3833125cf409d892f3153d45f2ff44ee9d3bdd553e5810e7cb45b126ae5006",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y29h2q6cst2pvkl2sqqvf5ljcy36uv7pmy482xnczddzgqshus24w",
        vote: "no",
      },
      {
        tx_hash:
          "ec0c02ceb5101cb4a77cba3c3a38d843b577bf36033078ce0944ec008d51fcc3",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfk9pcvlh2j8m4azy6s463338v4s3qz9k8lzz605q9wh6zqjrckq2",
        vote: "no",
      },
      {
        tx_hash:
          "d20a8e4e21ea6b3d9dd5bdaa1cab178aa39c322b7101106a7eaa789902aac9cb",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2rvnp40ea4zsl4hqm0ev4qju205jx7mz57u2vwjzzrf50c24jca9",
        vote: "no",
      },
      {
        tx_hash:
          "d0d1a6bcb8f97ae49015e7ae5456a2d09281671467971a1b9a6767fb1bf09ca5",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2j502uqsjl7ujrg5e73mxc2up2wu963r6eg44zdglzanncytjpxy",
        vote: "no",
      },
      {
        tx_hash:
          "47f9cbbeb328fc8243604d3af81796f9c1d87bb71e546194c1c696e685b0b4bc",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1ljlmfg7p37ysmea9ra5xqwccue203dpj40w6zlzn5r2cvjrf6tw",
        vote: "no",
      },
      {
        tx_hash:
          "e725f2648ff2d9470ad44ef3b5188f4e8fb107c759a4d561ee1621de474719fb",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygfz37q5dew40aechr8f6zn6qv5a3akyzwfrhr7rf6vz3vqpcxzje",
        vote: "no",
      },
      {
        tx_hash:
          "a9d78c3731db12360d57f767d8fbc4166e4d9f1fe28affa39eeba84a9a158b3a",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yts3qdjsqcnhld4r3uek2uu0n2tnh824tgnf75a83q3yhequuy54u",
        vote: "no",
      },
      {
        tx_hash:
          "59d3ebfc6cc6722e9c463bb578c13926929f69811cfffc66fe4716c4aec99d97",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yt77crnmjuqkj9gcwjjsurez7s07jhwhyt4suxs3xeqftcsfrspun",
        vote: "yes",
      },
      {
        tx_hash:
          "5bf2f72d297404239651e5e44f646f2866ecc26ef0739a8274c4141f646d513d",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygny6qfdmretrjufrzr6kr72jqtaddqa90c367usrlgyjls7yrjw8",
        vote: "no",
      },
      {
        tx_hash:
          "a0a8ff8eee3c207bc2a577b11537b990ff2af4938b4d9c9e9aa1ec70abf08cc5",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1y89sy2e927hvvt66wnukx5xnnrarzxrt55eypttaw3n06u0uam4",
        vote: "no",
      },
      {
        tx_hash:
          "0b95c16480b7526b45b144c71ed55abf95bf3a25ae7e71d39d4e18023905fb86",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2lhe7wn2sr6vme8gnca4jrkhv47uh3tklsykmrqvwzdq4g5s8wju",
        vote: "no",
      },
      {
        tx_hash:
          "add439bd02b47fa7a2a9af76f431530c105018705bbe1ca56f71a067955aa465",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yftc8zs7gjcj4a9nxzplz4wg6cwweya0kxp8adnw59vsyrqvrysud",
        vote: "abstain",
      },
      {
        tx_hash:
          "ad20849c5fa4259170e82d05a4cf356c30a18c1897f1b6c14e92b63b279d01fa",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygj02llvuusnhphvhlxf7d2cxhs53twjnwwl5at3zwht4xc6xdgl4",
        vote: "yes",
      },
      {
        tx_hash:
          "92ed393a7d502a402e883643f1702bb28e872d7007497e905dee92557596fbe8",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfvaqxpkft4lth0ldym5rhck0xj8e5euarexat3martg69qdapm33",
        vote: "no",
      },
      {
        tx_hash:
          "4e216abe67158e3da924efa72abd0fc98b1c97f58796f5fb15412285ebde7b7c",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y25rvalxnc4p8fghxcwkz0l6gdseqduqvrdzh5pzdprrvnczj0ucx",
        vote: "no",
      },
      {
        tx_hash:
          "e5b78052deada2c4304dc3d329373b5f5b7dec44432edb0546271e02d90322ac",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool17xextu09ghdfcmsq83whq0a45geg83jxe4qt94sevu087tzdzkl",
        vote: "no",
      },
      {
        tx_hash:
          "6f7b83ec8f4be5d2f073640d0c22702a65ce3d2f9953f0c1f8b7b838fb2fd4ef",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1g6g2d09le8hd6nv9jhyavewdnw8tu0ndst4lqysd00ru24cav0a",
        vote: "no",
      },
      {
        tx_hash:
          "4aee9233199d11277508fa8cb7d2e2c4385649861d041bd3165e2234c696b8fd",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1tdvqgy6mq7lx7d345e276xmgmhh3s4zj8dzu6xzq5m7rx4tzkg2",
        vote: "no",
      },
      {
        tx_hash:
          "d37076df4fa69367a3c118ceb25a8fd70ca05924b3c01be38c97bcec7c0654b9",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1q5sspejl875flc0z6wh9y9zxkgqnk0y3aaw8jc0pkxs6cpavm4q",
        vote: "no",
      },
      {
        tx_hash:
          "076edb4a7471a682c19edf2712e8ad076721a4d18f176f9e05ec3e06f12c3b12",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1ft4xjlz9uw0r0ewcgtkgeakqrfc5azxmxwsm5pt94dv67mw4rgd",
        vote: "no",
      },
      {
        tx_hash:
          "766fec127db2c4321c164cd51aac25fefa9432388b96e6b25907f884c76df885",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool10eltx2wej46e62ulmwzm35xfu0azu47yvpjper7gwhncqe74vg6",
        vote: "no",
      },
      {
        tx_hash:
          "cfaae030a2cc67ecffa06a3ac35d13a883f21e2ce5d6823231149f2f5297e24c",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytxtrka4tmvm692nkgkdh4uezns35wdqerqugacdvttlzdga03rnz",
        vote: "abstain",
      },
      {
        tx_hash:
          "98e2b73efcdde96732a4873ea5daf3c3192523c2cb1f07939a5cdc2b7df0c753",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2hlgh9600zjlt39dh54z7z8d65kahneck8yhh7ugmzc9as0xrzqd",
        vote: "abstain",
      },
      {
        tx_hash:
          "263f50beaf9c3b82c16fc3ff8df416d9697fff556a73f4c5246e80006ef3b038",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytfnmf4uftt4fe0h63xhadl0v402gr6nnhtcgrq2sas26kgaf3n5y",
        vote: "no",
      },
      {
        tx_hash:
          "5beab0a1611a59879c176601e97509858ae565003a03deb487815667c51a03f9",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool16cdtqyk0fvxzfkhjg3esjcuty4tnlpds5lj0lkmqmwdjyzaj7p8",
        vote: "no",
      },
      {
        tx_hash:
          "c4d890fff55b403a46a573924acd7e7029f7a0c879a4660468b75f2ea9c6e18c",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool12wpfng6cu7dz38yduaul3ngfm44xhv5xmech68m5fwe4wu77udd",
        vote: "no",
      },
      {
        tx_hash:
          "40e1cad60d3996bcc92107aa5716e5689a5ab22e4372ff54b289a59441ff3b45",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yg7svuv02gh9j2q574jv06l4xnzwyp63effljze28qe993caj8ras",
        vote: "no",
      },
      {
        tx_hash:
          "95f880700a8ad31515aeece30737868b9dcd26ade91e909b25a4d033bfe4840d",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y04c5l848c6f47tcaqwxfnh0e6n9ngz4txurcwzvlyuwpjsktpah6",
        vote: "yes",
      },
      {
        tx_hash:
          "cc95f757c9e2ffdaddf84bc5e13e33c73cf86999c6a8a534199ec3605c7239e6",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1q7k8mmnvsgthp94hpn8jrnacjewplvywq70eef90fv4nu7gedzp",
        vote: "yes",
      },
      {
        tx_hash:
          "c7457c640ab4c07bdeba617b6d4bac4a9305c69832c321e8757c6bde7e222c58",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfrmyrf4twcxa0z3w63842ktmufdu06c3vdaz8rpkgzu8gclnyuh9",
        vote: "no",
      },
      {
        tx_hash:
          "ff23713151ca303e9cf8132ba23c9027146d255caca729f176fb424d4f817d52",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1rvjj8cp3urh7de07pm0ceqha2x4lxws69lhd4429dm6djfjsy4l",
        vote: "no",
      },
      {
        tx_hash:
          "4ea4d6e714cc6f33060662b9119c9ac915e7372dff0ab9f24e6cd4f833d6aafe",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1wyfau3rlkckr3clr4mkyxn9vdlrkup0fj7uyyflfccmms24gm3a",
        vote: "no",
      },
      {
        tx_hash:
          "9a0bf43fecff37f523f3864a836b4c60717b862a47ee5d7ddae8f44c641fadad",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool12rs385dd534g8gtdtmnvlhq63whdvc6vnuzxa5cpx843zdy73qy",
        vote: "no",
      },
      {
        tx_hash:
          "ef4a9eaaffa5f8f4e6e0b177031f46955e90518f9d5c5d2540da240e859fdcd6",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool149d5lzg7m6susau4f4yfdztgkty34qrcdpvd3ygsetmljgxxf8g",
        vote: "no",
      },
      {
        tx_hash:
          "0c4a980e1c6e1b9a77b992bb58116c06e1fd40c50403f7ba7e5ba77bd9229466",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygtxcscvznhs2nqap9u8gtxa0dx0l6q5zhsqqlw46enwh8cttd07h",
        vote: "no",
      },
      {
        tx_hash:
          "15c4aa1b3be111240496f95acf830073acc89745437ea57206fa908fd6905f4b",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yfzzwr8jznn02mzepvs6y9n4329eskzpgygjdh4ew28szpcd5hr4f",
        vote: "abstain",
      },
      {
        tx_hash:
          "3fe829092c50050ae03b3c578e19b9162c557b6eb4c5a3e03c782197c1203a6e",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytr0t0sxfl7qf99zd8x9dam8c0mqkemrtuekh4hekpd8fpqty2h5n",
        vote: "no",
      },
      {
        tx_hash:
          "5029bb16a9afc44571ea9cd02893a29270e0bb76f522cce37a6e63eb37b8e6ea",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yf8p623g9s0yxnlnjzealgajyxl57k7n6saeavc7azg0crcahnul9",
        vote: "no",
      },
      {
        tx_hash:
          "0d583b24b29d38fcb173faacf06330c8741eb248e835ebc2713b8d017df5c760",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool135h773klt7djljmyawkh88e8qc457wxqfhc6j9h6y9n4y3sgh7t",
        vote: "yes",
      },
      {
        tx_hash:
          "a94357bcc05451b5b2ec6edb5df3d0ecc271b31150ddcafe988caee460c84f62",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2fhyudw8ju53e296c3yugvul6h3fpurhnx45lfa9e5meqgtky0gg",
        vote: "yes",
      },
      {
        tx_hash:
          "c1edd9d621cd69ee5d4752ec8d5dd93fe412189841ec4652bfd07fc12a0acfdb",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ygvg64lyk4uv5l2qgcrhv43jszp2t8lazjtr6dgnntynwtghqglsm",
        vote: "no",
      },
      {
        tx_hash:
          "f21abe7e0287f6c4fbaecaf764ebde6a36e8f17f045b65e6c967c6f910d31153",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yg343cyuckglj48a6gpcey7fkfcy5x5f9g65wme3ne9q2mgaedmkm",
        vote: "no",
      },
      {
        tx_hash:
          "a687be4f7e42d8654b3c595abbe615cefdba457158fa8b3cbfaf33327dbf3b65",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y22eh8rzfmnjw8m82hlcgxfm8tcmwqmdqy2mjupdduztq0s5s5dkk",
        vote: "abstain",
      },
      {
        tx_hash:
          "6f558ab8a51289b5fa2f6457b79f434dea30c751d731021ef41ac953810eaba1",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2fe60lxjcnfldfgqlppy5ltu3909qt0fwh8k3v69xk0krcg037gj",
        vote: "no",
      },
      {
        tx_hash:
          "21103bda1536f202b536d69c50a1303eefd27d59ba8a6d1e2a116c44877c659a",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1vev8z03vh7jwx3mfrgzrt9fltt97nupaxv8ffj4r5r8mgwts5ze",
        vote: "no",
      },
      {
        tx_hash:
          "07dc3c4ee8b63bff096ebad11831d84bef27ab6011f0c16862df917d935979ac",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yg5pzxhp0lu0m7757ww2hke8qhcuqgqt3c2ezphngwytz4gjr6yge",
        vote: "no",
      },
      {
        tx_hash:
          "07dc3c4ee8b63bff096ebad11831d84bef27ab6011f0c16862df917d935979ac",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1vc8jhqtwjrjwsfk6a0enx47hd2ufg98c34ta6lvl0zv0uhpech9",
        vote: "no",
      },
      {
        tx_hash:
          "d281ca8030a11e7ba87abdf94ab9070af4041f330c464c99f19fd5477654a4ad",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2waan385g6y965qzvupzn7wu38jwvj4vp4nj7dugmrz8hq7jyckh",
        vote: "yes",
      },
      {
        tx_hash:
          "a7dfcdbe953461a9c64a48955811014447c20e048943d742a4d47a8ec2ae2b51",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yteze88u2ck9wup8kr87qxf2tj736epvqr8cekaxxh5y5estsal7h",
        vote: "no",
      },
      {
        tx_hash:
          "e27bd5ee11965ac679337955ea43d85e902bc71f6c695023cef346abc4c68323",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y2dnsj0taktxwmzwf4a7sp0mg3rvm3jsetag0h0m83khs3c7d3l6x",
        vote: "no",
      },
      {
        tx_hash:
          "3ff12b89405b9c921a37564f8e8188cad87028529abe80c1d0078836144b7c0a",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1yff9usc98s9rxvrhrjt44yj33pdwd6nse727n64qk5kcr6sxmjtga",
        vote: "yes",
      },
      {
        tx_hash:
          "149a6f9c3d9aeecb8c36ae82f35981631b68d9626a2665c9e89161e2d5bc46b0",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1lurfk0k0wwx54hlg8a7zp3jtstu57u59aeq7aketl55hknmmtu0",
        vote: "abstain",
      },
      {
        tx_hash:
          "3feeab42da43ac8a2bda1ddc05adcdd99fef2ac4bfedd24764f0becad082364c",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytfas4axhm8yzrqqh4ru2uuqesu87zeq6fwg5pq8azqf7ecu4nu8s",
        vote: "no",
      },
      {
        tx_hash:
          "a7eb4abf8a267853bf04ffd2cfc97098c579a143c3b4cd3d41c01ab8629ef8d2",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytrg2ruc44lutzd5tqw5m49rk9lxmrpjs85k8l2qsntvgls0mez9v",
        vote: "no",
      },
      {
        tx_hash:
          "556ddfd64b4fce61357076c471c7b93623f7960f64c3bf1e0692fc1b3601cdcb",
        cert_index: 0,
        voter_role: "spo",
        voter: "pool1ekcsyzwexl7p2kwxxh34hy28l6772vrmff7jwmuxsa6u6fzty9z",
        vote: "no",
      },
      {
        tx_hash:
          "afad520732443a294dc2ceda9eee6ac4ecf5b12b0fb3f99d1328e9bab1b586a9",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1y22eh8rzfmnjw8m82hlcgxfm8tcmwqmdqy2mjupdduztq0s5s5dkk",
        vote: "no",
      },
      {
        tx_hash:
          "a6cb045790f4306f57ae0bca1354fe6467730fe9756332a28e5b8050b88d8fed",
        cert_index: 0,
        voter_role: "drep",
        voter: "drep1ytfelt9p2jz29ejymnj52z7wwzs86uaqenlf5n639h5xsxg6xgsn0",
        vote: "abstain",
      },
    ],
  },
];
