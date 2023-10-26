function Hero() {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="main-hero">
          <div className="hero-content">
            <h1 className="heading-primary">
              We help you get your desired job or just impress your friends
            </h1>
            <p className="hero-text">
              All our bartending courses are of the highest quality and our
              certificate is outstanding in many distinguished bars around the
              world.
            </p>
            <div className="hero-btn-box">
              <a href="#cta" className="btn btn--primary --margin-right-sm">
                Start your journey
              </a>
              <a href="#about" className="btn">
                Learn More
              </a>
            </div>
          </div>

          <div>
            <img
              className="hero-img"
              src="/img/hero.jpg"
              alt="Bartender shaking a cocktail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
