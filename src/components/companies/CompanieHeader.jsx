import Image from "next/image";
import Link from "next/link";

export default function CompanieHeader() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 sm:px-8 pt-24">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(224,171,26,0.13)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(224,171,26,0.08)_0%,transparent_65%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,242,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(242,242,242,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="w-6 h-px bg-yellow-500" />
            <span className="text-yellow-500 text-[11px] font-medium tracking-[0.18em] uppercase">
              Portal Corporativo
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            Empresas{" "}
            <span className="text-yellow-500 relative inline-block">
              VisioCorp
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-yellow-500/70 to-transparent" />
            </span>
          </h1>

          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Esta página é dedicada a apresentar de forma clara as diretrizes e
            práticas adotadas pela VisioCorp no atendimento às empresas
            parceiras.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
            {[
              { value: "100%", label: "Conformidade LGPD" },
              { value: "24h", label: "Suporte dedicado" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-yellow-500 text-lg sm:text-xl font-bold">
                  {stat.value}
                </span>
                <span className="text-white/40 text-[11px] tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/about"
              className="bg-yellow-500 hover:bg-yellow-500/90 text-black text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(224,171,26,0.35)]"
            >
              Saiba mais
            </Link>

            <Link
              href="/contact"
              className="text-white/60 hover:text-white text-sm font-light flex items-center gap-2 transition-colors duration-200"
            >
              Entre em contato
              <span className="text-yellow-500">→</span>
            </Link>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative shrink-0 order-1 lg:order-2 flex justify-center">
          <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(224,171,26,0.18)_0%,transparent_70%)] rounded-3xl" />

          <div className="absolute -top-2 -right-2 w-20 sm:w-24 h-20 sm:h-24 border-t border-r border-yellow-500/40 rounded-tr-2xl" />
          <div className="absolute -bottom-2 -left-2 w-20 sm:w-24 h-20 sm:h-24 border-b border-l border-yellow-500/40 rounded-bl-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-black/10 z-10" />

            <Image
              width={500}
              height={380}
              alt="Image-Companie"
              src="/img8.png"
              className="object-cover w-full max-w-105 sm:max-w-125 h-auto"
            />
          </div>

          <div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 bg-black border border-yellow-500/30 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-white text-xs font-light">
              Atendimento{" "}
              <span className="text-yellow-500 font-medium">ativo</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
