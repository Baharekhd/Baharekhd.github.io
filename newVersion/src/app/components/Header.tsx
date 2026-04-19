import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import "./Header.css";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const scrollToSection = (sectionId: string) => {
        if (!isHome) {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 rainbow-header"
            style={{
                borderBottom: "1px solid hsl(330,100%,75%, 0.20)",
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-light text-white hover:opacity-70 transition-opacity"
                    >
                        Bahareh
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("work")}
                            className="text-white/90 hover:text-white transition-colors font-light"
                        >
                            Work
                        </button>
                        {isHome ? (
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-white/90 hover:text-white transition-colors font-light"
                            >
                                About
                            </button>
                        ) : (
                            <Link
                                to="/about"
                                className="text-white/90 hover:text-white transition-colors font-light"
                            >
                                About
                            </Link>
                        )}
                        {isHome ? (
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors font-light"
                            >
                                Contact
                            </button>
                        ) : (
                            <Link
                                to="/contact"
                                className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors font-light"
                            >
                                Contact
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
                        <button
                            onClick={() => scrollToSection("work")}
                            className="text-left text-white/90 hover:text-white transition-colors font-light"
                        >
                            Work
                        </button>
                        {isHome ? (
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-left text-white/90 hover:text-white transition-colors font-light"
                            >
                                About
                            </button>
                        ) : (
                            <Link
                                to="/about"
                                className="text-left text-white/90 hover:text-white transition-colors font-light"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        )}
                        {isHome ? (
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-left px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors font-light w-fit"
                            >
                                Contact
                            </button>
                        ) : (
                            <Link
                                to="/contact"
                                className="text-left px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors font-light w-fit"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}
