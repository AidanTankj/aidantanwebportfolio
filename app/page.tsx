import Image from "next/image";

export default function Home() {
  return (
    <div>
        <div id="page-container" className="page-container">
            {/* Main Portfolio */}
            <div id="portfolio-main" className="page-face">
                {/* Header/Navigation */}
                <header id="main-header" className="py-4 px-8 mr-0 header-transparent shadow-sm">
                    <nav className="container mx-auto flex justify-between items-center">

                        <div className="text-2xl font-bold text-gray-800">
                            <a href="#hero" className="hover:text-highlight transition-colors duration-300">Aidan Tan</a>
                        </div>

                        <ul className="flex space-x-6 text-gray-600 font-medium items-center pl-7  "> 
                            <li><a href="#about" className="hover:text-highlight transition-colors duration-300">About</a></li>
                            <li><a href="#skills" className="hover:text-highlight transition-colors duration-300">Skills</a></li>
                            <li><a href="#projects" className="hover:text-highlight transition-colors duration-300">Projects</a></li>
                            <li><a href="#contact" className="hover:text-highlight transition-colors duration-300">Contact</a></li>

                        </ul>
                    </nav>
                </header>

                {/* Fox Button */}
                <div id="fox-button">
                    &#129418; {/* Fox emoji */}
                </div>

                {/* Footer - Simple copyright */}
                <footer className="bg-white p-6 text-center text-gray-600 text-sm rounded-t-lg shadow-inner mt-12">
                    <p>&copy; 2025 Aidan Tan. All rights reserved.</p>
                </footer>
            </div>
        </div>
    </div>
  );
}