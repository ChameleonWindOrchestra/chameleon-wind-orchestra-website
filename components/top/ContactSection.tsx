"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", message: "" };

const FIELD_LABEL_CLASS =
  "font-eng text-[11px] uppercase tracking-[0.18em] text-ink-mute";

const FIELD_INPUT_CLASS =
  "w-full border border-line bg-bg-card px-5 py-4 text-[14px] text-ink leading-[1.6] outline-none transition-colors focus:border-accent placeholder:text-ink-mute";

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("[Contact] submit", form);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-line px-8 py-24 md:px-20 md:py-[140px]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.2fr] md:gap-24">
        <div>
          <SectionHeading num="— 05" en="Contact" jp="お問い合わせ" />
          <p className="mt-2 text-[14px] leading-[2.1] text-ink-3 md:text-[15px]">
            演奏のご依頼やご相談など、お気軽にお問合せください。
          </p>
        </div>

        <div>
          {submitted ? (
            <ThankYouMessage
              onReset={() => {
                setForm(INITIAL);
                setSubmitted(false);
              }}
            />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
              <label className="flex flex-col gap-3">
                <span className={FIELD_LABEL_CLASS}>
                  Name <span className="text-accent">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="お名前"
                  className={FIELD_INPUT_CLASS}
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className={FIELD_LABEL_CLASS}>
                  Email <span className="text-accent">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  className={FIELD_INPUT_CLASS}
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className={FIELD_LABEL_CLASS}>
                  Message <span className="text-accent">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
                  className={`${FIELD_INPUT_CLASS} resize-y`}
                />
              </label>

              <div className="mt-2 flex items-center gap-4">
                <Button variant="primary" size="lg" icon type="submit">
                  送信する
                </Button>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                  * 必須項目
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ThankYouMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="border border-line bg-bg-card px-8 py-12 md:px-12 md:py-16">
      <div className="font-eng mb-4 text-[12px] uppercase tracking-[0.22em] text-accent">
        Thank you
      </div>
      <p className="font-serif m-0 text-[20px] leading-[1.7] text-ink md:text-[22px]">
        お問い合わせを受け付けました
      </p>
      <button
        type="button"
        onClick={onReset}
        className="font-eng mt-8 inline-flex items-baseline gap-2 border-b border-ink py-1 text-[13px] text-ink tracking-[0.06em] transition-colors hover:text-accent hover:border-accent"
      >
        別のお問い合わせを送る
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
