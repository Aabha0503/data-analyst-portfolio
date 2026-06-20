export const dashboardTheme = {
  colors: {
    background: "#0F172A",
    card: "#1E293B",
    primary: "#38BDF8",
    success: "#22C55E",
    text: "#E2E8F0",
    muted: "#94A3B8",
    border: "#334155"
  },
  typography: {
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    headingWeight: 700,
    bodyWeight: 400
  },
  layout: {
    maxWidth: "1440px",
    gutter: {
      mobile: "1rem",
      tablet: "1.5rem",
      desktop: "2rem"
    }
  }
} as const;
