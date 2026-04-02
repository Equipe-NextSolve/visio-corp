import Image from "next/image";

export default function InitialPolicie() {
  return (
    <section className="relative w-full min-h-screen bg-black/80 flex items-center justify-center px-8 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_50%,rgba(224,171,26,0.11)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(224,171,26,0.07)_0%,transparent_65%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-linear-to-b from-transparent to-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-linear-to-t from-transparent to-gold/40" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-wrap-reverse items-center justify-center gap-16">
        <div className="flex flex-col gap-7 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-5 h-px bg-gold" />
            <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
              Privacidade &amp; Suporte
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Política de{" "}
            <span className="italic text-gold relative inline-block">
              Privacidade
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-gold/60 to-transparent" />
            </span>{" "}
            &amp; Suporte
          </h1>

          <div className="w-full h-px bg-linear-to-r from-gold/40 to-transparent" />

          <p className="text-white/60 text-base font-light leading-relaxed">
            Este informativo tem como objetivo assegurar nossos clientes e
            colaboradores quanto à segurança dos dados e das informações
            coletadas no site da VisioCorp.
          </p>

          <div className="flex items-center gap-4 pt-1">
            <button type="button" className="bg-gold hover:bg-gold/90 text-black text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(224,171,26,0.30)]">
              Saiba mais
            </button>
            <button type="button" className="text-gray/50 hover:text-white text-sm font-light flex items-center gap-2 transition-colors duration-200">
              Fale conosco
              <span className="text-gold">→</span>
            </button>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(224,171,26,0.15)_0%,transparent_70%)] rounded-3xl" />

          <div className="absolute -top-2 -right-2 w-20 h-20 border-t border-r border-gold/40 rounded-tr-2xl" />
          <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b border-l border-gold/40 rounded-bl-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-black/10 z-10" />
            <Image
              width={500}
              height={380}
              alt="policie-image"
              src="/img2.png"
              className="object-cover w-115 h-90"
            />
          </div>

          <div className="absolute -bottom-4 -left-6 z-20 bg-black border border-gold/40 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white text-xs font-light">
              Dados{" "}
              <span className="text-gold font-medium">protegidos</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
