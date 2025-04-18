import "./Index.css";
import { useContext } from "react";
import { pageContext } from "../../PageContext";
import Hero from "./components/Hero";
import Cooperations from "./components/Cooperations";
import FeaturedProducts from "./components/FeaturedProducts";
import ForthSection from "./components/ForthSection";
import Services from "./components/Services";



// pogledat malo organizaciju foldera

// napravit reusable klase - section, section-heading-intro, section-subheading
// svaka sekcija neka ima container
// popravit css
// napravit fetch request za featured products sekciju
// random odabrat 3 proizvoda i prikazat ih

// jel mi treba css file za svaku sekciju ili mogu sve u index.css???

function Home() {
  const context = useContext(pageContext);

  if (!context) {
    throw new Error("Navbar must be used within a PageContext.Provider");
  }

  return (
    <>
      <Hero />
      <Cooperations />
      <FeaturedProducts />
      <ForthSection />
      <Services />
    </>
  );
}

export default Home;
