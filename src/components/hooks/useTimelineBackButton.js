import { useEffect, useState } from "react";

export function useTimelineBackButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById("timeline");
      const gifts = document.getElementById("gifts");

      if (!timeline || !gifts) return;

      const scrollY = window.scrollY;
      const start = timeline.offsetTop;
      const end = gifts.offsetTop - window.innerHeight * 0.5;

      setVisible(scrollY > start && scrollY < end);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}