import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Cta() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "cta_service",
        "contact_form",
        formEl.current,
        import.meta.env.VITE_API_KEY
      )
      .then(
        function () {
          toast.success("Information sent succesfully");
        },
        function (error) {
          toast.error("There was an error and information couldn't be sent");
          console.log(error);
        }
      );
  }

  const formEl = useRef(null);

  return (
    <section id="cta" className="section-cta">
      <div className="container">
        <div className="cta-container">
          <img
            className="cta-img"
            src="img/cta.jpg"
            alt="Person squeezing an orange peel and using a lighter "
          ></img>

          <div className="cta-main">
            <h2 className="cta-heading">Start your journey</h2>
            <p className="cta-text">
              Are you a Beginner or Junior Barman? We at The Cocktail Institute
              offer a full experience where you will learn all it takes to
              become a master bartender and mixologer, while you have a great
              time meeting people from all countries and cultures around the
              world
            </p>
            <form className="cta-form" onSubmit={handleSubmit} ref={formEl}>
              <div className="form-row">
                <label className="form-label" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  name="user_name"
                  className="form-input"
                  id="full-name"
                  type="text"
                  required
                ></input>
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  name="user_email"
                  className="form-input"
                  id="email"
                  type="text"
                  required
                ></input>
              </div>
              <div />
              <div className="form-row">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  name="message"
                  className="form-input cta-description"
                  id="description"
                  type="text"
                  required
                ></textarea>
              </div>
              <div className="cta-btn-box">
                <button className="btn btn--primary cta-btn">
                  Sign up now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
