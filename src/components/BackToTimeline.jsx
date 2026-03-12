import { useEffect, useState } from "react";

export default function BackToTimeline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = [
      "mehendi",
      "myra",
      "sangeet",
      "haldi",
      "varmala",
      "phera",
    ];

    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        setVisible(visibleSections.size > 0);
      },
      {
        threshold: 0.1,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTimeline}
      className="
      fixed bottom-6 left-6
      z-50
      w-11 h-11
      rounded-full
      flex items-center justify-center

      bg-[#FFF8F3]/90
      backdrop-blur-md

      text-[#8B5E3C]
      text-lg

      border border-[#E9D7C7]

      shadow-[0_8px_25px_rgba(0,0,0,0.15)]

      hover:scale-110
      hover:bg-[#FFF8F3]

      transition-all duration-300
    "
    >
      ↑
    </button>
  );
}
