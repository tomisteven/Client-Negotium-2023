import "./App-web.css";
import Intro from "./Intro";
import Features from "./Features";
import StayProductive from "./StayProductive";
import Testimonials from "./Testimonials";
import EarlyAccess from "./EarlyAccess";
import Footer from "./Footer";

function WebPage() {
  return (
    <>
      <div className="fylo-web">
         <Intro />
      </div>
      <Features />
      <StayProductive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
      <p className="footer-copy">Diseñado por Digita Code - 2023</p>
    </>
  );
}

export default WebPage;
