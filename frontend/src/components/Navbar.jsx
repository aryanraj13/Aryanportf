import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useLocation, useNavigate } from "react-router-dom";

import { profile } from "../data/profile";
import useActiveSection from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
  { id: "life-stories", label: "Life & Stories", route: "/life-stories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const active = useActiveSection(
    NAV_ITEMS
      .filter((item) => !item.route)
      .map((item) => item.id)
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    // Already on home page
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Coming from another page
    navigate("/");

    // Wait for Home to render
    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleNavClick = (item) => {
    setMenuOpen(false);

    // Life & Stories
    if (item.route) {
      navigate(item.route);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Normal Home sections
    scrollToSection(item.id);
  };

  const isLifeStories = location.pathname === "/life-stories";

  return (
    <header className="sticky top-0 inset-x-0 z-50">
      <div className="bg-bg/70 backdrop-blur-md border-b border-border/20">
        <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <button
            onClick={() => handleNavClick({ id: "home" })}
            className="font-display font-semibold text-heading text-base tracking-tight"
          >
            Aryan
            <span className="text-primary">.</span>
            Rajput
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const itemActive = item.route
                ? isLifeStories
                : !isLifeStories && active === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                      itemActive
                        ? "text-heading"
                        : "text-muted hover:text-heading"
                    }`}
                  >
                    {itemActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-card border border-border"
                        transition={{
                          type: "spring",
                          duration: 0.5,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-primary transition-colors"
            >
              <FiGithub size={18} />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-primary transition-colors"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href={profile.socials.email}
              aria-label="Email"
              className="text-muted hover:text-primary transition-colors"
            >
              <FiMail size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-heading"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-1">
              {NAV_ITEMS.map((item) => {
                const itemActive = item.route
                  ? isLifeStories
                  : !isLifeStories && active === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base ${
                        itemActive
                          ? "text-primary bg-card"
                          : "text-text hover:text-heading"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-5 px-6 pb-6">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-primary"
              >
                <FiGithub size={20} />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-primary"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href={profile.socials.email}
                className="text-muted hover:text-primary"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}