import { expect } from 'vitest';
import { Got } from 'got';
import { BlockfrostServerError, Responses } from '@blockfrost/blockfrost-js';

export default [
  {
    testName:
      'pools/extended output matches data returned from /pools/:pool_id and /pools/:pool_id/metadata',
    endpoints: [
      'pools/extended?count=1&page=1',
      'pools/extended?count=1&page=2',
      'pools/extended?count=3&page=3',
      'pools/extended?count=3&page=4',
    ],
    customTimeout: 120_000,
    customTest: async (endpoint: string, gotClient: Got) => {
      const poolsExtendedResponse = await gotClient
        .get(endpoint)
        .json<Responses['pool_list_extended']>();

      for (const poolExtendedData of poolsExtendedResponse) {
        const [poolResponse, poolMetadataResponse] = await Promise.all([
          gotClient
            .get(`pools/${poolExtendedData.pool_id}`, {
              timeout: {
                request: 30000,
              },
            })
            .json<Responses['pool']>(),
          gotClient
            .get(`pools/${poolExtendedData.pool_id}/metadata`, {
              timeout: {
                request: 30000,
              },
            })
            .json<Responses['pool_metadata']>()
            .catch(error => {
              if (error instanceof BlockfrostServerError && error.status_code === 404) {
                return null;
              } else {
                throw error;
              }
            }),
        ]);

        expect(poolExtendedData).toStrictEqual({
          pool_id: poolResponse.pool_id,
          hex: poolResponse.hex,
          active_stake: poolResponse.active_stake,
          live_stake: poolResponse.live_stake,
          live_saturation: poolResponse.live_saturation,
          blocks_minted: poolResponse.blocks_minted,
          margin_cost: poolResponse.margin_cost,
          fixed_cost: poolResponse.fixed_cost,
          declared_pledge: poolResponse.declared_pledge,
          metadata: poolMetadataResponse
            ? {
                hash: poolMetadataResponse.hash,
                ticker: poolMetadataResponse.ticker,
                url: poolMetadataResponse.url,
                name: poolMetadataResponse.name,
                description: poolMetadataResponse.description,
                homepage: poolMetadataResponse.homepage,
              }
            : null,
        });
      }
    },
  },
];
