
import Image from "next/image";
import Link from "next/link";


export default function FeatureFour() {


    return (
        <section className="bg-light py-15 py-md-20 py-lg-30 position-relative overflow-hidden pinned-container">
            <div className="container">
                <div className="row g-6 g-md-10 g-lg-0">
                    <div className="col-lg-5 pe-lg-10" data-ss-reveal-group data-y="50">
                        <div className="pinned-element">
                            <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center gap-3 px-5 py-2 lh-sm text-center fw-semibold text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-primary" viewBox="0 0 20 20">
                                    <path d="M4.45 9.974c2.4-3.858 5.277-7.142 9.53-9.032.715 2.713 2.41 4.406 5.137 5.076-.21.596-.493 1.149-.798 1.69-.772 1.369-1.742 2.587-2.845 3.703-1.601 1.619-3.41 2.972-5.398 4.167-.324-.324-.637-.67-.987-.975-.292-.252-.375-.486-.228-.87.178-.464.191-.966.05-1.458a1.69 1.69 0 0 0-1.527-1.251 3.04 3.04 0 0 0-1.343.179c-.188.07-.307.044-.446-.098-.362-.373-.738-.732-1.146-1.131m11.348-2.853a2.897 2.897 0 0 0-2.934-2.914 2.924 2.924 0 0 0-2.916 2.904c-.012 1.606 1.308 2.935 2.926 2.944 1.611.008 2.925-1.31 2.924-2.934" />
                                    <path d="M19.527 4.826c-2.04-.11-4.196-2.23-4.352-4.273.073-.03.151-.068.233-.091a11.5 11.5 0 0 1 3.74-.45q.099.001.195.01c.415.055.611.236.636.654.025.454.036.911.013 1.366a11.4 11.4 0 0 1-.465 2.783zM6.954 12.18c.653-.003.873.206.872.725a2.17 2.17 0 0 1-.636 1.55c-1.1 1.13-2.274 2.177-3.647 2.977a4 4 0 0 1-.24.13c-.336.167-.589.152-.793-.047-.207-.2-.25-.467-.062-.787.304-.514.598-1.043.971-1.505a45 45 0 0 1 2.002-2.29 2.32 2.32 0 0 1 1.533-.753m-4.047-1.954c-.605-.11-1.193.004-1.78.128-.152.032-.303.08-.457.1a.56.56 0 0 1-.59-.295c-.123-.213-.1-.423.039-.623a.6.6 0 0 1 .074-.091c.668-.659 1.317-1.337 2.009-1.969a4.2 4.2 0 0 1 2.113-1.03c.334-.06.671-.083 1.012.073-.804 1.232-1.604 2.455-2.42 3.707m6.939 6.861c-.017.013.022-.021.065-.049 1.184-.748 2.369-1.494 3.581-2.258.117.262.114.551.07.844a4.34 4.34 0 0 1-1.127 2.356c-.575.619-1.186 1.204-1.785 1.802a.9.9 0 0 1-.22.158.57.57 0 0 1-.818-.44c-.014-.115-.001-.233.01-.35.071-.67.144-1.34.223-2.064zM8.065 15.27l.912.946c-.32.174-.656.359-.994.54q-.29.154-.588.3c-.463.227-.621.194-1.006-.222zm-4.226-4.24.9.912c-.25.261-.518.536-.779.818-.263.284-.518.574-.778.86-.343-.319-.4-.509-.223-.87.279-.57.577-1.13.88-1.72m9.031-5.652a1.733 1.733 0 0 1 1.756 1.748c0 .973-.793 1.766-1.759 1.759a1.783 1.783 0 0 1-1.749-1.742c-.017-.959.78-1.761 1.752-1.765" />
                                </svg>

                                Why This Program
                            </div>

                            {/* <!-- Spacer --> */}
                            <div className="mb-6"></div>

                            <h2 className="ss-text-reveal-blur mb-0">
                                Everything You Need to Go From New to Job-Ready
                            </h2>

                            {/* <!-- Spacer --> */}
                            <div className="mb-6"></div>

                            <p className="fs-md mb-0">
                                In 12 weeks you go from learning the basics to building real AI apps.
                                You learn directly from software engineers at Google, OpenAI, Grok, and other big tech companies.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="sticky-cards-container d-grid gap-5 gap-lg-8">
                            <div className="sticky-card bg-white shadow-lg rounded-5 p-3">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-4 p-xl-10 vstack justify-content-between gap-5 h-full" data-ss-reveal-group="" data-y="50">
                                            <div className="">
                                                <h5 className="mb-0">
                                                    Live Classes on Zoom.
                                                </h5>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-5"></div>

                                                <p className="fs-md mb-0">
                                                    Join live online classes with real engineers. Ask questions
                                                    and get answers right away - no waiting on a forum.
                                                </p>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-6"></div>

                                                <div className="hstack flex-wrap gap-2 gap-xl-3">
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M14.998 6.833c0-1.617-.326-2.62-.937-3.23-.61-.61-1.612-.937-3.23-.937h-4c-1.617 0-2.62.326-3.23.937-.61.61-.936 1.613-.936 3.23v4c0 1.617.326 2.62.936 3.23s1.613.936 3.23.936h4c1.618 0 2.62-.326 3.23-.936s.937-1.613.937-3.23zm1 4c0 1.716-.34 3.047-1.23 3.937S12.548 16 10.832 16h-4c-1.716 0-3.048-.34-3.938-1.23s-1.23-2.221-1.23-3.937v-4c0-1.716.34-3.048 1.23-3.937.89-.89 2.222-1.23 3.938-1.23h4c1.715 0 3.047.34 3.936 1.23.89.89 1.23 2.221 1.23 3.937z" />
                                                            <path d="M12.498 7.583c0-.992-.201-1.557-.53-1.887-.33-.328-.894-.53-1.886-.53h-2.5c-.993 0-1.558.201-1.887.53-.329.33-.53.895-.53 1.887v2.5c0 .992.201 1.557.53 1.886.33.329.894.53 1.887.53h2.5c.992 0 1.556-.201 1.885-.53.33-.33.53-.894.53-1.886zm1 2.5c0 1.091-.215 1.985-.823 2.593-.609.608-1.502.823-2.593.823h-2.5c-1.091 0-1.986-.215-2.594-.823s-.823-1.502-.823-2.593v-2.5c0-1.09.215-1.985.823-2.594s1.503-.823 2.594-.823h2.5c1.09 0 1.984.215 2.593.823.608.609.823 1.503.823 2.594zM5.007 2.167V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.325 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.333 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M17.167 5a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm-5.502 5.501V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.323 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.335 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M2.167 5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1z" />
                                                        </svg>

                                                        Real Engineers
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 19">
                                                            <path d="M6.047.18C7.333-.155 8.761-.036 9.96.666c1.12.656 1.986 1.792 2.355 3.42 3.332.773 4.581 5.29 1.92 7.617h-.001a4.48 4.48 0 0 1-3.036 1.164l-8.05.001-.043-.002c-3.879-.276-4.135-5.612-.697-6.493-.369-1.483-.152-2.798.464-3.851.703-1.2 1.89-2.003 3.176-2.34M9.353 1.7c-.888-.52-1.982-.625-3.002-.358s-1.923.895-2.444 1.785c-.513.876-.69 2.062-.163 3.53a.6.6 0 0 1-.36.767.6.6 0 0 1-.188.031l-.006.002c-2.642.188-2.659 4.006-.017 4.21h8.028a3.3 3.3 0 0 0 2.234-.86l.009-.008.177-.168c1.746-1.79.657-5.11-1.891-5.436a.6.6 0 0 1-.517-.497c-.255-1.538-.987-2.486-1.86-2.998" />
                                                            <path d="M7.24 14.767v-2.5a.6.6 0 1 1 1.199 0v2.5a.6.6 0 1 1-1.2 0" />
                                                            <path d="M8.906 16.434a1.068 1.068 0 1 0-2.135 0 1.068 1.068 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M12.839 15.834a.6.6 0 1 1 0 1.2H9.506a.6.6 0 1 1 0-1.2zm-6.667 0a.6.6 0 1 1 0 1.2H2.84a.6.6 0 1 1 0-1.2z" />
                                                        </svg>

                                                        Ask Anything
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M16.666 8.933a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0m-1.2-6.666a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534-.001 2.267 2.267 0 0 1 4.534 0m-1.2 13.334a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.533 0 2.267 2.267 0 0 1 4.533 0M3.333 8.933a1.067 1.067 0 1 0-2.135 0 1.067 1.067 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M13.933 8.333a.6.6 0 1 1 0 1.2h-10a.6.6 0 1 1 0-1.2z" />
                                                            <path d="M7.5 13.1V4.765c0-.926.232-1.73.8-2.299.57-.568 1.374-.8 2.3-.8h3.333a.6.6 0 1 1 0 1.199H10.6c-.741 0-1.187.185-1.452.45-.264.264-.449.71-.449 1.45V13.1c0 .741.185 1.187.45 1.451.264.265.71.45 1.45.45h3.334a.6.6 0 0 1 0 1.2H10.6c-.926 0-1.73-.232-2.3-.8-.568-.57-.8-1.375-.8-2.3" />
                                                        </svg>

                                                        Fast Answers
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Link href="/apply" className="btn btn-primary has-icon">
                                                    Apply Now
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z">
                                                            </path>
                                                            <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-ss-reveal="" data-x="-50">
                                        <div className="img-clip-anim-box ratio ratio-1x1 rounded-5 overflow-hidden h-full">
                                            <Image src="/img/placeholders/tile.png" width={445} height={445}  alt="Feature Image" className="img-clip-anim img-fluid shadow-sm w-full h-full object-fit-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sticky-card bg-white shadow-lg rounded-5 p-3">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-4 p-xl-10 vstack justify-content-between gap-5 h-full" data-ss-reveal-group="" data-y="50">
                                            <div className="">
                                                <h5 className="mb-0">
                                                    Build Real Projects.
                                                </h5>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-5"></div>

                                                <p className="fs-md mb-0">
                                                    You learn by doing. Every week you build real things -
                                                    chatbots, AI tools, and apps - not just watch videos.
                                                </p>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-6"></div>

                                                <div className="hstack flex-wrap gap-2 gap-xl-3">
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M14.998 6.833c0-1.617-.326-2.62-.937-3.23-.61-.61-1.612-.937-3.23-.937h-4c-1.617 0-2.62.326-3.23.937-.61.61-.936 1.613-.936 3.23v4c0 1.617.326 2.62.936 3.23s1.613.936 3.23.936h4c1.618 0 2.62-.326 3.23-.936s.937-1.613.937-3.23zm1 4c0 1.716-.34 3.047-1.23 3.937S12.548 16 10.832 16h-4c-1.716 0-3.048-.34-3.938-1.23s-1.23-2.221-1.23-3.937v-4c0-1.716.34-3.048 1.23-3.937.89-.89 2.222-1.23 3.938-1.23h4c1.715 0 3.047.34 3.936 1.23.89.89 1.23 2.221 1.23 3.937z" />
                                                            <path d="M12.498 7.583c0-.992-.201-1.557-.53-1.887-.33-.328-.894-.53-1.886-.53h-2.5c-.993 0-1.558.201-1.887.53-.329.33-.53.895-.53 1.887v2.5c0 .992.201 1.557.53 1.886.33.329.894.53 1.887.53h2.5c.992 0 1.556-.201 1.885-.53.33-.33.53-.894.53-1.886zm1 2.5c0 1.091-.215 1.985-.823 2.593-.609.608-1.502.823-2.593.823h-2.5c-1.091 0-1.986-.215-2.594-.823s-.823-1.502-.823-2.593v-2.5c0-1.09.215-1.985.823-2.594s1.503-.823 2.594-.823h2.5c1.09 0 1.984.215 2.593.823.608.609.823 1.503.823 2.594zM5.007 2.167V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.325 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.333 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M17.167 5a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm-5.502 5.501V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.323 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.335 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M2.167 5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1z" />
                                                        </svg>

                                                        Hands-On
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 19">
                                                            <path d="M6.047.18C7.333-.155 8.761-.036 9.96.666c1.12.656 1.986 1.792 2.355 3.42 3.332.773 4.581 5.29 1.92 7.617h-.001a4.48 4.48 0 0 1-3.036 1.164l-8.05.001-.043-.002c-3.879-.276-4.135-5.612-.697-6.493-.369-1.483-.152-2.798.464-3.851.703-1.2 1.89-2.003 3.176-2.34M9.353 1.7c-.888-.52-1.982-.625-3.002-.358s-1.923.895-2.444 1.785c-.513.876-.69 2.062-.163 3.53a.6.6 0 0 1-.36.767.6.6 0 0 1-.188.031l-.006.002c-2.642.188-2.659 4.006-.017 4.21h8.028a3.3 3.3 0 0 0 2.234-.86l.009-.008.177-.168c1.746-1.79.657-5.11-1.891-5.436a.6.6 0 0 1-.517-.497c-.255-1.538-.987-2.486-1.86-2.998" />
                                                            <path d="M7.24 14.767v-2.5a.6.6 0 1 1 1.199 0v2.5a.6.6 0 1 1-1.2 0" />
                                                            <path d="M8.906 16.434a1.068 1.068 0 1 0-2.135 0 1.068 1.068 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M12.839 15.834a.6.6 0 1 1 0 1.2H9.506a.6.6 0 1 1 0-1.2zm-6.667 0a.6.6 0 1 1 0 1.2H2.84a.6.6 0 1 1 0-1.2z" />
                                                        </svg>

                                                        Weekly Builds
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M16.666 8.933a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0m-1.2-6.666a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534-.001 2.267 2.267 0 0 1 4.534 0m-1.2 13.334a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.533 0 2.267 2.267 0 0 1 4.533 0M3.333 8.933a1.067 1.067 0 1 0-2.135 0 1.067 1.067 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M13.933 8.333a.6.6 0 1 1 0 1.2h-10a.6.6 0 1 1 0-1.2z" />
                                                            <path d="M7.5 13.1V4.765c0-.926.232-1.73.8-2.299.57-.568 1.374-.8 2.3-.8h3.333a.6.6 0 1 1 0 1.199H10.6c-.741 0-1.187.185-1.452.45-.264.264-.449.71-.449 1.45V13.1c0 .741.185 1.187.45 1.451.264.265.71.45 1.45.45h3.334a.6.6 0 0 1 0 1.2H10.6c-.926 0-1.73-.232-2.3-.8-.568-.57-.8-1.375-.8-2.3" />
                                                        </svg>

                                                        Real Results
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Link href="#what-youll-build" className="btn btn-primary has-icon">
                                                    See Projects

                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z">
                                                            </path>
                                                            <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-ss-reveal="" data-x="-50">
                                        <div className="img-clip-anim-box ratio ratio-1x1 rounded-5 overflow-hidden h-full">
                                            <Image src="/img/placeholders/tile.png" width={445} height={445} alt="Feature Image" className="img-clip-anim img-fluid shadow-sm w-full h-full object-fit-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sticky-card bg-white shadow-lg rounded-5 p-3">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="p-4 p-xl-10 vstack justify-content-between gap-5 h-full" data-ss-reveal-group="" data-y="50">
                                            <div className="">
                                                <h5 className="mb-0">
                                                    Learn From Real Engineers.
                                                </h5>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-5"></div>

                                                <p className="fs-md mb-0">
                                                    Learn directly from software engineers at Google, OpenAI, Grok, and other big tech.
                                                    They also teach you to use sub-agents so you build apps way faster.
                                                </p>

                                                {/* <!-- Spacer --> */}
                                                <div className="mb-4 mb-lg-6"></div>

                                                <div className="hstack flex-wrap gap-2 gap-xl-3">
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M14.998 6.833c0-1.617-.326-2.62-.937-3.23-.61-.61-1.612-.937-3.23-.937h-4c-1.617 0-2.62.326-3.23.937-.61.61-.936 1.613-.936 3.23v4c0 1.617.326 2.62.936 3.23s1.613.936 3.23.936h4c1.618 0 2.62-.326 3.23-.936s.937-1.613.937-3.23zm1 4c0 1.716-.34 3.047-1.23 3.937S12.548 16 10.832 16h-4c-1.716 0-3.048-.34-3.938-1.23s-1.23-2.221-1.23-3.937v-4c0-1.716.34-3.048 1.23-3.937.89-.89 2.222-1.23 3.938-1.23h4c1.715 0 3.047.34 3.936 1.23.89.89 1.23 2.221 1.23 3.937z" />
                                                            <path d="M12.498 7.583c0-.992-.201-1.557-.53-1.887-.33-.328-.894-.53-1.886-.53h-2.5c-.993 0-1.558.201-1.887.53-.329.33-.53.895-.53 1.887v2.5c0 .992.201 1.557.53 1.886.33.329.894.53 1.887.53h2.5c.992 0 1.556-.201 1.885-.53.33-.33.53-.894.53-1.886zm1 2.5c0 1.091-.215 1.985-.823 2.593-.609.608-1.502.823-2.593.823h-2.5c-1.091 0-1.986-.215-2.594-.823s-.823-1.502-.823-2.593v-2.5c0-1.09.215-1.985.823-2.594s1.503-.823 2.594-.823h2.5c1.09 0 1.984.215 2.593.823.608.609.823 1.503.823 2.594zM5.007 2.167V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.325 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m3.333 0V.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M17.167 5a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H15.5a.5.5 0 0 1 0-1zm-5.502 5.501V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.323 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0m-3.335 0V15.5a.5.5 0 0 1 1 0v1.667a.5.5 0 0 1-1 0M2.167 5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm0 3.333a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1z" />
                                                        </svg>

                                                        Google Engineers
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 19">
                                                            <path d="M6.047.18C7.333-.155 8.761-.036 9.96.666c1.12.656 1.986 1.792 2.355 3.42 3.332.773 4.581 5.29 1.92 7.617h-.001a4.48 4.48 0 0 1-3.036 1.164l-8.05.001-.043-.002c-3.879-.276-4.135-5.612-.697-6.493-.369-1.483-.152-2.798.464-3.851.703-1.2 1.89-2.003 3.176-2.34M9.353 1.7c-.888-.52-1.982-.625-3.002-.358s-1.923.895-2.444 1.785c-.513.876-.69 2.062-.163 3.53a.6.6 0 0 1-.36.767.6.6 0 0 1-.188.031l-.006.002c-2.642.188-2.659 4.006-.017 4.21h8.028a3.3 3.3 0 0 0 2.234-.86l.009-.008.177-.168c1.746-1.79.657-5.11-1.891-5.436a.6.6 0 0 1-.517-.497c-.255-1.538-.987-2.486-1.86-2.998" />
                                                            <path d="M7.24 14.767v-2.5a.6.6 0 1 1 1.199 0v2.5a.6.6 0 1 1-1.2 0" />
                                                            <path d="M8.906 16.434a1.068 1.068 0 1 0-2.135 0 1.068 1.068 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M12.839 15.834a.6.6 0 1 1 0 1.2H9.506a.6.6 0 1 1 0-1.2zm-6.667 0a.6.6 0 1 1 0 1.2H2.84a.6.6 0 1 1 0-1.2z" />
                                                        </svg>

                                                        OpenAI Engineers
                                                    </div>
                                                    <div className="bg-white border rounded-2 d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm text-center fw-semibold text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 18 18">
                                                            <path d="M16.666 8.933a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0m-1.2-6.666a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.534-.001 2.267 2.267 0 0 1 4.534 0m-1.2 13.334a1.067 1.067 0 1 0-2.134 0 1.067 1.067 0 0 0 2.134 0m1.2 0a2.267 2.267 0 1 1-4.533 0 2.267 2.267 0 0 1 4.533 0M3.333 8.933a1.067 1.067 0 1 0-2.135 0 1.067 1.067 0 0 0 2.135 0m1.2 0a2.267 2.267 0 1 1-4.534 0 2.267 2.267 0 0 1 4.534 0" />
                                                            <path d="M13.933 8.333a.6.6 0 1 1 0 1.2h-10a.6.6 0 1 1 0-1.2z" />
                                                            <path d="M7.5 13.1V4.765c0-.926.232-1.73.8-2.299.57-.568 1.374-.8 2.3-.8h3.333a.6.6 0 1 1 0 1.199H10.6c-.741 0-1.187.185-1.452.45-.264.264-.449.71-.449 1.45V13.1c0 .741.185 1.187.45 1.451.264.265.71.45 1.45.45h3.334a.6.6 0 0 1 0 1.2H10.6c-.926 0-1.73-.232-2.3-.8-.568-.57-.8-1.375-.8-2.3" />
                                                        </svg>

                                                        Grok Engineers
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Link href="#skills" className="btn btn-primary has-icon">
                                                    Meet Your Engineers

                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z">
                                                            </path>
                                                            <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-ss-reveal="" data-x="-50">
                                        <div className="img-clip-anim-box ratio ratio-1x1 rounded-5 overflow-hidden h-full">
                                            <Image src="/img/placeholders/tile.png" width={445} height={445}  alt="Feature Image" className="img-clip-anim img-fluid shadow-sm w-full h-full object-fit-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


