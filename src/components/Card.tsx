import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section";
  children: ReactNode;
};

export function Card({
  as: Component = "article",
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <Component
      className={[
        "rounded-component border border-dashboard-border bg-dashboard-surface p-5 shadow-dashboard",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
