import {
  AboutSection,
  AnalyticsDashboardSection,
  CertificationsSection,
  ContactSection,
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
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <AnalyticsDashboardSection />
      <TimelineSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
