import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-white hover:opacity-90",
  secondary: "border-2 border-[var(--accent)] text-[var(--accent)] bg-white hover:bg-[var(--accent)]/5",
  ghost: "border border-gray-300 hover:bg-gray-50",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-50 transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
