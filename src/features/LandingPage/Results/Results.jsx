import ResultCard from "./ResultCard";
import { cardDetails } from "./card-details";

function Results() {
  return (
    <section className="section-results">
      <div className="container">
        <h2 className="heading-secondary">
          This is what you have been looking for
        </h2>
        <div className="cards-container">
          {cardDetails.map((card, index) => (
            <ResultCard card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
