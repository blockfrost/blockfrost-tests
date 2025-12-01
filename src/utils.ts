export const normalizePath = (pathStr: string) => {
  // 1. query params
  let normalized = pathStr.split(/[?#]/)[0];

  // 2. / at start
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }

  // 3. / at end
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  // 4. {param} -> :param
  return normalized.replace(/\{([^}]+)\}/g, ':$1');
};
