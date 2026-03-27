"use client"
import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 748)
        };
        checkScreen();

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", checkScreen)

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 w-full h-20 z-50 transition-all duration-300
                ${scrolled
                    ? "bg-white backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}>
            <section className="max-w-7x1 mx-auto flex items-center justify-around h-full py-10 px-10 w-full">
                <Logo />
                <div className="max-[748px]:hidden">
                    <Navigation />
                </div>
                {isMobile && <Sidebar />}
            </section>
        </header>
    )
}
