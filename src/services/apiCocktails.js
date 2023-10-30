export async function getCocktails(search, id) {
  const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/";
  const CORS_API_URL = "https://cors-anywhere.herokuapp.com/";

  const res = await fetch(
    `${CORS_API_URL + API_URL}${
      id ? `lookup.php?i=${id}` : `search.php?s=${search}`
    }`,
    {
      method: "GET",
      mode: "cors",
      dataType: "jsonp",
    }
  );

  const data = await res.json();

  return data;
}
