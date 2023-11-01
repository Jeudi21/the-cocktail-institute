import Hero from "../features/LandingPage/Hero";
import PartneredWith from "../features/LandingPage/PartneredWith/PartneredWith";
import About from "../features/LandingPage/About/About";
import Courses from "../features/LandingPage/Courses/Courses";
import Results from "../features/LandingPage/Results/Results";
import Testimonials from "../features/LandingPage/Testimonials/Testimonials";
import Cta from "../features/LandingPage/CTA";
import Footer from "../features/LandingPage/Footer";
import Header from "../../ui/Header";

function LandingPage() {
  return (
    <>
      <Header>
        <Header.ContainerLanding>
          <Header.SchoolNameLanding />
          <Header.NavLanding />
          <Header.Modal />
        </Header.ContainerLanding>
      </Header>
      <main>
        <Hero />
        <PartneredWith />
        <About />
        <Courses />
        <Results />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
