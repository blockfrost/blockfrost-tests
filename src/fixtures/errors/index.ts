export const error_404 = {
  status_code: 404,
  error: 'Not Found',
  message: 'The requested component has not been found.',
};

export const error_invalid_path = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid path. Please check https://docs.blockfrost.io/',
};

export const error_400_addresses = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid address for this network or malformed address format.',
};

export const error_400_accounts = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid or malformed stake address format.',
};

export const error_400_assets = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid or malformed asset format.',
};

export const error_400_assets_policy = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid or malformed policy format.',
};

export const error_400_from_to = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid (malformed or out of range) from/to parameter(s).',
};

export const error_400_epochs = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Missing, out of range or malformed epoch_number.',
};

export const error_400_pools = {
  status_code: 400,
  error: 'Bad Request',
  message: 'Invalid or malformed pool id format.',
};

export const error_400 = {
  error: 'Bad Request',
  message: 'Invalid path. Please check https://docs.blockfrost.io/',
  status_code: 400,
};

export const error_400_blocks = {
  error: 'Bad Request',
  message: 'Missing or malformed block hash.',
  status_code: 400,
};

export const error_400_blocks_out_of_range = {
  error: 'Bad Request',
  message: 'Missing, out of range or malformed block number.',
  status_code: 400,
};
