function Banner() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] flex items-center">

            <div className="container mx-auto px-6">
                {/* small heading */}
                <p className="text-blue-400/80 uppercase tracking-widest mb-3 z-2">
                    We are creative
                </p>

                <img src="/images/white-star.png" alt="stars" className=" absolute left-[26%] top-[42%] rotate-45 w-40 h-40 z-1 opacity-10" />

                {/* big heading */}
                <h1 className="text-5xl font-bold text-white leading-tight mb-4 z-2 opacity-100">
                    Best <span className="text-blue-400">IT Solution</span> <br /> Company
                </h1>

                {/* description */}
                <p className="text-white/90 text-lg max-w-xl z-2">
                    Best Nepal is in modern digital technology development <br />
                    since 2005 working with latest technologies.
                </p>

            </div>

            <div>
                <img src="/images/Ellipse1.png" alt="ellipse" className="absolute right-[0%] top-[6%]" />
                <img src="/images/Ellipse2.png" alt="ellipse" className="absolute right-[15%] top-[36%]" />

                <img src="/images/8-dots.png" alt="dots1" className="absolute left-[59%] top-[50%]" />
                {/* Right side image */}
                <div className="flex justify-center md:justify-end">
                    <img src="/images/banner-image.png" alt="Team Image" className="absolute left-[61%] top-[50%] shadow-2xl w-full max-w-md" />
                </div>
            </div>

        </div>
    );
}
export default Banner;
