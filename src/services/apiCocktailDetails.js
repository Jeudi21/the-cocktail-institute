import { COCKTAIL_DETAILS_API_URL, CORS_PROXY_URL } from "../constants";

export async function getCocktailDetails(id) {
  const res = await fetch(CORS_PROXY_URL + COCKTAIL_DETAILS_API_URL + id);

  const data = await res.json();

  return data;
}
