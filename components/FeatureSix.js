"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const INTERVAL = 6000;

const TabIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 18 20">
        <path d="M8.15 16.535a.75.75 0 0 1 1.5 0v1.334l.949-.475a.751.751 0 0 1 .67 1.342l-2.035 1.018-.029.012-.024.011a.7.7 0 0 1-.038.015l-.014.004a.724.724 0 0 1-.122.028l-.02.003-.027.002a.77.77 0 0 1-.03.002l-.03.002-.032-.002a.77.77 0 0 1-.03-.002l-.027-.002a.52.52 0 0 1-.083-.016l-.06-.015-.01-.004-.044-.016-.017-.008-.034-.014-2.035-1.018a.75.75 0 0 1 .671-1.342l.95.475v-1.334ZM.557 11.74a.75.75 0 0 1 .843.353l2.036 3.566a.75.75 0 0 1-.988 1.042L.415 15.684a.751.751 0 0 1-.415-.67v-2.55a.75.75 0 0 1 .558-.724Zm15.74.725a.75.75 0 0 1 1.5 0v2.549a.75.75 0 0 1-.414.67l-2.035 1.017a.75.75 0 1 1-.671-1.34l1.62-.811v-2.085Zm-8.149-1.018V9.363l-1.62-.81a.75.75 0 0 1 .6-1.374l.07.032 1.7.85 1.7-.85a.75.75 0 1 1 .67 1.342l-1.62.81v2.084l-.003.077a.75.75 0 0 1-1.497-.077ZM0 7.368V4.82l.002-.031.002-.03c0-.009 0-.018.002-.027l.005-.028.011-.056.013-.049.009-.03c.003-.01.008-.019.012-.028l.01-.028.013-.029.013-.022.015-.027a.744.744 0 0 1 .063-.089l.035-.039a.752.752 0 0 1 .036-.036l.033-.03a.748.748 0 0 1 .099-.07l.02-.01a.793.793 0 0 1 .022-.012l2.034-1.017a.75.75 0 1 1 .671 1.341l-.693.347.693.347a.75.75 0 0 1-.6 1.372l-.07-.03-.95-.476v1.335a.75.75 0 1 1-1.5 0Zm16.298 0V6.034l-.95.475a.75.75 0 0 1-.67-1.342l.693-.347-.693-.347a.75.75 0 0 1 .6-1.373l.07.032 2.036 1.017.024.014.016.009.039.023.012.009a.752.752 0 0 1 .046.035c.013.01.024.021.036.032a.757.757 0 0 1 .04.04l.03.034.036.047.009.012.023.04a.92.92 0 0 1 .01.015l.014.025.014.033.008.018.016.043.004.01.015.06a.753.753 0 0 1 .02.135l.002.037v2.548a.75.75 0 0 1-1.5 0ZM8.645.045a.75.75 0 0 1 .59.034l2.035 1.017a.75.75 0 0 1-.335 1.421h-4.07a.751.751 0 0 1-.337-1.42L8.563.078l.082-.034Z" />
    </svg>
);

const FeatureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M15.068 6.307a.75.75 0 0 1 0 1.5h-4.812a.75.75 0 1 1 0-1.5h4.812ZM6.985 5.151a.75.75 0 1 1 1.06 1.06L5.983 8.275a.75.75 0 0 1-1.06 0l-.688-.687a.75.75 0 1 1 1.06-1.06l.158.157L6.985 5.15Zm8.083 7.572a.75.75 0 0 1 0 1.5h-4.812a.75.75 0 1 1 0-1.5h4.812Zm-8.083-1.155a.75.75 0 0 1 1.06 1.06l-2.062 2.063a.75.75 0 0 1-1.06 0l-.688-.687a.75.75 0 1 1 1.06-1.06l.158.156 1.532-1.532Z" />
        <path d="M18.333 7.167c0-2.218-.448-3.576-1.27-4.397-.821-.822-2.179-1.27-4.396-1.27h-5.5c-2.218 0-3.576.448-4.397 1.27-.822.821-1.27 2.18-1.27 4.397v5.5c0 2.217.448 3.575 1.27 4.397.821.821 2.18 1.269 4.397 1.269h5.5c2.217 0 3.575-.448 4.397-1.27.821-.821 1.269-2.178 1.269-4.396v-5.5Zm1.5 5.5c0 2.366-.468 4.216-1.709 5.457-1.24 1.24-3.091 1.709-5.457 1.709h-5.5c-2.366 0-4.217-.468-5.458-1.709C.469 16.884 0 15.032 0 12.667v-5.5C0 4.801.468 2.95 1.709 1.709 2.949.469 4.801 0 7.167 0h5.5c2.365 0 4.216.468 5.457 1.709 1.24 1.24 1.709 3.092 1.709 5.458v5.5Z" />
    </svg>
);

