import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Database,
  LineChart,
  Sigma,
  Table2,
  Wrench
} from "lucide-react";

export type Skill = {
  name: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Databases",
    icon: Code2,
    accent: "text-dashboard-primary",
    skills: [
      { name: "Python", description: "Pandas, NumPy" },
      { name: "SQL", description: "SQL Queries, MySQL" },
      { name: "R", description: "Basic" },
      { name: "Java", description: "Programming language" },
      { name: "C++", description: "Programming language" }
    ]
  },
  {
    title: "Data Analytics",
    icon: Database,
    accent: "text-dashboard-success",
    skills: [
      { name: "Exploratory Data Analysis", description: "Explore patterns and relationships" },
      { name: "Data Cleaning", description: "Prepare reliable datasets" },
      { name: "Data Transformation", description: "Reshape and standardize data" },
      { name: "Statistical Analysis", description: "Summarize and interpret data" },
      { name: "Data Validation", description: "Check data quality and consistency" },
      { name: "ETL", description: "Extract, transform, and load data" },
      { name: "Variance Analysis", description: "Compare actuals with targets" }
    ]
  },
  {
    title: "Machine Learning",
    icon: Sigma,
    accent: "text-dashboard-primary",
    skills: [
      { name: "Regression", description: "Model continuous outcomes" },
      { name: "Classification", description: "Model categorical outcomes" },
      { name: "Random Forest", description: "Ensemble tree-based modeling" },
      { name: "Gradient Boosting", description: "Sequential ensemble modeling" },
      { name: "XGBoost", description: "Gradient boosting framework" },
      { name: "Feature Engineering", description: "Create model-ready features" },
      { name: "Anomaly Detection", description: "Identify unusual observations" },
      { name: "Scikit-learn", description: "Machine learning toolkit" }
    ]
  },
  {
    title: "Time-Series Analysis",
    icon: LineChart,
    accent: "text-dashboard-success",
    skills: [
      { name: "SARIMAX", description: "Seasonal forecasting model" },
      { name: "Time-Series Forecasting", description: "Forecast temporal patterns" },
      { name: "Trend Analysis", description: "Study directional movement" },
      { name: "Seasonality Analysis", description: "Examine recurring patterns" }
    ]
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    accent: "text-dashboard-primary",
    skills: [
      { name: "Tableau", description: "Dashboards and visual reporting" },
      { name: "Matplotlib", description: "Python data visualization" },
      { name: "Seaborn", description: "Statistical visualization" },
      { name: "Plotly", description: "Interactive charts" }
    ]
  },
  {
    title: "Excel & Business Analytics",
    icon: Table2,
    accent: "text-dashboard-success",
    skills: [
      { name: "Advanced Excel", description: "Advanced spreadsheet analysis" },
      { name: "Pivot Tables", description: "Summarize large datasets" },
      { name: "Pivot Charts", description: "Visualize pivot summaries" },
      { name: "XLOOKUP / VLOOKUP", description: "Lookup and matching functions" },
      { name: "INDEX-MATCH", description: "Flexible lookup pattern" },
      { name: "Power Query", description: "Transform and prepare data" }
    ]
  },
  {
    title: "Statistics & Model Evaluation",
    icon: BarChart3,
    accent: "text-dashboard-primary",
    skills: [
      { name: "Hypothesis Testing", description: "Evaluate statistical assumptions" },
      { name: "ANOVA", description: "Compare group means" },
      { name: "A/B Testing", description: "Compare experimental variants" },
      { name: "Confusion Matrix", description: "Evaluate classification outputs" },
      { name: "Classification Metrics", description: "Measure classification performance" },
      { name: "MAE", description: "Mean absolute error" },
      { name: "RMSE", description: "Root mean squared error" },
      { name: "MAPE", description: "Mean absolute percentage error" },
      { name: "R-Squared", description: "Explain regression fit" }
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    accent: "text-dashboard-success",
    skills: [
      { name: "Jupyter Notebook", description: "Interactive analysis environment" },
      { name: "VS Code", description: "Code editing environment" },
      { name: "Git", description: "Version control" },
      { name: "GitHub", description: "Code collaboration platform" },
      { name: "Streamlit", description: "Build interactive data apps" }
    ]
  }
];
