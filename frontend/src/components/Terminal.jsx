import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

// Each "command" produces a block of output lines.
const COMMANDS = [
  { cmd: "whoami", lines: profile.terminal.whoami },
  { cmd: "skills", lines: profile.terminal.skills, list: true },
  { cmd: "experience", lines: profile.terminal.experience },
];

const TYPE_SPEED = 10;

const TERMINAL_BACKGROUND =
  "https://fry5sjnh8pbbp45y.public.blob.vercel-storage.com/photo_6060146018424569263_y.jpg";

export default function Terminal() {
  const [renderedCommands, setRenderedCommands] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [phase, setPhase] = useState("typing");

  const containerRef = useRef(null);

  useEffect(() => {
    if (currentCmdIndex >= COMMANDS.length) return;

    const target = COMMANDS[currentCmdIndex].cmd;

    if (phase === "typing") {
      if (typedCmd.length < target.length) {
        const t = setTimeout(
          () => setTypedCmd(target.slice(0, typedCmd.length + 1)),
          TYPE_SPEED
        );

        return () => clearTimeout(t);
      }

      const t = setTimeout(() => setPhase("printing"), 300);

      return () => clearTimeout(t);
    }

    if (phase === "printing") {
      const t = setTimeout(() => {
        setRenderedCommands((prev) => [
          ...prev,
          COMMANDS[currentCmdIndex],
        ]);

        setTypedCmd("");
        setCurrentCmdIndex((i) => i + 1);
        setPhase("typing");
      }, 500);

      return () => clearTimeout(t);
    }
  }, [typedCmd, phase, currentCmdIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight;
    }
  }, [renderedCommands, typedCmd]);

  const finished = currentCmdIndex >= COMMANDS.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
      style={{ perspective: 1000 }}
    >
      {/* Subtle glow behind terminal */}
      <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />

      {/* Terminal */}
      <div className="relative rounded-2xl glass-strong shadow-card overflow-hidden border border-border">

        {/* ======================================================
            TERMINAL TITLE BAR
        ====================================================== */}
        <div className="relative z-20 flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/75 backdrop-blur-md">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />

          <span className="ml-auto font-mono text-xs text-muted">
            aryan@rajput: ~ portfolio
          </span>
        </div>

        {/* ======================================================
            TERMINAL BODY
        ====================================================== */}
        <div
          ref={containerRef}
          className="relative p-5 font-mono text-[13px] leading-relaxed h-80 overflow-y-auto"
          style={{
            backgroundImage: `
              url("${TERMINAL_BACKGROUND}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Additional subtle glass layer */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* Terminal content */}
          <div className="relative z-10">
            {renderedCommands.map((block, i) => (
              <div key={i} className="mb-3">

                {/* Command */}
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-secondary">$</span>
                  <span>{block.cmd}</span>
                </div>

                {/* Output */}
                <div className="mt-1 pl-4 text-text">
                  {block.list ? (
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      {block.lines.map((line, j) => (
                        <span
                          key={j}
                          className="
                            px-2
                            py-0.5
                            rounded-full
                            bg-black/45
                            backdrop-blur-sm
                            border
                            border-white/10
                            text-[11px]
                            text-heading
                          "
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  ) : (
                    block.lines.map((line, j) => (
                      <div
                        key={j}
                        className={
                          j === 0 ? "text-heading" : ""
                        }
                      >
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}

            {/* Typing command */}
            {!finished && (
              <div className="flex items-center gap-2 text-primary">
                <span className="text-secondary">$</span>

                <span>{typedCmd}</span>

                <span className="inline-block w-[7px] h-[15px] bg-primary animate-blink" />
              </div>
            )}

            {/* Finished cursor */}
            {finished && (
              <div className="flex items-center gap-2 text-primary">
                <span className="text-secondary">$</span>

                <span className="inline-block w-[7px] h-[15px] bg-primary animate-blink" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}