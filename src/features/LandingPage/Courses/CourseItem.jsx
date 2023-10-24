import { useState } from "react";

function CourseItem({ course, order }) {
  const [hover, setHover] = useState(false);
  const { img, text, type, title, price, level } = course;
  console.log(hover);
  if (order === "img-text")
    return (
      <div className="course-container">
        <div
          className={`course-img-box ${
            hover ? `course-img-pricing-${type}` : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            className={`course-img ${hover ? "--opacity-zero" : ""}`}
            src={img}
            alt={text}
          />
          {hover ? (
            <div className="pricing-container">
              <h3 className="pricing-heading">{level}</h3>
              <p className="pricing-text">Price: ${price}</p>
              <a className="pricing-link btn btn--secondary">Read More</a>
            </div>
          ) : null}
        </div>
        <div className="course-details">
          <h2 className="course-title">{title}</h2>
          <p className="course-text">{text}</p>
        </div>
      </div>
    );

  if (order === "text-img")
    return (
      <div className="course-container">
        <div className="course-details">
          <h2 className="course-title">{title}</h2>
          <p className="course-text">{text}</p>
        </div>
        <div
          className={`course-img-box ${
            hover ? `course-img-pricing-${type}` : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            className={`course-img ${hover ? "--opacity-zero" : ""}`}
            src={img}
            alt={text}
          />
          {hover ? (
            <div className="pricing-container">
              <h3 className="pricing-heading">{level}</h3>
              <p className="pricing-text">Price: ${price}</p>
              <a className="pricing-link btn btn--secondary">Read More</a>
            </div>
          ) : null}
        </div>
      </div>
    );
}

export default CourseItem;
