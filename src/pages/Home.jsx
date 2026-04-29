import { useState } from "react";
import Section from "../components/Section";
import Section1Slideshow from "../components/Section1Slideshow";
import Section2CollectionBanner from "../components/Section2CollectionBanner";
import Section3Buttons from "../components/Section3Buttons";
import Section3Shop from "../components/Section3Shop";
import Title from "../components/Title";

import sectiontitles from "../data/SectionTitles";

function Home() {
  const titleDetails = [...sectiontitles];
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="flex flex-col gap-16">
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

      <Section>
        <Title titleDetail={titleDetails[1]} />
      </Section>
    </div>
  );
}

export default Home;
