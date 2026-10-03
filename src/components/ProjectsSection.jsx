import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Projects I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Patupi"
          description="My final Project in Systems Integration which is a web and mobile Barber Shop Appointment and Management system for managing barber shop services and customer bookings."
          tech="ReactJS · Javascript · Spring Boot · Kotlin · MySQL · TailwindCSS · HTML"
          link="https://github.com/denzeldonsala/IT342-Sala-Patupi"
        />

        <ProjectCard
          year="2026"
          title="VoxSight"
          description="A Five Man developed mobile application designed to assist amateur choir members with sight-reading and vocal practice."
          tech="Kotlin · Spring Boot · MusicXML · Audiveris"
          link="https://github.com/lVIN15/VoxSight"
        />

        <ProjectCard
          year="2026"
          title="ServiceNow Triage Board"
          description="A ServiceNow application that is fully utilizing ServicenowStudio Engine that allows Hospital staff to manage and track patient triage information in a hospital setting."
          tech="ServiceNow · JavaScript"
          link="https://github.com/denzeldonsala/"
        />

        <ProjectCard
          year="2025"
          title="Eventify"
          description="A web based event management system that allows users to create, manage, and attend events."
          tech="ReactJS · JavaScript · Spring Boot · MySQL · TailwindCSS · HTML"
          link="https://github.com/noaypunk/Eventify"
        />

      </div>
    </section>
  )
}

export default ProjectsSection