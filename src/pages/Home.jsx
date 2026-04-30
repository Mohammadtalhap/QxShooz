import { useState } from "react";
import Section from "../components/Section";

import sectiontitles from "../data/SectionTitles";
import Title from "../components/Title";
import Section1Slideshow from "../components/Section1Slideshow";
import Section2CollectionBanner from "../components/Section2CollectionBanner";
import Section3Buttons from "../components/Section3Buttons";
import Section3Shop from "../components/Section3Shop";
import Section4AdvertisementPoster from "../components/Section4AdvertisementPoster";
import TopBar from "../components/TopBar";
import Section5CollectionPosters from "../components/Section5CollectionPosters";

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





      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
    </div>
  );
}

export default Home;
