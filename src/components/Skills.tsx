import type { ReactNode } from "react";
import { skills, experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/About";

const iconMap: Record<string, ReactNode> = {
  fiber: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  switch: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  radio: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience & Skills"
          title="Technical Expertise"
          subtitle={`Practical skills developed through training at ${experience.organization}.`}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-slate-950/60 p-7 transition hover:border-brand-500/40 hover:bg-slate-900/80"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition group-hover:bg-brand-500/25 group-hover:text-brand-300">
                {iconMap[skill.icon]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Industry Training
              </p>
              <h3 className="mt-1 text-xl font-bold text-white">{experience.organization}</h3>
              <p className="mt-2 max-w-2xl text-slate-400">{experience.summary}</p>
            </div>
            <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              {experience.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
