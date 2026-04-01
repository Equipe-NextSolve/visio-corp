"use client";
import Image from "next/image";
import { RiInformationFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";

export default function DescriptionPolicie() {
  const texts = [
    {
      id: 1,
      title: "Informamos",
      description:
        "Este informativo tem como objetivo garantir aos nossos clientes e usuários que entram em contato com nossa equipe por meio deste canal — o website corporativo da VisioCorp — que todos os dados fornecidos, seja através do formulário de contato ou via WhatsApp, são tratados com total segurança, confidencialidade e responsabilidade, não sendo compartilhados com terceiros.",
      icon: RiInformationFill,
    },
    {
      id: 2,
      title: "Lei LGPD",
      description:
        "Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD), adotando práticas e medidas técnicas adequadas para garantir a privacidade, a proteção e o tratamento seguro dos dados pessoais, em conformidade com a legislação vigente.",
      icon: GoLaw,
    },
    {
      id: 3,
      title: "Suporte",
      description:
        "Caso você acredite que, por qualquer motivo, tenha ocorrido a extração indevida de dados ou algum equívoco no tratamento das informações, solicitamos que entre em contato diretamente com nosso gerente comercial por meio do WhatsApp: (85) 9 8699-0288. Nossa equipe está à disposição para prestar todo o suporte necessário. Reforçamos que nosso compromisso é oferecer produtos de excelência, aliados a um atendimento dedicado e de alta qualidade ao cliente.",
      icon: MdSupportAgent,
    },
  ];

  return (
    <section className=" relative w-full min-h-screen bg-white py-12 px-6">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gold/40" />
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <Image
            width={820}
            height={460}
            alt="VisioCorp privacidade"
            src="/img9.png"
            className="w-full object-cover max-h-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <span className="bg-gold text-black text-[10px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full">
              VisioCorp
            </span>
            <span className="text-white/75 text-sm font-light">
              Política de Privacidade
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="block w-6 h-px bg-gold" />
          <span className="text-gold text-[11px] font-medium tracking-[0.16em] uppercase">
            Privacidade &amp; Dados
          </span>
        </div>

        <h2 className="text-3xl font-bold text-black mb-12 leading-tight">
          Seus dados, <span className="text-gold">nossa responsabilidade.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {texts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-black/[0.07] rounded-2xl p-7 flex items-start gap-6 hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                  <Icon className=" text-xl" />
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-gold text-[10px] font-medium tracking-[0.14em] uppercase">
                      {item.label}
                    </span>
                    <span className="w-px h-3 bg-black/10" />
                    <span className="text-gray text-[10px] tracking-wide">
                      0{item.id}
                    </span>
                  </div>
                  <h3 className="text-black font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 pt-6 border-t border-black/8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-light text-gray">
            <span className="font-medium text-black">VisioCorp</span> — Todos os
            direitos reservados
          </p>
          <div className="flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-medium text-black tracking-wide">
              Em conformidade com a LGPD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
