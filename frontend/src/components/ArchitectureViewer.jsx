import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiUser,
  FiCpu,
  FiDatabase,
  FiMail,
  FiFolder,
  FiZap,
  FiCode,
  FiCreditCard,
  FiBarChart2,
  FiShoppingCart,
  FiX,
  FiArrowDown,
  FiChevronRight,
} from "react-icons/fi";

/* ============================================================
   ICON MAP
============================================================ */

const iconMap = {
  user: FiUser,
  ai: FiCpu,
  retrieval: FiDatabase,
  database: FiDatabase,
  gmail: FiMail,
  drive: FiFolder,
  llm: FiZap,
  code: FiCode,
  wallet: FiCreditCard,
  chart: FiBarChart2,
  "shopping-cart": FiShoppingCart,
};

/* ============================================================
   ARCHITECTURE NODE
============================================================ */

function ArchitectureNode({
  node,
  active,
  onClick,
}) {
  const Icon = iconMap[node.icon] || FiCode;

  return (
    <motion.button
      type="button"
      onClick={() => onClick(node)}
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        group
        relative
        w-full
        max-w-[250px]
        text-left
        rounded-2xl
        border
        p-4
        overflow-hidden
        transition-all
        duration-300
        ${
          active
            ? "border-primary bg-primary/5 shadow-glow"
            : "border-border bg-card hover:border-primary/50"
        }
      `}
    >

      {/* ======================================================
          HOVER GLOW
      ====================================================== */}

      <div
        className={`
          absolute
          inset-0
          rounded-2xl
          pointer-events-none
          transition-opacity
          duration-300
          ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      >
        <div className="absolute inset-0 bg-primary/5" />
      </div>


      {/* ======================================================
          TOP ACCENT LINE
      ====================================================== */}

      <div
        className={`
          absolute
          top-0
          left-0
          right-0
          h-px
          transition-all
          duration-300
          ${
            active
              ? "bg-primary"
              : "bg-transparent group-hover:bg-primary/50"
          }
        `}
      />


      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative flex items-center gap-3">

        {/* Icon */}
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            transition-all
            duration-300
            ${
              active
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-bg-secondary text-muted group-hover:border-primary/40 group-hover:text-primary"
            }
          `}
        >
          <Icon size={19} />
        </div>


        {/* Text */}
        <div className="min-w-0 flex-1">

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-1">
            {node.type}
          </p>

          <p className="text-sm font-medium text-heading truncate">
            {node.name}
          </p>

        </div>


        {/* Arrow */}
        <FiChevronRight
          size={15}
          className={`
            shrink-0
            transition-all
            duration-300
            ${
              active
                ? "text-primary translate-x-1"
                : "text-muted group-hover:text-primary group-hover:translate-x-1"
            }
          `}
        />

      </div>

    </motion.button>
  );
}


/* ============================================================
   ANIMATED CONNECTOR
============================================================ */

function Connector({ label }) {
  return (
    <div className="flex flex-col items-center py-4">

      {/* Line */}
      <div className="relative h-9 w-px bg-border overflow-hidden">

        <motion.div
          className="absolute left-0 top-0 w-full h-1/3 bg-primary"
          animate={{
            y: ["-100%", "400%"],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </div>


      {/* Label */}
      {label && (
        <div className="flex items-center gap-2 mt-2">

          <span className="h-1 w-1 rounded-full bg-primary" />

          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
            {label}
          </span>

          <span className="h-1 w-1 rounded-full bg-primary" />

        </div>
      )}

    </div>
  );
}


/* ============================================================
   BRANCH CONNECTOR
============================================================ */

function BranchConnector() {
  return (
    <div className="relative flex justify-center h-10">

      {/* Main vertical line */}
      <div className="absolute top-0 h-5 w-px bg-border" />

      {/* Horizontal branch */}
      <div
        className="
          absolute
          top-5
          left-[16.666%]
          right-[16.666%]
          h-px
          bg-border
        "
      />

      {/* Left vertical */}
      <div
        className="
          absolute
          top-5
          left-[16.666%]
          h-5
          w-px
          bg-border
        "
      />

      {/* Right vertical */}
      <div
        className="
          absolute
          top-5
          right-[16.666%]
          h-5
          w-px
          bg-border
        "
      />

      {/* Animated flow */}
      <motion.div
        className="
          absolute
          top-[19px]
          left-[16.666%]
          h-[2px]
          w-16
          bg-primary
        "
        animate={{
          x: ["-100%", "500%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  );
}


/* ============================================================
   NODE DETAIL PANEL
============================================================ */

function NodeDetails({
  node,
  onClose,
}) {
  if (!node) return null;

  const Icon = iconMap[node.icon] || FiCode;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        height: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        y: 10,
        height: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        mt-5
        overflow-hidden
        rounded-2xl
        border
        border-primary/30
        bg-primary/5
      "
    >

      <div className="p-5 sm:p-6">

        <div className="flex items-start gap-4">

          {/* Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-primary/30
              bg-primary/10
              text-primary
            "
          >
            <Icon size={19} />
          </div>


          {/* Content */}
          <div className="min-w-0 flex-1">

            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary mb-1">
              {node.type}
            </p>

            <h3 className="font-display text-lg font-semibold text-heading mb-2">
              {node.name}
            </h3>

            <p className="text-sm leading-relaxed text-text max-w-2xl">
              {node.description}
            </p>

          </div>


          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close component details"
            className="
              shrink-0
              rounded-lg
              p-2
              text-muted
              transition-colors
              hover:bg-card
              hover:text-heading
            "
          >
            <FiX size={17} />
          </button>

        </div>

      </div>

    </motion.div>
  );
}


/* ============================================================
   ARCHITECTURE VIEWER
============================================================ */

export default function ArchitectureViewer({
  architecture,
}) {
  const [selectedNode, setSelectedNode] = useState(null);

  if (!architecture) {
    return null;
  }

  const {
    title = "System Architecture",
    description,
    nodes = [],
    connections = [],
    final,
    finalLabel,
  } = architecture;


  /* ============================================================
     FIND LAYERS
  ============================================================ */

  const topNodes = nodes.filter(
    (node) => node.layer === "top"
  );

  const middleNodes = nodes.filter(
    (node) => node.layer === "middle"
  );

  const bottomNodes = nodes.filter(
    (node) => node.layer === "bottom"
  );


  /* ============================================================
     CONNECTION LABEL HELPER
  ============================================================ */

  const getConnectionLabel = (from) => {
    const connection = connections.find(
      (item) => item.from === from
    );

    return connection?.label || null;
  };


  return (
    <section className="mb-20">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="mb-8">

        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-2">
          Architecture
        </p>

        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-heading mb-3">
          {title}
        </h2>

        {description && (
          <p className="max-w-3xl text-text leading-relaxed">
            {description}
          </p>
        )}

      </div>


      {/* ======================================================
          ARCHITECTURE CANVAS
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-card/40
        "
      >

        {/* ====================================================
            GRID BACKGROUND
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />


        {/* ====================================================
            AMBIENT GLOW
        ==================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/3
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-primary/5
            blur-3xl
            pointer-events-none
          "
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* ====================================================
            CANVAS CONTENT
        ==================================================== */}

        <div className="relative p-6 sm:p-10 lg:p-12">

          {/* ==================================================
              TOP NODE
          ================================================== */}

          {topNodes.length > 0 && (
            <>
              <div className="flex justify-center">

                {topNodes.map((node) => (
                  <ArchitectureNode
                    key={node.id}
                    node={node}
                    active={
                      selectedNode?.id === node.id
                    }
                    onClick={setSelectedNode}
                  />
                ))}

              </div>


              {/* Connector */}
              <Connector
                label={getConnectionLabel(
                  topNodes[0]?.id
                )}
              />
            </>
          )}


          {/* ==================================================
              MIDDLE NODE
          ================================================== */}

          {middleNodes.length > 0 && (
            <>
              <div className="flex justify-center">

                {middleNodes.map((node) => (
                  <ArchitectureNode
                    key={node.id}
                    node={node}
                    active={
                      selectedNode?.id === node.id
                    }
                    onClick={setSelectedNode}
                  />
                ))}

              </div>


              {/* Branch */}
              {bottomNodes.length > 1 ? (
                <BranchConnector />
              ) : (
                <Connector
                  label={getConnectionLabel(
                    middleNodes[0]?.id
                  )}
                />
              )}
            </>
          )}


          {/* ==================================================
              BOTTOM NODES
          ================================================== */}

          {bottomNodes.length > 0 && (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
                max-w-5xl
                mx-auto
              "
            >

              {bottomNodes.map((node) => (
                <ArchitectureNode
                  key={node.id}
                  node={node}
                  active={
                    selectedNode?.id === node.id
                  }
                  onClick={setSelectedNode}
                />
              ))}

            </div>
          )}


          {/* ==================================================
              FINAL NODE
          ================================================== */}

          {final && (
            <>
              <Connector
                label={finalLabel || "output"}
              />

              <div className="flex justify-center">

                <ArchitectureNode
                  node={final}
                  active={
                    selectedNode?.id === final.id
                  }
                  onClick={setSelectedNode}
                />

              </div>
            </>
          )}


          {/* ==================================================
              NODE DETAILS
          ================================================== */}

          <AnimatePresence mode="wait">

            {selectedNode && (
              <NodeDetails
                key={selectedNode.id}
                node={selectedNode}
                onClose={() =>
                  setSelectedNode(null)
                }
              />
            )}

          </AnimatePresence>


          {/* ==================================================
              FOOTER HINT
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mt-8
            "
          >

            <FiArrowDown
              size={12}
              className="text-primary"
            />

            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-muted
              "
            >
              Click a component to inspect
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}