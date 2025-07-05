import { MobileLinks } from "./MobileMenu";
import { NavigationLinks } from "./NavigationLinks";

export function Header() {
    return (
        <header id="header" className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-extrabold text-forest-green tracking-wider">
                    Tyra Parks
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavigationLinks />
                </nav>
                <button id="mobile-menu-button" className="md:hidden text-forest-green">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            <MobileLinks />
        </header>
    )
}
