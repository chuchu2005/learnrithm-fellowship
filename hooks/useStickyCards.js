// hooks/useStickyCards.js

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap"; // ← SplitText সরানো হয়েছে

export function useStickyCards(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[useStickyCards] GSAP or ScrollTrigger not available.");
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const allTriggers = [];

      document.querySelectorAll(".sticky-cards-container").forEach((container) => {
        const cards = gsap.utils.toArray(".sticky-card", container);
        if (!cards.length) return;

        const spacer = Number(container.dataset.stickySpacer) || 20;
        const minScale = Number(container.dataset.stickyMinScale) || 0.8;
        const scaleAmount = Number(container.dataset.stickyScaleAmount) || 0.2;
        const stickyTop = Number(container.dataset.stickyTop) || 200;

        const distributor = gsap.utils.distribute({
          base: minScale,
          amount: scaleAmount,
        });

        cards.forEach((card, index) => {
          const scaleValue = distributor(index, card, cards);
          const stackEnd = () =>
            `bottom top+=${stickyTop + card.offsetHeight + cards.length * spacer}`;

          card.style.zIndex = index + 1;

          const scaleAnim = gsap.to(card, {
            ease: "none",
            scale: scaleValue,
            scrollTrigger: {
              trigger: card,
              start: `top ${stickyTop}px`,
              endTrigger: container,
              end: stackEnd,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          const pinSt = ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} ${stickyTop}px`,
            endTrigger: container,
            end: stackEnd,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          allTriggers.push(scaleAnim.scrollTrigger, pinSt);
        });
      });

      return () => allTriggers.forEach((st) => st?.kill());
    });

    return () => mm.revert();
  }, [ready]);
}