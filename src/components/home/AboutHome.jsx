import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutHome() {
  return (
    <section className="relative w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden bg-gray">
      {/* Estilização do fundo */}
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-black/30 pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-black/25 pointer-events-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gold/40" />
      </div>

      <div className="relative z-10 flex items-center gap-2 mb-6">
        <div className="w-6 h-px bg-gold" />
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold font-[Poppins]">
          Nossa Empresa
        </span>
        <div className="w-6 h-px bg-gold" />
      </div>

      <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-16 text-white font-[Poppins] tracking-tight">
        Sobre a{" "}
        <span className="relative inline-block">
          <span className="text-gold">VisioCorp</span>
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gold/50" />
        </span>
      </h2>

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-white">
            Apresentamos a VisioCorp, uma empresa dedicada a cuidar da saúde
            visual como forma de valorizar as pessoas dentro das organizações.
          </p>
          <p className="text-xl leading-relaxed text-white">
            Somos uma ótica corporativa especializada em ações de saúde visual
            no ambiente de trabalho, levando praticidade, prevenção e bem-estar
            para empresas e colaboradores.
          </p>
          <p className="text-xl leading-relaxed text-white">
            Já impactamos positivamente diversos setores, sempre com
            compromisso, responsabilidade e excelência no atendimento. Mais do
            que vender óculos, promovemos qualidade de vida no ambiente
            corporativo.
          </p>

          <div className="flex items-center gap-3 my-1">
            <div className="w-8 h-px bg-gold" />
            <div className="w-1 h-1 rounded-full bg-gold/60" />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-gold/30 hover:shadow-lg bg-gold text-black tracking-wide font-[Poppins] text-sm"
            >
              Saiba mais <FaArrowRightLong />
            </Link>

            <Link
              href="#"
              className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200 tracking-wide underline underline-offset-4"
            >
              Fale conosco
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div className="relative w-full">
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border border-gold/25 pointer-events-none z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden w-full shadow-2xl shadow-black/70 ring-1 ring-white/10">
              <Image
                src="/img1.png"
                alt="VisioCorp ambiente"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