const tabs = [
    {
        id: "0",
        label: "Learn the Basics",
        image: "/img/content/features/1.webp",
        features: ["Start From Zero", "Learn Step by Step"],
        description: "We start with the simple stuff. If you have never coded before, that is fine - we go slow and help you along.",
    },
    {
        id: "1",
        label: "Build Your First AI App",
        image: "/img/content/features/2.webp",
        features: ["Build a Chatbot", "Make It Smart"],
        description: "You build your first AI chatbot. It can talk to people and answer questions on a topic you pick.",
    },
    {
        id: "2",
        label: "Build Real Projects",
        image: "/img/content/features/3.webp",
        features: ["Build AI Tools", "Read Files and Answer"],
        description: "You build AI tools that read files and answer questions - the kind of apps people use at work.",
    },
    {
        id: "3",
        label: "Ship and Get Job-Ready",
        image: "/img/content/features/4.webp",
        features: ["Put It Online", "Show Employers"],
        description: "You put your apps on the internet for real people to use, and leave with projects that can get you a tech job.",
    },
];


function ProgressBar({ duration }) {
    return (
        <span
            className="tab-progress"
            style={{
                display: "block",
                height: "2px",
                background: "currentColor",
                animation: `tabProgress ${duration}ms linear forwards`,
            }}
        />
    );
}


