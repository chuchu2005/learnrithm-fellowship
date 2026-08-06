// hooks/usePinnedSections.js

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function usePinnedSections(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[usePinnedSections] GSAP or ScrollTrigger not available.");
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const triggers = [];

      document.querySelectorAll(".pinned-container").forEach((container) => {
        const pinnedEl = container.querySelector(".pinned-element");
        const pinnedParent = pinnedEl?.parentElement;
        const header = document.querySelector(".header");
        const pinOffset = (header?.offsetHeight || 0) + 24;

        if (!pinnedEl || !pinnedParent) return;

        const syncPinnedWidth = () => {
          const styles = window.getComputedStyle(pinnedParent);
          const paddingX =
            parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
          pinnedEl.style.width = `${Math.max(pinnedParent.clientWidth - paddingX, 0)}px`;
        };

        syncPinnedWidth();

        const st = ScrollTrigger.create({
          trigger: pinnedParent,
          pin: pinnedEl,
          start: () => `top top+=${pinOffset}`,
          end: () => {
            const relativeTop = pinnedParent.offsetTop + pinnedEl.offsetTop;
            const pinDistance = Math.max(
              container.offsetHeight - pinnedEl.offsetHeight - relativeTop,
              0,
            );
            return `+=${pinDistance}`;
          },
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: syncPinnedWidth,
          onRefresh: syncPinnedWidth,
          onKill: () => pinnedEl.style.removeProperty("width"),
          markers: false,
        });

        triggers.push(st);
      });

      return () => triggers.forEach((st) => st.kill());
    });

    return () => mm.revert();
  }, [ready]);
}