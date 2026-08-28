import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { projects } from "../data/projects";
import ArchitectureViewer from "../components/ArchitectureViewer";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono text-primary mb-4">404</p>

        <h1 className="font-display text-3xl text-heading mb-6">
          Project not found
        </h1>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-hoverGreen transition-colors"
        >
          <FiArrowLeft />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen container-px mx-auto max-w-5xl pt-16 pb-24">

      {/* ================= BACK ================= */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-10 transition-colors"
      >
        <FiArrowLeft />
        Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* ================= PROJECT HEADER ================= */}
        <div className="mb-8">

          <p className="font-mono text-xs text-primary mb-3">
            {project.number}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-heading mb-3">
            {project.name}
          </h1>

          <p className="text-secondary text-lg mb-6">
            {project.tagline}
          </p>

          <p className="text-text leading-relaxed max-w-3xl">
            {project.description}
          </p>

        </div>


        {/* ================= PROJECT LINKS ================= */}
        <div className="flex flex-wrap items-center gap-4 mb-12">

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-border text-heading hover:border-primary transition-colors text-sm"
            >
              <FiGithub size={16} />
              View Code
            </a>
          )}

          {/* Live Demo */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-bg font-medium text-sm hover:bg-hoverGreen hover:shadow-glow transition-all"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}

        </div>


        {/* ================= MAIN PROJECT IMAGE ================= */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-14"
          >
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}


        {/* ================= TECH + FEATURES ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          {/* Tech Stack */}
          <div>

            <h2 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-card text-sm text-heading border border-border"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>


          {/* Features */}
          <div>

            <h2 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Features
            </h2>

            <ul className="space-y-2">

              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-text"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* ========================================================= */}
        {/*                    ARCHITECTURE VIEWER                    */}
        {/* ========================================================= */}

        {project.architecture && (
          <ArchitectureViewer
            architecture={project.architecture}
          />
        )}


        {/* ================= PROJECT WALKTHROUGH ================= */}
        {project.media?.length > 0 && (
          <section className="mb-16">

            {/* Section Header */}
            <div className="mb-8">

              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                Project Walkthrough
              </p>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-heading">
                How it works
              </h2>

            </div>


            {/* Walkthrough Items */}
            <div className="space-y-14">

              {project.media.map((item, index) => (

                <motion.div
                  key={item.src}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >

                  {/* ================= SCREENSHOT ================= */}
                  <div
                    className={`
                      rounded-2xl
                      overflow-hidden
                      border border-border
                      bg-card
                      ${
                        index % 2 !== 0
                          ? "md:order-2"
                          : ""
                      }
                    `}
                  >

                    <img
                      src={item.src}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />

                  </div>


                  {/* ================= DESCRIPTION ================= */}
                  <div
                    className={
                      index % 2 !== 0
                        ? "md:order-1"
                        : ""
                    }
                  >

                    <p className="font-mono text-xs text-primary mb-3">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="text-text leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </section>
        )}

      </motion.div>

    </div>
  );
}