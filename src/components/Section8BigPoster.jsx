import React from "react";
import Title from "./Title";
import Button from "./Button";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

function Section8BigPoster() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="content">
        <Title
          titleDetail={{
            id: "Special1",
            tag: "Our most popular styles",
            title: "Save big on shoes from last season",
            titleDetail: `Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae. 
            \nMolestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.`,
            position: "left",
          }}
          className="h-full w-full gap-6"
          commonClass="text-black"
          titleClass="w-110 max-w-full lg:leading-16"
          titleDetailClass="whitespace-pre-wrap text-justify pr-5"
        >
          <Button
            size="md"
            icon={<MdArrowRightAlt />}
            href={"/"}
            className="mt-3"
          />
        </Title>
      </div>
      <div className="img-wrapper relative">
        <img
          src="https://qx-shooz.myshopify.com/cdn/shop/files/video-pic.png?v=1731407733&width=900"
          alt="animated poster"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="relative w-60 h-50">
            <div className="absolute top-0 right-0 flex items-center justify-center p-14 border-white border rounded-full">
              <FaPlay className=" text-white" />
            </div>
            <div className="absolute bottom-0 left-0 flex items-center justify-center p-14 border-white border rounded-full">
              <FaPlay className=" text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section8BigPoster;