export default function FeatureSix() {


    const [activeTab, setActiveTab] = useState("0");
    const intervalRef = useRef(null);

    const goToNext = () => {
        setActiveTab((prev) => String((parseInt(prev) + 1) % tabs.length));
    };


    useEffect(() => {
        intervalRef.current = setInterval(goToNext, INTERVAL);
        return () => clearInterval(intervalRef.current);
    }, [activeTab]);

    const handleTabClick = (id) => {
        clearInterval(intervalRef.current);
        setActiveTab(id);
    };


    return (
        <>

            <style>{`
            @keyframes tabProgress {
            from { width: 0%; }
            to { width: 100%; }
            }
        `}</style>

            <section className="pt-15 pt-md-20 pt-lg-30 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xxl-6 mx-auto text-center" data-ss-reveal-group="" data-y="50">
                            <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center gap-3 px-5 py-2 lh-sm text-center fw-semibold text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-primary" viewBox="0 0 20 20">
                                    <path d="M4.45 9.974c2.4-3.858 5.277-7.142 9.53-9.032.715 2.713 2.41 4.406 5.137 5.076-.21.596-.493 1.149-.798 1.69-.772 1.369-1.742 2.587-2.845 3.703-1.601 1.619-3.41 2.972-5.398 4.167-.324-.324-.637-.67-.987-.975-.292-.252-.375-.486-.228-.87.178-.464.191-.966.05-1.458a1.69 1.69 0 0 0-1.527-1.251 3.04 3.04 0 0 0-1.343.179c-.188.07-.307.044-.446-.098-.362-.373-.738-.732-1.146-1.131m11.348-2.853a2.897 2.897 0 0 0-2.934-2.914 2.924 2.924 0 0 0-2.916 2.904c-.012 1.606 1.308 2.935 2.926 2.944 1.611.008 2.925-1.31 2.924-2.934" />
                                    <path d="M19.527 4.826c-2.04-.11-4.196-2.23-4.352-4.273.073-.03.151-.068.233-.091a11.5 11.5 0 0 1 3.74-.45q.099.001.195.01c.415.055.611.236.636.654.025.454.036.911.013 1.366a11.4 11.4 0 0 1-.465 2.783zM6.954 12.18c.653-.003.873.206.872.725a2.17 2.17 0 0 1-.636 1.55c-1.1 1.13-2.274 2.177-3.647 2.977a4 4 0 0 1-.24.13c-.336.167-.589.152-.793-.047-.207-.2-.25-.467-.062-.787.304-.514.598-1.043.971-1.505a45 45 0 0 1 2.002-2.29 2.32 2.32 0 0 1 1.533-.753m-4.047-1.954c-.605-.11-1.193.004-1.78.128-.152.032-.303.08-.457.1a.56.56 0 0 1-.59-.295c-.123-.213-.1-.423.039-.623a.6.6 0 0 1 .074-.091c.668-.659 1.317-1.337 2.009-1.969a4.2 4.2 0 0 1 2.113-1.03c.334-.06.671-.083 1.012.073-.804 1.232-1.604 2.455-2.42 3.707m6.939 6.861c-.017.013.022-.021.065-.049 1.184-.748 2.369-1.494 3.581-2.258.117.262.114.551.07.844a4.34 4.34 0 0 1-1.127 2.356c-.575.619-1.186 1.204-1.785 1.802a.9.9 0 0 1-.22.158.57.57 0 0 1-.818-.44c-.014-.115-.001-.233.01-.35.071-.67.144-1.34.223-2.064zM8.065 15.27l.912.946c-.32.174-.656.359-.994.54q-.29.154-.588.3c-.463.227-.621.194-1.006-.222zm-4.226-4.24.9.912c-.25.261-.518.536-.779.818-.263.284-.518.574-.778.86-.343-.319-.4-.509-.223-.87.279-.57.577-1.13.88-1.72m9.031-5.652a1.733 1.733 0 0 1 1.756 1.748c0 .973-.793 1.766-1.759 1.759a1.783 1.783 0 0 1-1.749-1.742c-.017-.959.78-1.761 1.752-1.765" />
                                </svg>

                                What You&apos;ll Do
                            </div>

                            {/* <!-- Spacer --> */}
                            <div className="mb-6"></div>

                            <h2 className="ss-text-reveal-blur mb-0">
                                A Clear Path From Day One to Job-Ready
                            </h2>
                        </div>
                    </div>

                    {/* <!-- Spacer --> */}
                    <div className="mb-10 mb-lg-15"></div>

                    <ul className="nav timed-tabs flex-column flex-md-row column-gap-10 justify-content-center">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <li key={tab.id} className="nav-item">
                                    <button
                                        className={`nav-link hstack gap-3 fs-5 px-0 text-dark border-bottom text-start w-100 ${isActive ? "active" : ""}`}
                                        onClick={() => handleTabClick(tab.id)}
                                        type="button"
                                    >
                                        <span className="icon d-inline-flex bg-light border rounded-2 flex-shrink-0 w-10 h-10 p-2">
                                            <TabIcon />
                                        </span>
                                        {tab.label}
                                        {isActive && <ProgressBar key={activeTab} duration={INTERVAL} />}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mb-10 mb-lg-15" />

                    {/* Tab Content */}
                    <div className="tab-content">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <div
                                    key={tab.id}
                                    className={`tab-pane fade ${isActive ? "show active" : ""}`}
                                >
                                    <div className="bg-light rounded-5">
                                        <div className="row g-0 justify-content-between align-items-center">
                                            <div className="col-md-6">
                                                <div className="p-6 p-xl-20">
                                                    <h4 className="mb-0">{tab.label}</h4>
                                                    <div className="mb-4 mb-lg-5" />
                                                    <p className="fs-md mb-0">{tab.description}</p>
                                                    <div className="mb-6 mb-lg-8" />
                                                    <div className="vstack align-items-start gap-3">
                                                        {tab.features.map((feature, i) => (
                                                            <div
                                                                key={i}
                                                                className="bg-white text-dark d-inline-flex align-items-center gap-3 p-3 pe-xl-10 fs-6 rounded-2 shadow-sm"
                                                            >
                                                                <div className="d-inline-flex bg-light border rounded-2 flex-shrink-0 w-10 h-10 p-2">
                                                                    <FeatureIcon />
                                                                </div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3">
                                                    <Image
                                                        src="/img/placeholders/tile.png"
                                                        alt={tab.label}
                                                        width={496}
                                                        height={435}
                                                        className="img-fluid rounded-5 shadow-sm w-100 h-100 object-fit-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>

    );
};


