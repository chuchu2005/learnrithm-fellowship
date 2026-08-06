
import Image from "next/image";

export default function BrandSlider() {  


    return (
            <section className="pt-15 pt-md-20 position-relative">
                    <div className="container text-center">
                        <h6 className="mb-0">Learnrithm AI is trusted by students from over 100+ leading universities worldwide, including Ivy League and Russell Group institutions, helping more than 10,000 students achieve academic excellence and Learn New Things</h6>
                    </div>

                    {/* <!-- Spacer --> */}
                    <div className="mb-10 mb-xl-15"></div>

                    <div className="marquee edge-fade" style={{ "--speed": "20s", "--gap": "6rem" }} data-pause-on-hover="false">
                        <div className="marquee--track">
                            <div className="marquee--content">
                                <div className="marque-item">
                                    <Image src="/img/universities/stan.png" width={120} height={60} alt="Stanford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/princeton.png" width={120} height={60} alt="Princeton" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/okfird.png" width={120} height={60} alt="Oxford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/mary.png" width={120} height={60} alt="Queen Mary" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/imperial.png" width={120} height={60} alt="Imperial" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/eding.png" width={120} height={60} alt="Edinburgh" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/bristol.png" width={120} height={60} alt="Bristol" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/stan.png" width={120} height={60} alt="Stanford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/princeton.png" width={120} height={60} alt="Princeton" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/okfird.png" width={120} height={60} alt="Oxford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                            </div>
                            <div className="marquee--content">
                                <div className="marque-item">
                                    <Image src="/img/universities/mary.png" width={120} height={60} alt="Queen Mary" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/imperial.png" width={120} height={60} alt="Imperial" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/eding.png" width={120} height={60} alt="Edinburgh" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/bristol.png" width={120} height={60} alt="Bristol" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/stan.png" width={120} height={60} alt="Stanford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/princeton.png" width={120} height={60} alt="Princeton" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/okfird.png" width={120} height={60} alt="Oxford" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/mary.png" width={120} height={60} alt="Queen Mary" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/imperial.png" width={120} height={60} alt="Imperial" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                                <div className="marque-item">
                                    <Image src="/img/universities/eding.png" width={120} height={60} alt="Edinburgh" className="img-fluid h-auto w-full object-fit-contain" style={{ maxHeight: '60px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
   
    );
};


