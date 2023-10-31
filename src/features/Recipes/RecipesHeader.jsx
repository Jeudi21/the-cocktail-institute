import { NavLink } from "react-router-dom";

function RecipesHeader({ search, setSearch }) {
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
        onChange={(e) => setSearch(e.target.value)}
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
