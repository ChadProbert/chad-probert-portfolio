"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { X, Menu } from "lucide-react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import "./Navbar.css";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-x-clip transition-transform duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-background/50" : "bg-background"
      }`}
    >
      <div className="container mx-auto">
        <nav
          className={`flex items-center justify-between lg:px-8 transition-all duration-300 ${
            isScrolled ? "py-6" : "py-12"
          }`}
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Menu
                aria-hidden="true"
                className="size-6"
                color="var(--foreground)"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-40">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-semibold hover:cursor-pointer tracking-wider"
              >
                <span className="sr-only">{item.name}</span>
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggleButton />
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1.5"
            >
              <span className="sr-only">Close menu</span>
              <X
                aria-hidden="true"
                className="size-6"
                color="black"
                strokeWidth={3}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Center it vertically */}
              <div className="space-y-2 py-10 text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block px-3 py-2 font-semibold text-3xl"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
