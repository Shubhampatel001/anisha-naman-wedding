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

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const musicRef = useRef(null);
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  const data = couples[path] || couples["naman-anisha"]; // default

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#FFF9F5",
            color: "#3A3A3A",
            border: "1px solid #F0D9C8",
            padding: "14px 18px",
            borderRadius: "14px",
            fontSize: "14px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
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

      <FunctionHeading />

      <MehendiSection />

      <MyraSection />

      <SangeetSection />

      <HaldiSection />

      <VarmalaSection />

      <PheraSection />

      <RSVP />

      <Footer data={data} />
    </>
  );
}
