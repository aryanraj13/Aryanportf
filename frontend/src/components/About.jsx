import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { education } from "../data/education";

const currentEducation = education[0];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-px mx-auto max-w-7xl">

        {/* Section Title */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="eyebrow mb-4"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* About Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading mb-6 leading-tight">
              Building at the intersection of{" "}
              <span className="text-gradient">
                software and intelligence
              </span>
              .
            </h2>

            <p className="text-text leading-relaxed mb-6">
              {profile.summary}
            </p>

            <p className="text-text leading-relaxed">
              I completed my{" "}
              {currentEducation.degree} in{" "}
              {currentEducation.branch} from{" "}
              {currentEducation.college} in{" "}
              {currentEducation.graduation}. I enjoy building
              AI-powered applications, RAG systems, agentic workflows,
              and full-stack software solutions, turning ideas into
              practical and scalable products.
            </p>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.highlights.map((h, i) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -3,
                    borderColor: "#34D399",
                  }}
                  className="px-4 py-2 rounded-full glass text-sm text-heading border border-border"
                >
                  {h}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass p-8 h-full">

              {/* Glow */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-primary/10 blur-2xl" />

              <p className="font-mono text-xs text-muted mb-6">
                timeline.json
              </p>

              <ol className="space-y-6 border-l border-border pl-6">

                {[
                  {
                    year: "2022",
                    title: "Started B.Tech",
                    desc: "Computer Science and Engineering at JIIT Noida.",
                  },
                  {
                    year: "2025",
                    title: "Summer Research Intern",
                    desc: "DRID Giant Project — developed gesture-controlled games and 3D environments using MediaPipe, OpenCV, and Three.js.",
                  },
                  {
                    year: "2025",
                    title: "Software Engineering Intern",
                    desc: "VARP TechLabs — contributing to product development and scalable software engineering tasks.",
                  },
                  {
                    year: "2026",
                    title: "B.Tech Completed",
                    desc: "B.Tech in Computer Science and Engineering from JIIT Noida.",
                  },
                ].map((t, i) => (
                  <li key={i} className="relative">

                    {/* Timeline Dot */}
                    <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary shadow-glow-sm" />

                    {/* Year */}
                    <p className="font-mono text-xs text-primary mb-1">
                      {t.year}
                    </p>

                    {/* Title */}
                    <p className="text-heading font-medium">
                      {t.title}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted">
                      {t.desc}
                    </p>

                  </li>
                ))}

              </ol>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}