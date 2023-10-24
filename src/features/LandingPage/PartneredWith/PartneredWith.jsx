import { logosDetails } from "./logosDetails";

function PartneredWith() {
  return (
    <section className="section-partnered">
      <h2 className="partnered-heading">Partnered with</h2>
      <div className="container-logos">
        <div className="logos-slider">
          <div className="logos">
            {logosDetails.map((logo, index) => (
              <img
                className="partnered-with-img"
                src={logo.imgUrl}
                alt={logo.title}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="logos-slider">
          <div className="logos">
            {logosDetails.map((logo, index) => (
              <img
                className="partnered-with-img"
                src={logo.imgUrl}
                alt={logo.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartneredWith;
