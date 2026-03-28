'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const institucional = [
    { label: 'Sobre nós', href: '' },
    { label: 'Política de Privacidade', href: '' },
    { label: 'Contato', href: '/contact' },
]

const redes = [
    { label: 'Instagram', href: '', icon: <FiInstagram size={14} /> },
    { label: 'E-mail Corporativo', href: 'mailto:', icon: <FiMail size={14} /> },
    { label: 'Whatsapp (Vendedor)', href: '', icon: <FaWhatsapp size={14} /> },
]

export default function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/5 overflow-hidden select-none">



            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
                <div className="absolute -bottom-20 right-0 w-64 h-64 rounded-full bg-green/5 blur-3xl" />
            </div> */}

            <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


                    <div className="flex flex-col gap-4 lg:col-span-1">
                        <Image
                            src="/Logo.png"
                            alt="VisionCorp"
                            width={140}
                            height={48}
                            className="object-contain object-left"
                        />
                        <p className="text-white/40 text-xs leading-relaxed max-w-45">
                            Saúde visual, conveniência e produtividade para empresas que valorizam seus colaboradores.
                        </p>
                    </div>


                    <div className="flex flex-col gap-4">
                        <h4 className="text-gold text-xs font-semibold uppercase tracking-widest">
                            Institucional
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {institucional.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-white/50 text-sm hover:text-white transition-colors duration-200 hover:pl-1"
                                        style={{ display: 'inline-block', transition: 'padding 0.2s, color 0.2s' }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col gap-4">
                        <h4 className="text-gold text-xs font-semibold uppercase tracking-widest">
                            Redes Sociais
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {redes.map(({ label, href, icon }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
                                    >
                                        <span className="text-gold/60 group-hover:text-gold transition-colors duration-200">
                                            {icon}
                                        </span>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

   
                    <div className="flex flex-col gap-4">
                        <h4 className="text-gold text-xs font-semibold uppercase tracking-widest">
                            Onde nos Encontrar
                        </h4>
                        <div className="flex items-start gap-2 text-white/50 text-sm leading-relaxed">
                            <HiOutlineLocationMarker className="text-gold/70 mt-0.5 shrink-0" size={15} />
                            <span>
                                3403 Av. Dr. Silas Munguba<br />
                                Fortaleza, Ceará
                            </span>
                        </div>
                    </div>
                </div>

 
                <div className="mt-12 border-t border-white/8" />


                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-xs">
                    <span>© 2025 VisionCorp. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    )
}