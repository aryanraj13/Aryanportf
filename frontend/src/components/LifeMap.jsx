import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import India from "@svg-maps/india";


// ============================================================
// PLACES
// ============================================================

const places = [
  {
    id: "noida",
    name: "NOIDA",
    state: "Uttar Pradesh",
    date: "A PLACE CLOSE TO HOME",

    x: 47.2,
    y: 30.5,

    description:
      "Familiar roads, everyday moments and a place that quietly became part of my story.",

    experiences: [
      "Everyday life",
      "Friends and familiar places",
      "Late evenings",
    ],

    photos: [],
  },

  {
    id: "delhi",
    name: "DELHI",
    state: "Delhi",
    date: "A CITY I KEEP RETURNING TO",

    x: 45.5,
    y: 32.5,

    description:
      "A city full of movement, food, people and countless small memories.",

    experiences: [
      "Old streets",
      "Late night food",
      "Friends and memories",
      "The city that never really stops",
    ],

    photos: [
      "/photos/IMG_1293.JPG",
      "/photos/IMG_1294.JPG",
    ],
  },

  {
    id: "gurgaon",
    name: "GURGAON",
    state: "Haryana",
    date: "BETWEEN WORK & LIFE",

    x: 43.5,
    y: 34.5,

    description:
      "A modern side of the region — glass buildings, busy roads and the pace of everyday life.",

    experiences: [
      "City evenings",
      "Work and exploration",
      "Food spots",
    ],

    photos: [],
  },

  {
    id: "bulandshahr",
    name: "BULANDSHAHR",
    state: "Uttar Pradesh",
    date: "A PLACE WITH MEMORIES",

    x: 51,
    y: 36.5,

    description:
      "A place connected to familiar faces, quiet roads and memories that don't need photographs.",

    experiences: [
      "Family memories",
      "Quiet roads",
      "Familiar places",
    ],

    photos: [],
  },

  {
    id: "dehradun",
    name: "DEHRADUN",
    state: "Uttarakhand",
    date: "TOWARDS THE MOUNTAINS",

    x: 50,
    y: 27,

    description:
      "The transition from city life to the mountains — greener roads, cooler air and slower days.",

    experiences: [
      "Mountain roads",
      "Exploring the city",
      "Cool evenings",
    ],

    photos: [],
  },

  {
    id: "landour",
    name: "LANDOUR",
    state: "Uttarakhand",
    date: "QUIET ABOVE THE CLOUDS",

    x: 48.5,
    y: 24,

    description:
      "Quiet roads, old architecture and a slower rhythm tucked away in the mountains.",

    experiences: [
      "Walking through quiet streets",
      "Mountain views",
      "Slow mornings",
    ],

    photos: [],
  },

  {
    id: "mussoorie",
    name: "MUSSOORIE",
    state: "Uttarakhand",
    date: "THE QUEEN OF HILLS",

    x: 49.5,
    y: 25.5,

    description:
      "Mountain weather, winding roads and views that make the journey worth taking.",

    experiences: [
      "Mall Road",
      "Mountain walks",
      "Sunset views",
      "Cold evenings",
    ],

    photos: [],
  },

  {
    id: "rishikesh",
    name: "RISHIKESH",
    state: "Uttarakhand",
    date: "A MEMORY BY THE RIVER",

    x: 52,
    y: 29,

    description:
      "River air, long walks and moments that didn't need a plan.",

    experiences: [
      "Walking beside the river",
      "Quiet mornings",
      "Exploring local streets",
      "Watching the evening sky",
    ],

    photos: [],
  },

  {
    id: "mcleodganj",
    name: "MCLEODGANJ",
    state: "Himachal Pradesh",
    date: "A LITTLE HIGHER",

    x: 43.5,
    y: 17.5,

    description:
      "Mountain air, peaceful streets and the feeling of being far away from everything familiar.",

    experiences: [
      "Mountain walks",
      "Exploring cafés",
      "Cloudy evenings",
      "Quiet viewpoints",
    ],

    photos: [],
  },

  {
    id: "kasol",
    name: "KASOL",
    state: "Himachal Pradesh",
    date: "DEEP IN THE VALLEY",

    x: 46,
    y: 14,

    description:
      "A valley surrounded by mountains, rivers and the kind of quiet that makes you stay a little longer.",

    experiences: [
      "Walking through the valley",
      "River views",
      "Mountain roads",
      "Slow afternoons",
    ],

    photos: [],
  },

  {
    id: "manali",
    name: "MANALI",
    state: "Himachal Pradesh",
    date: "DECEMBER 2025",

    x: 47,
    y: 11,

    description:
      "Cold mountain air, winding roads and the kind of views that make you stop thinking about everything else.",

    experiences: [
      "Long drives through the mountains",
      "Snow and cold mornings",
      "Local food",
      "Mountain sunsets",
    ],

    photos: [
      "/photos/IMG_1746.jpg",
      "/photos/IMG_1765.jpg",
      "/photos/IMG_1779.jpg",
    ],
  },
];


