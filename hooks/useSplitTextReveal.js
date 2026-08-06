// hooks/useSplitTextReveal.js

"use client";

import { useEffect } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

export function useSplitTextReveal(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !SplitText || !ScrollTrigger) {
      console.warn("[useSplitTextReveal] GSAP plugins not available.");
      return;
    }

    const instances = [];

    gsap.utils.toArray(".ss-text-reveal-blur").forEach((h) => {
      const split = SplitText.create(h, {
        type: "words,chars",
        mask: "chars",
        onSplit: (self) => {
          gsap.set(h, { autoAlpha: 1 });

          gsap.set(self.chars, {
            yPercent: 50,
            scaleY: 0,
            transformOrigin: "center bottom",
            autoAlpha: 0,
            filter: "blur(6px)",
          });

          gsap.to(self.chars, {
            scrollTrigger: {
              trigger: h,
              start: "top 85%",
              once: true,
            },
            yPercent: 0,
            scaleY: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.03,
            delay: 0.2,
            ease: "power3.out",
          });
        },
      });

      instances.push(split);
    });

    return () => {
      instances.forEach((split) => {
        try { split.revert(); } catch (_) {}
      });
    };
  }, [ready]);
}