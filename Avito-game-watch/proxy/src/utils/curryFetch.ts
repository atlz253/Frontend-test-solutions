import { curry } from "ramda";

export const curryFetch = curry(async (base: string, url: string, params) => {
  const urlObj = new URL(url, base);
  const searchParams = urlObj.searchParams;

  for (const key in params) searchParams.set(key, params[key]);

  console.log(urlObj.href);

  const response = await fetch(urlObj.href);

  if (!response.ok) throw new Error("fetch error");

  return await response.json();
});
