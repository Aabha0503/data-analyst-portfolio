import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 96) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .map((section) => ({
          id: section.id,
          top: section.getBoundingClientRect().top
        }))
        .filter((section) => section.top <= offset)
        .sort((a, b) => b.top - a.top)[0];

      if (currentSection) {
        setActiveId(currentSection.id);
        return;
      }

      setActiveId(sectionIds[0] ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [offset, sectionIds]);

  return activeId;
}
