import React from "react";
import PozaDesk from "../../../assets/img/MC/MCDesk.jpg";
import PozaMobil from "../../../assets/img/MC/MCDesk.jpg";

export default function MasterCeremonies() {
  return (
    <>
      <div className=" w-full  h-full flex items-center justify-center mt-10 md:mt-6">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full mb-10 md:mb-0">
            <img
              className=" hidden md:block rounded-lg scale-[90%]"
              src={PozaDesk}
              alt="MasterOfCeremonies"
            />
            <img
              className=" block md:hidden rounded-lg"
              src={PozaMobil}
              alt="MasterOfCeremonies"
            />
          </div>
          <div className="text-gray-300 md:mt-16 ">
            <div className="text-2xl font-bold flex justify-center mb-10">
              <p>MC Andrei Răpciugă</p>
            </div >
            <div className="h-auto w-auto flex items-center justify-center">
            <p className=" text-justify mx-8 text-xs md:text-sm">
            Andrei Răpciugă, cu un background solid ca alumn LSE,
            a descoperit o adevărată pasiune pentru prezentarea 
            de evenimente. Ce îl diferențiază este entuziasmul 
            său contagios și abilitatea de a interacționa cu 
            publicul.
              <br />
              <br /> Talentul său de povestitor îi permite să 
              capteze atenția audienței cu fiecare cuvânt rostit. 
              Andrei spune adesea că energia celor din sală îl 
              inspiră și îl revitalizează, ceea ce creează o 
              atmosferă vibrantă la fiecare eveniment pe care îl 
              moderează.
              <br />
              <br /> Pentru el, prezentarea de evenimente reprezintă o 
              pasiune, transformând fiecare întâlnire într-o experiență de 
              neuitat pentru toți participanții.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
