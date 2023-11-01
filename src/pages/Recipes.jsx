import RecipesMain from "../features/Recipes/RecipesMain";
import Header from "../../ui/Header";

function Recipes() {
  return (
    <div>
      <Header>
        <Header.ContainerRecipes>
          <Header.SchoolNameRecipes />
          <Header.SearchBar />
          <Header.NavRecipes />
        </Header.ContainerRecipes>
      </Header>
      <RecipesMain />
    </div>
  );
}

export default Recipes;
