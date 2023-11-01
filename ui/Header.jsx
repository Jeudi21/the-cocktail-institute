import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../src/features/Recipes/recipesSlice";
import { NavLink } from "react-router-dom";

const HeaderContext = createContext();

function Header({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  function onModalOpen() {
    setModalOpen((modalOpen) => !modalOpen);
  }

  return (
    <HeaderContext.Provider value={{ modalOpen, onModalOpen }}>
      {children}
    </HeaderContext.Provider>
  );
}

function ContainerLanding({ children }) {
  return <header className="header-hero">{children}</header>;
}

function ContainerRecipes({ children }) {
  return <header className="header-recipes">{children}</header>;
}

function SchoolNameLanding() {
  return (
    <a href="#" className="school-name">
      The Cocktail Institute
    </a>
  );
}

function SchoolNameRecipes() {
  return (
    <NavLink to="/" className="recipes-school-name">
      The Cocktail Institute
    </NavLink>
  );
}

function NavLanding() {
  const { modalOpen } = useContext(HeaderContext);
  return (
    <nav className={`navigation-hero ${modalOpen ? "modal" : ""}`}>
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
  );
}

function NavRecipes() {
  return (
    <nav className="navigation-recipes">
      <NavLink className="recipes-menu-link" to="/">
        Home
      </NavLink>

      <NavLink className="recipes-menu-link" to="/store">
        Store
      </NavLink>
    </nav>
  );
}

function NavRecipeDetails() {
  return (
    <nav className="navigation-recipes navigation-recipes-details">
      <NavLink className="recipes-menu-link" to="/">
        Home
      </NavLink>

      <NavLink className="recipes-menu-link" to="/recipes">
        Recipes
      </NavLink>

      <NavLink className="recipes-menu-link" to="/store">
        Store
      </NavLink>
    </nav>
  );
}

function SearchBar() {
  const search = useSelector((store) => store.recipes.search);
  const dispatch = useDispatch();
  return (
    <input
      className="recipes-search"
      type="text"
      value={search}
      onChange={(e) => dispatch(updateSearch(e.target.value))}
    ></input>
  );
}

function Modal() {
  const { modalOpen, onModalOpen } = useContext(HeaderContext);
  return (
    <>
      {modalOpen ? (
        <button className="btn-mobile" onClick={onModalOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
      ) : (
        <button className="btn-mobile" onClick={onModalOpen}>
          <svg
            className="mobile-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      )}
    </>
  );
}

Header.ContainerLanding = ContainerLanding;
Header.ContainerRecipes = ContainerRecipes;
Header.SchoolNameLanding = SchoolNameLanding;
Header.SchoolNameRecipes = SchoolNameRecipes;
Header.NavLanding = NavLanding;
Header.NavRecipes = NavRecipes;
Header.NavRecipeDetails = NavRecipeDetails;
Header.SearchBar = SearchBar;
Header.Modal = Modal;

export default Header;
