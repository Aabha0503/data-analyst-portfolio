import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Database,
  LineChart,
  Sigma
} from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Databases",
    icon: Code2,
    accent: "text-dashboard-primary",
    skills: ["Python", "SQL", "R (Basic)", "Java", "C++", "MySQL"]
  },
  {
    title: "Data Analytics & Statistics",
    icon: Database,
    accent: "text-dashboard-success",
    skills: [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Transformation",
      "ETL",
      "Data Validation",
      "Statistical Analysis",
      "Hypothesis Testing",
      "ANOVA",
      "A/B Testing",
      "Variance Analysis",
      "Confusion Matrix",
      "Classification Metrics",
      "MAE",
      "RMSE",
      "MAPE",
      "R-Squared"
    ]
  },
  {
    title: "Machine Learning & Forecasting",
    icon: Sigma,
    accent: "text-dashboard-primary",
    skills: [
      "Regression",
      "Classification",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "Scikit-learn",
      "Feature Engineering",
      "Anomaly Detection",
      "SARIMAX",
      "Time-Series Forecasting",
      "Trend Analysis",
      "Seasonality Analysis"
    ]
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    accent: "text-dashboard-success",
    skills: ["Tableau", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    title: "Tools & Technologies",
    icon: LineChart,
    accent: "text-dashboard-primary",
    skills: [
      "Advanced Excel",
      "Pivot Tables",
      "Pivot Charts",
      "XLOOKUP/VLOOKUP",
      "INDEX-MATCH",
      "Power Query",
      "Jupyter Notebook",
      "VS Code",
      "Git",
      "GitHub",
      "Streamlit"
    ]
  }
];
