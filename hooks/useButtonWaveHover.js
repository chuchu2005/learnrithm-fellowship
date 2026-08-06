// hooks/useButtonWaveHover.js

"use client";

import { useEffect } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export function useButtonWaveHover(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !SplitText) {
      console.warn("[useButtonWaveHover] GSAP or SplitText not available.");
      return;
    }

    const buttons = gsap.utils.toArray(".btn-hover-wave");
    const splitInstances = [];
    const listeners = [];

    buttons.forEach((button) => {
      const split = SplitText.create(button, {
        type: "words,chars",
        tag: "span",
        wordsClass: "word",
        charsClass: "char",
      });

      splitInstances.push(split);

      const hoverWave = () => {
        gsap.to(split.chars, {
          keyframes: [
            { xPercent: 35, autoAlpha: 0, duration: 0.14, ease: "power2.out" },
            { xPercent: 0, autoAlpha: 1, duration: 0.22, ease: "power3.out" },
          ],
          stagger: { each: 0.04, from: "end" },
          overwrite: true,
        });
      };

      button.addEventListener("mouseenter", hoverWave);
      listeners.push({ button, hoverWave }); // ← cleanup এর জন্য track করো
    });

    return () => {
      // event listener গুলো remove করো
      listeners.forEach(({ button, hoverWave }) => {
        button.removeEventListener("mouseenter", hoverWave);
      });
      // SplitText revert করো
      splitInstances.forEach((split) => {
        try { split.revert(); } catch (_) {}
      });
    };
  }, [ready]);
}