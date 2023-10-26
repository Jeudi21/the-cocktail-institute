import Hero from "../features/LandingPage/Hero";
import Header from "../features/LandingPage/Header";
import PartneredWith from "../features/LandingPage/PartneredWith/PartneredWith";
import About from "../features/LandingPage/About/About";
import Courses from "../features/LandingPage/Courses/Courses";
import Results from "../features/LandingPage/Results/Results";
import Testimonials from "../features/LandingPage/Testimonials/Testimonials";
import Cta from "../features/LandingPage/CTA";
import Footer from "../features/LandingPage/Footer";

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
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
