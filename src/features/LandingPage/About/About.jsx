import Step from "./Step";
import { stepDetails } from "./stepsDetails";

function About() {
  return (
    <section className="section-about">
      <div className="container">
        <div className="about-heading-box">
          <h2 className="heading-secondary">
            More than 20 years of teaching enthusiats to level up their
            bartending skills
          </h2>
          <p className="about-text --margin-bottom-sm">
            The Cocktail Institute is a Costa Rican bartending school which
            offers courses of basic and advanced bartending skills, mixology,
            flair, knowledge of coffee, wine and beers.
          </p>

          <p className="about-text">
            Have any concerns about the courses? Follow these simple steps:
          </p>
        </div>
        <div className="steps-container">
          {stepDetails.map((step) => (
            <Step
              key={step.id}
              id={step.id}
              color={step.color}
              text={step.text}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
