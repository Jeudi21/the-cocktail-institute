export async function getCocktails(search) {
  const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const res = await fetch(API_URL + search);

  const data = await res.json();

  return data;
}
