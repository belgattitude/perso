export const isExternalUrl = (url: string): boolean => {
  return !(url.startsWith('/') || url.startsWith('./'));
};
