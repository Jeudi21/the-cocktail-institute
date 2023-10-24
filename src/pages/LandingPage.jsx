import Hero from "../features/LandingPage/Hero";
import About from "../features/LandingPage/About";
import Header from "../features/LandingPage/Header";
import PartneredWith from "../features/LandingPage/PartneredWith/PartneredWith";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartneredWith />
        <About />
      </main>
    </>
  );
}

export default LandingPage;
