import { forwardRef, useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { AlertCircle, Check } from "lucide-react";
import { motion } from "motion/react";
import { transitionLux } from "@/lib/motion";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full min-h-12 rounded-[12px] border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-500 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/50 disabled:opacity-55";

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
}: {
  id: string;
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label ? (
        <label htmlFor={id} className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
          {label}
          {required ? <span className="text-accent"> *</span> : null}
        </label>
      ) : null}
      {children}
      {hint && !error ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? <FormMessage tone="error">{error}</FormMessage> : null}
    </div>
  );
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, className, wrapperClassName, id, ...rest },
  ref,
) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Field
      id={fieldId}
      label={label}
      hint={hint}
      error={error}
      required={rest.required}
      className={wrapperClassName}
    >
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, error && "border-destructive focus:ring-destructive/40", className)}
        {...rest}
      />
    </Field>
  );
});

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, className, wrapperClassName, id, rows = 5, ...rest },
  ref,
) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Field
      id={fieldId}
      label={label}
      hint={hint}
      error={error}
      required={rest.required}
      className={wrapperClassName}
    >
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, "resize-y", error && "border-destructive", className)}
        {...rest}
      />
    </Field>
  );
});

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> & {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  options?: { value: string; label: string }[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, hint, error, className, wrapperClassName, id, options, children, ...rest },
  ref,
) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <Field
      id={fieldId}
      label={label}
      hint={hint}
      error={error}
      required={rest.required}
      className={wrapperClassName}
    >
      <select
        ref={ref}
        id={fieldId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldBase, "appearance-none pr-10", error && "border-destructive", className)}
        {...rest}
      >
        {options
          ? options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))
          : children}
      </select>
    </Field>
  );
});

type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> & {
  label: ReactNode;
  className?: string;
};

function Toggle({ label, className, id, type, ...rest }: ToggleProps & { type: "checkbox" | "radio" }) {
  const auto = useId();
  const fieldId = id ?? auto;
  return (
    <label
      htmlFor={fieldId}
      className={cn("flex min-h-11 cursor-pointer items-center gap-3 text-sm", className)}
    >
      <input
        id={fieldId}
        type={type}
        className={cn(
          "h-5 w-5 shrink-0 accent-[var(--brass)] transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-accent",
          type === "radio" ? "rounded-full" : "rounded-[6px]",
        )}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}

export function Checkbox(props: ToggleProps) {
  return <Toggle {...props} type="checkbox" />;
}

export function Radio(props: ToggleProps) {
  return <Toggle {...props} type="radio" />;
}

export function FormMessage({
  children,
  tone = "error",
  className,
}: {
  children: ReactNode;
  tone?: "error" | "hint";
  className?: string;
}) {
  return (
    <p
      role={tone === "error" ? "alert" : undefined}
      className={cn(
        "flex items-center gap-2 text-xs",
        tone === "error" ? "text-destructive" : "text-muted-foreground",
        className,
      )}
    >
      {tone === "error" ? <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> : null}
      {children}
    </p>
  );
}

/** Animated confirmation block shown after a successful submit. */
export function SuccessMessage({
  title = "Thank you",
  description,
  className,
}: {
  title?: string;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitionLux(0.5)}
      role="status"
      className={cn(
        "flex items-start gap-4 rounded-[20px] border border-accent/40 bg-accent/10 p-6",
        className,
      )}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
        <Check className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-xl">{title}</span>
        {description ? (
          <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
        ) : null}
      </span>
    </motion.div>
  );
}
