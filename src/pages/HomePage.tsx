import {
  AboutSection,
  AnalyticsDashboardSection,
  CertificationsSection,
  ContactSection,
  ExperienceSection,
  FeaturedProjectsSection,
  HeroSection,
  ResumeSection,
  SkillsSection,
  TimelineSection
} from "@/sections";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <AnalyticsDashboardSection />
      <TimelineSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
