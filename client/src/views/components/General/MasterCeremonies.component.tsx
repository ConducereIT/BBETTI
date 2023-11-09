import React from "react";
import PozaDesk from "../../../assets/img/MC/MCDesk.webp";
import PozaMobil from "../../../assets/img/MC/MCMobil.webp";

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
          <div className=" text-gray-300 md:mt-16 ">
            <div className=" text-2xl font-bold flex justify-center mb-10">
              <p>MC Ștefan Costea</p>
            </div>
            <p className=" text-justify mx-8 text-xs md:text-sm">
              În cadrul LSE, Ștefan Costea și-a descoperit pasiunea pentru
              prezentarea de evenimente. Ce-l diferențiază cu adevărat pe Ștefan
              este entuziasmul său contagios și abilitatea de a comunica cu
              publicul.
              <br />
              <br /> El nu se limitează doar la a fi un prezentator obișnuit; el
              este un adevărat povestitor care reușește să captiveze audiența la
              fiecare cuvânt rostit. Îi place să spună că se "încarcă cu
              energie" de la oamenii din public, iar această energie se simte în
              fiecare eveniment pe care îl prezintă.
              <br />
              <br /> Pentru Ștefan Costea, organizarea și prezentarea de
              evenimente nu sunt doar o responsabilitate, ci o adevărată
              pasiune. El transformă fiecare eveniment într-o experiență
              memorabilă pentru toți cei prezenți.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
