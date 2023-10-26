import TestimonialCard from "./TestimonialCard";
import { testimonialDetails } from "./testimonialDetails";

function Testimonials() {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="container">
        <h2 className="heading-secondary testimonial-header">
          What people say
        </h2>
        <div className="testimonials-container">
          {testimonialDetails.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
