interface AvatarPlaceholderProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "square" | "circle";
  className?: string;
}

const sizes: Record<string, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

export function AvatarPlaceholder({ text, size = "md", variant = "square", className = "" }: AvatarPlaceholderProps) {
  const initials =
    text
      .replace(/[^a-zA-Zа-яА-Я0-9]/g, "")
      .slice(0, 2)
      .toUpperCase() || "—";

  return (
    <div
      className={`${variant === "circle" ? "rounded-full" : "rounded-lg"} bg-gray-200 flex items-center justify-center font-bold text-gray-500 flex-shrink-0 ${sizes[size]} ${className}`}
      title={text}
    >
      {initials}
    </div>
  );
}
