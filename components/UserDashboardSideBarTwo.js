"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashboardSidebar } from "@/context/DashboardSidebarContext";

export default function UserDashboardSideBarTwo() {

    const pathname = usePathname();
    
    const { sidebarOpen, setSidebarOpen } = useDashboardSidebar();

    const menuItems = [
        {
            href: "/user-dashboard",
            label: "Dashboard",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M480 160L352 160L352 288L480 288L480 160zM544 288L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 288zM160 352L160 480L288 480L288 352L160 352zM288 288L288 160L160 160L160 288L288 288zM352 352L352 480L480 480L480 352L352 352z" />
                </svg>
            ),
        },
        {
            href: "/user-dashboard/my-order",
            label: "My Orders",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L312 96L312 198.1L281 167.1C271.6 157.7 256.4 157.7 247.1 167.1C237.8 176.5 237.7 191.7 247.1 201L319.1 273C328.5 282.4 343.7 282.4 353 273L425 201C434.4 191.6 434.4 176.4 425 167.1C415.6 157.8 400.4 157.7 391.1 167.1L360.1 198.1L360.1 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528z" />
                </svg>
            ),
        },
        {
            href: "/user-dashboard/support-ticket",
            label: "Support Ticket",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M96 128C60.7 128 32 156.7 32 192L32 256C32 264.8 39.4 271.7 47.7 274.6C66.5 281.1 80 299 80 320C80 341 66.5 358.9 47.7 365.4C39.4 368.3 32 375.2 32 384L32 448C32 483.3 60.7 512 96 512L544 512C579.3 512 608 483.3 608 448L608 384C608 375.2 600.6 368.3 592.3 365.4C573.5 358.9 560 341 560 320C560 299 573.5 281.1 592.3 274.6C600.6 271.7 608 264.8 608 256L608 192C608 156.7 579.3 128 544 128L96 128zM448 400L448 240L192 240L192 400L448 400zM144 224C144 206.3 158.3 192 176 192L464 192C481.7 192 496 206.3 496 224L496 416C496 433.7 481.7 448 464 448L176 448C158.3 448 144 433.7 144 416L144 224z" />
                </svg>
            ),
        },
        {
            href: "/user-dashboard/new-support-ticket",
            label: "New Ticket",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M32 192C32 156.7 60.7 128 96 128L544 128C579.3 128 608 156.7 608 192L608 256C608 264.8 600.6 271.7 592.3 274.6C573.5 281.1 560 299 560 320C560 341 573.5 358.9 592.3 365.4C600.6 368.3 608 375.2 608 384L608 448C608 483.3 579.3 512 544 512L96 512C60.7 512 32 483.3 32 448L32 384C32 375.2 39.4 368.3 47.7 365.4C66.5 358.9 80 341 80 320C80 299 66.5 281.1 47.7 274.6C39.4 271.7 32 264.8 32 256L32 192z" />
                </svg>
            ),
        },
        {
            href: "/user-dashboard/user-profile-settings",
            label: "Profile Setting",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M470.5 463.6C451.4 416.9 405.5 384 352 384L288 384C234.5 384 188.6 416.9 169.5 463.6C133.9 426.3 112 375.7 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 375.7 506.1 426.2 470.5 463.6zM430.4 496.3C398.4 516.4 360.6 528 320 528C279.4 528 241.6 516.4 209.5 496.3C216.8 459.6 249.2 432 288 432L352 432C390.8 432 423.2 459.6 430.5 496.3zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 304C297.9 304 280 286.1 280 264C280 241.9 297.9 224 320 224C342.1 224 360 241.9 360 264C360 286.1 342.1 304 320 304zM232 264C232 312.6 271.4 352 320 352C368.6 352 408 312.6 408 264C408 215.4 368.6 176 320 176C271.4 176 232 215.4 232 264z" />
                </svg>
            ),
        },
        {
            href: "/user-dashboard/password-change",
            label: "Password Change",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M400 416C497.2 416 576 337.2 576 240C576 142.8 497.2 64 400 64C302.8 64 224 142.8 224 240C224 258.7 226.9 276.8 232.3 293.7L71 455C66.5 459.5 64 465.6 64 472L64 552C64 565.3 74.7 576 88 576L168 576C181.3 576 192 565.3 192 552L192 512L232 512C245.3 512 256 501.3 256 488L256 448L296 448C302.4 448 308.5 445.5 313 441L346.3 407.7C363.2 413.1 381.3 416 400 416zM440 160C462.1 160 480 177.9 480 200C480 222.1 462.1 240 440 240C417.9 240 400 222.1 400 200C400 177.9 417.9 160 440 160z" />
                </svg>
            ),
        },
    ];

    const isActive = (href) => {
        if (href === "/user-dashboard") return pathname === "/user-dashboard";
        return pathname.startsWith(href);
    };



    return (
        <div className="dashboard-profile d-block d-xl-none">
            <div className="dashboard-profile--details">
                <div className={`sidebar-menu mobile-sidebar--menu rounded-2 ${sidebarOpen ? "show-sidebar" : ""}`}>
                    <span className="sidebar-menu--close" onClick={() => setSidebarOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path
                                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                        </svg>
                    </span>
                    <div className="dashboard-profile-wrap">
                        <div className="perv-thumb--wrap position-relative">
                            <div className="profile--bg position-relative">
                                <Image className="fit--img" width={300} height={120} src="/img/system/user-bg.png" alt="..." />
                            </div>
                            <div className="user-profile-thumb--wrap d-flex flex-column justify-content-center align-items-center">
                                <div className="user-profile--thumb position-relative mb-4">
                                    <Image width={120} height={120} className="fit--img user--thumb" src="/img/system/user.png" alt="..." />
                                    <div className="upload--photo position-absolute">
                                        <label htmlFor="photo_upload" className="d-flex justify-content-center align-items-center">
                                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.25104 10.0003C4.62833 10.0003 3.00561 10.0013 1.3829 9.99974C0.503322 9.99922 0.000781152 9.49251 0.000781152 8.60668C-0.000260384 6.75848 -0.000260384 4.91027 0.000781152 3.06206C0.000781152 2.16322 0.50176 1.66693 1.40738 1.66641C4.6351 1.66589 7.86334 1.66589 11.0911 1.66641C12.0081 1.66641 12.4997 2.16218 12.4997 3.0855C12.5003 4.91652 12.5003 6.74702 12.4997 8.57804C12.4992 9.5123 12.0081 9.99922 11.0666 9.99974C9.46158 10.0008 7.85657 10.0003 6.25104 10.0003ZM6.23854 8.74833C7.84667 8.75302 9.16057 7.44954 9.16578 5.84505C9.17047 4.23692 7.86698 2.9225 6.2625 2.91781C4.65384 2.91313 3.33995 4.21661 3.33526 5.82109C3.33057 7.42923 4.63458 8.74365 6.23854 8.74833ZM2.08125 4.16453C2.30622 4.16609 2.49682 3.97862 2.49838 3.75312C2.49995 3.52763 2.31247 3.33755 2.08646 3.33599C1.8594 3.33443 1.67141 3.51982 1.66984 3.7474C1.66776 3.97185 1.85576 4.16245 2.08125 4.16453Z" fill="#192135"></path>
                                                <path d="M8.55073 1.24034C7.00561 1.24034 5.48913 1.24034 3.94922 1.24034C4.03046 0.915901 4.09972 0.60344 4.18825 0.297228C4.24502 0.10194 4.39448 0.000911344 4.60018 0.000911344C5.70212 -0.000130192 6.80407 -0.00065096 7.90602 0.00143211C8.12474 0.00195288 8.26639 0.121209 8.32263 0.327433C8.40283 0.619063 8.47001 0.914339 8.55073 1.24034Z" fill="#192135"></path>
                                                <path d="M8.33256 5.8435C8.32892 6.99023 7.39049 7.91928 6.23907 7.91512C5.09234 7.91147 4.16433 6.97305 4.16798 5.82111C4.17162 4.67386 5.10953 3.74585 6.26147 3.75001C7.40872 3.75418 8.33673 4.69156 8.33256 5.8435ZM6.33333 4.16871C6.04691 4.16038 5.85631 4.30724 5.83704 4.55096C5.81777 4.79155 5.98911 4.96913 6.27032 4.99986C6.76245 5.0535 7.02804 5.32065 7.08324 5.81851C7.11344 6.08826 7.27853 6.25387 7.51131 6.2471C7.75555 6.24033 7.91751 6.04816 7.91439 5.76903C7.90553 4.93945 7.1676 4.19267 6.33333 4.16871Z" fill="#192135"></path>
                                            </svg>
                                        </label>
                                        <input id="photo_upload" type="file" hidden />
                                    </div>
                                </div>
                                <h3 className="text-center mb-0">Norman Gordon</h3>
                            </div>
                        </div>
                    </div>
                    <ul className="sidebar-menu-list list-unstyled overflow-hidden m-0">
                        {menuItems.map((item) => (
                            <li
                                key={item.href}
                                className={`sidebar-menu-list--item ${isActive(item.href) ? "active" : ""}`}
                            >
                                <Link href={item.href} onClick={() => setSidebarOpen(false)} className="sidebar-menu-list--link">
                                    <span className="icon">{item.icon}</span>
                                    <span className="text">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


