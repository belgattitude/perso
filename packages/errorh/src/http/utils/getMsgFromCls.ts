/**
 * Return default message based on http exception className
 * @internal
 */
export const getMsgFromCls = (className: string) => {
  return className
    .replace(/[A-Z]/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
};
