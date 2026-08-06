"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollSmoother } from "@/lib/gsap"; 

export default function PageToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(0, false);
    }
  }, [pathname]);

  return null;
}