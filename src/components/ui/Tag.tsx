interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "stage";
  className?: string;
}

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  const base = "px-2 py-1 rounded text-sm font-medium";
  const variants = {
    default: "bg-gray-100 text-gray-700",
    stage: "bg-emerald-100 text-emerald-700",
  };
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
