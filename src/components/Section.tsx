import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  constrained?: boolean;
};

export function Section({
  children,
  className = "",
  constrained = true,
  ...props
}: SectionProps) {
  return (
    <section className={["w-full py-8 sm:py-10", className].join(" ")} {...props}>
      <div
        className={[
          "w-full px-4 sm:px-6 lg:px-8",
          constrained ? "mx-auto max-w-dashboard" : ""
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
