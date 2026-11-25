import {
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  FeaturedProjectsSection,
  HeroSection,
  ResumeSection,
  SkillsSection
} from "@/sections";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <FeaturedProjectsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
