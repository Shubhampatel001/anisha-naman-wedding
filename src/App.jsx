import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import IntroOverlay from "./components/IntroOverlay";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import DayProgram from "./components/DayProgram";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Gifts from "./components/Gifts";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const musicRef = useRef(null);

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

      {/* Main content always rendered behind */}
      <Hero animate={!showIntro} />
      <Countdown />
      <Location />
      <SectionDivider />
      <DayProgram />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Gifts />
      <RSVP />
      <Footer />
    </>
  );
}
