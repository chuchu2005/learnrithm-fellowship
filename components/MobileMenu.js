"use client";

import Link from "next/link";
import Image from "next/image";
import { Offcanvas, Collapse } from "react-bootstrap";
import { useMobileMenu } from "@/context/MobileMenuContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import { useState } from "react";

export default function MobileMenu() {
    const { menuOpen, setMenuOpen } = useMobileMenu();
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
    };

    return (
        <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} placement="start" className="mobile-menu-offcanvas">
            <Offcanvas.Header>
                <Link href="/" className="navbar-brand d-block">
                    <Image
                        src="/img/ui/logos/logo.png"
                        alt="Learnrithm"
                        width={300}
                        height={46}
                        className="img-fluid logo"
                        style={{ width: '160px', height: 'auto', objectFit: 'contain' }}
                        unoptimized
                    />
                </Link>
                <button type="button" className="btn-close" onClick={() => setMenuOpen(false)} aria-label="Close" />
            </Offcanvas.Header>

            <Offcanvas.Body
                className="d-flex flex-column justify-content-between gap-5"
                onClick={(e) => { if (e.target.closest("a")) setMenuOpen(false); }}
            >
                {/* ── Nav Menu ── */}
                <ul className="mobile-menu list-unstyled ps-0 mb-0">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">Join Our Community</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><a href="https://ambassadors.learnrithm.com/apply" target="_blank" rel="noopener noreferrer">Become An Ambassador</a></li>
                </ul>

                {/* ── Language Switcher ── */}
                <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-semibold">Language</span>
                    <LanguageSwitcher menuAlign="right" />
                </div>

                {/* ── Contact Info ── */}
                <div>
                    <h4 className="mb-4 ">Contact Us</h4>
                    <ul className="list-unstyled vstack mb-0">
                        <li>
                            <Link href="mailto:hello@learnrithm.com" className="btn btn-outline-dark border-0 px-0 bg-transparent-hover text-primary-hover py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 49 42">
                                    <path d="M46.666 29.1V12.767c0-3.874-1.1-6.46-2.856-8.09-1.77-1.644-4.379-2.478-7.71-2.478H12.767c-3.332 0-5.94.834-7.71 2.478-1.756 1.63-2.858 4.216-2.858 8.09a1.1 1.1 0 1 1-2.199 0c0-4.293 1.232-7.541 3.56-9.703C5.873.917 9.098 0 12.767 0H36.1c3.668 0 6.894.917 9.207 3.064 2.327 2.162 3.56 5.41 3.56 9.703V29.1c0 4.293-1.233 7.54-3.56 9.702-2.313 2.148-5.539 3.064-9.207 3.064H12.767a1.1 1.1 0 1 1 0-2.2H36.1c3.331 0 5.94-.833 7.71-2.476 1.755-1.63 2.856-4.217 2.856-8.09Z" />
                                    <path d="M35.418 13.074a1.1 1.1 0 0 1 1.373 1.718l-7.303 5.833-.002.002c-2.804 2.233-7.316 2.233-10.12 0l-.003-.003-7.279-5.833a1.1 1.1 0 0 1 1.375-1.716l7.28 5.833c2.003 1.592 5.376 1.591 7.377-.002l7.302-5.832ZM15.1 30.333a1.1 1.1 0 1 1 0 2.2h-14a1.1 1.1 0 1 1 0-2.2h14ZM8.1 21a1.1 1.1 0 1 1 0 2.2h-7a1.1 1.1 0 1 1 0-2.2h7Z" />
                                </svg>
                                hello@learnrithm.com
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="btn btn-outline-dark border-0 px-0 bg-transparent-hover text-primary-hover py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 43 49">
                                    <path d="M27.394 20.49a6.18 6.18 0 1 0-12.361 0 6.18 6.18 0 0 0 12.36 0Zm2.2 0a8.38 8.38 0 1 1-16.76 0 8.38 8.38 0 0 1 16.76 0Z" />
                                    <path d="M21.23 0c9.044.006 18.197 5.327 20.618 16.023l.124.582c2.453 12.198-5.172 22.386-11.589 28.548-5.117 4.937-13.21 4.934-18.347 0l-.002-.002C5.54 38.891-2.224 28.454.595 16l.001-.001C3.029 5.303 12.187-.006 21.231 0Zm0 2.2C13.014 2.193 4.905 6.974 2.74 16.483l.001.001c-2.547 11.253 4.436 20.93 10.82 27.082 4.29 4.118 11.034 4.115 15.297.001l.002-.002c6.407-6.153 13.39-15.805 10.842-27.057C37.55 6.999 29.447 2.205 21.23 2.199Z" />
                                </svg>
                                Delaware, United States
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ── Social Links ── */}
                <div>
                    <h4 className="mb-4 ">Follow Us</h4>
                    <ul className="list-unstyled hstack gap-2 mb-0">
                        <li>
                            <Link href="https://web.facebook.com/61566708602101/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark icon-btn border">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 13 24">
                                    <path d="M13 0H9.455c-1.568 0-3.07.632-4.179 1.757A6.047 6.047 0 0 0 3.546 6v3.6H0v4.8h3.545V24h4.728v-9.6h3.545L13 9.6H8.273V6c0-.318.124-.623.346-.849.222-.225.522-.351.836-.351H13V0Z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/learnrithmai" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark icon-btn border">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 21 22">
                                    <path d="m9.013 13.455-1.66 1.974c-1.802 2.143-3.605 4.285-5.404 6.43a.354.354 0 0 1-.307.14c-.48-.006-.958-.002-1.437-.002-.056 0-.11-.006-.205-.01.187-.225.352-.423.518-.62l7.066-8.402c.176-.209.347-.422.53-.625.073-.082.069-.137.01-.226-.952-1.41-1.899-2.824-2.848-4.236L1.97 2.958.07.129C.05.1.034.07 0 .014.08.01.14.004.199.004c1.956 0 3.912 0 5.868-.004.132 0 .205.048.277.156 1.386 2.067 2.774 4.131 4.162 6.197.345.513.688 1.026 1.032 1.54l.14.203.524-.616c2.056-2.445 4.112-4.89 6.166-7.337.081-.097.162-.145.29-.143.485.008.97.003 1.455.004.055 0 .11.005.203.01-.218.262-.412.497-.608.73-2.364 2.809-4.726 5.618-7.093 8.424-.099.117-.095.194-.014.314 1.989 2.954 3.973 5.91 5.96 8.866l2.322 3.453c.035.053.068.107.118.187-.081.003-.141.009-.2.009-1.95 0-3.9-.002-5.851.003-.143 0-.223-.05-.304-.17-1.426-2.13-2.859-4.257-4.289-6.385-.422-.629-.843-1.259-1.266-1.888-.02-.029-.041-.055-.077-.102Z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/learnrithm" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark icon-btn border">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.01 0C5.377 0 0 5.368 0 11.99c0 5.082 3.163 9.424 7.63 11.17-.109-.946-.197-2.407.04-3.443.217-.938 1.403-5.961 1.403-5.961s-.355-.72-.355-1.776c0-1.668.968-2.911 2.174-2.911 1.028 0 1.523.77 1.523 1.688 0 1.026-.653 2.566-1 3.997-.285 1.194.604 2.17 1.78 2.17 2.135 0 3.776-2.25 3.776-5.486 0-2.873-2.065-4.876-5.02-4.876-3.42 0-5.428 2.557-5.428 5.201 0 1.026.396 2.132.89 2.735.1.117.11.225.08.344-.09.375-.296 1.193-.337 1.362-.049.217-.178.265-.405.158-1.503-.701-2.442-2.882-2.442-4.648 0-3.78 2.747-7.253 7.937-7.253 4.162 0 7.403 2.96 7.403 6.928 0 3.967-2.61 7.46-6.227 7.46-1.216 0-2.363-.631-2.748-1.381l-.751 2.852c-.266 1.046-.999 2.349-1.493 3.148 1.128.344 2.315.532 3.56.532C18.623 24 24 18.632 24 12.01 24.02 5.368 18.643 0 12.01 0Z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://linkedin.com/company/learnrithm" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark icon-btn border">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 25 24">
                                    <path d="M17.498 7.576c1.99 0 3.898.799 5.305 2.22A7.62 7.62 0 0 1 25 15.156v8.842h-5.001v-8.842a2.54 2.54 0 0 0-.733-1.787 2.488 2.488 0 0 0-1.768-.74c-.663 0-1.3.267-1.768.74a2.54 2.54 0 0 0-.733 1.787v8.842H9.996v-8.842c0-2.01.79-3.938 2.197-5.36a7.464 7.464 0 0 1 5.305-2.22ZM5.001 8.841H0V24h5.001V8.841ZM2.5 5.053c1.382 0 2.501-1.131 2.501-2.527C5.001 1.131 3.881 0 2.501 0 1.12 0 0 1.131 0 2.526c0 1.396 1.12 2.527 2.5 2.527Z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ── CTA ── */}
                <div className="d-grid gap-5 mt-3">
                    <Link href="https://app.learnrithm.com" className="btn btn-primary has-icon">
                        Get Started
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></path>
                                <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </Offcanvas.Body>
        </Offcanvas >
    );
}




