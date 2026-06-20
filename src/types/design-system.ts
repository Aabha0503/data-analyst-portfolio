import type { dashboardTheme } from "@/data";

export type DashboardTheme = typeof dashboardTheme;
export type DashboardColor = keyof DashboardTheme["colors"];
export type DashboardBreakpoint = "mobile" | "tablet" | "desktop";
