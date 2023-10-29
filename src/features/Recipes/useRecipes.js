import { useQuery } from "react-query";
import { getCocktails } from "../../services/apiCocktails";

export function useRecipes(search) {
  return useQuery({
    queryKey: ["cocktails", search],
    queryFn: () => getCocktails(search),
  });
}
