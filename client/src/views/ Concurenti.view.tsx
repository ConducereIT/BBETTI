import ConcurentiCarousel from "./components/Concurenti/ConcurentiCarousel.component";
import Header from "./components/General/Header";
import "../Concurenti.css";
import Background from "../assets/img/Background/back-landing-page.webp";
export default function Concurenti() {
  return (
    <>
      <Header />
      <div
        className="w-full h-screen absolute top-0 left-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
      </div>
      <div className="mt-10">
        <ConcurentiCarousel />
      </div>
    </>
  );
}
