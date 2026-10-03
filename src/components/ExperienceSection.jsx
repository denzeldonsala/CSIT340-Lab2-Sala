import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where i have learned"
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2021 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Studying  web development, databases, system integration, and other areas of IT."
        />

        <TimelineItem
          period="2021 – Present"
          title="Academic Software Projects"
          place="Cebu Institute of Technology – University"
          description="Developing academic projects involving React, Spring Boot, Android development, MySQL, and system integration."
        />

        <TimelineItem
          period="2019 – 2021"
          title="Senior High School – TVL-ICT"
          place="Southwestern University PHINMA"
          description="Took on the TVL-ICT track, focusing on basic programming."
        />
      </ol>
    </section>
  );
};

export default ExperienceSection;
