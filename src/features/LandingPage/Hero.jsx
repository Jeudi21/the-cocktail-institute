import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="section-hero">
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
          <a className="menu-link" href="#">
            About
          </a>
          <a className="menu-link" href="#">
            Courses
          </a>
          <a className="menu-link" href="#">
            Results
          </a>
          <a className="menu-link" href="#">
            Testimonials
          </a>
          <NavLink className="menu-link" to="recipes">
            Recipes
          </NavLink>
          <NavLink className="menu-link" to="store">
            Store
          </NavLink>
          <a className="menu-link btn btn--primary" href="#">
            Sign up
          </a>
        </nav>
      </header>
      <div className="container">
        <div className="main-hero">
          <div>
            <h1 className="heading-primary">
              We help you get your desired job or just impress your friends
            </h1>
            <p className="hero-text">
              All our bartending courses are of the highest quality and our
              certificate is outstanding in many distinguished bars around the
              world.
            </p>

            <a className="btn btn--primary margin-right-sm">
              Start your journey
            </a>
            <a className="btn">Learn More</a>
          </div>

          <img
            className="hero-img"
            src="/img/hero.jpg"
            alt="Bartender shaking a cocktail"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
