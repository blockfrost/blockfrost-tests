export default [
  {
    id: 'accounts-stake-address-generic-dormant-stake-address-with-one-address_a1cbedfa8287',
    testName: 'accounts/:stake_address generic dormant stake address with one address',
    endpoints: [
      'accounts/stake_test17z3asy8j38jwwev9n856wl5z88fwsnmy5vt4endnalm6tsc33dwc2/addresses',
    ],
    response: [
      {
        address:
          'addr_test1xznnmfk43w5cag3m7e9nnfe0wcsg5lx8afv4u9utjk3zxv9rmqg09z0yuajctx0f5algywwjap8kfgchtnxm8mlh5hpskzjeaz',
      },
    ],
  },
  {
    id: 'accounts-stake-address-generic-stake-address-with-zero-addresses_a0cff645fbd8',
    testName: 'accounts/:stake_address generic stake address with zero addresses',
    endpoints: [
      'accounts/stake_test1urfjhemxd66mhxds7g6w07gsfy6dx2fheh6jv7zyd88l54qxghsqh/addresses',
    ],
    response: [],
  },
  {
    testName: 'accounts/:stake_address bf stake address with many addresses',
    endpoints: [
      'accounts/stake_test1uq70zpxr7jdqxdlj895x9lvnwn9lrcknwpx8cswlld7x76gtzvrjp/addresses',
    ],
    response: [
      {
        address:
          'addr_test1qqptln5t5s0mastzc9rksn6wdqp9ynt67ahw0nhzukar5keu7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5surhhy9',
      },
      {
        address:
          'addr_test1qqu0fdq939s7505uwrc3tae03e8rgd0xpt94673n56m03efu7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5snq24zy',
      },
      {
        address:
          'addr_test1zpv68zsj9af8sxg0du6zxzmnwm4ch6atlyhcwfqdyfc7qy3u7yzv8ay6qvmlywtgvt7exaxt783dxuzv03qal7muda5srdg8p9',
      },
    ],
  },
];
