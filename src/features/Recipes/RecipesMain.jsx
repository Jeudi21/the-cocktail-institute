import RecipeList from "./RecipeList";

function RecipesMain({ search }) {
  return (
    <div className="recipes-main ">
      <RecipeList search={search} />
    </div>
  );
}

export default RecipesMain;
