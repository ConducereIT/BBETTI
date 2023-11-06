import ConcurentiCarousel from "./components/Concurenti/ConcurentiCarousel.component";
import Header from "./components/General/Header";
import "../Concurenti.css";
export default function App() {
  return (
    <>
      <Header />
      <div className=" mt-24">
        <ConcurentiCarousel />
      </div>
    </>
  );
}
