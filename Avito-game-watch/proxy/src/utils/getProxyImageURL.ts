export function getProxyImageURL(url: string) {
  const urlObj = new URL(url);

  return `http://localhost:${process.env.port ?? 3000}` + urlObj.pathname;
}
