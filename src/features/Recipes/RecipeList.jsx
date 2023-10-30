import RecipeItem from "./RecipeItem";
import { useRecipes } from "./useRecipes";

function RecipeList({ search }) {
  const { isLoading, data: recipes } = useRecipes(search);

  return (
    <div className="recipes-list">
      {isLoading
        ? "loading..."
        : recipes.drinks.map((recipe) => (
            <RecipeItem
              key={recipe.idDrink}
              title={recipe.strDrink}
              img={recipe.strDrinkThumb}
              id={recipe.idDrink}
            />
          ))}
    </div>
  );
}

export default RecipeList;
