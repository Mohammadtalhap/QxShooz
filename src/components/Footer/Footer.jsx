import React from "react";
import DropdownTextLists from "../Header/DropdownTextLists";
import footerData from "../../data/FooterData";
import { borderAnimation } from "../../utils/styles";

function Footer({ className = "" }) {
  const data = [...footerData];
  return (
    <div className={`w-full bg-[#eaeae2] pb-20 ${className}`}>
      <div className="flex flex-col gap-12 md:gap-0 md:grid grid-cols-5">
        {data.map((item, index) => {
          let hasBorderAnimation = false;
          let liHover = false;
          let imageTitle = false;
          item.id === "footerData3" ? imageTitle = true : ((hasBorderAnimation = true), (liHover = true));
          return (
            <DropdownTextLists
              key={index}
              item={item}
              className="flex flex-col items-center text-center"
              titleClass="uppercase tracking-[.10em] cursor-default!"
              liClass="text-black/90 text-base"
              {...{ liHoverEffect: liHover }}
              imageTitle={imageTitle}
              spanClass={hasBorderAnimation ? borderAnimation : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
