import Title from "@/utils/Title";

export default function BenefitForAll() {

    const companyBenefits = [
        { id: 1, title: "Zero custo com exames", description: "Nenhum impacto no orçamento de benefícios" },
        { id: 2, title: "Redução de queixas", description: "Menos fadiga visual e desconforto" },
        { id: 3, title: "Aumento da produtividade", description: "Preservação do foco e desempenho" },
        { id: 4, title: "Baixa demanda operacional", description: "Mínimo impacto na rotina do RH" },
    ];

    const collaboratorBenefits = [
        { id: 1, title: "Saúde visual garantida", description: "Acesso a cuidados oftalmológicos sem custo" },
        { id: 2, title: "Mais conforto no trabalho", description: "Redução de dores de cabeça e cansaço ocular" },
        { id: 3, title: "Óculos sem burocracia", description: "Processo simples, rápido e sem papelada" },
        { id: 4, title: "Benefício real e tangível", description: "Valor percebido no dia a dia, não só no contrato" },
    ];

    return (
        <section className="min-h-screen flex flex-col w-full mx-auto max-w-300 items-center gap-20 px-6 ">
            <Title label="Benefícios para Todos" />

            <div className="flex flex-col sm:flex-row w-full justify-between gap-10">

                <div className="flex flex-col gap-6 bg-white rounded-xl p-8 shadow-sm flex-1 sm:hover:shadow-md sm:hover:-translate-y-1 transition-all duration-300">
                    <span className="bg-gold py-2 px-8 rounded-lg font-bold w-fit">
                        Para Empresas
                    </span>
                    <ul className="flex flex-col gap-5">
                        {companyBenefits.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col gap-1 sm:hover:pl-2 transition-all duration-200"
                            >
                                <p className="font-bold text-sm text-gray-900">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-6 bg-white rounded-xl p-8 shadow-sm flex-1 sm:hover:shadow-md sm:hover:-translate-y-1 transition-all duration-300">
                    <span className="bg-gold py-2 px-8 rounded-lg font-bold w-fit">
                        Para os Colaboradores
                    </span>
                    <ul className="flex flex-col gap-5">
                        {collaboratorBenefits.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col gap-1 sm:hover:pl-2 transition-all duration-200"
                            >
                                <p className="font-bold text-sm text-gray-900">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}