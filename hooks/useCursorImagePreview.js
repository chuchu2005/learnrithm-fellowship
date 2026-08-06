// hooks/useCursorImagePreview.js

"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useCursorImagePreview(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap) {
      console.warn("[useCursorImagePreview] GSAP not available.");
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 992px)");
    let instances = [];

    const init = () => {
      const cards = document.querySelectorAll("[data-cursor-image-card]");

      cards.forEach((card) => {
        const img = card.querySelector("[data-cursor-image]");
        if (!img) return;

        let rect;
        const offsetX = -(img.offsetWidth + 40);
        const offsetY = -(img.offsetHeight + 40);

        const xTo = gsap.quickTo(img, "x", { duration: 0.3, ease: "power3.out" });
        const yTo = gsap.quickTo(img, "y", { duration: 0.3, ease: "power3.out" });

        const enter = (e) => {
          rect = card.getBoundingClientRect();
          gsap.set(img, {
            x: e.clientX - rect.left + offsetX,
            y: e.clientY - rect.top + offsetY,
          });
          gsap.to(img, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" });
        };

        const move = (e) => {
          xTo(e.clientX - rect.left + offsetX);
          yTo(e.clientY - rect.top + offsetY);
        };

        const leave = () => {
          gsap.to(img, { opacity: 0, scale: 0.6, duration: 0.3, ease: "power3.in" });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        instances.push({ card, enter, move, leave });
      });
    };

    const destroy = () => {
      instances.forEach(({ card, enter, move, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
      instances = [];
    };

    const handleChange = (e) => {
      if (e.matches) init();
      else destroy();
    };

    if (mediaQuery.matches) init();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      destroy();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [ready]);
}