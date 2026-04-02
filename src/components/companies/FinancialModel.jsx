export default function FinancialModel() {
  const sections = [
    {
      id: 1,
      title: "Modelo Financeiro",
      items: [
        "Exames oftalmológicos gratuitos",
        "Sem custo de contratação",
        "Receita via venda opcional",
        "Empresa não intermedia pagamentos",
      ],
    },
    {
      id: 2,
      title: "Contrapartidas",
      items: [
        "Espaço adequado para atendimentos",
        "Apoio na comunicação interna",
        "Organização da agenda com RH",
      ],
    },
    {
      id: 3,
      title: "Duração",
      items: [
        "Programa de 6 meses",
        "Renovação semestral",
        "Cuidado contínuo garantido",
      ],
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-5 h-px bg-gold" />
            <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
              Como funciona
            </span>
            <span className="w-5 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center">
            Modelo de Implementação
          </h2>
          <p className="text-gray text-sm font-light text-center max-w-md">
            Entenda como a VisioCorp estrutura sua parceria com empresas de
            forma simples e transparente.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="group bg-white border border-black/[0.07] hover:border-gold/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(224,171,26,0.10)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray/10 border border-gold/30 text-gold text-xs font-semibold">
                  {String(section.id).padStart(2, "0")}
                </span>
                <h3 className="text-balck font-semibold text-base">
                  {section.title}
                </h3>
              </div>

              <div className="w-full h-px bg-linear-to-r from-gold/40 to-transparent mb-5" />

              <ul className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-gray text-sm font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
