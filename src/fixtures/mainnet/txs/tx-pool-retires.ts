export default [
  {
    testName: 'txs/:tx/pool_retires - generic shelley with pool retirements',
    endpoints: [
      'txs/33770d42c7bc8a9a0bc9830ffb97941574dc61dc534796dd8614b99b6aadace4/pool_retires',
    ],
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1g36eg8e6tr6sur6y3cfpd8lglny3axh6pgka3acpnfyh22svdth',
        retiring_epoch: 236,
      },
    ],
  },
  {
    testName: 'txs/:tx/pool_retires - shelley MOST pool retirements',
    endpoints: [
      'txs/8c8376b28e8d729115ea6e88540747160fab22d754ad6a11c55ab159024d8005/pool_retires',
    ],
    response: [
      {
        cert_index: 0,
        pool_id: 'pool1uqehpxy4wst2k5u640wdt9tgmqdd26l0dahgxf3ln70js830xv2',
        retiring_epoch: 237,
      },
      {
        cert_index: 1,
        pool_id: 'pool1x8ujs98g90dchw8kvu7u8jzntdh656u376fv7rv62e84jmznsr9',
        retiring_epoch: 237,
      },
      {
        cert_index: 2,
        pool_id: 'pool1welc4vthqtkvcf2e4adza90np6p7v7c4dmkmf567w3xr7ffqd72',
        retiring_epoch: 237,
      },
      {
        cert_index: 3,
        pool_id: 'pool19nrqgmwwz8xu939ulpskuky2qq5z36v4jtnwcs69qr7xy4j495y',
        retiring_epoch: 237,
      },
      {
        cert_index: 4,
        pool_id: 'pool1nncdkshmqynzv3ledrlnan542qercf4h8xydjjylkg0xu62fk6y',
        retiring_epoch: 237,
      },
      {
        cert_index: 5,
        pool_id: 'pool17vxhghxt2w2hc8c945ex2wqpwlcz39v6uc3fcxvqln45s8xrdt3',
        retiring_epoch: 237,
      },
      {
        cert_index: 6,
        pool_id: 'pool1uy8ws63cmz37gaunkhuehynvr4a0yakw2yv0vfjs704326nte98',
        retiring_epoch: 237,
      },
      {
        cert_index: 7,
        pool_id: 'pool17038jcq6xdgjn0xsjx7m79rx52r7sucqwtr5j20tk23w5mjank3',
        retiring_epoch: 237,
      },
      {
        cert_index: 8,
        pool_id: 'pool1l3fvlzadk5hg78wy3e304s9t8tjzxnu962e2fl7tq8x2yg3mz6l',
        retiring_epoch: 237,
      },
      {
        cert_index: 9,
        pool_id: 'pool1j25x3lguq95gp0tt8ng2nw3fz9ea2p6a89vmgffdw6h0zyh66a0',
        retiring_epoch: 237,
      },
      {
        cert_index: 10,
        pool_id: 'pool13kd6k66rrrhsh4s9px92qxymsrkjcjy336lpg80tt38lk6r799y',
        retiring_epoch: 237,
      },
      {
        cert_index: 11,
        pool_id: 'pool10dwjth7esfw5gc036vu6l6csnvn6elqax0d3kh8t65rxyewk2g3',
        retiring_epoch: 237,
      },
      {
        cert_index: 12,
        pool_id: 'pool1augg8mngjqjmxr8zypdqx7066f67q5cjcuwf738ja7csynadd99',
        retiring_epoch: 237,
      },
      {
        cert_index: 13,
        pool_id: 'pool1czg8a3gg33aujkkcf9wrnr8zf4qq9qn0rrkh04umrg60k0vyvdl',
        retiring_epoch: 237,
      },
      {
        cert_index: 14,
        pool_id: 'pool1cz8pf6u3m9n6s4ql9nrgd5gx4tzflr49wcy0cuy5n4tpu00pa4f',
        retiring_epoch: 237,
      },
      {
        cert_index: 15,
        pool_id: 'pool1dfg7g6u6vvs4av77frff5f2zejznmjmvtewhxzyg5h3p5m3we65',
        retiring_epoch: 237,
      },
      {
        cert_index: 16,
        pool_id: 'pool16qd8xyz4dsn3g5zxdxtvr253u8jpy7xcn4ut9v92ug20gegt55h',
        retiring_epoch: 237,
      },
      {
        cert_index: 17,
        pool_id: 'pool1rcj4kw3nepfpwr6s2tzgq3x3emw45n9w58063j98h38rse482k0',
        retiring_epoch: 237,
      },
      {
        cert_index: 18,
        pool_id: 'pool19z8vmgdts5lstk8z5lc8mgz3a8jhggscsf9cygvuz0vtuzcsxyu',
        retiring_epoch: 237,
      },
    ],
  },
];
