import React from "react";
import myIMG from "../assets/img/portfolioPFP.png";
import { FlipText } from "./ui/magicui/flip-text";

const Header = () => {
  return (
    <div>
      <header className="flex items-center gap-5 pt-5 mb-10">
        <img
          src={myIMG}
          alt="myProfile"
          className="w-[64px] h-[64px] md:w-[100px] md:h-[100px] rounded-full object-cover "
        />
        <div className="leading-5nm">
          <h2 className="-ms-5">
            <FlipText
              duration={0.5}
              delayMultiple={0.05}
              className="text-lg md:text-[22px] "
            >
              Horm Sovannarith
            </FlipText>
          </h2>
          <h5>
            <FlipText
              duration={0.5}
              delayMultiple={0.04}
              className="text-xs md:text-[15px]"
            >
              Front-end Web Developer
            </FlipText>
          </h5>
        </div>
      </header>
    </div>
  );
};

export default Header;
