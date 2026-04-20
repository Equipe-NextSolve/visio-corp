import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
            <Link href='/' className='flex items-center justify-center overflow-hidden'>
                <div className="relative w-37.5 h-20 flex items-center">
                    <Image
                        src='/logo3.png'
                        alt='logo'
                        width={70}
                        height={20}
                        className="object-contain object-left"
                        
                    />
                </div>
            </Link>

    )
}