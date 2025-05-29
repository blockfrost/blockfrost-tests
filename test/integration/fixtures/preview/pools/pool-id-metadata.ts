import { expect } from 'vitest';

export default [
  {
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
      name: expect.any(String),
      description: expect.any(String),
      homepage: expect.any(String),
    },
  },
  {
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
  {
    testName: 'pools/pool_id/metadata - best pool',
    endpoints: [
      'pools/pool1fw9mq9eyrp5yydl3njau2568jal62rx5f8anp2llt0e5s3pl3py/metadata',
      'pools/4b8bb0172418684237f19cbbc55347977fa50cd449fb30abff5bf348/metadata',
    ],
    response: {
      pool_id: 'pool1fw9mq9eyrp5yydl3njau2568jal62rx5f8anp2llt0e5s3pl3py',
      hex: '4b8bb0172418684237f19cbbc55347977fa50cd449fb30abff5bf348',
      url: 'https://d8bdbfbe.cardano-metadata.bison.run/metadata.json',
      hash: '64c1813d814e5c2abb5f65864ec26f0b060d49f3d206a31f34aa6428d7b682e3',
      ticker: 'CLOUD',
      name: 'Coinbase Cloud',
      description:
        'Coinbase Cloud provides secure and reliable blockchain infrastructure and APIs. Stake your crypto to our enterprise-grade validators.',
      homepage: 'https://coinbase.com/cloud',
    },
  },
];
