
function About() {
    return (
        <>


            <div className="relative min-h-screen w-full flex flex-col gap-10">

                <div className="w-full h-[90vh] flex flex-row justify-between border-b pl-20 bg-gradient-to-r from-[#1E3D58] to-[#057DCD]">
                    <div className="flex-1 flex flex-col justify-center z-10 gap-6">
                        <h1 className="text-5xl font-bold text-white leading-tight">
                            About Us
                        </h1>

                        <h2 className="text-3xl font-bold text-white">
                            An Established <br /> <span className="text-blue-400">Tech</span> Company
                        </h2>

                        <p className="text-sm font-normal text-white">
                            Best Nepal (P.) Ltd. is a full-service Web Presence Provider with a team of entrepreneurs.
                            We are committed to excellence in web site design, site maintenance and responsiveness
                            to our clients. Best Nepal is in modern digital technology development since 2005 and
                            continuously working with latest technologies.
                        </p>

                        <p className="text-sm font-normal text-white">
                            In addition to the major services that we provide, we have skills and experience in a
                            wide array of related areas; please check out our Services Area for more.
                        </p>

                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm w-max">
                            Contact Us →
                        </button>
                    </div>

                    <div className="flex-1 relative flex items-end justify-end">
                        <img
                            src="/images/enterpreneurs.png" alt="" className="absolute  max-h-300px object-contain"
                        />
                    </div>
                </div>

                <div>
                    <div className="w-full bg-white py-20 px-10 md:px-20">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

                            <div className="flex-1 flex justify-center md:justify-start">
                                <img
                                    src="/images/CEO.png" alt="CEO" className="max-h-300px object-contain"
                                />
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Message from Our CEO
                                </h2>

                                <p className="text-gray-600 text-sm md:text-base">
                                    At Best Nepal, we believe technology is most powerful when it solves real-world
                                    problems. From our beginning, our mission has been to deliver innovative, reliable,
                                    and scalable IT solutions that help businesses grow and succeed in a digital-first world.
                                </p>

                                <p className="text-gray-600 text-sm md:text-base">
                                    Technology is changing the world, and at Best Nepal, we’re excited to be part of that
                                    change. Our team works passionately to build solutions that are practical, innovative,
                                    and tailored to our clients’ needs.
                                </p>

                                <p className="text-gray-700 font-semibold mt-2">
                                    Er. XYZ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-full">
                    <img src="/images/bond.png" alt="CEO" className="min-h-screen w-full object-contain" />
                </div>

                <div className="flex flex-col gap-y-8 space-y-2 items-center justify-center">

                    <h1 className="text-5xl font-bold text-black leading-tight">
                        Our Team Members
                    </h1>

                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col items-center">
                            <img src="/images/xyz1.png" alt="CEO" className="max-h-300px object-contain" />
                            <p className="mt-4 text-sm font-semibold text-gray-800">
                                Mr. XYZ
                            </p>
                            <p className="text-xs text-gray-500">
                                Frontend Developer
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/images/xyz2.png" alt="CEO" className="max-h-300px object-contain" />
                            <p className="mt-4 text-sm font-semibold text-gray-800">
                                Mr. XYZ
                            </p>
                            <p className="text-xs text-gray-500">
                                UI/UX Designer
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/images/xyz3.png" alt="CEO" className="max-h-300px object-contain" />
                            <p className="mt-4 text-sm font-semibold text-gray-800">
                                Mr. XYZ
                            </p>
                            <p className="text-xs text-gray-500">
                                QA Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
