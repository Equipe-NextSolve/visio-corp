import Image from "next/image";
import { AnimatedEntrance } from "@/utils/AnimatedEntrance";

const sectionParagraphs = [
    'Na VisioCorp, contamos com uma equipe altamente qualificada, com elevado nível técnico e treinamento especializado em atendimento óptico voltado à saúde da visão.',
    'Dispomos de laboratório próprio, equipado com tecnologia de última geração, garantindo excelência em todas as áreas de atuação.',
    'Nosso objetivo é levar comodidade e qualidade até sua empresa, realizando atendimentos diretamente nas dependências corporativas, com agenda organizada, equipe especializada e equipamentos adequados, tudo isso sem custo para os colaboradores.',
]

export default function SectionInitial() {
    return (
        <section className='flex flex-col items-center w-full max-w-300 px-3 sm:px-6 gap-8'>
        
            <AnimatedEntrance className='relative w-[90%] max-w-175 rounded-2xl overflow-hidden shadow-lg'>
                <Image
                    src="/img6.png"
                    alt="Nossa equipe pronta para atender você"
                    width={700}
                    height={460}
                    className="w-full h-full object-cover"
                    priority
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
            </AnimatedEntrance>

            <div className='flex flex-col items-center gap-5 text-center'>
                <AnimatedEntrance index={0} className='flex flex-col w-full items-center'>
                    <h2 className='text-2xl font-bold text-gray-800'>VisioCorp</h2>
                    <div className='w-12 h-0.5 bg-gold rounded-full' />
                </AnimatedEntrance>

                {sectionParagraphs.map((text, i) => (
     
                    <AnimatedEntrance key={text} index={i + 1}>
                        <p className='text-gray leading-relaxed tracking-wide text-md sm:text-xl max-w-lg sm:max-w-180'>{text}</p>
                    </AnimatedEntrance>
                ))}
            </div>
        
        </section>
    )
}
