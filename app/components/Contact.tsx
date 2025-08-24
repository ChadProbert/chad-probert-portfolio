'use client';

import React, { useState } from 'react';
import { Send, Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <section id="contact" className="mb-50">
      <div className="mx-auto max-w-4xl lg:max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-center mb-6">Get in Touch</h2>
        <p className="text-center text-lg sm:text-3xl mb-10">
          Let&apos;s build impactful digital experiences.
        </p>

        <div className="mt-10 rounded-2xl border p-6 shadow-sm sm:p-16 border-neutral-300">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-md font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-md font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-md font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-y rounded-md border px-3 py-2 outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-foreground/100 border-neutral-300 bg-[var(--input-background)]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border px-3 py-2.5 text-md transition hover:bg-foreground/5 border-neutral-300"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
              <a
                href="mailto:"
                className="inline-flex items-center rounded-md border px-3 py-2.5 text-md transition hover:bg-foreground/5 border-neutral-300"
              >
                <Mail className="mr-2 h-5 w-5" /> Email
              </a>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-foreground pl-5 pr-6 py-2.5 text-md font-semibold text-background transition hover:opacity-90 border-neutral-300"
              >
                <Send className="mr-1.5 h-5 w-5" /> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );

};