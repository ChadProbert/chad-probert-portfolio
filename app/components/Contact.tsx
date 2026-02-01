"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/components/ui/border-beam";

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Chad Probert",
  mainEntity: {
    "@type": "Person",
    name: "Chad Probert",
    email: "mailto:chadcprobert@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/chad-probert-6421b321b/",
      "https://github.com/ChadProbert",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Natmed Medical Defence",
    },
  },
};

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Sends a direct message to my email using EmailJS
  // Validates form fields and email format
  // validates length of name and message fields (max 100 characters)
  // Returns a success or error message to the user
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")!.toString();
    const email = formData.get("email")!.toString();
    const message = formData.get("message")!.toString();


    // Ensure the name, email and message fields are not empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill out all the form fields.");
      setLoading(false);
      return;
    }

    // Ensure the name and message fields do not exceed 100 characters
    if (name.length > 100 || email.length > 100 || message.length > 100) {
      setStatus("Please ensure the name, email and message fields do not exceed 100 characters.");
      setLoading(false);
      return;
    }

    // This regex pattern ensures the email has:
    // - a single @ symbol
    // - at least 1 character before and after @
    // - at least 1 . in the domain part
    // - no whitespace allowed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          setLoading(false);
          form.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-3xl lg:max-w-4xl px-4 sm:px-6">
        <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-5xl text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-base text-muted-foreground sm:text-2xl mb-6">
          Let&apos;s build impactful digital experiences.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-16">
          <BorderBeam
            borderWidth={2}
            size={200}
            colorFrom="#fb923c"
            colorTo="#fb923c"
            duration={8}
            initialOffset={0}
          />
          <BorderBeam
            borderWidth={2}
            size={200}
            colorFrom="#fb923c"
            colorTo="#fb923c"
            duration={8}
            initialOffset={150}
          />
          <form onSubmit={sendEmail} className="space-y-5">
            {status && (
              <div
                className={`justify-center flex p-3 rounded-sm text-lg border-2 ${
                  status === "Message sent successfully! 🎉"
                    ? "bg-green-100 border-green-600 text-green-600"
                    : "bg-red-200 border-red-600 text-red-600"
                } transition-all`}
              >
                {status}
              </div>
            )}

            <div>
              <label htmlFor="name" className="mb-1 block text-md font-medium">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                className="w-full rounded border-2 px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-black dark:focus:ring-white/60 bg-zinc-100 dark:bg-[#3a3a3a]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-md font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded border-2 px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-black dark:focus:ring-white/60 bg-zinc-100 dark:bg-[#3a3a3a]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-md font-medium"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                autoComplete="off"
                className="w-full resize-y rounded border-2 px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-black dark:focus:ring-white/60 bg-zinc-100 dark:bg-[#3a3a3a]"
              />
            </div>

            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex items-center justify-end gap-2 flex-wrap max-[500px]:justify-center max-[405px]:gap-2">
                <a
                  href="https://www.linkedin.com/in/chad-probert-6421b321b/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Connect with Chad on LinkedIn"
                  className="inline-flex items-center rounded-md border pl-4 pr-5 py-1.5 text-md transition-colors duration-400 hover:bg-black/5 dark:hover:bg-white/5 max-[405px]:pl-4 max-[405px]:pr-5 max-[405px]:py-2 max-[405px]:text-sm"
                >
                  <ArrowUpRight className="mr-2 h-5 w-5 text-[var(--foreground)] max-[405px]:mr-2 max-[405px]:h-4 max-[405px]:w-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:chadcprobert@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send an email to Chad"
                  className="inline-flex items-center rounded-md border pl-4 pr-5 py-1.5 text-md transition-colors duration-400 hover:bg-black/5 dark:hover:bg-white/5 max-[405px]:pl-4 max-[405px]:pr-5 max-[405px]:py-2 max-[405px]:text-sm"
                >
                  <ArrowUpRight className="mr-2 h-5 w-5 text-[var(--foreground)] max-[405px]:mr-2 max-[405px]:h-4 max-[405px]:w-4" />
                  Email
                </a>
                <button
                  type="submit"
                  className="call-to-action send-cta cursor-pointer inline-flex items-center gap-0 rounded-md bg-orange-400 pl-4 pr-5 py-1.5 text-md font-medium text-white transition-all duration-400 hover:brightness-110 max-[405px]:pl-4 max-[405px]:pr-5 max-[405px]:py-2 max-[405px]:text-sm"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(CONTACT_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
};
