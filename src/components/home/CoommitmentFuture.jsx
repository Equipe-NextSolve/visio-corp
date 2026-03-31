import Title from "@/utils/Title";
import { PiPlantFill } from "react-icons/pi";
import { MdHandshake, MdAccountBalance } from "react-icons/md";
import { AnimatedEntrance } from "@/utils/AnimatedEntrance";

const cards = [
    {
        id: 1,
        icon: <PiPlantFill className="text-2xl text-gray-900" />,
        title: "Ambiental",
        subtitle: "Sustentabilidade Ambiental",
        description:
            "Buscamos reduzir impactos através de práticas sustentáveis, uso consciente de recursos e escolha de materiais responsáveis.",
    },
    {
        id: 2,
        icon: <MdHandshake className="text-2xl text-gray-900" />,
        title: "Social",
        subtitle: "Impacto Social",
        description:
            "Valorizamos pessoas e comunidades, promovendo inclusão, bem-estar e acesso a soluções que melhoram a qualidade de vida.",
    },
    {
        id: 3,
        icon: <MdAccountBalance className="text-2xl text-gray-900" />,
        title: "Governança",
        subtitle: "Ética e Transparência",
        description:
            "Atuamos com integridade, transparência e responsabilidade em todas as nossas relações e decisões.",
    },
];

export default function CommitmentFuture() {
    return (
        <section className="min-h-screen flex flex-col items-center gap-6 w-full mx-auto max-w-350 px-6 py-16 bg-gray-50">

            <div className="flex flex-col items-center gap-7 text-center w-full">
                <Title label="Nosso Compromisso com o Futuro" />
                <p className="text-sm text-gray-500 max-w-md">
                    Atuamos com responsabilidade ambiental, impacto social positivo e práticas
                    éticas, construindo um negócio sustentável e consciente.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-6 mt-6">
                {cards.map((card, index) => (
                    <AnimatedEntrance
                        key={card.id}
                        index={index}
                        className="flex flex-col flex-1"
                    >
                        <div className="flex flex-col h-full bg-white rounded-xl min-h-70 shadow-sm overflow-hidden sm:hover:shadow-md sm:hover:-translate-y-1 transition-all duration-300">
                            <div className="bg-gold px-6 py-5 flex items-center gap-3">
                                {card.icon}
                                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                            </div>
                            <div className="flex flex-col gap-3 px-6 py-6">
                                <p className="text-sm font-semibold text-gray-700">{card.subtitle}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                            </div>
                        </div>
                    </AnimatedEntrance>
                ))}
            </div>

        </section>
    );
}