import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { couples } from "./data/couples";

import IntroOverlay from "./components/IntroOverlay";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
// import DayProgram from "./components/DayProgram";
import FunctionHeading from "./components/FunctionHeading";
// import Wardrobe from "./components/Wardrobe";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
// import FAQ from "./components/FAQ";
import Gifts from "./components/Gifts";
import HaldiSection from "./components/HaldiSection";
import MehendiSection from "./components/MehendiSection";
import MyraSection from "./components/MyraSection";
import PheraSection from "./components/PheraSection";
import SangeetSection from "./components/SangeetSection";
import VarmalaSection from "./components/VarmalaSection";
// import BackToTimeline from "./components/BackToTimeline";
import SectionDivider from "./components/SectionDivider";
import ScrollParallaxSection from "./components/ScrollParallaxSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const musicRef = useRef(null);
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  const data = couples[path] || couples["naman-anisha"]; // default

  return (
    <>
      <MusicButton audioRef={musicRef} />

      <AnimatePresence>
        {showIntro && (
          <IntroOverlay
            onFinish={() => setShowIntro(false)}
            onStartMusic={() => musicRef.current?.play()}
          />
        )}
      </AnimatePresence>

      <Hero animate={!showIntro} data={data} />
      <Countdown />
      <Location />

      <SectionDivider />
      <ScrollParallaxSection>
        <FunctionHeading />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <MehendiSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <MyraSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <SangeetSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <HaldiSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <VarmalaSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      <ScrollParallaxSection>
        <PheraSection />
      </ScrollParallaxSection>

      {/* <SectionDivider /> */}
      {/* <DayProgram /> */}

      <SectionDivider />
      <Gifts />

      <RSVP />

      <Footer data={data} />
    </>
  );
}
