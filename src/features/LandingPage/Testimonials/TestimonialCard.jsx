function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <img
        className="testimonial-img"
        src={testimonial.img}
        alt={`Photography of ${testimonial.name}, person who is providing their feedback about the school.`}
      />
      <blockquote className="testimonial-text-container">
        <p className="testimonial-text">{testimonial.text}</p>
        <footer>
          <p className="testimonial-author"> &mdash;{testimonial.name}</p>
        </footer>
      </blockquote>
    </div>
  );
}

export default TestimonialCard;
