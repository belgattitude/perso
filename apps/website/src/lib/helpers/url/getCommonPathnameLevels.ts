export const getCommonPathnameLevels = (
  /** pathname to compare from */
  pathname1: string,
  /** url or path to compare */
  pathname2: string
): number => {
  let levels = 0;
  const paths1 = pathname1.split('/').filter((x) => x);
  const paths2 = pathname2.split('/').filter((x) => x);
  let i = 0,
    stop = false;
  while (i < paths2.length && !stop) {
    if (paths2[i] !== paths1[i]) {
      stop = true;
    } else {
      levels++;
      i++;
    }
  }
  return levels;
};
