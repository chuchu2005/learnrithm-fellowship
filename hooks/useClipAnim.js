// hooks/useClipAnim.js

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useClipAnim(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[useClipAnim] GSAP or ScrollTrigger not available.");
      return;
    }

    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
      "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
      "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
      "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
      "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
      "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
      "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)",
    ];

    const finalClipPaths = [
      "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
      "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
      "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
      "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
      "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
      "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
      "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
      "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)",
    ];

    const diagonalOrder = [
      [".mask-1"],
      [".mask-2", ".mask-4"],
      [".mask-3", ".mask-5", ".mask-7"],
      [".mask-6", ".mask-8"],
      [".mask-9"],
    ];

    // Build mask divs for every wrapper
    document.querySelectorAll(".img-clip-anim-box").forEach((wrapper) => {
      const img = wrapper.querySelector(".img-clip-anim");
      if (!img) return;

      const url = img.src;

      wrapper.querySelectorAll(".mask").forEach((m) => m.remove());

      for (let i = 0; i < 9; i++) {
        const mask = document.createElement("div");
        mask.className = `mask mask-${i + 1}`;
        Object.assign(mask.style, {
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: "0",
        });
        wrapper.appendChild(mask);
      }
    });

    // Animate each wrapper
    const timelines = [];

    gsap.utils.toArray(".img-clip-anim-box").forEach((wrapper) => {
      const masks = wrapper.querySelectorAll(".mask");
      if (!masks.length) return;

      gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: "top 75%" },
      });

      diagonalOrder.forEach((targets, i) => {
        const validTargets = targets
          .map((c) => wrapper.querySelector(c))
          .filter(Boolean);

        if (validTargets.length) {
          tl.to(
            validTargets,
            {
              clipPath: (j, el) => finalClipPaths[Array.from(masks).indexOf(el)],
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            },
            i * 0.125,
          );
        }
      });

      timelines.push(tl);
    });

    return () => {
      timelines.forEach((tl) => tl.kill());
      document.querySelectorAll(".img-clip-anim-box .mask").forEach((m) => m.remove());
    };
  }, [ready]);
}