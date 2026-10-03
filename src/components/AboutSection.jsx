import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little bit about who i am" />

      <p class="mt-6 max-w-2xl leading-relaxed text-stone-700 text-justify">
        I originally grew up in Minglanilla and moved to Cebu City after i graduated pre school.
        I chose to pursue a degree in Information Technology here at Cebu Institute of Technology – University. 
        because ever since i was a kid i had a strong interest in Video Games and Technology. I have always been
        curious on how Video Games are made and What Technologies are used to make Video Games. 
      </p>

      <dl class="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year Level" value="Fourth Year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City, Philippines" />
      </dl>
    </section>
  );
};

export default AboutSection;
