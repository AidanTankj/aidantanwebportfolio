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

                <div id="fox-button">
                    &#129418; {/* Fox emoji */}
                </div>

                {/* Intro Section */}
                <section id="hero" className="min-h-screen flex items-center justify-center text-center p-8 relative overflow-hidden">

                    <div className="container mx-auto hero-content">
                        <div className="hero-text text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-0 animate-fade-in delay-200">
                                Hello, I&apos;m
                            </h1>

                            {/* Dynamic Phrase Container */}
                            <div id="dynamic-phrase-container" className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in delay-300">
                                <span id="current-phrase" className="dynamic-text-content outlined-text">Aidan Tan</span>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in delay-400">
                                A passionate <b>Software Engineering</b> Graduate ready to build the future.
                            </p>

                        </div>

                        <div className="hero-image mt-12 md:mt-0 animate-scale-in delay-800">
                            {/* Example: Profile Picture */}

                                <Image src="https://storage.rxresu.me/cmczgti0215dyrxdf9iqic7n8/pictures/jgqd995hvrd4v2y2td74bjoo.jpg" alt="Profile Picture" width={572} height={703} className="mb-20 w-full" />
                        </div>

                    </div>
                </section>

                {/* Footer - Simple copyright */}
                <footer className="bg-white p-6 text-center text-gray-600 text-sm rounded-t-lg shadow-inner mt-12">
                    <p>&copy; 2025 Aidan Tan. All rights reserved.</p>
                </footer>

            </div>
        </div>

        {/* Duck Overlay Container */}
        <div id="duck-overlay"></div>
    </div>
  );
}