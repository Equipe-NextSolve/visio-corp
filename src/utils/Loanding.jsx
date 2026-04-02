"use client";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loanding({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-md z-9999">
        <div className="flex flex-col items-center gap-4">
          <AiOutlineLoading3Quarters className="text-gold text-5xl animate-spin" />
          <p className="text-black text-sm tracking-widest uppercase">
            Carregando
          </p>
        </div>
      </div>
    );
  }

  return children;
}
