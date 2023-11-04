import Header from "../../ui/Header";
import RecipeDetailsItem from "../features/Recipes/RecipeDetailsItem";

function RecipeDetails() {
  return (
    <>
      <Header>
        <Header.ContainerRecipes>
          <Header.SchoolNameRecipes />
          <Header.NavRecipeDetails />
        </Header.ContainerRecipes>
      </Header>
      <RecipeDetailsItem />
    </>
  );
}

export default RecipeDetails;
