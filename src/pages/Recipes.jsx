import RecipesMain from "../features/Recipes/RecipesMain";
import Header from "../../ui/Header";

function Recipes() {
  return (
    <>
      <Header>
        <Header.ContainerRecipes>
          <Header.SchoolNameRecipes />
          <Header.SearchBar />
          <Header.NavRecipes />
        </Header.ContainerRecipes>
      </Header>
      <RecipesMain />
    </>
  );
}

export default Recipes;
