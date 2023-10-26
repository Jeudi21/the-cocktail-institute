import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-hero">
      <div className="logo-container">
        {/* <img
            className="logo"
            src="img/logos/school-logo.svg"
            alt="Logo of the bartending school"
          /> */}
        <a href="#" className="school-name">
          The Cocktail Institute
        </a>
      </div>
      <nav className="navigation-hero">
        <a className="menu-link" href="#about">
          About
        </a>
        <a className="menu-link" href="#courses">
          Courses
        </a>
        <a className="menu-link" href="#results">
          Results
        </a>
        <a className="menu-link" href="#testimonials">
          Testimonials
        </a>
        <NavLink className="menu-link" to="recipes">
          Recipes
        </NavLink>
        <NavLink className="menu-link" to="store">
          Store
        </NavLink>
        <a className="menu-link btn btn--primary" href="#cta">
          Sign up
        </a>
      </nav>
      <button className="btn-mobile">TEST</button>
    </header>
  );
}

export default Header;
