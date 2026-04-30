import React from "react";
import sectiontitles from "../data/SectionTitles";
import Title from "./Title";
import Button from "./Button";
import { MdArrowRightAlt } from "react-icons/md";

function Section4AdvertisementPoster() {
  const titleDetails = [...sectiontitles];

  return (
    <div className="relative">
      <img
        src="https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552"
        alt="advertisementPoster"
      />
      <Title titleDetail={titleDetails[1]} titleClass="w-180 leading-18" titleDetailClass="w-fit" commonClass="text-black" className="absolute inset-0 p-20 gap-6">
        <Button size="md" icon={<MdArrowRightAlt />} href={"/"} className="mt-3" />
      </Title>
    </div>
  );
}

export default Section4AdvertisementPoster;
