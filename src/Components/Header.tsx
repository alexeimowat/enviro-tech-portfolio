export function Header() {
    return (
        <header id="header" className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-extrabold text-forest-green tracking-wider">Tyra Parks</a>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-600 hover:text-forest-green font-medium transition-colors">About</a>
                    <a href="#projects" className="text-gray-600 hover:text-forest-green font-medium transition-colors">My Work</a>
                    <a href="#contact" className="bg-forest-green text-white px-4 py-2 rounded-full font-semibold hover:bg-forest-green-dark transition-colors text-sm">Contact</a>
                </nav>
                <button id="mobile-menu-button" className="md:hidden text-forest-green">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white pb-4">
                <a href="#about" className="block text-center py-2 px-4 text-gray-600 hover:bg-gray-100">About</a>
                <a href="#projects" className="block text-center py-2 px-4 text-gray-600 hover:bg-gray-100">My Work</a>
                <a href="#contact" className="block text-center py-2 px-4 text-gray-600 hover:bg-gray-100">Contact</a>
            </div>
        </header>
    )
}
