"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bookingOptions, resolveBookingOptionId, sessions, studio } from "@/lib/studio";

type Status = "idle" | "submitting" | "success" | "error";
type Intent = "booking" | "inquiry";

type FormState = {
  name: string;
  email: string;
  intent: Intent;
  sessionId: string;
  time1: string;
  time2: string;
  time3: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("session") ?? "";
  const knownPreset = resolveBookingOptionId(preset);
  const isKnownSession =
    Boolean(knownPreset) || sessions.some((session) => session.id === preset);
  const intentPreset: Intent =
    searchParams.get("intent") === "inquiry"
      ? "inquiry"
      : isKnownSession || searchParams.get("intent") === "booking"
        ? "booking"
        : "inquiry";

  const empty: FormState = {
    name: "",
    email: "",
    intent: intentPreset,
    sessionId: knownPreset,
    time1: "",
    time2: "",
    time3: "",
    message: "",
  };

  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    setForm((current) => ({
      ...current,
      intent: intentPreset,
      sessionId: knownPreset || current.sessionId,
    }));
  }, [intentPreset, knownPreset]);

  const sessionId = form.sessionId || knownPreset;
  const isBooking = form.intent === "booking";

  const selectedOption = useMemo(
    () => bookingOptions.find((option) => option.id === sessionId) ?? null,
    [sessionId],
  );

  const selected = useMemo(
    () =>
      selectedOption
        ? (sessions.find((session) => session.id === selectedOption.sessionId) ??
          null)
        : null,
    [selectedOption],
  );

  const sessionItems = useMemo(
    () =>
      bookingOptions.map((option) => ({
        value: option.id,
        label: option.label,
      })),
    [],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  function setIntent(intent: Intent) {
    setForm((current) => ({ ...current, intent }));
    setFieldErrors({});
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please add your name.";
    if (!isEmail(form.email)) nextErrors.email = "A valid email is needed.";
    if (isBooking) {
      if (!selectedOption) nextErrors.sessionId = "Please choose a session.";
      if (!form.time1.trim()) nextErrors.time1 = "Add a first choice.";
    } else if (form.message.trim().length < 2) {
      nextErrors.message = "A line or two is enough.";
    }

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sessionId }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Could not send the message.");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-card px-6 py-10 ring-1 ring-foreground/10 sm:px-8">
        <h3 className="font-heading text-3xl leading-tight">
          Thank you, I will get back to you shortly!
        </h3>
        <Button
          className="mt-8 h-10 px-4"
          variant="outline"
          onClick={() => {
            setForm(empty);
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" error={fieldErrors.name}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="h-10"
            aria-invalid={Boolean(fieldErrors.name)}
          />
        </Field>
        <Field id="contact-email" label="Email" error={fieldErrors.email}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="h-10"
            aria-invalid={Boolean(fieldErrors.email)}
          />
        </Field>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">I am writing to</legend>
        <div className="flex flex-wrap gap-5">
          {(
            [
              ["booking", "Booking"],
              ["inquiry", "Inquiry"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="inline-flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name="intent"
                value={value}
                checked={form.intent === value}
                onChange={() => setIntent(value)}
                className="size-4 accent-primary"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {isBooking ? (
        <Field
          id="contact-session"
          label="Session"
          error={fieldErrors.sessionId}
        >
          <Select
            value={sessionId || null}
            onValueChange={(value) => update("sessionId", value ?? "")}
            items={sessionItems}
          >
            <SelectTrigger
              id="contact-session"
              className="h-10 w-full min-w-0"
              aria-invalid={Boolean(fieldErrors.sessionId)}
            >
              <SelectValue placeholder="Choose a session" />
            </SelectTrigger>
            <SelectContent>
              {bookingOptions.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selected ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {selected.summary}
            </p>
          ) : null}
        </Field>
      ) : null}

      {isBooking ? (
        <div className="space-y-3">
          <p className="text-sm font-medium">
            Which day and hour works best for you?
          </p>
          <p className="text-sm text-muted-foreground">
            Give three options, in case the first one is taken.
          </p>
          <div className="grid gap-3">
            {(
              [
                ["time1", "Option 1", fieldErrors.time1, "Thursday 3pm"],
                ["time2", "Option 2", fieldErrors.time2, "Friday morning"],
                ["time3", "Option 3", fieldErrors.time3, "Next week, after 4pm"],
              ] as const
            ).map(([key, label, error, placeholder]) => (
              <Field key={key} id={`contact-${key}`} label={label} error={error}>
                <Input
                  id={`contact-${key}`}
                  name={key}
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                  placeholder={placeholder}
                  className="h-10"
                  aria-invalid={Boolean(error)}
                />
              </Field>
            ))}
          </div>
        </div>
      ) : (
        <Field id="contact-message" label="Message" error={fieldErrors.message}>
          <Textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="What brings you here? A question about a session, a print, or anything else."
            className="min-h-32"
            aria-invalid={Boolean(fieldErrors.message)}
          />
        </Field>
      )}

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          The message could not be sent. Write directly to{" "}
          <a className="underline" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 px-5"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          You will receive a reply by email. Nothing is shared with anyone else.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
