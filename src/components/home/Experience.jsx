import SectionTitle from "../common/SectionTitle";
import experience from "@/data/experience";

export default function Experience() {
  return (
    <section className="section-space">

      <div className="container-width">

        <SectionTitle
          title="Experience"
          subtitle="Journey"
        />

        <div className="space-y-8">

          {experience.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-sky-400 mt-2">
                    {item.company}
                  </p>
                </div>

                <span className="text-slate-400">
                  {item.duration}
                </span>

              </div>

              <p className="text-slate-400 mt-6 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}