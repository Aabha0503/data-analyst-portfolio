export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url: string;
  accent: "primary" | "success";
  platform: "github" | "kaggle";
};

export const projects: Project[] = [
  {
    title: "Employee Attrition Analysis & Prediction Dashboard",
    category: "HR Analytics · Machine Learning",
    description:
      "An end-to-end HR analytics project focused on understanding employee attrition patterns and building predictive classification models.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Tableau"],
    url: "https://github.com/Aabha0503/Employee-Attrition-Analysis-Prediction-Dashboard",
    accent: "primary",
    platform: "github"
  },
  {
    title: "Concept Drift & Anomaly Detection System",
    category: "ML Monitoring · Anomaly Detection",
    description:
      "A monitoring system designed to detect concept drift, data distribution changes and anomalous behavior in time-series data.",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Plotly"],
    url: "https://github.com/Aabha0503/concept-drift-engine",
    accent: "success",
    platform: "github"
  },
  {
    title: "Time-Series Forecasting using SARIMAX",
    category: "Time-Series · Forecasting",
    description:
      "A forecasting project using SARIMAX to model temporal patterns and generate hourly forecasts.",
    technologies: ["Python", "Pandas", "Statsmodels", "Matplotlib", "Seaborn"],
    url: "https://www.kaggle.com/code/aabhaaroratanu/hourly-forecast-of-goog-twitter-vol-using-sarimax",
    accent: "primary",
    platform: "kaggle"
  },
  {
    title: "Predictive Analysis of Residential Property Prices",
    category: "Predictive Analytics · Regression",
    description:
      "A machine learning project focused on analyzing residential property data and predicting property prices.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    url: "https://www.kaggle.com/code/aabhaaroratanu/predictive-analysis-of-residential-property-prices",
    accent: "success",
    platform: "kaggle"
  }
];
