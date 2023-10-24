import Hero from "../features/LandingPage/Hero";
import Header from "../features/LandingPage/Header";
import PartneredWith from "../features/LandingPage/PartneredWith/PartneredWith";
import About from "../features/LandingPage/About/About";
import Courses from "../features/LandingPage/Courses/Courses";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartneredWith />
        <About />
        <Courses />
      </main>
    </>
  );
}

export default LandingPage;
