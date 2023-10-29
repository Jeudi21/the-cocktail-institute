import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen ? (
        <button
          className="btn-mobile"
          onClick={() => setModalOpen((modalOpen) => !modalOpen)}
        >
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
        <button
          className="btn-mobile"
          onClick={() => setModalOpen((modalOpen) => !modalOpen)}
        >
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
    </header>
  );
}

export default Header;
