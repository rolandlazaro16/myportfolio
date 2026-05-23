import { profile, experience } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A dedicated engineer from Tanzania with a passion for telecommunications and technology."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I am <strong className="text-white">{profile.name}</strong>, originally
              from <strong className="text-white">{profile.location}</strong>. I hold a
              Diploma in Computer Science Engineering from St. Joseph University of
              Engineering &amp; Technology, combining academic knowledge with practical
              field experience.
            </p>
            <p>
              My training at <strong className="text-white">{experience.organization}</strong>{" "}
              gave me hands-on exposure to modern telecommunications infrastructure —
              from fiber optic networks to radio transmission systems.
            </p>
            <p>
              I am motivated to grow in network engineering, IT infrastructure, and
              telecommunications, bringing reliability and technical skill to every
              project I work on.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
            <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
            <dl className="mt-6 space-y-4">
              {[
                { term: "Full Name", detail: profile.name },
                { term: "Birthplace", detail: profile.location },
                { term: "Qualification", detail: "Diploma — Computer Science Engineering" },
                { term: "University", detail: "St. Joseph University of Engineering & Technology" },
                { term: "Training", detail: experience.organization },
              ].map((item) => (
                <div key={item.term} className="flex flex-col gap-0.5 border-b border-white/5 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between">
                  <dt className="text-sm text-slate-500">{item.term}</dt>
                  <dd className="text-sm font-medium text-slate-200 sm:text-right sm:max-w-[60%]">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-400">{subtitle}</p>
    </div>
  );
}

export { SectionHeading };
