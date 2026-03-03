interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <h1 className={`text-3xl font-bold text-gray-900 mb-8 ${className}`}>
      {children}
    </h1>
  );
}
