import Hero from "../features/LandingPage/Hero";
import About from "../features/LandingPage/About";
import Header from "../features/LandingPage/Header";
function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default LandingPage;
