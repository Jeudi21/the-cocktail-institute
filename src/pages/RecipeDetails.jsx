import Header from "../../ui/Header";
import RecipeDetailsItem from "../features/Recipes/RecipeDetailsItem";

function RecipeDetails() {
  return (
    <div>
      <Header>
        <Header.ContainerRecipes>
          <Header.SchoolNameRecipes />
          <Header.NavRecipeDetails />
        </Header.ContainerRecipes>
      </Header>
      <RecipeDetailsItem />
    </div>
  );
}

export default RecipeDetails;
