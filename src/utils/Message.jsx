"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function Message() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const contacts = [
    {
      name: "Marlon Ferrari",
      phone: "5585986990288",
      label: "85 98699-0288",
    },
    {
      name: "Marcos David",
      phone: "5585996502168",
      label: "85 99650-2168",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={boxRef}>
      {open && (
        <div className="mb-4 w-72 rounded-2xl bg-gray-800 text-white shadow-2xl p-5 border border-gray-400/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Contato para Orçamentos</h3>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <IoClose size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <Link
                key={contact.phone}
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                className="bg-black hover:bg-green-500 transition p-3 rounded-lg flex flex-col"
              >
                <span className="font-medium">{contact.name}</span>

                <span className="text-sm text-gray-400">{contact.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:scale-110 transition text-white p-4 rounded-full shadow-lg"
      >
        <BiSolidMessageRounded size={26} />
      </button>
    </div>
  );
}
