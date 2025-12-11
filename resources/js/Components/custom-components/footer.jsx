function Footer() {
    return (
        <footer className="bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/images/best-nepal-logo.png" alt="Best Nepal Logo" className="h-10" />
                        <span className="text-xl font-semibold text-gray-800">Best Nepal</span>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Delivering world-class custom software <br /> solutions with agile expertise to drive <br /> business growth
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
                        Company Docs →
                    </button>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Menu</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="/careers" className="text-blue-600">Careers</a></li>
                        <li><a href="/about" className="text-blue-600">About Us</a></li>
                        <li><a href="/blog" className="text-blue-600">Blog</a></li>
                        <li><a href="/contact" className="text-blue-600">Contact Us</a></li>
                        <li><a href="/privacy" className="text-blue-600">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Reach Us</h3>
                    <p className="text-gray-600">
                        K-10 Tower, 10th Floor,<br /> Lazimpat, Kathmandu
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                    <p className="text-gray-600 mb-2">bestnepalcompany@email.com</p>
                    <p className="text-gray-600">+977 9851032081</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
