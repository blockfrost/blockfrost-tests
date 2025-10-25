import 'dotenv/config';
import { TestOptions } from 'vitest';
import { Options, Got } from 'got';

export type Fixture = {
  testName: string;
  customTimeout?: TestOptions['timeout'];
  // Times to retry the test if fails. Useful for making flaky tests more stable.
  retry?: TestOptions['retry'];
  endpoints: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
  postBody?: Options['body'];
  headers?: Options['headers'];
  clientOptions?: Options;
  customTest?: (endpoint: string, client: Got) => Promise<void>;
  customExpect?: (response: unknown | null) => Promise<void>;
};

export type Network = 'mainnet' | 'preview' | 'preprod';
