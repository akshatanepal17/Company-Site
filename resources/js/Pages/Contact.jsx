import Homenav from "@/Components/custom-components/homenav";
import Footer from "@/Components/custom-components/footer";
import { Phone, Mail } from "lucide-react";

function Contact() {
    return (
        <>
            <Homenav />

            <div className="w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] p-20">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Get in Touch
                    </h1>
                    <p className="text-sm text-white/80">
                        Please provide us your contact details. Alternatively, call us on 0097714426808.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row px-20 py-10 items-start">
                    <div className="flex-1">
                        <form className="w-full max-w-md space-y-3">
                            <div>
                                <input className="border border-gray-400 rounded-2xl p-2 w-full" placeholder="Your name*" />
                            </div>
                            <div>
                                <input className="border border-gray-400 rounded-2xl p-2 w-full" placeholder="Company name*" />
                            </div>
                            <div>
                                <input className="border border-gray-400 rounded-2xl p-2 w-full" placeholder="Your email*" />
                            </div>
                            <div>
                                <input className="border border-gray-400 rounded-2xl p-2 w-full" placeholder="Subject*" />
                            </div>
                            <div>
                                <textarea className="border border-gray-400 rounded-2xl p-4 w-full" placeholder="Enter your project details*" rows={6}></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-white text-[#174E7A] text-sm font-semibold px-8 py-2 rounded-2xl">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className="mt-16 lg:mt-0 text-white text-sm space-y-10">
                        <div>
                            <Phone size={18} className="mt-1 strokewidth-2 stroke-black" />
                            <p className="font-semibold mb-2">Telephone:</p>
                            <p>Phone: +977-1-4426808, 6215042</p>
                            <p>Fax No.: +977-1-4437187</p>
                        </div>

                        <div>
                            <Mail size={18} className="mt-1 strokewidth-2 stroke-black" />
                            <p className="font-semibold mb-2">Mailing Address:</p>
                            <p>Best Nepal Pvt.Ltd.</p>
                            <p>P.O. Box: 12155</p>
                            <p>Jawalakhel, Lalitpur</p>
                            <p>support@bestnepal.net</p>
                            <p>hostmaster@bestnepal.net</p>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
