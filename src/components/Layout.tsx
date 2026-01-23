"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b shadow-sm transition-colors ${(isMenuOpen || isAnimating) ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
        }`}>
        <div className="site-container h-20 flex items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="flex items-center group gap-0.5">
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
              <span className="text-lg font-bold text-[#1E293B] leading-none mt-1">
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
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 bg-black/80 z-[60]"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onAnimationComplete={(definition) => {
                  if (definition === "exit") {
                    setIsAnimating(false);
                  }
                }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-full bg-white shadow-2xl z-[70] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                  <Link href="/" className="flex items-center gap-0.5" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/logo/Logo.PNG"
                        alt="ILLziy"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold text-[#1E293B] leading-none mt-1">
                      ILLziy
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-500" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-6 space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${pathname === link.href
                        ? "text-[#EF4444] font-semibold"
                        : "text-slate-600 hover:text-[#EF4444]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Contact Button */}
                <div className="p-6 pt-0">
                  <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                    <Button className={`w-full font-bold rounded-full px-6 lg:px-8 transition-colors ${pathname === "/contact-us"
                      ? "bg-[#DC2626] hover:bg-[#B91C1C]"
                      : "bg-[#EF4444] hover:bg-[#DC2626]"
                      } text-white`}>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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