"use client";
import Image from "next/image";
import Link from "next/link";
import { useMobileMenu } from "@/context/MobileMenuContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";


export default function Header() {

    const { setMenuOpen } = useMobileMenu();

    return (
        <header className="header position-fixed top-0 w-full">

            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between w-full">
                        <Link className="navbar-brand d-block" href="/">
                            <Image
                                src="/img/ui/logos/logo.png"
                                alt="Learnrithm"
                                width={300}
                                height={46}
                                className="img-fluid logo"
                                style={{ width: '200px', height: 'auto', objectFit: 'contain' }}
                                unoptimized
                            />
                        </Link>
                        <div className="d-none d-xl-flex align-items-center justify-content-between flex-fill">
                            <ul className="navbar-nav lr-main-nav justify-content-center mx-auto position-relative">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.whatsapp.com/channel/0029Var9cUOBvvsnbSVAY141" target="_blank" rel="noopener noreferrer">
                                        Join Our Community
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/careers">
                                        Careers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://ambassadors.learnrithm.com/apply" target="_blank" rel="noopener noreferrer">
                                        Become An Ambassador
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center gap-3">
                                <LanguageSwitcher menuAlign="right" />
                                <Link href="https://app.learnrithm.com" className="btn btn-sm btn-dark has-icon">
                                    Get Started

                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></path>
                                            <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414">
                                            </path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="d-xl-none d-flex align-items-center gap-3">
                            <LanguageSwitcher menuAlign="right" />
                            <button onClick={() => setMenuOpen(true)} className="btn mobile-menu-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu-offcanvas">
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                        {/* Hidden host for Google Translate (mounted once, never shown) */}
                        <div id="lr-gt-element" style={{ display: "none" }} />
                    </div>
                </div>
            </nav>
        </header>
    )

};

