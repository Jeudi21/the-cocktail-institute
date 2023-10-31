import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../../../ui/Spinner";
import { useRecipeDetails } from "./useRecipeDetails";
import ErrorMessage from "../../../ui/ErrorMessage";

function RecipeDetailsItem() {
  function handleClick() {
    navigate(-1);
  }

  const { id } = useParams();
  const { isLoading, data: recipe } = useRecipeDetails(id);
  const navigate = useNavigate();
  if (!recipe && !isLoading)
    return (
      <ErrorMessage>There was an error fetching the recipe 😢</ErrorMessage>
    );

  const recipeDetails = isLoading ? {} : recipe.drinks[0];
  const numberOfIngredientsKeys = Object.keys(recipeDetails).filter((key) =>
    key.includes("strIngredient")
  ).length;

  return (
    <div className="recipe-details">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="recipe-details-box">
          <img
            className="recipe-details-img"
            src={recipeDetails.strDrinkThumb}
          />
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
          <button className="recipe-details-button" onClick={handleClick}>
            See more recipes &larr;
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetailsItem;
