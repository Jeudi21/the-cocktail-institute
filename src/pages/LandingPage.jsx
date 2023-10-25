import Hero from "../features/LandingPage/Hero";
import Header from "../features/LandingPage/Header";
import PartneredWith from "../features/LandingPage/PartneredWith/PartneredWith";
import About from "../features/LandingPage/About/About";
import Courses from "../features/LandingPage/Courses/Courses";
import Results from "../features/LandingPage/Results/Results";
import Testimonials from "../features/LandingPage/Testimonials/Testimonials";
import CTA from "../features/LandingPage/CTA";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartneredWith />
        <About />
        <Courses />
        <Results />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}

export default LandingPage;
