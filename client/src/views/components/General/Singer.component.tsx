import React from "react";
import Rares from "../../../assets/img/ComponentImages/rares_singer.webp";
import RaresMobile from "../../../assets/img/ComponentImages/Rares_mobile.webp";

export default function Singer() {
  return (
    <>
      <div className=" w-full  h-full">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className=" hidden md:block rounded-full"
              src={Rares}
              alt="Singer"
            />
            <img
              className=" block md:hidden rounded-full"
              src={RaresMobile}
              alt="Singer"
            />
          </div>
          <div className=" text-gray-300 mt-20">
            <div className=" text-2xl mt-10 md:mt-0 md:text-3xl font-bold flex justify-center">
              <p>Rareș Mariș</p>
            </div>
            <p className=" text-justify mx-8 text-xs md:text-base my-10">
              De la student al facultății de Drept la un artist nonconformist și
              un model pentru generația sa.
              <br />
              <br /> Abordarea sa ironică asupra vieții se traduce printr-o
              interpretare fără granițe de a crea ceva neauzit, inimaginabil.
              Rareș își îmbină pentru descoperirea de sunete noi cu o abordare
              neglijentă și iresponsabilă a compoziției.
              <br />
              <br /> La vârsta de 18 ani, călătoria sa muzicală a fost pusă în
              așteptare pentru a se dedica complet Dreptului, a doua sa mare
              dragoste. Ca student la Drept, a fost primul în generația sa. Dar
              pauza sa s-a încheiat brusc atunci când un videoclip ironic făcut
              pe TikTok a devenit viral, iar liderii industriei l-au luat prea
              în serios.
              <br />
              <br /> Ce a urmat? A jucat în cel mai nou reality show de artă,
              One True Singer, iar de aici, în doar câteva zile, viața sa s-a
              schimbat radical.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
