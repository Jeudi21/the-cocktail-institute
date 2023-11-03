export async function getCocktails(search) {
  const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const CORS_API_URL = "https://corsproxy.io/?";

  const res = await fetch(CORS_API_URL + API_URL + search);
  const data = await res.json();
  return data;
}
