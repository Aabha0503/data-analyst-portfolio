import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "success";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-component font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dashboard-background disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-dashboard-primary text-slate-950 hover:bg-sky-300 active:bg-sky-200",
  secondary:
    "border border-dashboard-border bg-dashboard-surface text-dashboard-text hover:bg-dashboard-surfaceMuted",
  ghost:
    "bg-transparent text-dashboard-muted hover:bg-dashboard-surface hover:text-dashboard-text",
  success:
    "bg-dashboard-success text-slate-950 hover:bg-green-400 active:bg-green-300"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};

export function Button({
  children,
  className = "",
  icon,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      ].join(" ")}
      type={type}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
