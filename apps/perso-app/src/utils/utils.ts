export function truncateText(
  text: string,
  max: number,
  useWordBoundary = true
) {
  if (text.length <= max) {
    return text;
  }
  const subString = text.substr(0, max - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + ' …'
  );
}
