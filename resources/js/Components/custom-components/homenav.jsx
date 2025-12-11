import { Phone } from 'lucide-react';
import { Link } from '@inertiajs/react';

function Homenav(){
    return(
        <>
        <div className="bg-gray-100">
            
            {/* Navbar */}
            <nav className="bg-white shadow-md">
              <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2" >
                  <img  src="/images/best-nepal-logo.png" alt="Best Nepal Logo" className="h-10 w-10"/>
                  <span className="text-xl font-bold mt-5 ml-4 text-blue-900">Best Nepal</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                  <Link href="/about" className="text-gray-700 hover:text-indigo-600">About Us</Link>
                  <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
                  <Link href="/careers" className="text-gray-700 hover:text-indigo-600">Careers</Link>
                </div>

                {/* Contact Info */}
                <div className="hidden md:flex space-x-2 text-gray-700">
                <Phone/>
                  <a href="tel:+9779851032081" className="flex items-center space-x-1 text-blue-900 hover:text-blue-700">
                    <span>+977 9851032081</span>
                  </a>
                </div>
              </div>
            </nav>
            
          </div>
        </>
    );
}

export default Homenav;