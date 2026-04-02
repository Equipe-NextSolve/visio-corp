"use client";
import Image from "next/image";
import FormContact from "./FormContact";
import { motion } from "framer-motion";
import Questions from "./Questions";
import Message from "@/utils/Message";
import Loanding from "@/utils/Loanding";

export default function ContactMain() {
  return (
    <Loanding>
      <main className="mt-20 bg-[#F0F2F5]">
        <section className="relative w-full flex items-center justify-center min-h-[90vh] overflow-hidden bg-gray py-16 px-6 md:px-16">
          {/* Background fundo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 border border-white/10" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-white/5 border border-white/10" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="absolute top-8 right-8 w-px h-48 bg-linear-to-b from-transparent via-gold to-transparent rotate-12" />
              <div className="absolute top-8 right-16 w-px h-48 bg-linear-to-b from-transparent via-gold to-transparent rotate-12" />
              <div className="absolute top-8 right-24 w-px h-48 bg-linear-to-b from-transparent via-gold to-transparent rotate-12" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gold/10 blur-3xl rounded-full" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* CONTAINER PRINCIPAL */}
          <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
            <motion.div
              className="flex flex-col gap-6 w-full md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 w-fit">
                <span className="block w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold/80 text-xs font-semibold uppercase tracking-[0.2em]">
                  Fale conosco
                </span>
              </div>

              <h2 className="text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                Não perca tempo! <br />
                <span className="text-gold">Entre em contato</span>
                <br />
                agora mesmo
                <br />
                com nossa equipe
              </h2>

              <div className="flex items-center gap-3">
                <span className="block h-0.5 w-16 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                <span className="block h-0.5 w-4 rounded-full bg-gold/30" />
                <span className="block h-0.5 w-2 rounded-full bg-gold/15" />
              </div>

              <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                Nossa equipe está pronta para responder todas as suas dúvidas
                com agilidade e profissionalismo.
              </p>

              <div className="flex items-center gap-8 pt-2">
                <div className="flex flex-col">
                  <span className="text-gold font-bold text-xl">+500</span>
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    Clientes
                  </span>
                </div>

                <div className="w-px h-10 bg-white/10" />

                <div className="flex flex-col">
                  <span className="text-gold font-bold text-xl">24h</span>
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    Resposta
                  </span>
                </div>

                <div className="w-px h-10 bg-white/10" />

                <div className="flex flex-col">
                  <span className="text-gold font-bold text-xl">100%</span>
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    Satisfação
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative w-full md:w-1/2 max-w-sm md:max-w-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-gold/40 via-transparent to-gold/10 blur-sm" />

              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-lg z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-lg z-20" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent z-10 rounded-2xl" />

                <Image
                  src="/img7.png"
                  alt="Nossa equipe pronta para atender você"
                  width={660}
                  height={460}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <motion.div
                className="absolute -bottom-5 -left-5 z-20 bg-gray/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-white text-xs font-semibold">
                    Atendimento ativo
                  </span>
                  <span className="text-white/40 text-[10px]">
                    Resposta em instantes
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <FormContact />
        <Questions />
        <Message />
      </main>
    </Loanding>
  );
}