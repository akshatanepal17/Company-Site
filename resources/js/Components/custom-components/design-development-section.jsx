function DesignDevelopmentSection() {
    return (
        <div className="min-h-screen w-full p-20">
            <h1 className="text-3xl font-bold text-[#1E3D58] pb-12">We specialized in Design & Development</h1>

            <div className="w-full grid grid-cols-3 gap-12">

                <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                    <img src="/images/strategy.png" alt="Strategy Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">Strategy Discover</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        Discovery is an information <br /> gathering process meant to dig <br /> deep into the details of what is <br /> important into the client business,<br /> which is the first step in the design <br /> and development process.
                    </p>
                </div>

                <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                <img src="/images/Designing.png" alt="Designing Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">Designing</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        The design phase will generate a variety of <br /> different outputs, including sketches, <br /> flowcharts, site trees, HTML screen <br /> designs, prototypes, photo impressions and <br /> more.
                    </p>
                </div>

                <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                <img src="/images/Coding.png" alt="Coding Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">Coding</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        Coding is to turn a project plan into <br />a reality. We use latest technologies to code <br /> according to the requirement analysis.
                    </p>
                </div>


               <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                <img src="/images/Project-Deployment.png" alt="Project Deployment Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">Project Deployment</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        Deployment is the final phase of a project.<br /> It is all of the activities that make a <br /> software or an application available for <br /> use.
                    </p>
                </div>

                <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                <img src="/images/QA-Testing.png" alt="QA Testing Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">QA Testing</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        QA testing helps IT companies deliver <br /> safe, fast, and reliable products; saving <br /> money, maintaining reputation, and <br /> keeping customers satisfied.
                    </p>
                </div>

                <div className="w-[1/4] bg-gray-100 p-8 rounded shadow font-bold text-[#1E3D58]">
                <img src="/images/WordPress-Development.png" alt="WordPress Icon" className="h-5 w-5 mb-3" />
                    <span className="text-xl font-extrabold mb-9">WordPress Development</span>
                    <p className="w-full text-[#1E3D58] mt-2" font-size="12px">
                        WordPress developer builds, customizes,<br /> maintains, and optimizes websites for the <br /> company and clients. They ensure the <br />website looks good, works fast, stays <br /> secure, and meets business goals.
                    </p>
                </div>

            </div>
        </div>
    );

}

export default DesignDevelopmentSection;