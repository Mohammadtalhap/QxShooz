import React from "react";
import sectiontitles from "../data/SectionTitles";
import Title from "./Title";
import Button from "./Button";
import { MdArrowRightAlt } from "react-icons/md";

function Section4AdvertisementPoster() {
  const titleDetails = [...sectiontitles];

  return (
    <div className="relative h-120 lg:h-140 w-full overflow-hidden">
      <img
        src="https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552"
        alt="advertisementPoster"
        className="h-full w-full object-cover"
      />
      <Title titleDetail={titleDetails[1]} titleClass="w-full sm:w-80 md:w-140 lg:w-180 leading-12 sm:leading-16 lg:leading-18" titleDetailClass="w-fit" commonClass="text-black" className="absolute inset-0 p-4 sm:p-8 md:p-12 lg:p-20 sm:gap-3 md:gap-4 lg:gap-6">
        <Button size="md" icon={<MdArrowRightAlt />} href={"/"} className="mt-1 sm:mt-2 lg:mt-3" />
      </Title>
    </div>
  );
}

export default Section4AdvertisementPoster;
