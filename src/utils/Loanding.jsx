"use client";
import { useEffect, useState } from "react";
import { IoGlassesOutline } from "react-icons/io5"; // Ícone elegante de óculos

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsExpanding(true);
        setTimeout(() => setLoading(false), 800);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return children;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-[9999] transition-all duration-700 ${isExpanding ? "opacity-0 scale-110" : "opacity-100"
        }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gold/10 rounded-full blur-sm" />
      </div>

      <div className="relative flex flex-col items-center gap-10">
        <div
          className={`relative transition-all duration-1000 ease-in-out ${isExpanding ? "scale-[5] blur-2xl opacity-0" : "scale-100 blur-0"
            }`}
        >
          <div className="relative z-10">
            <IoGlassesOutline className="text-gold text-7xl md:text-8xl drop-shadow-[0_0_20px_rgba(217,153,35,0.3)] animate-float" />
          </div>

          <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-500 ${isExpanding ? "opacity-0 translate-y-4" : "opacity-100"
            }`}
        >
          <div className="flex flex-col items-center">
            <p className="text-white font-semibold text-[10px] tracking-[0.5em] uppercase opacity-80">
              Ajustando o seu foco
            </p>
            <span className="text-gold/50 text-[9px] mt-1 tracking-widest uppercase">VisioCorp Premium</span>
          </div>

          <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold origin-left animate-loading-bar" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .animate-loading-bar {
          animation: loading-bar 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
}