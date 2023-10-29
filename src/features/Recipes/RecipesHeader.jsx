import { NavLink } from "react-router-dom";

function RecipesHeader({ search, setSearch }) {
  return (
    <header className="header-recipes">
      <div className="recipes-logo-container">
        {/* <img
            className="logo"
            src="img/logos/school-logo.svg"
            alt="Logo of the bartending school"
          /> */}
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
