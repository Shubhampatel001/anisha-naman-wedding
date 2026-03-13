import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
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
      <ChevronUp size={20} />
    </button>
  );
}
