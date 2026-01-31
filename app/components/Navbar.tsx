"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 z-50 w-full overflow-x-clip transition-transform duration-300">
      <div className="w-full">
        <nav className="flex items-center justify-between">
          <div className="flex flex-1 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border-1 border-neutral-200 bg-background p-3 hover:bg-foreground/5 transition-colors duration-400 hover:cursor-pointer focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu
                aria-hidden="true"
                className="size-5"
                color="var(--foreground)"
              />
            </button>
          </div>
          <div className="flex flex-1 justify-end lg:hidden">
            <ThemeToggleButton />
          </div>
          <div className="hidden lg:flex lg:w-full lg:justify-center">
            <div className="relative inline-flex w-full items-center border-b border-border/60 bg-background/75 py-7 shadow-sm backdrop-blur">
              <div className="flex w-full items-center justify-center gap-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-normal tracking-wide text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
                <div className="flex items-center px-6 py-1">
                  <ThemeToggleButton />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-colors dark:bg-black/40"
        />
        <DialogPanel className="fixed inset-y-0 right-0 z-60 w-full overflow-y-auto bg-background p-4 text-foreground shadow-lg transition-colors sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-xl border-1 border-neutral-200 bg-background p-3 hover:bg-foreground/5 transition-colors duration-400 hover:cursor-pointer focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <X
                aria-hidden="true"
                className="size-5"
                color="var(--foreground)"
                strokeWidth={3}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border/60">
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
