
import Link from "next/link";
import Image from "next/image";
import { COMPARE_PAGES } from "@/lib/compareData";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer position-relative overflow-hidden bg-dark">
            <Image src="/img/shapes/gradient-shape-2.svg" width={245} height={165} alt="" className="position-absolute top-0 end-0 h-30 h-lg-40" />

                <div className="container position-relative z-1">
                    <div className="footer-top py-15 py-md-20 py-xl-30">
                        <div className="row g-10" data-ss-reveal-group="" data-y="50">
                            <div className="col-xl-3 text-center text-xl-start">
                                <Link className="navbar-brand" href="/">
                                    <Image src="/img/ui/logos/logo-white.png" width={300} height={46} alt="Learnrithm" className="img-fluid logo" style={{ width: '180px', height: 'auto', objectFit: 'contain' }} unoptimized />
                                </Link>

                                <div className="mb-6"></div>

                                <p className="fs-md mb-0 text-white text-opacity-75">
                                    Learnrithm - Transforming education through AI-powered learning solutions.
                                </p>
                            </div>
                            <div className="col-xl-9">
                                <div className="row g-10" data-ss-reveal-group="" data-y="50" data-delay="0.3">
                                    <div className="col-md-6 col-lg">
                                        <div className="footer-item">
                                            <h6 className="text-white mb-6">Company</h6>

                                            <ul className="list-unstyled d-grid gap-4 fs-md mb-0">
                                                <li>
                                                    <Link href="https://blog.learnrithm.com" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/careers" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Team
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about-us" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/features" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Features
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Pricing
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg">
                                        <div className="footer-item">
                                            <h6 className="text-white mb-6">Programs</h6>

                                            <ul className="list-unstyled d-grid gap-4 fs-md mb-0">
                                                <li>
                                                    <a href="https://ambassadors.learnrithm.com/apply" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base" target="_blank" rel="noopener noreferrer">
                                                        Campus Ambassador
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://partner.learnrithm.com" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base" target="_blank" rel="noopener noreferrer">
                                                        Partner Program
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg">
                                        <div className="footer-item">
                                            <h6 className="text-white mb-6">Legal</h6>

                                            <ul className="list-unstyled d-grid gap-4 fs-md mb-0">
                                                <li>
                                                    <Link href="/privacypolicy" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/termsofservice" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Terms of Service
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ai-policies" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        AI Policies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/refundpolicy" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Refund Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/cookiepolicy" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Cookie Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/requestdeletion" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                        Request Deletion
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg">
                                        <div className="footer-item">
                                            <h6 className="text-white mb-6">Connect</h6>

                                            <div className="">
                                                <ul className="list-unstyled vstack mb-0">
                                                    <li>
                                                        <Link href="https://web.facebook.com/61566708602101/" className="btn btn-outline-white border-0 px-0 bg-transparent-hover text-primary-hover">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 13 24">
                                                                <path d="M13 0H9.455c-1.568 0-3.07.632-4.179 1.757A6.047 6.047 0 0 0 3.546 6v3.6H0v4.8h3.545V24h4.728v-9.6h3.545L13 9.6H8.273V6c0-.318.124-.623.346-.849.222-.225.522-.351.836-.351H13V0Z"></path>
                                                            </svg>

                                                            Facebook
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://twitter.com/learnrithmai" className="btn btn-outline-white border-0 px-0 bg-transparent-hover text-primary-hover">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 21 22">
                                                                <path d="m9.013 13.455-1.66 1.974c-1.802 2.143-3.605 4.285-5.404 6.43a.354.354 0 0 1-.307.14c-.48-.006-.958-.002-1.437-.002-.056 0-.11-.006-.205-.01.187-.225.352-.423.518-.62l7.066-8.402c.176-.209.347-.422.53-.625.073-.082.069-.137.01-.226-.952-1.41-1.899-2.824-2.848-4.236L1.97 2.958.07.129C.05.1.034.07 0 .014.08.01.14.004.199.004c1.956 0 3.912 0 5.868-.004.132 0 .205.048.277.156 1.386 2.067 2.774 4.131 4.162 6.197.345.513.688 1.026 1.032 1.54l.14.203.524-.616c2.056-2.445 4.112-4.89 6.166-7.337.081-.097.162-.145.29-.143.485.008.97.003 1.455.004.055 0 .11.005.203.01-.218.262-.412.497-.608.73-2.364 2.809-4.726 5.618-7.093 8.424-.099.117-.095.194-.014.314 1.989 2.954 3.973 5.91 5.96 8.866l2.322 3.453c.035.053.068.107.118.187-.081.003-.141.009-.2.009-1.95 0-3.9-.002-5.851.003-.143 0-.223-.05-.304-.17-1.426-2.13-2.859-4.257-4.289-6.385-.422-.629-.843-1.259-1.266-1.888-.02-.029-.041-.055-.077-.102Zm9.462 7.18c-.042-.07-.07-.12-.1-.166-.316-.462-.633-.923-.948-1.385l-7.05-10.318C8.74 6.371 7.102 3.976 5.467 1.58c-.073-.107-.146-.155-.277-.154-.839.006-1.677.002-2.515.003-.05 0-.098.005-.17.01.05.076.085.134.124.19l6.057 8.858c2.285 3.343 4.57 6.686 6.851 10.031.07.102.144.13.255.128.833-.003 1.665-.001 2.498-.002.053 0 .108-.005.185-.009Z"></path>
                                                            </svg>
                                                            Twitter X
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://instagram.com/learnrithm" className="btn btn-outline-white border-0 px-0 bg-transparent-hover text-primary-hover">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                            </svg>
                                                            Instagram
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://linkedin.com/company/learnrithm" className="btn btn-outline-white border-0 px-0 bg-transparent-hover text-primary-hover">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 25 24">
                                                                <path d="M17.498 7.576c1.99 0 3.898.799 5.305 2.22A7.62 7.62 0 0 1 25 15.156v8.842h-5.001v-8.842a2.54 2.54 0 0 0-.733-1.787 2.488 2.488 0 0 0-1.768-.74c-.663 0-1.3.267-1.768.74a2.54 2.54 0 0 0-.733 1.787v8.842H9.996v-8.842c0-2.01.79-3.938 2.197-5.36a7.464 7.464 0 0 1 5.305-2.22ZM5.001 8.841H0V24h5.001V8.841ZM2.5 5.053c1.382 0 2.501-1.131 2.501-2.527C5.001 1.131 3.881 0 2.501 0 1.12 0 0 1.131 0 2.526c0 1.396 1.12 2.527 2.5 2.527Z"></path>
                                                            </svg>
                                                            LinkedIn
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <p className="fs-md mb-0 text-white text-opacity-75 mt-4">
                                                            Delaware, United States
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg">
                                        <div className="footer-item">
                                            <h6 className="text-white mb-6">Compare</h6>

                                            <ul className="list-unstyled d-grid gap-4 fs-md mb-0">
                                                {Object.entries(COMPARE_PAGES).map(([slug, p]) => (
                                                    <li key={slug}>
                                                        <Link href={`/compare/${slug}`} className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                            Learnrithm vs {p.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white border-opacity-25" />

                        <div className="py-6">
                            <div className="row align-items-center justify-content-between g-3">
                                <div className="col-12 col-md-auto text-center text-md-start">
                                    <p className="fs-md mb-0 text-white text-opacity-75">
                                        © {currentYear} Learnrithm | All Rights Reserved
                                    </p>
                                </div>

                                <div className="col-12 col-md-auto text-center text-md-start">
                                    <ul className="list-unstyled hstack justify-content-center gap-2 fs-md mb-0">
                                        <li>
                                            <Link href="/privacypolicy" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>|</li>
                                        <li>
                                            <Link href="/termsofservice" className="animated-link text-decoration-none text-white text-opacity-75 text-white-hover transition-base">
                                                Terms of Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
        </footer>

    )
};




