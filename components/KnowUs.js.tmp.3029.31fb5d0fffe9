"use client";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const faqItems = [
    {
        eventKey: "0",
        question: "What is the Learnrithm AI Fellowship?",
        answer: "It is a free 12-week program where you learn to build real AI apps. You join live classes on Zoom, build real projects, and learn directly from software engineers at Google, OpenAI, xAI, and other big tech companies."
    },
    {
        eventKey: "1",
        question: "Do I need to know how to code?",
        answer: "No. Beginners are very welcome. We start from the basics and go step by step. If you already know some coding, that is great - you will just move faster."
    },
    {
        eventKey: "2",
        question: "What will I build?",
        answer: "You will build chatbots, AI tools that read files and answer questions, and other apps people really use. By the end, your apps go live on the internet for real people."
    },
    {
        eventKey: "3",
        question: "Will this help me get a job?",
        answer: "Yes. You leave with real projects you built, plus the skills to apply for tech jobs or start your own thing. Many fellows use their projects to show employers what they can do."
    },
];

export default function KnowUs() {
    const [activeKey, setActiveKey] = useState("0");

    return (
        <section className="py-15 py-md-20 py-lg-30 position-relative overflow-hidden">
            <div className="gradient-line top-0"></div>
            <div className="gradient-line"></div>
            <Image src="/img/shapes/s-shape-2.svg" width={1920} height={1024} alt="..." className="s-shape-2 position-absolute translate-middle top-50 start-50 z-n1 opacity-50" />


            <div className="container">
                <div className="row g-10 g-xl-20 align-items-center">
                    <div className="col-lg-6" data-ss-reveal data-x="50">
                        <Image src="/img/content/services/service-img-1.webp" width={605} height={508} alt="..." className="img-fluid w-full" />
                    </div>
                    <div className="col-lg-6" data-ss-reveal-group data-y="50">
                        <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center gap-3 px-5 py-2 lh-sm text-center fw-semibold text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-primary" viewBox="0 0 20 20">
                                <path d="M4.45 9.974c2.4-3.858 5.277-7.142 9.53-9.032.715 2.713 2.41 4.406 5.137 5.076-.21.596-.493 1.149-.798 1.69-.772 1.369-1.742 2.587-2.845 3.703-1.601 1.619-3.41 2.972-5.398 4.167-.324-.324-.637-.67-.987-.975-.292-.252-.375-.486-.228-.87.178-.464.191-.966.05-1.458a1.69 1.69 0 0 0-1.527-1.251 3.04 3.04 0 0 0-1.343.179c-.188.07-.307.044-.446-.098-.362-.373-.738-.732-1.146-1.131m11.348-2.853a2.897 2.897 0 0 0-2.934-2.914 2.924 2.924 0 0 0-2.916 2.904c-.012 1.606 1.308 2.935 2.926 2.944 1.611.008 2.925-1.31 2.924-2.934" />
                                <path d="M19.527 4.826c-2.04-.11-4.196-2.23-4.352-4.273.073-.03.151-.068.233-.091a11.5 11.5 0 0 1 3.74-.45q.099.001.195.01c.415.055.611.236.636.654.025.454.036.911.013 1.366a11.4 11.4 0 0 1-.465 2.783zM6.954 12.18c.653-.003.873.206.872.725a2.17 2.17 0 0 1-.636 1.55c-1.1 1.13-2.274 2.177-3.647 2.977a4 4 0 0 1-.24.13c-.336.167-.589.152-.793-.047-.207-.2-.25-.467-.062-.787.304-.514.598-1.043.971-1.505a45 45 0 0 1 2.002-2.29 2.32 2.32 0 0 1 1.533-.753m-4.047-1.954c-.605-.11-1.193.004-1.78.128-.152.032-.303.08-.457.1a.56.56 0 0 1-.59-.295c-.123-.213-.1-.423.039-.623a.6.6 0 0 1 .074-.091c.668-.659 1.317-1.337 2.009-1.969a4.2 4.2 0 0 1 2.113-1.03c.334-.06.671-.083 1.012.073-.804 1.232-1.604 2.455-2.42 3.707m6.939 6.861c-.017.013.022-.021.065-.049 1.184-.748 2.369-1.494 3.581-2.258.117.262.114.551.07.844a4.34 4.34 0 0 1-1.127 2.356c-.575.619-1.186 1.204-1.785 1.802a.9.9 0 0 1-.22.158.57.57 0 0 1-.818-.44c-.014-.115-.001-.233.01-.35.071-.67.144-1.34.223-2.064zM8.065 15.27l.912.946c-.32.174-.656.359-.994.54q-.29.154-.588.3c-.463.227-.621.194-1.006-.222zm-4.226-4.24.9.912c-.25.261-.518.536-.779.818-.263.284-.518.574-.778.86-.343-.319-.4-.509-.223-.87.279-.57.577-1.13.88-1.72m9.031-5.652a1.733 1.733 0 0 1 1.756 1.748c0 .973-.793 1.766-1.759 1.759a1.783 1.783 0 0 1-1.749-1.742c-.017-.959.78-1.761 1.752-1.765" />
                            </svg>

                            Get to Know the Fellowship
                        </div>



                        {/* <!-- Spacer --> */}
                        <div className="mb-6"></div>

                        <h2 className="ss-text-reveal-blur">
                            What the Fellowship Is - and How It Helps You
                        </h2>


                        {/* <!-- Spacer --> */}
                        <div className="mb-10 mb-xl-15"></div>

                        <Accordion
                            activeKey={activeKey}
                            onSelect={(eventKey) => setActiveKey(eventKey)}
                            className="accordion d-grid gap-4 gap-lg-6"
                            id="accordionExample"
                        >
                            {faqItems.map(({ eventKey, question, answer }) => (
                                <Accordion.Item
                                    key={eventKey}
                                    eventKey={eventKey}
                                    className={`accordion-item ${activeKey === eventKey ? "active" : ""}`}
                                >
                                    <Accordion.Header>
                                        {question}
                                        <ArrowIcon />
                                    </Accordion.Header>
                                    <Accordion.Body>{answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    );
};


