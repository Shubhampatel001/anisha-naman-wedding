import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { couples } from "./data/couples";

import IntroOverlay from "./components/IntroOverlay";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import DayProgram from "./components/DayProgram";
// import Wardrobe from "./components/Wardrobe";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
// import FAQ from "./components/FAQ";
import Gifts from "./components/Gifts";
import SectionDivider from "./components/SectionDivider";

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
      {/* <Wardrobe />
      <SectionDivider /> */}
      <DayProgram />
      <SectionDivider />
      {/* <FAQ />
      <SectionDivider /> */}
      <Gifts />
      <RSVP />
      <Footer data={data} />
    </>
  );
}
