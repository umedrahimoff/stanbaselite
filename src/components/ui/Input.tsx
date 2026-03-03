import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`border border-gray-300 rounded-lg px-4 py-2 text-sm w-48 sm:w-56 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${className}`}
      {...props}
    />
  );
}
