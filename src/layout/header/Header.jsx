"use client"
import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import { usePathname } from "next/navigation"

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHome, setIsHome] = useState(true)
    const pathname = usePathname();

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 748)
        };
        checkScreen();

        const handleScroll = () => {
            if (pathname === '/') {
                setScrolled(window.scrollY > 20);
                setIsHome(true)
            } else {
                setScrolled(false);
                setIsHome(false)
            }

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", checkScreen)

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkScreen);
        };
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 w-full h-20 z-50 transition-all duration-300
                ${!isHome ? "bg-white backdrop-blur-md shadow-lg" : ""}
                ${isHome && scrolled ? "bg-white backdrop-blur-md shadow-lg" : ""}
                ${isHome && !scrolled ? "bg-transparent" : ""}
            `}>
            <section className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 w-full">
                <Logo />
         
                {!isMobile && <Navigation />}
                {isMobile && <Sidebar />}
            </section>
        </header>
    )
}
