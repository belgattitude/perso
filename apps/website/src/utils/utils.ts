export function truncateText(
  text: string,
  max: number,
  useWordBoundary = true
) {
  if (text.length <= max) {
    return text;
  }
  const subString = text.substring(0, max - 1);
  return (
    (useWordBoundary
      ? subString.substring(0, subString.lastIndexOf(' '))
      : subString) + ' …'
  );
}
