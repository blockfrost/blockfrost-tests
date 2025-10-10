import { getPaginationFixtures } from '../../../../index.js';

const paginationFixtures = getPaginationFixtures(
  'governance/proposals/e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133/0/votes',
);

export default [
  ...paginationFixtures,
  {
    id: 'governance-proposal-votes_72bc11f9de07',
    testName: 'governance proposal votes',
    endpoints: [
      'governance/proposals/e61f151fcef9e99dff5c705f8d5de18891f8d1d92d69fef5ff608d2c29a7c133/0/votes',
      'governance/proposals/gov_action1uc03287wl85eml6uwp0c6h0p3zgl35we945laa0lvzxjc2d8cyesq4whp09/votes',
    ],
    response: [
      {
        tx_hash: 'dd44abf1ccbc1325af599fb32c302be9b345140ea5e20ca517e257e8cb9dd1e1',
        cert_index: 0,
        voter_role: 'spo',
        voter: 'pool1mfc42za8tj74zc66ez3slwtq4mumdl7yrylaxajd5xugujmhd0c',
        vote: 'no',
      },
      {
        tx_hash: '88104ea0450c5f94478dea05c6c37b1356fcd8a124b14bf0e34acff52486335a',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yfus3eg3tr384fx6ltew20n9j9ph7aduk743y6a77lgcy0cjl30y9',
        vote: 'yes',
      },
      {
        tx_hash: '92966e407388359e50df0c5e0e232229c586146090472ba1d01061ca4e508015',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yt2emvl35tdwnar7sxlaalepnar4u7l7uen0vjjq4ts8j8srcq5wn',
        vote: 'abstain',
      },
      {
        tx_hash: 'b76dd09d617dce842b9632420a1259ee87450a5a00bf43e382e09c7830df0a7e',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1y2e96usyjhhhda96ndcsykzy6z9jf4grf9jvt3v7f84sstqkyn2ne',
        vote: 'yes',
      },
      {
        tx_hash: 'fdf52eaffd4deb87171e93f8fbad792ba1e9a64da8e1b5f43519ec36a33644bc',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yfeewq0yz8f59e4rshwtas0h3mwrzs626xk3vmfqj4y394cz4mfl3',
        vote: 'abstain',
      },
      {
        tx_hash: '32b70d7d85e62bd4ba73ce1a479f45c41254b39ac58dc76ebf600e05c208fe6a',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1y22k4k0rhmh7lm9dgsd8fv8f2g7zpxax294mdrk9m9u4h2q66zvlj',
        vote: 'no',
      },
      {
        tx_hash: 'a7d21f664afa7efe6f959dfcc196d9f546d05def856d4a9a29cf6d7993e4c34b',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1ytcw6qzpqqclx2yd0zy64ztvlkkhnf6yrzza8whgnq4vz5gh89626',
        vote: 'yes',
      },
      {
        tx_hash: 'be71b7514a70044e0d890a85ed5ee5620cb35150db66d6c7f455ac29635f6ec1',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yt76he02dprm2af6x26vg76mhs2vajlg43cr9jh9dq3f2qs68ts3s',
        vote: 'yes',
      },
      {
        tx_hash: '2fbb8d53684404962869d1a791575ef6e2e00de27cc1de3f6f7f8326407c0d74',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yf220645y558fhsz7jd3anssstxyvd4yn9klprvjgm0sgas8av5jf',
        vote: 'yes',
      },
      {
        tx_hash: '1b48d71c8d8195f1559cdedfe557e7b4d4a6c4755410b217f7ae5b3a13176155',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1yg2rnlwqsytyhssz06p6ypxacarxx4v3xvtcmkm2crnes5cfyhx5s',
        vote: 'yes',
      },
      {
        tx_hash: '08be04de122cc8ef1dde1deba7297a8adabac053744983d48397c364bb25f5b9',
        cert_index: 0,
        voter_role: 'drep',
        voter: 'drep1ygkwp3xc58jlgtx437vmn9vp3fv2m3u4eww393yhxmpumcq0je3x5',
        vote: 'no',
      },
    ],
  },
];
