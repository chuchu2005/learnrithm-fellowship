// hooks/useGsapAnimations.js

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useElementReveals(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[useElementReveals] GSAP or ScrollTrigger not available.");
      return;
    }

    const els = gsap.utils.toArray("[data-ss-reveal]");
    const triggers = [];

    els.forEach((el) => {
      if (el.closest(".pinned-container")) return;

      const anim = gsap.from(el, {
        x: el.dataset.x ? parseFloat(el.dataset.x) : 0,
        y: el.dataset.y ? parseFloat(el.dataset.y) : 0,
        autoAlpha: 0,
        filter: "blur(10px)",
        duration: el.dataset.duration ? parseFloat(el.dataset.duration) : 0.6,
        delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0,
        ease: el.dataset.ease || "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      triggers.push(anim.scrollTrigger);
    });

    return () => triggers.forEach((st) => st?.kill());
  }, [ready]);
}

export function useGroupReveals(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[useGroupReveals] GSAP or ScrollTrigger not available.");
      return;
    }

    const triggers = [];

    gsap.utils.toArray("[data-ss-reveal-group]").forEach((group) => {
      if (group.closest(".pinned-container")) return;

      const stagger = group.dataset.stagger ? parseFloat(group.dataset.stagger) : 0.1;
      const items = group.querySelectorAll(":scope > *");

      items.forEach((item, index) => {
        const anim = gsap.from(item, {
          x: group.dataset.x ? parseFloat(group.dataset.x) : 0,
          y: group.dataset.y ? parseFloat(group.dataset.y) : 0,
          autoAlpha: 0,
          filter: "blur(10px)",
          duration: group.dataset.duration ? parseFloat(group.dataset.duration) : 0.6,
          delay: (group.dataset.delay ? parseFloat(group.dataset.delay) : 0) + index * stagger,
          ease: group.dataset.ease || "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });
        triggers.push(anim.scrollTrigger);
      });
    });

    return () => triggers.forEach((st) => st?.kill());
  }, [ready]);
}

export function useCounters(className, duration = 2, ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap || !ScrollTrigger) {
      console.warn("[useCounters] GSAP or ScrollTrigger not available.");
      return;
    }

    const animations = [];

    gsap.utils.toArray(className).forEach((el) => {
      const target = { val: 0 };
      const anim = gsap.to(target, {
        val: el.getAttribute("data-number"),
        duration,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.innerText = target.val.toFixed(0);
        },
      });
      animations.push(anim);
    });

    return () => animations.forEach((a) => a.kill());
  }, [ready, className, duration]);
}

export function useTiltEffect(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap) {
      console.warn("[useTiltEffect] GSAP not available.");
      return;
    }

    const cards = document.querySelectorAll("[data-tilt]");
    const listeners = [];

    cards.forEach((card) => {
      const speed = parseFloat(card.dataset.tiltSpeed) || 0.3;
      const maxTilt = parseFloat(card.dataset.tiltMax) || 10;

      const onMove = (e) => {
        const bounds = card.getBoundingClientRect();
        const tiltX = ((e.clientY - bounds.top) / bounds.height - 0.5) * (maxTilt * 2);
        const tiltY = ((e.clientX - bounds.left) / bounds.width - 0.5) * (maxTilt * -2);
        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: speed,
        });
      };

      const onLeave = () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, ease: "power2.out", duration: speed * 2 });
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      listeners.push({ card, onMove, onLeave });
    });

    return () => {
      listeners.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [ready]);
}

export function useHoverParallax(ready) {
  useEffect(() => {
    if (!ready) return;

    if (!gsap) {
      console.warn("[useHoverParallax] GSAP not available.");
      return;
    }

    if (!window.matchMedia("(hover: hover)").matches) return;

    const areas = document.querySelectorAll(".ss-parallax-area");
    const allListeners = [];

    areas.forEach((area) => {
      const items = area.querySelectorAll(".ss-parallax-item");
      if (!items.length) return;

      const movers = [...items].map((item) => ({
        item,
        strength: parseFloat(item.dataset.parallaxStrength) || 20,
        moveX: gsap.quickTo(item, "x", { duration: 0.4, ease: "power3.out" }),
        moveY: gsap.quickTo(item, "y", { duration: 0.4, ease: "power3.out" }),
      }));

      const onMove = (e) => {
        const bounds = area.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width - 0.5;
        const y = (e.clientY - bounds.top) / bounds.height - 0.5;
        movers.forEach(({ moveX, moveY, strength }) => {
          moveX(x * strength);
          moveY(y * strength);
        });
      };

      const onLeave = () => movers.forEach(({ moveX, moveY }) => {
        moveX(0);
        moveY(0);
      });

      area.addEventListener("mousemove", onMove);
      area.addEventListener("mouseleave", onLeave);
      allListeners.push({ area, onMove, onLeave });
    });

    return () => {
      allListeners.forEach(({ area, onMove, onLeave }) => {
        area.removeEventListener("mousemove", onMove);
        area.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [ready]);
}