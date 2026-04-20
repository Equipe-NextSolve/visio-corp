import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <section className='w-37.5 h-full flex items-center justify-center'>
            <Link href='/' className='flex items-center justify-center'>
                <div className="relative w-37.5 h-37.5 ">
                    <Image
                        src='/logo3.png'
                        alt='logo'
                        fill
                        className='object-contain py-3'
                    />
                </div>
            </Link>
        </section>
    )
}