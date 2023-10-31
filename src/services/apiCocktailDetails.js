export async function getCocktailDetails(id) {
  const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const CORS_API_URL = "https://cors-anywhere.herokuapp.com/";

  const res = await fetch(CORS_API_URL + API_URL + id);

  const data = await res.json();

  return data;
}
