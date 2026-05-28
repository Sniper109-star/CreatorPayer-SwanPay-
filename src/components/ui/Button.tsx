"use client";

export function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary",
  disabled = false,
  className 
}: { 
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-neutral-700 text-white hover:bg-neutral-600",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
}