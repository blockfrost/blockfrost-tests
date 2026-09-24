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

export const error_400_gov_action_id = {
  error: 'Bad Request',
  message: 'Invalid or malformed gov action id.',
  status_code: 400,
};

export const error_400_cert_index = {
  error: 'Bad Request',
  message: 'params/cert_index must be integer',
  status_code: 400,
};

export const error_400_slot = {
  error: 'Bad Request',
  message: 'Missing, out of range or malformed slot_number.',
  status_code: 400,
};

export const error_400_label = {
  error: 'Bad Request',
  message: 'Missing, out of range or malformed label.',
  status_code: 400,
};

export const error_400_drep_id = {
  error: 'Bad Request',
  message: 'Invalid or malformed drep id.',
  status_code: 400,
};

export const error_400_cc_id = {
  error: 'Bad Request',
  message: 'Invalid or malformed cc credential id.',
  status_code: 400,
};

export const error_400_xpub = {
  error: 'Bad Request',
  message: 'Invalid or malformed xpub format. Has to be hex of length 128.',
  status_code: 400,
};

export const error_400_xpub_role = {
  error: 'Bad Request',
  message: 'Missing, out of range or malformed role.',
  status_code: 400,
};

export const error_400_xpub_index = {
  error: 'Bad Request',
  message: 'Missing, out of range or malformed index.',
  status_code: 400,
};

// Fastify schema validation of an `integer` path parameter (e.g. `epochs/abc`).
export const error_400_integer_param = (param: string) => ({
  error: 'Bad Request',
  message: `params/${param} must be integer`,
  status_code: 400,
});
