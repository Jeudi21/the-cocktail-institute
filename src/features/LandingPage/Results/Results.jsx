import ResultCard from "./ResultCard";
import { cardDetails } from "./cardDetails";

function Results() {
  return (
    <section id="results" className="section-results">
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
