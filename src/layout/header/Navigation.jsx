import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    const links = [
        {id: 1, label: "Home", href: "/" },
        {id: 2, label: "Sobre", href: "/" },
        {id: 3, label: "Empresas", href: "/" },
        {id: 4, label: "Suporte", href: "/" },
    ]

    return (
        <nav className='w-650px flex justify-end items-center'>
            <div className='flex items-center gap-5'>
                <ul className='flex justify-content items-center gap-4 md:gap-8'>
                    {links.map((item) => (
                        <li key={item.id}>
                            <Link href={item.href} className='relative text-lg text-black font-semibold transition-all duration-300 hover:text-gray-500
                            before:content-[""] before:absolute
                            before:left-0 before:-bottom-1
                            before:w-0 before:h-[2px]
                            before:bg-yellow-500
                            before:transition-all before:duration-300
                            hover:before:w-full'>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <Link href='' className='text-base font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-1 px-4 rounded-xl'>
                    Contato
                </Link>
            </div>
        </nav>
    )
}
