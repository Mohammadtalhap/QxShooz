import { useState } from "react";
import Section from "../components/Section";

import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import Section10BlogPosts from "../components/Section10BlogPosts";
import Section11SubscribeForm from "../components/Section11SubscribeForm";
import Section1Slideshow from "../components/Section1Slideshow";
import Section2CollectionBanner from "../components/Section2CollectionBanner";
import Section3Buttons from "../components/Section3Buttons";
import Section3Shop from "../components/Section3Shop";
import Section4AdvertisementPoster from "../components/Section4AdvertisementPoster";
import Section5CollectionPosters from "../components/Section5CollectionPosters";
import Section6BannersGrid from "../components/Section6BannersGrid";
import Section7HighDiscountProducts from "../components/Section7HighDiscountProducts";
import Section8BigPoster from "../components/Section8BigPoster";
import Section9CFSwiper from "../components/Section9CFSwiper";
import Title from "../components/Title";
import TopBar from "../components/TopBar";
import customerFeedbacks from "../data/customerFeedbacks";
import sectiontitles from "../data/SectionTitles";

function Home() {
  const titleDetails = [...sectiontitles];
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="flex flex-col gap-18">
      <Section fullWidth>
        <Section1Slideshow />
      </Section>

      <Section>
        <Section2CollectionBanner />
      </Section>

      <Section>
        <Title titleDetail={titleDetails[0]} />
      </Section>
      <Section className="flex justify-center">
        <Section3Buttons activeTab={activeTab} setActiveTab={setActiveTab} />
      </Section>
      <Section>
        <Section3Shop activeTab={activeTab} />
      </Section>

      <Section fullWidth className="mt-16">
        <Section4AdvertisementPoster />
        <TopBar
          offerCount={2}
          fullWidth
          removeDismissal
          className="from-[#587728] via-[#bd6417] to-[#e8252f] py-2"
          textClass="xl:text-xl xl:font-normal"
        />
      </Section>

      <Section>
        <Title titleDetail={titleDetails[2]} />
      </Section>
      <Section>
        <Section5CollectionPosters />
      </Section>

      <Section className="flex flex-col gap-12 bg-[#333333] py-20">
        <Title
          titleDetail={titleDetails[3]}
          titleDetailClass="w-78"
          commonClass="text-white"
        />
        <Section6BannersGrid />
      </Section>

      <Section>
        <Title titleDetail={titleDetails[4]} />
      </Section>
      <Section>
        <Section7HighDiscountProducts />
      </Section>

      <Section>
        <Section8BigPoster />
      </Section>

      <Section fullWidth>
        <div className="w-full bg-linear-to-r from-[#946cc1] via-[#784473] to-[#b13a44] py-6 flex justify-around items-center">
          <p className="text-white text-xl">
            Discover Our Stores: Your Local Shoe Haven
          </p>
          <Button
            className="bg-[#4e4991] text-white"
            text="Find Store"
            variant="noVariant"
            size="md"
          />
        </div>
        <Section className="bg-[#f9f9f9] pb-20">
          <Title
            titleDetail={titleDetails[5]}
            titleDetailClass="w-78"
            titleClass="text-4xl!"
            className="py-18"
          />
          <Section9CFSwiper
            customerFeedbacks={customerFeedbacks}
            className="h-full w-full"
          />
        </Section>
      </Section>

      <Section>
        <Title titleDetail={titleDetails[6]} />
      </Section>
      <Section>
        <Section10BlogPosts />
      </Section>

      <Section className="z-2">
        <Section11SubscribeForm />
      </Section>
    </div>
  );
}

export default Home;
