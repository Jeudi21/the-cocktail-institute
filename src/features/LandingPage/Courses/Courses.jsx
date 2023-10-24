import CourseItem from "./CourseItem";
import { coursesDetails } from "./courses-details";

function Courses() {
  return (
    <section className="section-courses">
      <div className="container --flex">
        {coursesDetails.map((course, index) => (
          <CourseItem
            key={index}
            img={course.img}
            text={course.text}
            title={course.title}
            order={index % 2 === 0 ? "img-text" : "text-img"}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;
