'use client'
import Image from "next/image"
import { AnimatedSlideLeft, AnimatedSlideRight } from "@/utils/AnimatedEntrance"
export default function SectionTwo() {
    return (
        <section className='w-full bg-[#3a3f47] min-h-150 mt-16 py-12 px-6 flex  justify-center'>
                 <div className='flex flex-col sm:flex-row items-center gap-8 w-full max-w-300'>

                    <AnimatedSlideLeft className=' w-full max-w-120 sm:w-1/2 rounded-xl overflow-hidden shadow-lg shrink-0'>
                        <Image
                            src="/img5.png"
                            alt="Atendimento óptico corporativo"
                            width={400}
                            height={520}
                            className="w-full h-full object-cover"
                        />
                    </AnimatedSlideLeft>

                    <AnimatedSlideRight className='flex flex-col gap-4 w-full sm:w-1/2'>
                        <h2 className='text-white text-[21px] sm:text-2xl md:text-4xl font-bold leading-snug'>
                            Saúde visual com conforto no seu trabalho
                        </h2>
                        <div className='w-[80%] max-w-30 h-0.5 bg-gold rounded-full' />
                        <p className='text-gray-300 text-md leading-relaxed'>
                            Nossa equipe está preparada para estruturar um atendimento personalizado para sua organização.
                        </p>
                        <p className='text-gray-300 text-md leading-relaxed'>
                            Entre em contato com nosso departamento comercial e agende uma conversa para conhecer o Programa VisionCorp de Saúde Visual Corporativa.
                        </p>
                    </AnimatedSlideRight>

                </div>

            </section>
    )
}
