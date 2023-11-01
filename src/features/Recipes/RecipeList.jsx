import ErrorMessage from "../../../ui/ErrorMessage";
import Spinner from "../../../ui/Spinner";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { useRecipes } from "./useRecipes";

function RecipeList() {
  const search = useSelector((state) => state.recipes.search);
  const debouncedSearch = useDebounce(search, 500);
  const { isLoading, data: recipes } = useRecipes(debouncedSearch);

  if (!recipes && !isLoading)
    return (
      <ErrorMessage>
        There was an error and no cocktails were fetched 😢
      </ErrorMessage>
    );

  if (recipes?.drinks === null)
    return <ErrorMessage>No cocktails were found 😢</ErrorMessage>;

  return (
    <div className="recipes-list">
      {isLoading ? (
        <Spinner />
      ) : (
        recipes.drinks.map((recipe) => (
          <RecipeItem
            key={recipe.idDrink}
            title={recipe.strDrink}
            img={recipe.strDrinkThumb}
            id={recipe.idDrink}
          />
        ))
      )}
    </div>
  );
}

export default RecipeList;
