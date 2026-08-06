
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger, ScrollSmoother } from "@/lib/gsap";
import { useHeaderPin } from "@/hooks/useHeaderPin";
import { useSidebarToggle, useSidebarDropdown } from "@/hooks/useSidebar";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { usePinnedSections } from "@/hooks/usePinnedSections";
import { useStickyCards } from "@/hooks/useStickyCards";
import { useClipAnim } from "@/hooks/useClipAnim";
import { useCursorImagePreview } from "@/hooks/useCursorImagePreview";
import { useButtonWaveHover } from "@/hooks/useButtonWaveHover";
import { useInputNumberArrows } from "@/hooks/useInputNumberArrows";
import {
  useElementReveals,
  useGroupReveals,
  useCounters,
  useTiltEffect,
  useHoverParallax,
} from "@/hooks/useGsapAnimations";

export default function ClientProviders() {
  const pathname = usePathname();

  
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollSmoother.get()?.kill();
    };
  }, [pathname]);


  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  useSplitTextReveal(pathname);
  useHeaderPin(pathname);
  usePinnedSections(pathname);
  useStickyCards(pathname);
  useClipAnim(pathname);
  useCursorImagePreview(pathname);
  useButtonWaveHover(pathname);
  useInputNumberArrows(pathname);
  useSidebarToggle(pathname);
  useSidebarDropdown(pathname);
  useElementReveals(pathname);
  useGroupReveals(pathname);
  useCounters(".counterOne", 2, pathname);
  useCounters(".counterTwo", 2, pathname);
  useCounters(".counterThree", 2, pathname);
  useCounters(".counterFour", 2, pathname);
  useTiltEffect(pathname);
  useHoverParallax(pathname);

  useEffect(() => {
    if (!window.VenoBox) return;
    new window.VenoBox({ selector: ".video-btn" });
    new window.VenoBox({
      selector: ".img-gallery-btn",
      numeration: true,
      infinigall: true,
    });
  }, [pathname]);

  return null;
}