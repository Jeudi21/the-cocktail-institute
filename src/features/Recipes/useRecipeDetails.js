import { useQuery } from "@tanstack/react-query";
import { getCocktailDetails } from "../../services/apiCocktailDetails";

export function useRecipeDetails(id) {
  return useQuery({
    queryKey: ["cocktailDetails", id],
    queryFn: () => getCocktailDetails(id),
  });
}
