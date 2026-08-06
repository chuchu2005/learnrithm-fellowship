
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AdminRouteReloader() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const prev = prevPathname.current;
    const curr = pathname;

    const wasAdmin = prev.startsWith("/admin");
    const isAdmin = curr.startsWith("/admin");

    if (wasAdmin !== isAdmin) {
      window.location.href = curr;
      return;
    }

    prevPathname.current = curr;
  }, [pathname]);

  return null;
}
