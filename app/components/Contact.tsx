"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Linkedin } from "lucide-react";

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
          setStatus("Message sent successfully! 🚀");
          setLoading(false);
          form.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mb-24">
      <div className="mx-auto max-w-4xl lg:max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-lg sm:text-3xl mb-6">
          Let&apos;s build impactful digital experiences.
        </p>

        {status && (
          <div
            className={`justify-center flex mt-2 p-3 rounded-md mb-10 text-xl ${
              status === "Message sent successfully! 🚀"
                ? "bg-green-150 text-green-500"
                : "bg-red-150 text-red-500"
            } transition-all`}
          >
            {status}
          </div>
        )}

        <div className="mt-10 rounded-2xl border p-6 sm:p-16 border-neutral-300">
          <form onSubmit={sendEmail} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-md font-medium">
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-md font-medium">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-md font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What you got on your mind?"
                className="w-full resize-y rounded border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex items-center justify-end gap-3">
                <a
                  href="https://www.linkedin.com/in/chad-probert-6421b321b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border px-3 py-2.5 text-md transition hover:bg-foreground/5 border-neutral-300"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
                <a
                  href="mailto:chadcprobert@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border px-3 py-2.5 text-md transition hover:bg-foreground/5 border-neutral-300"
                >
                  <Mail className="mr-2 h-5 w-5" /> Email
                </a>
                <button
                  type="submit"
                  className="cursor-pointer inline-flex items-center rounded-md bg-foreground px-3 py-2.5 text-md font-semibold text-background transition hover:opacity-90 border-neutral-300"
                >
                  <Send className="mr-2 h-5 w-5" />{" "}
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
