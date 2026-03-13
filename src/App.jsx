import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { couples } from "./data/couples";
import { Toaster } from "react-hot-toast";

import IntroOverlay from "./components/IntroOverlay";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import FunctionHeading from "./components/FunctionHeading";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import HaldiSection from "./components/HaldiSection";
import MehendiSection from "./components/MehendiSection";
import MyraSection from "./components/MyraSection";
import PheraSection from "./components/PheraSection";
import SangeetSection from "./components/SangeetSection";
import VarmalaSection from "./components/VarmalaSection";
import BackToTimeline from "./components/BackToTimeline";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const musicRef = useRef(null);
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  const data = couples[path] || couples["naman-anisha"]; // default

  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 95, // pushes it down so it doesn't hug the browser edge
        }}
        toastOptions={{
          duration: 3600,
          style: {
            background: "#FFF9F5",
            color: "#4A4A4A",
            border: "1px solid rgba(214,178,142,0.35)",
            padding: "14px 20px",
            borderRadius: "18px",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.2px",
            backdropFilter: "blur(6px)",
            boxShadow: "0 14px 40px rgba(140,100,60,0.12)",
          },
        }}
      />
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

      <FunctionHeading id="timeline" />

      <MehendiSection id="mehendi" />
      <MyraSection id="myra" />
      <SangeetSection id="sangeet" />
      <HaldiSection id="haldi" />
      <VarmalaSection id="varmala" />
      <PheraSection id="phera" />
      <BackToTimeline />

      <RSVP />

      <Footer data={data} />
      <BackToTop />
    </>
  );
}
