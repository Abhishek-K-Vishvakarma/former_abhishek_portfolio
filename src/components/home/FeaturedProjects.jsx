import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

import projects from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section-space">

      <div className="container-width">

        <SectionTitle
          title="Featured Projects"
          subtitle="Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}