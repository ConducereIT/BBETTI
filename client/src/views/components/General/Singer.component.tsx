import React from "react";
import Gheboasa from "../../../assets/img/ComponentImages/singer.jpg";
import GheboasaMobile from "../../../assets/img/ComponentImages/SingerMobile.jpg";

export default function Singer() {
  return (
    <>
      <div className=" w-full  h-full">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className=" hidden md:block rounded-full"
              src={Gheboasa}
              alt="Singer"
            />
            <img
              className=" block md:hidden rounded-full"
              src={GheboasaMobile}
              alt="Singer"
            />
          </div>
          <div className=" text-gray-300 mt-20">
            <div className=" text-2xl mt-10 md:mt-0 md:text-3xl font-bold flex justify-center">
              <p>Gheboasa</p>
            </div>
            <p className=" text-justify mx-8 text-xs md:text-sm my-10 " style={{fontSize:20
              , wordSpacing:-1}}>
              Invitatul special din acest an, Gheboasă, va aduce un plus de entuziasm și originalitate la Balul Bobocilor. 
              Cu stilul său nonconformist și plin de energie, 
              prezența lui promite să transforme evenimentul într-o experiență memorabilă pentru toți participanții.
              <br />
              <br /> Gheboasă este un artist din noul val de trap românesc, 
              remarcat prin hituri virale din 2022 și 2023, promovate intens 
              pe platformele de social media. Stilul său unic îmbină influențe 
              trap și hip-hop, având o abordare umoristică și satirică asupra vieții urbane și a 
              temelor actuale. Este cunoscut pentru mesajele sale autentice și directe, care aduc o doză de 
              ironie asupra culturii populare și realităților cotidiene.
              <br />
              <br /> Una dintre trăsăturile definitorii ale lui Gheboasă este imaginea sa atipică, construită cu umor ironic și un stil de viață specific străzii. 
              Deși abordările sale pot fi controversate prin limbajul explicit și subiectele directe, ele rezonează puternic cu tinerii din România, care apreciază 
              autenticitatea și mesajele lui nefiltrate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
