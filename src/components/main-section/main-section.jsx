import React from "react";
import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiphile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../button";

export const MainSection = () => {
  return (
    <section className="flex-col xl:flex-row flex w-full mt-6 xl:h-screen justifi-between">
      <div className="order-2 xl:order-1 relative text-center xl:text-left mt-12 xl:mt-60">
        <h1 className="text-8xl font-black xl:whitespace-pre-line mt-6">{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around 2xl:absolute bottom-2 w-full mt-20">
          <Databiz />
          <Audiphile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden xl:flex w-2/4 mt-20 order-2">
        <img src={MenImage} alt="men" />
      </div>
      <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
        <img src={MenImageMobile} alt="men" />
      </div>
    </section>
  );
};
