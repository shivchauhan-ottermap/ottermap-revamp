import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Features from "./components/Features";
import Values from "./components/Values";
import Testimonial from "./components/Testimonial";
import UseCases from "./components/UseCases";
import WalkThrough from "./components/WalkThrough";
import Banner from "./components/Banner";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font">
      <Navbar />
      <Hero />
      <Features />
      <Values />
      <Testimonial />
      <UseCases />
      <WalkThrough />
      <Banner />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
