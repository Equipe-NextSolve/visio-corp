'use client'
import Image from 'next/image'
import FormContact from "./FormContact";
import { motion } from "framer-motion";
import Questions from './Questions';

export default function ContactMain() {
  return (
        <main className='mt-20 bg-[#F0F2F5]'>

            <section className="w-full flex items-center justify-center md:min-h-150 bg-gray py-12 px-6 md:px-16">
                <div className="w-full flex flex-col md:flex-row items-center justify-around gap-20 md:gap-50">

                    <motion.div
                        className=" flex flex-col gap-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h2 className="text-white text-2xl sm:text-4xl font-semibold leading-snug tracking-wide">
                            Não perca tempo!{' '}
                            <br />
                            Entre em contato
                            <br />
                            agora mesmo
                            <br />
                            com nossa equipe
                        </h2>

                        <span
                            className="block h-0.5 w-[80%] max-w-45 rounded-lg bg-gold"
                            style={{ boxShadow: '0 3px 5px rgba(0,0,0,0.3)' }}
                        />
                    </motion.div>
 

                    <motion.div
                        className="flex-1 w-full max-w-sm md:max-w-lg rounded-xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                    >
                        <Image
                            src="/img7.png"
                            alt="Nossa equipe pronta para atender você"
                            width={660}
                            height={460}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
 
                </div>
            </section>
            <FormContact/>
            <Questions/>
        </main>
    )
}
