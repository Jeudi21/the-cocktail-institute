import { NavLink } from "react-router-dom";

function RecipeDetailsHeader() {
  return (
    <header className="header-recipes">
      <div className="recipes-logo-container">
        <NavLink to="/" className="recipes-school-name">
          The Cocktail Institute
        </NavLink>
      </div>

      <nav className="navigation-recipes navigation-recipes-details">
        <NavLink className="recipes-menu-link" to="/">
          Home
        </NavLink>

        <NavLink className="recipes-menu-link" to="recipes">
          Recipes
        </NavLink>

        <NavLink className="recipes-menu-link" to="/store">
          Store
        </NavLink>
      </nav>
    </header>
  );
}

export default RecipeDetailsHeader;
