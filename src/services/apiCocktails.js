import { COCKTAILS_API_URL, CORS_PROXY_URL } from "../constants";

export async function getCocktails(search) {
  const res = await fetch(CORS_PROXY_URL + COCKTAILS_API_URL + search);
  const data = await res.json();
  return data;
}
