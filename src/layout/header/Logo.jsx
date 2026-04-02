import Link from 'next/link'

export default function Logo() {
    return (
        <section className='w-150'>
            <Link href='/' className='relative text-xl font-bold italic before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-yellow-500'>
                VisioCorp
            </Link>
        </section>
    )
}