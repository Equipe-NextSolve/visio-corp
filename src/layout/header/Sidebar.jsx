"use client"
import { useEffect, useState, useRef, useCallback } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef(null);

    const toggleMenu = useCallback(() => { setIsOpen(prev => !prev); }, []);

    const closeMenu = useCallback(() => { setIsOpen(false); }, []);

    useEffect(() => { closeMenu(); }, [closeMenu]);

    useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : "auto"; }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && event.target instanceof Node && !sidebarRef.current.contains(event.target)) { closeMenu(); }
        };

        if (isOpen) { document.addEventListener("mousedown", handleClickOutside); }

        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [isOpen, closeMenu]);

    const links = [
        {id:1, label: "Home", href: "/" },
        {id:2, label: "Sobre", href: "/" },
        {id:3, label: "Empresas", href: "/" },
        {id:4, label: "Suporte", href: "/" },
        {id:5, label: "Contato", href: "/" },
    ];

    return (
        <section className="relative z-1000">

            <button type='button' onClick={toggleMenu} aria-label="Abrir menu" className="flex items-center justify-center w-10 h-10 rounded-lg text-[#0D0D0D] hover:bg-[#D99923]/10 transition">
                <FaBars className="text-xl" />
            </button>

            <div
                className={`fixed inset-0 z-998 transition duration-300 ${isOpen
                    ? "bg-black/30 backdrop-blur-sm opacity-100"
                    : "opacity-0 pointer-events-none"
                    }`} />

            <aside ref={sidebarRef} className={`fixed top-0 right-0 z-999 h-screen w-75 bg-[#f0f0f0] shadow-[-10px_0_40px_rgba(0,0,0,0.15)] transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex items-center justify-between px-6 py-5 border-b border-[#BFBFBF]/30">
                    <span className="text-sm font-semibold tracking-wider text-[#BFBFBF] uppercase">navegação</span>

                    <button type='button' onClick={closeMenu} aria-label="Fechar menu" className="flex items-center justify-center w-8 h-8 rounded-lg text-[#BFBFBF] hover:bg-[#D99923]/10 hover:text-[#D99923] transition">
                        <FaTimes />
                    </button>
                </div>

                <nav className="flex flex-col px-4 py-4 gap-1">
                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={closeMenu}
                                className={`px-4 py-3 rounded-lg font-medium transition-all ${active
                                    ? "bg-[#D99923]/15 text-[#D99923]"
                                    : "text-[#0D0D0D] hover:bg-[#D99923]/10 hover:text-[#D99923]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full px-6 py-4 border-t border-[#BFBFBF]/30">
                    <span className="text-sm font-semibold text-[#038C4C]">
                        VisioCorp Saúde Visual
                    </span>
                </div>
            </aside>
        </section>
    )
}