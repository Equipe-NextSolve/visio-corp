"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Solution() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const items = [
    {
      id: 1,
      number: "01",
      title: "Deslocamento",
      description:
        "Seus colaboradores precisam sair da empresa para realizar exames, muitas vezes enfrentando longas distâncias, o que gera desgaste e reduz o tempo disponível para o trabalho.",
    },
    {
      id: 2,
      number: "02",
      title: "Tempo perdido",
      description:
        "O tempo gasto em deslocamento e espera impacta diretamente na produtividade da equipe e nos resultados da empresa.",
    },
    {
      id: 3,
      number: "03",
      title: "Baixa adesão",
      description:
        "A dificuldade de acesso a exames faz com que muitos colaboradores deixem de cuidar da saúde visual.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E0AB1A08 1px, transparent 1px), linear-gradient(90deg, #E0AB1A08 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div
        className="absolute bottom-0 left-0 w-56 h-56 bg-black[0.03] pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-7" data-aos="fade-right">
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-gold" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold font-[Poppins]">
              O Problema
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug font-[Poppins] tracking-tight">
            Levamos saúde visual de qualidade{" "}
            <span className="relative inline-block">
              para sua empresa
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/60" />
            </span>
          </h2>

          <p className="text-base text-black/50 leading-relaxed border-l-2 border-gold/40 pl-4">
            Quantas horas de trabalho sua empresa perde com exames de vista
            externos?
          </p>

          <div className="flex flex-col gap-0 mt-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group flex gap-5 py-5 border-b border-black/8 last:border-b-0 transition-all duration-200 sm:hover:pl-1"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-black flex items-center justify-center mt-0.5 sm:group-hover:bg-gold transition-colors duration-300">
                  <span className="text-xs font-bold text-white sm:group-hover:text-black font-[Poppins] transition-colors duration-300">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-black text-sm tracking-wide font-[Poppins]">
                    {item.title}
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-1">
            <div className="w-8 h-px bg-gold" />
            <div className="w-1 h-1 rounded-full bg-gold/50" />
          </div>
        </div>

        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-gold/8 pointer-events-none z-0" />
            <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl border border-black/8 pointer-events-none z-0" />

            <div className="relative z-10 rounded-3xl overflow-hidden bg-black[0.03] shadow-xl shadow-black/10 ring-1 ring-black/6">
              <Image
                src="/img4.png"
                height={500}
                width={400}
                alt="Saúde visual empresarial"
                className="object-contain"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="absolute -bottom-5 -left-5 z-20 bg-black text-white rounded-xl px-4 py-3 shadow-lg shadow-black/20 flex flex-col"
            >
              <span className="text-gold font-bold text-lg font-[Poppins] leading-none">
                100%
              </span>
              <span className="text-white/60 text-[10px] tracking-widest uppercase mt-0.5">
                In-company
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}