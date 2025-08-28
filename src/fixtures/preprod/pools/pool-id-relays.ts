export default [
  {
    id: 'pools-pool-id-relays-best-pool_f355126f9bb3',
    testName: 'pools/pool_id/relays - best pool',

    endpoints: [
      'pools/pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v/relays',
      'pools/8ed5ab11e76094fa2a2ab29fc3a57498d07e68f6fde6f326162eea88/relays',
    ],
    response: [
      {
        ipv4: null,
        ipv6: null,
        dns: 'relay.preprod.staging.wingriders.com',
        dns_srv: null,
        port: 3001,
      },
      { ipv4: null, ipv6: null, dns: 'relay.preprod.wingriders.com', dns_srv: null, port: 3002 },
    ],
  },
];
