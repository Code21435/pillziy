"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
        <div className="site-container h-20 flex items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <div className="relative flex-shrink-0">
                <Image
                  src="/logo/Logo.PNG"
                  alt="ILLziy"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm font-bold text-[#1E293B] -ml-1.5 leading-none pt-6">
                ILLziy
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${pathname === link.href
                      ? "text-[#EF4444] font-semibold"
                      : "text-slate-600 hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact-us">
                <Button className={`font-bold rounded-full px-6 lg:px-8 transition-colors ${pathname === "/contact-us"
                    ? "bg-[#DC2626] hover:bg-[#B91C1C]"
                    : "bg-[#EF4444] hover:bg-[#DC2626]"
                  } text-white`}>
                  Contact Us
                </Button>
              </Link>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-black/20 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b shadow-lg z-40"
            >
              <div className="site-container py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-base font-medium transition-colors ${pathname === link.href
                          ? "text-[#EF4444] font-semibold"
                          : "text-slate-600 hover:text-primary"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full font-bold rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white">
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </header>

      <main className="flex-1 overflow-x-hidden pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

    </div>
  );
}