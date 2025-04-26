import "./App.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import About from "./Component/About";
import Services from "./Component/Services";
import ChooseUs from "./Component/ChooseUs";
import Portifolio from "./Component/Portifolio";
import Testimonial from "./Component/Testimonial";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Filler from "./Component/Filler";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <About />
      <Services />
      <Filler />
      <ChooseUs />
      <Portifolio />
      <ContactUs />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
