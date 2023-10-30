import { useQuery } from "react-query";
import { getCocktails } from "../../services/apiCocktails";

export function useRecipes(search, id) {
  return useQuery({
    queryKey: ["cocktails", search],
    queryFn: () => getCocktails(search, id),
  });
}
