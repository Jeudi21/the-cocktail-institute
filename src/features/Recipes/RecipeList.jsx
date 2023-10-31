import ErrorMessage from "../../../ui/ErrorMessage";
import Spinner from "../../../ui/Spinner";
import RecipeItem from "./RecipeItem";
import { useRecipes } from "./useRecipes";

function RecipeList({ search }) {
  const { isLoading, data: recipes } = useRecipes(search);

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
