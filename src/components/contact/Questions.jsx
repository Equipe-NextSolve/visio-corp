'use client'
import Title from '@/utils/Title'
import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
    {
        id:1,
        question: "Tem custo para a empresa?",
        answer: "Não. O programa VisionCorp é oferecido com custo zero para a empresa contratante. Os exames oftalmológicos são gratuitos para os colaboradores, e a receita da VisionCorp vem exclusivamente da venda opcional de óculos sem qualquer obrigatoriedade de compra. A empresa não intermedia pagamentos."
    },
    {
        id:2,
        question: "Quanto tempo dura o atendimento?",
        answer: "O programa é semestral, com 4 dias de atendimento oftalmológico in company por ciclo 2 dias no atendimento inicial e 2 dias na reavaliação semestral. Todo o processo acontece com agendamento organizado e mínima interferência no fluxo de trabalho da empresa."
    },
    {
        id:3,
        question: "Quantos colaboradores podem participar?",
        answer: "O programa foi desenvolvido para empresas com cerca de 100 colaboradores, mas atende equipes de diferentes portes. No 2º ciclo semestral, novos colaboradores já são incluídos imediatamente, garantindo continuidade do cuidado visual para toda a equipe ao longo do ano."
    },
    {
        id:4,
        question: "É necessário espaço específico?",
        answer: "Não. Em poucos minutos nossa equipe transforma uma sala de reunião, um espaço de convivência ou qualquer pequeno ambiente disponível em um consultório de triagem visual e showroom óptico funcional com discrição e profissionalismo. As únicas contrapartidas pedidas são apoio na comunicação interna e organização da agenda com o RH."
    },
    {
        id:5,
        question: "Emitimos laudos?",
        answer: "Sim. Ao final de cada exame, a prescrição é entregue imediatamente ao colaborador. As prescrições são enviadas ao laboratório parceiro, que produz as lentes conforme as especificações médicas com controle de qualidade rigoroso. Os óculos prontos são entregues diretamente na empresa, sem que o colaborador precise se ausentar."
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
}
 
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}
 
const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}


export default function Questions() {
    const [openIndex, setOpenIndex] = useState(null)

    function toggle(id) {
        setOpenIndex(prev => prev === id ? null : id)
    }

    return (
        <section className="w-full max-w-3xl mx-auto px-4 pb-10 flex flex-col gap-10">
            <motion.div
                className="w-full flex flex-col justify-center items-center gap-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={headerVariants}
            >
                <Title label="Perguntas Frequentes" />
                <p className="text-center">
                    Confira algumas dúvidas comuns que separamos para você.{' '}
                    Caso não encontre o que procura, entre em contato com a nossa equipe, teremos prazer em ajudar!
                </p>
            </motion.div>

            <motion.div
                className="w-full max-w-3xl mx-auto px-4 pb-10 flex flex-col gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={containerVariants}
            >
                {faqs.map((faq) => (
                     <motion.div
                        key={faq.id}
                        variants={itemVariants}
                        className="border-b border-white/10 pb-4"
                    >
                        <button
                            type="button"
                            onClick={() => toggle(faq.id)}
                            className="w-full flex justify-between items-center text-left gap-4 py-2 cursor-pointer group"
                        >
                            <span className="text-gold font-semibold text-base sm:group-hover:brightness-125 transition-all duration-200">
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: openIndex === faq.id ? 45 : 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="text-gold text-xl shrink-0"
                            >
                                +
                            </motion.span>
                        </button>
 
                        <motion.div
                            initial={false}
                            animate={openIndex === faq.id
                                ? { height: 'auto', opacity: 1, marginTop: 8 }
                                : { height: 0, opacity: 0, marginTop: 0 }
                            }
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray text-sm leading-relaxed pb-2">
                                {faq.answer}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}