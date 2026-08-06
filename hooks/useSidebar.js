// hooks/useSidebar.js
// Replaces sidebarToggle() and sidebarDropdownMenu() vanilla functions

"use client";

import { useEffect } from "react";

/**
 * useSidebarDropdown — handles .has-dropdown > a click accordion behavior
 *
 * Usage (in your Sidebar component):
 *   useSidebarDropdown();
 */
export function useSidebarDropdown() {
  useEffect(() => {
    const links = document.querySelectorAll(".has-dropdown > a");

    const handleClick = function () {
      const allSubmenus = document.querySelectorAll(".sidebar-submenu");
      const allDropdowns = document.querySelectorAll(".has-dropdown");
      const parentLi = this.parentElement;
      const submenu = this.nextElementSibling;

      allSubmenus.forEach((sub) => (sub.style.display = "none"));

      if (parentLi.classList.contains("active")) {
        allDropdowns.forEach((drop) => drop.classList.remove("active"));
        parentLi.classList.remove("active");
      } else {
        allDropdowns.forEach((drop) => drop.classList.remove("active"));
        if (submenu?.classList.contains("sidebar-submenu")) {
          submenu.style.display = "block";
        }
        parentLi.classList.add("active");
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);
}

/**
 * useSidebarToggle — opens/closes mobile sidebar
 *
 * Usage (in your layout or Sidebar component):
 *   useSidebarToggle();
 */
export function useSidebarToggle() {
  useEffect(() => {
    const openSidebar = () => {
      document.querySelector(".mobile-sidebar--menu")?.classList.add("show-sidebar");
      document.querySelector(".sidebar-overlay")?.classList.add("show");
    };

    const closeSidebar = () => {
      document.querySelector(".mobile-sidebar--menu")?.classList.remove("show-sidebar");
      document.querySelector(".sidebar-overlay")?.classList.remove("show");
    };

    const barIcons = document.querySelectorAll(".dashboard-body--bar-icon");
    const closeEls = document.querySelectorAll(".sidebar-menu--close, .sidebar-overlay");

    barIcons.forEach((el) => el.addEventListener("click", openSidebar));
    closeEls.forEach((el) => el.addEventListener("click", closeSidebar));

    return () => {
      barIcons.forEach((el) => el.removeEventListener("click", openSidebar));
      closeEls.forEach((el) => el.removeEventListener("click", closeSidebar));
    };
  }, []);
}
