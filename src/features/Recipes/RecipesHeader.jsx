import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateSearch } from "./recipesSlice";

function RecipesHeader() {
  const search = useSelector((store) => store.recipes.search);
  const dispatch = useDispatch();

  return (
    <header className="header-recipes">
      <div className="recipes-logo-container">
        <NavLink to="/" className="recipes-school-name">
          The Cocktail Institute
        </NavLink>
      </div>
      <input
        className="recipes-search"
        type="text"
        value={search}
        onChange={(e) => dispatch(updateSearch(e.target.value))}
      ></input>
      <nav className="navigation-recipes">
        <NavLink className="recipes-menu-link" to="/">
          Home
        </NavLink>

        <NavLink className="recipes-menu-link" to="/store">
          Store
        </NavLink>
      </nav>
    </header>
  );
}

export default RecipesHeader;
