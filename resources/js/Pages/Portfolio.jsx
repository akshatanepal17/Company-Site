import Homenav from "@/Components/custom-components/homenav";
import Footer from "@/Components/custom-components/footer";
import { Phone, Mail } from "lucide-react";

function Portfolio() {
    return (
        <>
            <Homenav />

            <div className="w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] px-20 py-20">
                
                <div className="flex-1 flex flex-col justify-center z-12 mb-12 gap-6">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Our Portfolio
                    </h1>
                    <p className="text-sm text-white/80">
                        Step into the web experiences we’ve built for our clients
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    
                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/ABCtrekking.png"alt="ABC Trekking Camp" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                ABC Trekking Camp Pvt. Ltd
                            </h3> 
                            <p className="text-xs text-black/70">
                                Web Development
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/Conceiveplus.png" alt="Conceive Plus" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                Conceive Plus
                            </h3>
                            <p className="text-xs text-black/70">
                                E-commerce Solution
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/diyopost.png" alt="Diyo Post" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                Diyo Post
                            </h3>
                            <p className="text-xs text-black/70">
                                Web Development
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/prasasan.png" alt="Prasasan" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                Prasasan
                            </h3>
                            <p className="text-xs text-black/70">
                                Web Development
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/BIID.png" alt="BIID" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                BID
                            </h3>
                            <p className="text-xs text-black/70">
                                E-commerce Solution
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden">
                        <img src="/images/mitra.png" alt="Mitra Nepal" className="w-full h-64 object-cover"/>
                        <div className="bg-[#4DB6FF] py-3 text-center">
                            <h3 className="text-sm font-semibold text-black">
                                Mitra Nepal
                            </h3>
                            <p className="text-xs text-black/70">
                                Web Development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;
