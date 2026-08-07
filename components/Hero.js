"use client"

import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <section className="hero-section bg-light position-relative overflow-hidden pt-30 pt-xl-40 ss-parallax-area">
            <div className="grid-pattern"></div>
            <div className="overlay"></div>
            <div className="" data-ss-reveal-group="" data-y="50">
                <div className="shape shape-1 ss-parallax-item d-none d-lg-block" data-parallax-strength="10">
                    <Image src="/img/shapes/p1.webp" alt="..." width={190} height={80} />
                </div>
                <div className="shape shape-2 ss-parallax-item d-none d-lg-block" data-parallax-strength="10">
                    <Image src="/img/shapes/p2.webp" alt="..." width={260} height={80} />
                </div>
                <div className="shape shape-3 ss-parallax-item" data-parallax-strength="50">
                    <Image src="/img/shapes/p3.webp" alt="..." width={96} height={90} />
                </div>
                <div className="shape shape-4 ss-parallax-item" data-parallax-strength="50">
                    <Image src="/img/shapes/p4.webp" alt="..." width={97} height={91} />
                </div>
            </div>

            <div className="container position-relative z-1">
                <div className="row g-0 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center" data-ss-reveal-group="" data-y="50">
                            <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center hero-badge lh-sm text-center fw-semibold text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-primary" viewBox="0 0 20 20">
                                    <path d="M4.45 9.974c2.4-3.858 5.277-7.142 9.53-9.032.715 2.713 2.41 4.406 5.137 5.076-.21.596-.493 1.149-.798 1.69-.772 1.369-1.742 2.587-2.845 3.703-1.601 1.619-3.41 2.972-5.398 4.167-.324-.324-.637-.67-.987-.975-.292-.252-.375-.486-.228-.87.178-.464.191-.966.05-1.458a1.69 1.69 0 0 0-1.527-1.251 3.04 3.04 0 0 0-1.343.179c-.188.07-.307.044-.446-.098-.362-.373-.738-.732-1.146-1.131m11.348-2.853a2.897 2.897 0 0 0-2.934-2.914 2.924 2.924 0 0 0-2.916 2.904c-.012 1.606 1.308 2.935 2.926 2.944 1.611.008 2.925-1.31 2.924-2.934" />
                                    <path d="M19.527 4.826c-2.04-.11-4.196-2.23-4.352-4.273.073-.03.151-.068.233-.091a11.5 11.5 0 0 1 3.74-.45q.099.001.195.01c.415.055.611.236.636.654.025.454.036.911.013 1.366a11.4 11.4 0 0 1-.465 2.783zM6.954 12.18c.653-.003.873.206.872.725a2.17 2.17 0 0 1-.636 1.55c-1.1 1.13-2.274 2.177-3.647 2.977a4 4 0 0 1-.24.13c-.336.167-.589.152-.793-.047-.207-.2-.25-.467-.062-.787.304-.514.598-1.043.971-1.505a45 45 0 0 1 2.002-2.29 2.32 2.32 0 0 1 1.533-.753m-4.047-1.954c-.605-.11-1.193.004-1.78.128-.152.032-.303.08-.457.1a.56.56 0 0 1-.59-.295c-.123-.213-.1-.423.039-.623a.6.6 0 0 1 .074-.091c.668-.659 1.317-1.337 2.009-1.969a4.2 4.2 0 0 1 2.113-1.03c.334-.06.671-.083 1.012.073-.804 1.232-1.604 2.455-2.42 3.707m6.939 6.861c-.017.013.022-.021.065-.049 1.184-.748 2.369-1.494 3.581-2.258.117.262.114.551.07.844a4.34 4.34 0 0 1-1.127 2.356c-.575.619-1.186 1.204-1.785 1.802a.9.9 0 0 1-.22.158.57.57 0 0 1-.818-.44c-.014-.115-.001-.233.01-.35.071-.67.144-1.34.223-2.064zM8.065 15.27l.912.946c-.32.174-.656.359-.994.54q-.29.154-.588.3c-.463.227-.621.194-1.006-.222zm-4.226-4.24.9.912c-.25.261-.518.536-.779.818-.263.284-.518.574-.778.86-.343-.319-.4-.509-.223-.87.279-.57.577-1.13.88-1.72m9.031-5.652a1.733 1.733 0 0 1 1.756 1.748c0 .973-.793 1.766-1.759 1.759a1.783 1.783 0 0 1-1.749-1.742c-.017-.959.78-1.761 1.752-1.765" />
                                </svg>

                                Applications for Cohort 1 are now open
                            </div>

                            <div className="mb-6"></div>

                            <h1 className="ss-text-reveal-blur mb-0">
                                Become an AI Software Engineer in 12 Weeks
                            </h1>

                            <div className="mb-6"></div>

                            <p className="fs-lg fw-medium text-dark mb-0">
                                Learn from guest engineers from companies including Google, OpenAI, and xAI, alongside experienced AI engineers and founders.
                            </p>

                            <div className="mb-6 mb-xl-10"></div>

                            <p className="fs-md mb-0 mw-md-3quarter mx-auto">
                                No prior coding experience is required. We will teach you from the ground up.
                                Learn with 25 to 30 other people, build production-ready AI applications for
                                your portfolio, and leave ready for a tech career.
                            </p>

                            <div className="mb-6 mb-xl-10"></div>

                            <div className="hstack flex-wrap gap-4 justify-content-center">
                                <Link href="/apply" className="btn btn-primary has-icon">
                                    Apply Now - Free

                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></path>
                                            <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414">
                                            </path>
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="#how-to-join" className="btn btn-dark has-icon">
                                    See How It Works

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
                    </div>
                </div>

                {/* <!-- Spacer --> */}
                <div className="mb-20 mb-xl-30"></div>

                <div className="hero-img-container vstack align-items-center position-relative">
                    <div className="video-container">
                        <div className="hero-video" style={{ background: 'linear-gradient(135deg,#0269e0,#093f96)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, textAlign: 'center', padding: '2rem', fontSize: 'clamp(1.4rem,3.5vw,2.4rem)' }}>
                            Learnrithm AI Fellowship
                        </div>
                    </div>
                    <style jsx>{`
                        .video-container {
                            position: relative;
                            width: 100%;
                            max-width: 1195px;
                            aspect-ratio: 16 / 9;
                            border-radius: 12px;
                            overflow: hidden;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                        }
                        .hero-video {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        @media (max-width: 768px) {
                            .video-container {
                                max-width: 100%;
                                aspect-ratio: 16 / 9;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </section>

    );
};



