export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-3xl p-6 hover:-translate-y-2 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4">
        {project.title}
      </h3>

      <p className="text-slate-400 leading-7">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-300 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href={project.github}
          className="text-sky-400 hover:text-sky-300"
        >
          GitHub →
        </a>

        <a
          href={project.live}
          className="text-indigo-400 hover:text-indigo-300"
        >
          Live →
        </a>
      </div>

    </div>
  );
}