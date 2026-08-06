// hooks/useHeaderPin.js

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useHeaderPin(ready) {
  useEffect(() => {
    if (!ready) return;

    const header = document.querySelector(".header");
    if (!header) return;

    if (gsap && ScrollTrigger) {
      const st = ScrollTrigger.create({
        start: "top -80",
        onEnter: () => header.classList.add("pinned"),
        onLeaveBack: () => header.classList.remove("pinned"),
      });
      return () => st.kill();
    }

    // Fallback without GSAP
    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add("pinned");
      } else {
        header.classList.remove("pinned");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ready]);
}