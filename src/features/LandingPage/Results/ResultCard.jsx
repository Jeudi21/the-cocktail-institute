function ResultCard({ card }) {
  return (
    <div className="card">
      <img className="card-img" src={card.img} alt={card.title} />
      <div className="card-text-box">
        <h3 className="card-heading">{card.title}</h3>
        <p className="card-text">{card.text}</p>
      </div>
    </div>
  );
}

export default ResultCard;
