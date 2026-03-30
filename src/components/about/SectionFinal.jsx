'use client'
import { AnimatedButton, AnimatedEntrance, AnimatedFade, AnimatedDivider } from "@/utils/AnimatedEntrance";
import Link from "next/link";
const sectionParagraphs = [
    'Traga sua empresa para fazer parte do nosso time e ofereça o melhor atendimento aos seus colaboradores. Clique no botão abaixo e fale agora mesmo com a nossa equipe — estamos prontos para dar todo o suporte que sua empresa precisa.',
    'Na VisionCorp, nosso objetivo é sempre cuidar de você. A saúde visual não é estática: o uso contínuo de telas, a leitura intensa e atividades de alta precisão impactam diretamente o foco e o conforto visual ao longo do tempo.',
]

export default function SectionFinal() {
    return (
        <section className='w-full flex justify-center items-center py-24 px-6 bg-white'>
                <div className='relative w-full max-w-2xl flex flex-col items-center gap-8 text-center'>

                    <div className='absolute -top-16 -right-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none bg-green' />
                    <div className='absolute -bottom-16 -left-10 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none bg-green' />

                    <AnimatedFade index={0}>
                        <span className='text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-green/20 bg-green/10 text-green'>
                            Fale com a gente
                        </span>
                    </AnimatedFade>

                    <AnimatedEntrance index={1}>
                        <h2 className='text-4xl font-bold leading-tight text-black'>
                            Sua empresa merece o{' '}
                            <span className='text-green'>melhor</span>{' '}
                            em saúde visual
                        </h2>
                    </AnimatedEntrance>

                    <AnimatedDivider className='w-16 h-px bg-linear-to-r from-transparent via-green to-transparent' />

                    {sectionParagraphs.map((text, i) => (
                        <AnimatedEntrance key={text} index={i + 2}>
                            <p className='text-md sm:text-xl leading-relaxed max-w-lg text-gray'>{text}</p>
                        </AnimatedEntrance>
                    ))}

                    <AnimatedButton>
                        <Link
                            href="/contact"
                            className='mt-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer bg-green text-black shadow-[0_0_24px] shadow-green/30 sm:hover:shadow-green/60'
                        >
                            Entre em Contato
                        </Link>
                    </AnimatedButton>

                </div>
            </section>
    )
}
