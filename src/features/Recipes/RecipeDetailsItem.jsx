import { useParams } from "react-router-dom";
import { useRecipes } from "./useRecipes";

function RecipeDetailsItem() {
  const { id } = useParams();
  const { data: recipe } = useRecipes("", id);
  const recipeDetails = recipe.drinks[0];
  const numberOfIngredientsKeys = Object.keys(recipeDetails).filter((key) =>
    key.includes("strIngredient")
  ).length;

  return (
    <div className="recipe-details">
      <div className="recipe-details-box">
        <img className="recipe-details-img" src={recipeDetails.strDrinkThumb} />
        <div className="recipe-details-content">
          <div className="recipe-title-box">
            <span className="recipe-details-title">
              {recipeDetails.strDrink}
            </span>
          </div>
          <ul className="recipe-details-ingredients">
            <span className="heading"> Ingredients:</span>
            {Array.from(
              { length: numberOfIngredientsKeys },
              (_, i) => i + 1
            ).map((num) =>
              recipeDetails["strIngredient" + num] ? (
                <li key={num}>
                  &mdash; {recipeDetails["strMeasure" + num]}{" "}
                  {recipeDetails["strIngredient" + num]}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <div className="glassware-box">
            <span className="recipe-details-glassware heading">
              Glassware:{" "}
            </span>
            <span className="glassware-type">{recipeDetails.strGlass}</span>
          </div>

          <div>
            <span className="heading recipe-procedure">Procedure: </span>
            <span className="recipe-details-steps">
              {recipeDetails.strInstructions}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsItem;
