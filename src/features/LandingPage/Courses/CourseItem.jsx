function CourseItem({ img, text, title, order }) {
  if (order === "img-text")
    return (
      <div className="course-container">
        <img className="course-img" src={img} alt={text}></img>
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
        <img className="course-img" src={img} alt={text}></img>
      </div>
    );
}

export default CourseItem;
