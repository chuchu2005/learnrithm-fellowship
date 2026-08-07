
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 w-lg-10 h-lg-10 text-dark text-opacity-25" fill="currentColor" viewBox="0 0 79 67">
        <path d="M45.117.002h33.707v1.733c0 12.396-.006 24.792 0 37.19 0 3.646-.275 7.25-1.323 10.713-2.074 6.852-6.46 11.07-12.233 13.624-6.324 2.796-12.942 3.508-19.658 3.484-.142 0-.283-.099-.512-.18V58.77c1.77-.21 3.465-.287 5.117-.635 8.972-1.877 12.18-8.673 11.81-17.834-.024-.579-.122-1.154-.215-1.968H45.117zM0 .004h33.642c.028.66.077 1.273.077 1.887.003 11.982.056 23.964-.03 35.946-.022 3.136-.253 6.315-.774 9.392-1.027 6.063-4.1 10.603-8.726 13.785-4.068 2.797-8.556 4.235-13.213 4.916-3.597.526-7.231.72-10.97 1.07v-8.161c1.973-.302 3.96-.467 5.896-.926 6.954-1.642 10.788-6.94 10.988-15.045.037-1.442.007-2.888.007-4.537H.003V0z" />
    </svg>
);

const PrevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 8 14">
        <path d="M7.28.22a.751.751 0 0 0-1.061 0l-6 6.013a.75.75 0 0 0 0 1.06l6 6.011a.751.751 0 0 0 1.062-1.06l-5.47-5.482 5.47-5.481a.751.751 0 0 0 0-1.062Z" />
    </svg>
);

const NextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 8 14">
        <path d="M.22.22a.751.751 0 0 1 1.062 0l6 6.013a.75.75 0 0 1 0 1.06l-6 6.011a.751.751 0 0 1-1.063-1.06l5.47-5.482L.22 1.281a.751.751 0 0 1 0-1.062Z" />
    </svg>
);

const reviews = [
    {
        id: 1,
        image: "/img/content/reviews/review-author-1.webp",
        name: "Sarah Mitchell",
        role: "Fellow, 2026",
        text: "I had never coded before. By week 6 I built my first AI chatbot and put it online. I still cannot believe I made something real people use."
    },
    {
        id: 2,
        image: "/img/content/reviews/review-author-2.webp",
        name: "James Chen",
        role: "Career Switcher",
        text: "The live classes made it click for me. When I got stuck, a real engineer helped me right away. I finished with three real projects for my portfolio."
    },
    {
        id: 3,
        image: "/img/content/reviews/review-author-3.webp",
        name: "Emily Rodriguez",
        role: "Fellow, 2026",
        text: "I loved building AI tools that read my notes and answer questions. The engineers showed me how to make my apps better, step by step."
    },
    {
        id: 4,
        image: "/img/content/reviews/review-author-4.webp",
        name: "Michael Thompson",
        role: "Fellow, 2026",
        text: "Learning with 30 other people kept me going. We built real apps together, just like a real team at work."
    },
    {
        id: 5,
        image: "/img/content/reviews/review-author-5.webp",
        name: "Priya Patel",
        role: "Fellow, 2026",
        text: "I came in knowing nothing. Twelve weeks later I had real apps online and the skills to apply for tech jobs. Best choice I ever made."
    }
];

