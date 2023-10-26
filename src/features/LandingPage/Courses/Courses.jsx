import CourseItem from "./CourseItem";
import { coursesDetails } from "./coursesDetails";

function Courses() {
  return (
    <section id="courses" className="section-courses">
      <div className="container --flex">
        <h2 className="heading-secondary courses-heading">Bartender courses</h2>
        {coursesDetails.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            order={index % 2 === 0 ? "img-text" : "text-img"}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;
