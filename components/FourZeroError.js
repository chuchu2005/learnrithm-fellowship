"use client"
import Image from "next/image";
import Link from "next/link";


export default function FourZeroError() {
    return (
        <section className="py-30 py-lg-40 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-xxl-6 mx-auto">
                        <div className="text-center">
                            <Image src="/img/system/404.svg" width={625} height={266} alt="..." className="img-fluid w-full" data-ss-reveal data-y="50" />

                                {/* <!-- Spacer --> */}
                                <div className="mb-10 mb-xl-15"></div>

                                <h3 className="mb-4" data-ss-reveal data-y="50" data-delay="0.1">
                                    Sorry! page did not found
                                </h3>
                                <p className="fs-md mb-0" data-ss-reveal data-y="50" data-delay="0.2">
                                    Sorry, the page you&apos;re looking for is either missing or
                                    has been shifted.
                                </p>

                                {/* <!-- Spacer --> */}
                                <div className="mb-6 mb-xl-10"></div>

                                <Link href="/" className="btn btn-primary btn-hover-wave" data-ss-reveal data-y="50" data-delay="0.3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                    </svg>
                                    <span>Back to Homepage</span>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


