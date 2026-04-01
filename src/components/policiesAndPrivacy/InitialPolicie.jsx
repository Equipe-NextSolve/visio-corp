import Image from "next/image";

export default function InitialPolicie() {
  return (
    <section className="w-full min-h-screen bg-gray px-10 py-20 flex flex-wrap-reverse items-center justify-center gap-10">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gold/40" />
      </div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-black/45 pointer-events-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="w-150 flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md border-b border-gold pb-2 italic">
          Politica de Privacidade e Suporte
        </h1>
        <p className="font-semibold text-white/80 z-50  ">
          Este informativo tem como objetivo assegurar nossos clientes e
          colaboradores quanto à segurança dos dados e das informações coletadas
          no site da VisioCorp.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image width={500} height={300} alt="policie-image" src="/img2.png" />
      </div>
    </section>
  );
}
