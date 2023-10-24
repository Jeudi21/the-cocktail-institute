function Step({ id, text, icon, color }) {
  return (
    <div className="step-card">
      <div className="step-heading">
        <span className="step-number">{`0${id}`}</span>
        <div className={`icon-${color}`}>
          <img src={icon} alt={text} />{" "}
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Step;
