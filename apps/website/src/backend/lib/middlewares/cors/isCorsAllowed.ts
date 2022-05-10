import { isNonEmptyString, isPresent } from '@belgattitude/ts-utils';

type Params = {
  origin: string | null;
  whitelistRegExp?: RegExp | null;
  whitelistHosts?: string[];
  /** if origin not present in request, return false */
  blockMissingOrigin?: boolean;
};

const defaultParams = {
  origin: null,
  whitelistRegExp: null,
  blockMissingOrigin: false,
  whitelistHosts: [],
};

/**
 * Check whether an origin is allowed.
 */
export const isCorsAllowed = (params: Params) => {
  const {
    origin,
    whitelistRegExp,
    whitelistHosts = [],
    blockMissingOrigin,
  } = { ...defaultParams, ...params };

  // 1. For Rest tools, server-to-server that does not send origin
  if (origin === null || !isNonEmptyString(origin)) {
    return !blockMissingOrigin;
  }

  if (whitelistRegExp === null && whitelistHosts.length < 1) {
    return false;
  }

  const lcOrigin = origin.toLowerCase();

  if (whitelistHosts.includes(lcOrigin)) {
    return true;
  }

  if (isPresent(whitelistRegExp) && whitelistRegExp.test(lcOrigin)) {
    return true;
  }
  return false;
};