export default function Reviews() {
    return (
        <section className="pt-15 pt-md-20 pt-lg-30 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xxl-6 mx-auto text-center" data-ss-reveal-group="" data-y="50">
                        <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center gap-3 px-5 py-2 lh-sm text-center fw-semibold text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-primary" viewBox="0 0 20 20">
                                <path d="M4.45 9.974c2.4-3.858 5.277-7.142 9.53-9.032.715 2.713 2.41 4.406 5.137 5.076-.21.596-.493 1.149-.798 1.69-.772 1.369-1.742 2.587-2.845 3.703-1.601 1.619-3.41 2.972-5.398 4.167-.324-.324-.637-.67-.987-.975-.292-.252-.375-.486-.228-.87.178-.464.191-.966.05-1.458a1.69 1.69 0 0 0-1.527-1.251 3.04 3.04 0 0 0-1.343.179c-.188.07-.307.044-.446-.098-.362-.373-.738-.732-1.146-1.131m11.348-2.853a2.897 2.897 0 0 0-2.934-2.914 2.924 2.924 0 0 0-2.916 2.904c-.012 1.606 1.308 2.935 2.926 2.944 1.611.008 2.925-1.31 2.924-2.934" />
                                <path d="M19.527 4.826c-2.04-.11-4.196-2.23-4.352-4.273.073-.03.151-.068.233-.091a11.5 11.5 0 0 1 3.74-.45q.099.001.195.01c.415.055.611.236.636.654.025.454.036.911.013 1.366a11.4 11.4 0 0 1-.465 2.783zM6.954 12.18c.653-.003.873.206.872.725a2.17 2.17 0 0 1-.636 1.55c-1.1 1.13-2.274 2.177-3.647 2.977a4 4 0 0 1-.24.13c-.336.167-.589.152-.793-.047-.207-.2-.25-.467-.062-.787.304-.514.598-1.043.971-1.505a45 45 0 0 1 2.002-2.29 2.32 2.32 0 0 1 1.533-.753m-4.047-1.954c-.605-.11-1.193.004-1.78.128-.152.032-.303.08-.457.1a.56.56 0 0 1-.59-.295c-.123-.213-.1-.423.039-.623a.6.6 0 0 1 .074-.091c.668-.659 1.317-1.337 2.009-1.969a4.2 4.2 0 0 1 2.113-1.03c.334-.06.671-.083 1.012.073-.804 1.232-1.604 2.455-2.42 3.707m6.939 6.861c-.017.013.022-.021.065-.049 1.184-.748 2.369-1.494 3.581-2.258.117.262.114.551.07.844a4.34 4.34 0 0 1-1.127 2.356c-.575.619-1.186 1.204-1.785 1.802a.9.9 0 0 1-.22.158.57.57 0 0 1-.818-.44c-.014-.115-.001-.233.01-.35.071-.67.144-1.34.223-2.064zM8.065 15.27l.912.946c-.32.174-.656.359-.994.54q-.29.154-.588.3c-.463.227-.621.194-1.006-.222zm-4.226-4.24.9.912c-.25.261-.518.536-.779.818-.263.284-.518.574-.778.86-.343-.319-.4-.509-.223-.87.279-.57.577-1.13.88-1.72m9.031-5.652a1.733 1.733 0 0 1 1.756 1.748c0 .973-.793 1.766-1.759 1.759a1.783 1.783 0 0 1-1.749-1.742c-.017-.959.78-1.761 1.752-1.765" />
                            </svg>

                            Meet the Fellows
                        </div>

                        {/* <!-- Spacer --> */}
                        <div className="mb-6"></div>

                        <h2 className="ss-text-reveal-blur mb-0">
                            What Fellows Say About the Program
                        </h2>
                    </div>
                </div>
            </div>



            <div className="mb-10 mb-lg-15"></div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".review-carousel-button-prev",
                    nextEl: ".review-carousel-button-next",
                }}
                pagination={{
                    el: ".review-carousel-pagination",
                    clickable: true,
                }}
                loop={true}
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={24}
                breakpoints={{
                    768: { slidesPerView: 1.5, spaceBetween: 30 },
                    1200: { slidesPerView: 1.8, spaceBetween: 40 },
                }}
                className="review-carousel pt-6"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="bg-white shadow-lg rounded-6 p-2 p-md-5 position-relative overflow-hidden">
                            <Image
                                src="/img/shapes/gradient-shape-1.webp"
                                alt="..."
                                width={220}
                                height={165}
                                className="position-absolute bottom-0 end-0 h-30 h-lg-40 w-auto"
                            />
                            <div className="row g-4 g-lg-10">
                                {/* Author Image */}
                                <div className="col-md-4">
                                    <div className="img-clip-anim-box ratio ratio-1x1 rounded-5 overflow-hidden">
                                        <Image
                                            src={review.image}
                                            alt={`Reviewer ${review.id}`}
                                            width={330}
                                            height={330}
                                            className="img-clip-anim w-100 h-100 object-fit-cover"
                                        />
                                    </div>
                                </div>

                                {/* Review Content */}
                                <div className="col-md-8">
                                    <div className="p-4">
                                        <QuoteIcon />

                                        <div className="mb-6" />

                                        <p className="text-dark fs-lg mb-0">
                                            &ldquo;{review.text}&rdquo;
                                        </p>

                                        <hr className="my-6" />

                                        <div className="hstack justify-content-between gap-3 flex-wrap">
                                            <div>
                                                <h6 className="fw-semibold mb-1">{review.name}</h6>
                                                <p className="mb-0">{review.role}</p>
                                            </div>
                                            <Image
                                                src="/img/brand/logos/scapic.svg"
                                                alt="Scapic"
                                                width={80}
                                                height={32}
                                                className="img-fluid h-8 w-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Spacer + Controls */}
                <div className="mb-10 mb-xl-15" />

                <div className="hstack gap-4 justify-content-center">
                    <button
                        type="button"
                        className="btn icon-btn btn-outline-dark border bg-primary-hover border-primary-hover text-white-hover review-carousel-button-prev"
                    >
                        <PrevIcon />
                    </button>
                    <div className="review-carousel-pagination swiper-pagination w-auto" />
                    <button
                        type="button"
                        className="btn icon-btn btn-outline-dark border bg-primary-hover border-primary-hover text-white-hover review-carousel-button-next"
                    >
                        <NextIcon />
                    </button>
                </div>
            </Swiper>
        </section>
    );
};



