import Image from "next/image";
import Link from "next/link";

export default function CompanieHeader() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(224,171,26,0.13)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(224,171,26,0.08)_0%,transparent_65%)]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,242,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(242,242,242,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px via-gold" />
            <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
              Portal Corporativo
            </span>
          </div>

          <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            Empresas{" "}
            <span className="text-gold relative inline-block">
              VisioCorp
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-gold/70 to-transparent" />
            </span>
          </h1>

          <p className="text-white/60 text-base font-light leading-relaxed max-w-md">
            Esta página é dedicada a apresentar de forma clara as diretrizes e
            práticas adotadas pela VisioCorp no atendimento às empresas
            parceiras.
          </p>

          <div className="flex items-center gap-6 pt-2">
            {[
              { value: "100%", label: "Conformidade LGPD" },
              { value: "24h", label: "Suporte dedicado" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-gold text-xl font-bold">
                  {stat.value}
                </span>
                <span className="text-white/40 text-[11px] tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1">
            <Link
              type="button"
              href="/about"
              className="bg-gold hover:bg-gold/90 text-black text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(224,171,26,0.35)]"
            >
              Saiba mais
            </Link>
            <Link
              type="button"
              href='/contact'
              className="text-white/60 hover:text-white text-sm font-light flex items-center gap-2 transition-colors duration-200"
            >
              Entre em contato
              <span className="text-gold">→</span>
            </Link>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(224,171,26,0.18)_0%,transparent_70%)] rounded-3xl" />

          <div className="absolute -top-2 -right-2 w-24 h-24 border-t border-r border-gold/40 rounded-tr-2xl" />
          <div className="absolute -bottom-2 -left-2 w-24 h-24 border-b border-l border-gold/40 rounded-bl-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-black/10 z-10" />
            <Image
              width={500}
              height={380}
              alt="Image-Companie"
              src="/img8.png"
              className="object-cover w-115 h-95"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-6 z-20 bg-black border border-gold/30 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white text-xs font-light">
              Atendimento <span className="text-gold font-medium">ativo</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
