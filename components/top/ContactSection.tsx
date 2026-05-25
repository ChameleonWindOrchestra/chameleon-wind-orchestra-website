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
  "w-full border border-line bg-bg-card px-5 py-4 text-[14px] text-ink leading-[1.6] outline-none transition-colors focus:border-accent placeholder:text-ink-mute disabled:cursor-not-allowed disabled:opacity-60";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage(
        "送信先の設定が完了していません。サイト管理者へお問い合わせください。",
      );
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[CWO サイト] ${form.name} 様からのお問い合わせ`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !data?.success) {
        throw new Error(data?.message ?? "送信に失敗しました");
      }

      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              noValidate={false}
              aria-busy={submitting}
            >
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                  disabled={submitting}
                  className={`${FIELD_INPUT_CLASS} resize-y`}
                />
              </label>

              {errorMessage && (
                <p
                  role="alert"
                  className="m-0 border border-accent bg-bg-card px-4 py-3 text-[13px] leading-[1.6] text-accent"
                >
                  {errorMessage}
                </p>
              )}

              <div className="mt-2 flex items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "送信中..." : "送信する"}
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
