'use client'
import SectionInitial from './SectionInitial'
import SectionTwo from './SectionTwo'
import SectionFinal from './SectionFinal'

export default function AboutMain() {

    return (
        <main className='flex flex-col mt-30 items-center'>
            <SectionInitial/>
            <SectionTwo/>
            <SectionFinal/>
        </main>
    )
}