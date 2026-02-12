import { Search } from "lucide-react";

function Career() {
    return (
        <>
            <div className="w-full relative">

                <div   style={{ backgroundImage: "url('/images/Careers.png')" }} className="w-full bg-gradient-to-br from-[#BFD3E6] via-[#B5CCE3] to-[#AFC8E1] px-10 md:px-24 py-20">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold text-black mb-4">
                            Our Career
                        </h1>
                        <p className="text-sm text-gray-700 max-w-xl mb-12">
                            Building a high-quality IT company website opens career paths
                            in web development, UI/UX design, digital marketing, project
                            management, and tech entrepreneurship.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center justify-between border-b border-black pb-4">
                                <p className="text-sm font-bold">
                                    Is there a linux version available?
                                </p>
                                <button className="bg-[#0B3C6D] text-white text-xs px-4 py-1 rounded-full">
                                    Apply Now
                                </button>
                            </div>

                            <div className="flex items-center justify-between border-b border-black pb-4">
                                <p className="text-sm font-bold">
                                    On how many device can I activate a Herd Pro license?
                                </p>
                                <button className="bg-[#0B3C6D] text-white text-xs px-4 py-1 rounded-full">
                                    Apply Now
                                </button>
                            </div>

                            <div className="flex items-center justify-between border-b border-black pb-4">
                                <p className="text-sm font-bold">
                                    Is there a trial for Herd Pro?
                                </p>
                                <button className="bg-[#0B3C6D] text-white text-xs px-4 py-1 rounded-full">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center mt-16">
                            <button className="flex items-center gap-3 bg-[#3FA9F5] text-black px-8 py-3 rounded-full ">
                                <Search size={15} />
                                <span className="text-sm font-medium">
                                    Search here for available jobs
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full  bg-[#0B4A78] px-10 md:px-24 py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="/images/team.png" alt="Team" className="rounded-lg object-cover" />
                    </div>

                    <div className="text-white">
                        <h2 className="text-3xl font-semibold mb-4">
                            Let our team connect with you
                        </h2>

                        <p className="text-sm text-gray-200 font-regular mb-8 max-w-md">
                            Ready to take your career to the next level? Share your CV
                            with us, and we'll connect you with exciting opportunities
                            to grow and thrive.
                        </p>
                        <div className="flex justify-center">
                            <button className="bg-[#4DB4FF] text-sm px-6 py-2 rounded-full font-bold">
                                Drop your CV
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Career;
