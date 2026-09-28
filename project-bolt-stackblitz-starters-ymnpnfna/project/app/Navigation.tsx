"use client";

import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState(false);
  const servicesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    servicesRef.current = document.getElementById("services");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-96px 0px -55% 0px",
      }
    );

    const el = servicesRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-white/[0.06] bg-[#090909]/70 backdrop-blur-xl" />
      <nav className="relative mx-auto flex h-24 min-w-0 max-w-[1500px] items-center justify-between px-6 md:px-10">
        <div className="z-10 text-[13px]">
          <a
            href="#services"
            onClick={(e) => handleClick(e, "services")}
            className={`transition duration-300 ${
              active ? "text-[#c8b18b]" : "text-white/55 hover:text-white"
            }`}
          >
            What we do
          </a>
        </div>

        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(1.25rem,3.5vw,2.25rem)] font-medium tracking-[-0.05em] text-[#f1eee7]"
        >
          Glowup Tech
        </a>

        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 whitespace-nowrap rounded-full border border-white/20 px-4 py-2.5 text-[12px] transition duration-300 hover:border-[#c8b18b] hover:text-[#c8b18b] md:px-5 md:py-3 md:text-[13px]"
        >
          Start a project <span className="ml-2">↗</span>
        </a>
      </nav>
    </header>
  );
}
