import { useState, type FormEvent } from "react";

export type ContactFormErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates the enquiry form and simulates an async submission. */
export function useContactForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: ContactFormErrors = {};
    if (name.length < 2) nextErrors.name = "Please tell us your name.";
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 10) nextErrors.message = "A little more detail helps us reply well.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSent(true);
      form.reset();
    } finally {
      setSubmitting(false);
    }
  }

  return { errors, submitting, sent, handleSubmit };
}
