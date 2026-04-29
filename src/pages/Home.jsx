import React from 'react'
import Section from "../components/Section";
import Section1Slideshow from "../components/Section1Slideshow";
import Section2CollectionBanner from '../components/Section2CollectionBanner';

function Home() {
  return (
    <div className='flex flex-col gap-12'>

      <Section fullWidth>
        <Section1Slideshow />
      </Section>

      <Section>
        <Section2CollectionBanner />
      </Section>
    </div>
  )
}

export default Home