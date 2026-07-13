import { expect } from 'vitest';

export default [
  {
    id: 'pools-pool-id-metadata-pool-with-multiple-metadata-updates-in-one-update-upstr_cdf918758069',
    testName: 'pools/:pool_id/metadata - pool with multiple metadata updates in one update UPSTR',
    endpoints: [
      'pools/pool1407hpuvtp9ww8s5mt53ear7062j463mvwhnypurlcask7djg3ae/metadata',
      'pools/abfd70f18b095ce3c29b5d239e8fcfd2a55d476c75e640f07fc7616f/metadata',
    ],
    response: {
      pool_id: 'pool1407hpuvtp9ww8s5mt53ear7062j463mvwhnypurlcask7djg3ae',
      hex: 'abfd70f18b095ce3c29b5d239e8fcfd2a55d476c75e640f07fc7616f',
      url: expect.any(String),
      hash: expect.any(String),
      ticker: 'UPSTR',
      name: 'Upstream [Preview]',
      description:
        'Upstream is an independent Stake Pool Operator. Hosts of London Cardano Social and the 2022/23/24 London Cardano Summits. Providing community driven events and educational content. Actively supporting decentralisation, sustainability and SPO alliances.',
      homepage: 'https://upstream.org.uk',
    },
  },
  {
    id: 'pools-pool-id-metadata-topo_ef37a2ac0676',
    testName: 'pools/pool_id/metadata - TOPO',
    endpoints: [
      'pools/pool18x0rtv0vznym7cczsunqcfs5atrve4dfcavfmpe7wkg8ga4urve/metadata',
      'pools/pool18x0rtv0vznym7cczsunqcfs5atrve4dfcavfmpe7wkg8ga4urve/metadata',
    ],
    response: {
      pool_id: 'pool18x0rtv0vznym7cczsunqcfs5atrve4dfcavfmpe7wkg8ga4urve',
      hex: '399e35b1ec14c9bf630287260c2614eac6ccd5a9c7589d873e759074',
      url: 'https://cardanostakehouse.com/f60a27ae-11a4-4e87-9707-3d9.json',
      hash: '32c22289da648abcb85bf98d81ab0cde0959e92bb01dfd2837966d6b6858d3d0',
      ticker: 'TOPO',
      name: 'TOPO Testnet',
      description: 'Preview Testnet',
      homepage: 'https://topopool.com',
    },
  },
];
