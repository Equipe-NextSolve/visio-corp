import { FaBuilding } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { FaHospital } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function UseCase() {
  const cases = [
    {
      id: 1,
      titulo: "Indústria",
      descricao:
        "Funcionários de ambientes industriais precisam de proteção visual adequada. A VisioCorp oferece óculos de segurança com grau, garantindo mais produtividade, conforto e segurança no trabalho.",
      icon: FaBuilding,
    },
    {
      id: 2,
      titulo: "Escritórios",
      descricao:
        "Profissionais que passam horas em frente ao computador sofrem com fadiga ocular. A VisioCorp fornece lentes com filtro de luz azul, melhorando o desempenho e reduzindo o cansaço visual.",
      icon: IoDesktopOutline,
    },
    {
      id: 3,
      titulo: "Hospitais",
      descricao:
        "Profissionais da saúde precisam de visão precisa e conforto durante longas jornadas. A VisioCorp oferece soluções personalizadas, como lentes antirreflexo e armações leves.",
      icon: FaHospital,
    },
    {
      id: 4,
      titulo: "Motoristas / Delivery",
      descricao:
        "Motoristas precisam de visão clara em diferentes condições de luz. A VisioCorp oferece lentes com proteção UV e adaptação para direção noturna.",
      icon: TbTruckDelivery,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-[radial-gradient(ellipse_at_top,rgba(224,171,26,0.11)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-[radial-gradient(ellipse_at_bottom_right,rgba(224,171,26,0.07)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-5 h-px bg-gold" />
            <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
              Segmentos atendidos
            </span>
            <span className="w-5 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balck tracking-tight text-center">
            Casos de Uso
          </h2>
          <p className="text-gray text-sm font-light text-center max-w-md">
            Veja como a VisioCorp atende diferentes segmentos com soluções
            visuais sob medida.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white border border-black/[0.07] hover:border-gold/50 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(224,171,26,0.10)]"
              >
                <div className="w-11 h-11 rounded-xl bg-black/10 border border-gold/25 flex items-center justify-center text-gold text-lg shrink-0">
                  <Icon />
                </div>

                <div className="w-full h-px bg-linear-to-r from-gold/35 to-transparent" />

                <div className="flex flex-col gap-2">
                  <h3 className="text-black font-semibold text-base">
                    {item.titulo}
                  </h3>
                  <p className="text-gray text-sm font-light leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <span className="text-gold/40 text-xs font-medium tracking-widest">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
