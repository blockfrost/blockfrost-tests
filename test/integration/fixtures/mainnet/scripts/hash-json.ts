export default [
  {
    testName: 'scripts/:hash/json - AlwaysSucceeds json should be null',
    endpoints: ['scripts/67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656/json'],
    response: {
      json: null,
    },
  },
  {
    testName: 'scripts/:hash/json - timelock',
    endpoints: ['scripts/65c197d565e88a20885e535f93755682444d3c02fd44dd70883fe89e/json'],
    response: {
      json: {
        type: 'all',
        scripts: [
          {
            type: 'sig',
            keyHash: 'a96da581c39549aeda81f539ac3940ac0cb53657e774ca7e68f15ed9',
          },
          {
            type: 'sig',
            keyHash: 'ccfcb3fed004562be1354c837a4a4b9f4b1c2b6705229efeedd12d4d',
          },
          {
            type: 'sig',
            keyHash: '74fcd61aecebe36aa6b6cd4314027282fa4b41c3ce8af17d9b77d0d1',
          },
        ],
      },
    },
  },
];
