import React, { useContext } from "react";
import { PreloaderContext } from "./PreloaderProvider.component";
import LogoWhite from "../../../assets/img/Background/back-landing-page.webp";

const Preloader = () => {
  const { isLoading } : any = useContext(PreloaderContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white duration-300" style={{backgroundImage:`URL(${LogoWhite})`}}>
    </div>
  );
};

export default Preloader;