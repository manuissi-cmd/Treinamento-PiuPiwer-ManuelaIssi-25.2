"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  children: ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen flex bg-[#ffeef9]">
      <aside
        className={`border-r transition-all bg-[#fff5fb] flex flex-col ${
          open ? "w-60" : "w-14"
        } p-3`}
      >
        {/* botão recolher */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="border rounded px-2 py-1 w-full text-sm"
        >
          {open ? "← recolher" : "→ abrir"}
        </button>

        {/* navegação */}
        <nav
          className={`${open ? "block" : "hidden"} mt-4 space-y-2 text-sm`}
        >
          <Link
            href="/home"
            className={`block ${isActive("/home") ? "font-semibold" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/perfil"
            className={`block ${isActive("/perfil") ? "font-semibold" : ""}`}
          >
            Perfil
          </Link>

          {/* depois você troca esse href pelo seu fluxo de logout */}
          <Link href="/logout" className="block text-red-600">
            Sair
          </Link>
        </nav>

        {/* bolinha com N no canto inferior esquerdo */}
        <div className="mt-auto">
          <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white text-lg font-semibold">
            N
          </div>
        </div>
      </aside>

      {/* área de conteúdo */}
      <main className="flex-1 flex items-center justify-center px-6">
        {children}
      </main>
    </div>
  );
}