// ============================================================
// LIFE MAP
// ============================================================

export default function LifeMap() {

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [zoom, setZoom] = useState(1);

  const locations = India.locations || [];

  const viewBox = India.viewBox || "0 0 1000 1000";


  return (

    <section className="relative overflow-hidden py-20 sm:py-24">


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Very subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            bg-[linear-gradient(rgba(0,255,170,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,1)_1px,transparent_1px)]
            bg-[size:45px_45px]
          "
        />

        {/* Small central glow */}

        <div
          className="
            absolute
            left-1/2
            top-[45%]
            -translate-x-1/2
            w-[450px]
            h-[450px]
            rounded-full
            bg-primary/[0.035]
            blur-[120px]
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          container-px
          mx-auto
          max-w-6xl
          relative
          z-10
        "
      >


        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="text-center mb-8 sm:mb-10">

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-3.5
              py-1.5
              rounded-full
              border
              border-primary/15
              bg-primary/[0.025]
              mb-4
            "
          >

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-primary
                shadow-[0_0_7px_rgba(0,255,170,0.7)]
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-primary/80
              "
            >
              LIFE MAP
            </span>

          </div>


          <h2
            className="
              font-display
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-semibold
              text-heading
            "
          >
            Places that became{" "}
            <span className="text-primary">
              memories.
            </span>
          </h2>


          <p
            className="
              text-secondary
              text-sm
              sm:text-base
              mt-4
              max-w-lg
              mx-auto
              leading-relaxed
            "
          >
            A few places that left something behind.
          </p>

        </div>


        {/* ===================================================
            MAP CARD
        =================================================== */}

        <div
          className="
            relative
            h-[570px]
            sm:h-[610px]
            rounded-[24px]
            overflow-hidden
            border
            border-primary/15
            bg-[#020806]
            shadow-[0_0_60px_rgba(0,255,170,0.045)]
          "
        >


          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0
              z-[100]
              h-[68px]
              px-5
              sm:px-6
              flex
              items-center
              justify-between
              border-b
              border-primary/[0.08]
              bg-[#020806]/70
              backdrop-blur-md
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  border
                  border-primary/20
                  flex
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    w-2.5
                    h-2.5
                    rounded-full
                    border
                    border-primary/70
                  "
                />

              </div>


              <div>

                <p
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-primary/40
                  "
                >
                  Geographic Memory System
                </p>

                <p
                  className="
                    font-mono
                    text-xs
                    tracking-[0.2em]
                    text-heading
                    mt-0.5
                  "
                >
                  INDIA
                </p>

              </div>

            </div>


            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  hidden
                  sm:block
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-widest
                  text-secondary
                "
              >
                {places.length} PLACES
              </span>


              <span
                className="
                  w-1
                  h-1
                  rounded-full
                  bg-primary
                  shadow-[0_0_7px_#00ffaa]
                "
              />


              <span
                className="
                  font-mono
                  text-[8px]
                  text-primary/70
                "
              >
                ACTIVE
              </span>

            </div>

          </div>


          {/* =================================================
              MAP AREA
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              pt-[68px]
            "
          >


            {/* =================================================
                SUBTLE SCANLINES
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                z-30
                pointer-events-none
                opacity-[0.018]
                bg-[linear-gradient(transparent_50%,rgba(0,255,170,1)_50%)]
                bg-[size:100%_5px]
              "
            />


            {/* =================================================
                COORDINATES
            ================================================= */}

            <div
              className="
                absolute
                left-3
                sm:left-4
                top-[95px]
                bottom-12
                z-20
                flex
                flex-col
                justify-between
                font-mono
                text-[7px]
                text-primary/20
              "
            >

              <span>35°N</span>
              <span>30°N</span>
              <span>25°N</span>
              <span>20°N</span>
              <span>15°N</span>
              <span>10°N</span>

            </div>


            {/* =================================================
                MAP
            ================================================= */}

            <div
              className="
                absolute
                inset-x-[10%]
                top-[9%]
                bottom-[6%]
                flex
                items-center
                justify-center
              "
            >

              <motion.div
                className="
                  relative
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                "
                animate={{
                  scale: zoom,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >


                {/* =================================================
                    INDIA SVG
                ================================================= */}

                <svg
                  viewBox={viewBox}
                  className="
                    w-full
                    h-full
                    max-w-[560px]
                    max-h-[480px]
                    overflow-visible
                  "
                  preserveAspectRatio="xMidYMid meet"
                  aria-label="Map of India"
                >


                  {/* =================================================
                      FILTERS
                  ================================================= */}

                  <defs>


                    {/* Very subtle glow */}

                    <filter id="subtleMapGlow">

                      <feGaussianBlur
                        stdDeviation="1.6"
                        result="blur"
                      />

                      <feMerge>

                        <feMergeNode in="blur" />

                        <feMergeNode in="SourceGraphic" />

                      </feMerge>

                    </filter>


                    {/* State fill */}

                    <linearGradient
                      id="stateFill"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#00ffaa"
                        stopOpacity="0.035"
                      />

                      <stop
                        offset="50%"
                        stopColor="#00ffaa"
                        stopOpacity="0.012"
                      />

                      <stop
                        offset="100%"
                        stopColor="#00ffaa"
                        stopOpacity="0.035"
                      />

                    </linearGradient>


                    {/* Tiny map grid */}

                    <pattern
                      id="tinyGrid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >

                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="#00ffaa"
                        strokeOpacity="0.035"
                        strokeWidth="0.5"
                      />

                    </pattern>

                  </defs>


                  {/* =================================================
                      SOFT STATE GLOW
                  ================================================= */}

                  <g
                    fill="none"
                    stroke="#00ffaa"
                    strokeWidth="2.5"
                    opacity="0.12"
                    filter="url(#subtleMapGlow)"
                  >

                    {locations.map((location) => (

                      <path
                        key={`glow-${location.id}`}
                        d={location.path}
                      />

                    ))}

                  </g>


                  {/* =================================================
                      STATES
                  ================================================= */}

                  <g>

                    {locations.map((location) => (

                      <path
                        key={location.id}
                        d={location.path}
                        fill="url(#stateFill)"
                        stroke="#00ffaa"
                        strokeOpacity="0.52"
                        strokeWidth="0.9"
                        vectorEffect="non-scaling-stroke"
                        className="
                          cursor-pointer
                          transition-all
                          duration-300
                        "
                        onMouseEnter={(event) => {
                          event.currentTarget.style.fill =
                            "rgba(0,255,170,0.08)";
                          event.currentTarget.style.stroke =
                            "#5dffc5";
                          event.currentTarget.style.strokeOpacity =
                            "0.8";
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.fill =
                            "url(#stateFill)";
                          event.currentTarget.style.stroke =
                            "#00ffaa";
                          event.currentTarget.style.strokeOpacity =
                            "0.52";
                        }}
                      />

                    ))}

                  </g>


                  {/* =================================================
                      GRID INSIDE INDIA
                  ================================================= */}

                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#tinyGrid)"
                    opacity="0.35"
                    pointerEvents="none"
                  />

                </svg>


                {/* =================================================
                    LOCATION POINTS
                ================================================= */}

                {places.map((place) => (

                  <button
                    key={place.id}
                    type="button"
                    onClick={() =>
                      setSelectedPlace(place)
                    }
                    aria-label={`Open ${place.name} memory`}
                    className="
                      absolute
                      z-50
                      group
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                    style={{
                      left: `${place.x}%`,
                      top: `${place.y}%`,
                    }}
                  >


                    {/* Very subtle pulse */}

                    <span
                      className="
                        absolute
                        -inset-2.5
                        rounded-full
                        bg-primary/10
                        animate-ping
                        [animation-duration:2.8s]
                      "
                    />


                    {/* Small glow */}

                    <span
                      className="
                        absolute
                        -inset-2
                        rounded-full
                        bg-primary/15
                        blur-[5px]
                      "
                    />


                    {/* Core */}

                    <span
                      className="
                        relative
                        block
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-primary
                        border
                        border-[#06150f]
                        shadow-[0_0_5px_#00ffaa,0_0_12px_rgba(0,255,170,0.55)]
                      "
                    />


                    {/* Hover label */}

                    <span
                      className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        whitespace-nowrap
                        px-2
                        py-1
                        rounded
                        border
                        border-primary/20
                        bg-[#020806]/90
                        backdrop-blur-sm
                        font-mono
                        text-[7px]
                        tracking-[0.16em]
                        text-primary
                        opacity-0
                        group-hover:opacity-100
                        translate-x-1
                        group-hover:translate-x-0
                        transition-all
                        duration-200
                        pointer-events-none
                      "
                    >
                      {place.name}
                    </span>

                  </button>

                ))}

              </motion.div>

            </div>


            {/* =================================================
                ZOOM CONTROLS
            ================================================= */}

            <div
              className="
                absolute
                right-4
                bottom-4
                z-50
                flex
                flex-col
                overflow-hidden
                rounded-lg
                border
                border-primary/15
                bg-black/50
                backdrop-blur-sm
              "
            >

              <button
                type="button"
                onClick={() =>
                  setZoom((value) =>
                    Math.min(value + 0.12, 1.35)
                  )
                }
                className="
                  w-8
                  h-8
                  text-xs
                  text-secondary
                  hover:text-primary
                  hover:bg-primary/5
                  transition
                "
              >
                +
              </button>


              <div className="h-px bg-primary/10" />


              <button
                type="button"
                onClick={() =>
                  setZoom((value) =>
                    Math.max(value - 0.12, 0.9)
                  )
                }
                className="
                  w-8
                  h-8
                  text-xs
                  text-secondary
                  hover:text-primary
                  hover:bg-primary/5
                  transition
                "
              >
                −
              </button>


              <div className="h-px bg-primary/10" />


              <button
                type="button"
                onClick={() => setZoom(1)}
                className="
                  w-8
                  h-8
                  text-[10px]
                  text-secondary
                  hover:text-primary
                  hover:bg-primary/5
                  transition
                "
              >
                ◉
              </button>

            </div>


            {/* =================================================
                BOTTOM INFO
            ================================================= */}

            <div
              className="
                absolute
                left-4
                bottom-4
                z-40
                px-3
                py-2.5
                rounded-lg
                border
                border-primary/10
                bg-black/40
                backdrop-blur-sm
              "
            >

              <p
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-primary/40
                "
              >
                Places
              </p>


              <p
                className="
                  font-mono
                  text-xl
                  leading-none
                  text-primary/80
                  mt-1
                "
              >
                {String(places.length).padStart(2, "0")}
              </p>

            </div>


            {/* =================================================
                CENTER BOTTOM LABEL
            ================================================= */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                pointer-events-none
              "
            >

              <p
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.4em]
                  text-primary/20
                  whitespace-nowrap
                "
              >
                COORDINATES ARE MEMORIES
              </p>

            </div>

          </div>


          {/* =================================================
              MEMORY PANEL
          ================================================= */}

          <AnimatePresence>

            {selectedPlace && (

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 30,
                }}
                transition={{
                  duration: 0.28,
                }}
                className="
                  absolute
                  right-4
                  top-[82px]
                  bottom-4
                  z-[200]
                  w-[calc(100%-32px)]
                  sm:w-[350px]
                  rounded-xl
                  border
                  border-primary/20
                  bg-[#020806]/95
                  backdrop-blur-xl
                  shadow-[0_0_40px_rgba(0,255,170,0.08)]
                  overflow-hidden
                  flex
                  flex-col
                "
              >


                {/* Header */}

                <div
                  className="
                    px-4
                    py-4
                    border-b
                    border-primary/10
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-primary/60
                      "
                    >
                      MEMORY LOCATION
                    </p>


                    <h3
                      className="
                        font-display
                        text-2xl
                        font-semibold
                        text-heading
                        mt-1.5
                      "
                    >
                      {selectedPlace.name}
                    </h3>


                    <p
                      className="
                        text-[11px]
                        text-muted
                        mt-0.5
                      "
                    >
                      {selectedPlace.state}
                    </p>

                  </div>


                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPlace(null)
                    }
                    className="
                      w-7
                      h-7
                      rounded-md
                      border
                      border-border
                      text-muted
                      hover:text-primary
                      hover:border-primary/30
                      transition
                    "
                  >
                    ×
                  </button>

                </div>


                {/* Content */}

                <div
                  className="
                    flex-1
                    overflow-y-auto
                  "
                >


                  {/* Date */}

                  <div className="px-4 pt-4">

                    <div className="flex items-center gap-2">

                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-primary
                          shadow-[0_0_7px_#00ffaa]
                        "
                      />

                      <span
                        className="
                          font-mono
                          text-[9px]
                          text-primary/80
                          tracking-wider
                        "
                      >
                        {selectedPlace.date}
                      </span>

                    </div>

                  </div>


                  {/* Photos */}

                  {selectedPlace.photos.length > 0 && (

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-2
                        p-4
                      "
                    >

                      {selectedPlace.photos.map(
                        (photo, index) => (

                          <motion.img
                            key={photo}
                            src={photo}
                            alt={`${selectedPlace.name} memory ${index + 1}`}
                            className="
                              w-full
                              h-28
                              object-cover
                              rounded-lg
                              border
                              border-primary/10
                            "
                            initial={{
                              opacity: 0,
                              scale: 0.96,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              delay: index * 0.06,
                            }}
                          />

                        )
                      )}

                    </div>

                  )}


                  {/* Story */}

                  <div className="px-4 pt-4">

                    <p
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-primary/60
                        mb-2
                      "
                    >
                      ABOUT THIS PLACE
                    </p>


                    <p
                      className="
                        text-xs
                        text-secondary
                        leading-relaxed
                      "
                    >
                      {selectedPlace.description}
                    </p>

                  </div>


                  {/* Experiences */}

                  <div className="p-4">

                    <p
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-primary/60
                        mb-3
                      "
                    >
                      EXPERIENCES
                    </p>


                    <div className="space-y-2.5">

                      {selectedPlace.experiences.map(
                        (experience) => (

                          <div
                            key={experience}
                            className="
                              flex
                              items-start
                              gap-2.5
                            "
                          >

                            <span
                              className="
                                mt-1
                                w-1
                                h-1
                                rounded-full
                                bg-primary
                                shadow-[0_0_6px_#00ffaa]
                                flex-shrink-0
                              "
                            />

                            <p
                              className="
                                text-xs
                                text-secondary
                              "
                            >
                              {experience}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>


                {/* Footer */}

                <div
                  className="
                    px-4
                    py-3
                    border-t
                    border-primary/10
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPlace(null)
                    }
                    className="
                      w-full
                      py-2.5
                      rounded-lg
                      border
                      border-primary/20
                      bg-primary/[0.035]
                      text-primary/80
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      hover:bg-primary/[0.07]
                      transition
                    "
                  >
                    CLOSE MEMORY
                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            mt-4
            px-1
          "
        >

          <p
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-muted/60
            "
          >
            A personal geography
          </p>


          <p
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-primary/20
            "
          >
            LIFE_MAP_v2.0
          </p>

        </div>

      </div>

    </section>
  );
}