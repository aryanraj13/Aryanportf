import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const movies = [
  {
    name: "1917",
    year: "2019",
    poster: "/cinema/1917 (2019).jpg",
  },
  {
    name: "Air",
    year: "2023",
    poster: "/cinema/Air (2023).png",
  },
  {
    name: "Arrival",
    year: "2016",
    poster: "/cinema/Arrival (2016).jpeg",
  },
  {
    name: "Ballerina",
    year: "2025",
    poster: "/cinema/Ballerina (2025).png",
  },
  {
    name: "Chernobyl",
    year: "2019",
    poster: "/cinema/Chernobyl (2019).png",
  },
  {
    name: "Don't Look Up",
    year: "2021",
    poster: "/cinema/Don't Look Up (2021).jpg",
  },
  {
    name: "Dune",
    year: "2021",
    poster: "/cinema/Dune (2021).jpg",
  },
  {
    name: "Dune: Part Two",
    year: "2024",
    poster: "/cinema/dune2.jpeg",
  },
  {
    name: "Dunkirk",
    year: "2017",
    poster: "/cinema/Dunkirk (2017).jpeg",
  },
  {
    name: "F1",
    year: "2025",
    poster: "/cinema/F1 (2025).png",
  },
  {
    name: "Furiosa: A Mad Max Saga",
    year: "2024",
    poster: "/cinema/Furiosa- A Mad Max Saga (2024).jpg",
  },
  {
    name: "Game of Thrones",
    year: "",
    poster: "/cinema/got.jpg",
  },
  {
    name: "House of the Dragon",
    year: "",
    poster: "/cinema/hotd.jpg",
  },
  {
    name: "Man of Steel",
    year: "2013",
    poster: "/cinema/Man of Steel (2013).jpg",
  },
  {
    name: "Marvel Studios",
    year: "",
    poster: "/cinema/Marvel Studios.jpeg",
  },
  {
    name: "Mission: Impossible – Fallout",
    year: "2018",
    poster: "/cinema/MissionImpossibleFallout (2018).png",
  },
  {
    name: "Mission: Impossible – The Final Reckoning",
    year: "2025",
    poster: "/cinema/MissionImpossibleThe Final Reckoning (2025).png",
  },
  {
    name: "Oppenheimer",
    year: "2023",
    poster: "/cinema/Oppenheimer (2023).jpg",
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    poster: "/cinema/Spider-Man- Across the Spider-Verse (2023).png",
  },
  {
    name: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    poster: "/cinema/Spider-Man- Into the Spider-Verse (2018).jpg",
  },
  {
    name: "The Batman",
    year: "2022",
    poster: "/cinema/The Batman (2022).png",
  },
  {
    name: "The Dark Knight",
    year: "2008",
    poster: "/cinema/The Dark Knight (2008).jpeg",
  },
  {
    name: "The Penguin",
    year: "2024",
    poster: "/cinema/The Penguin (2024).png",
  },
  {
    name: "Thunderbolts*",
    year: "2025",
    poster: "/cinema/Thunderbolts_ (2025).jpg",
  },
  {
    name: "Zack Snyder's Justice League",
    year: "2021",
    poster: "/cinema/Zack Snyder's Justice League (2021).jpg",
  },
];

/*
  Your personal photos.
  These are loaded directly from:
  public/photos/
*/
const photos = [
  "IMG_1293.JPG",
  "IMG_1294.JPG",
  "IMG_1301.JPG",
  "IMG_1305.JPG",
  "IMG_1746.jpg",
  "IMG_1765.jpg",
  "IMG_1779.jpg",
  "IMG_1785.jpg",
  "IMG_1769.jpg",
  "IMG_1847.jpg",
  "IMG_20221226_020839_229.jpg",
  "IMG_20231209_223018_754.jpg",
  "IMG_1788.jpg",
  "IMG_1845.jpg",
  "IMG_1850.jpg",
  "photo_6319088815016364286_y.jpg",
  "photo_6052875214318057988_y.jpg",
  "photo_6319088815016364264_y.jpg",
  "photo_6319088815016364266_y.jpg",
  "photo_6319088815016364268_y.jpg",
  "photo_6319088815016364256_y.jpg",
  "photo_6319088815016364251_y.jpg",
  "photo_6319088815016364253_y.jpg",
  "photo_6319088815016364272_y.jpg",
  "photo_6319088815016364263_y.jpg",
  "photo_6319088815016364285_y.jpg",
  "photo_6319088815016364281_y.jpg",
  "IMG_20240524_193740.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_403a2699.jpg",
  "photo_6319088815016364282_y.jpg",
  "photo_6319088815016364283_y.jpg",
  "photo_6319088815016364284_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_3c30febb.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_246fc5c5.jpg",
  "photo_6319088815016364260_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_13675d19.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_a03d274b.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_a7d283d7.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_b12f2ca8.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_c6aa6688.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_ccebafcf.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_d7301fcd.jpg",
  "IMG_20231218_172526.jpg",
  "photo_6319088815016364270_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_c84486a4.jpg",
  "IMG_20231219_082423.jpg",
  "photo_6319088815016364267_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_6737f13c.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_328cb1fc.jpg",
  "IMG-20230919-WA0074.jpg",
  "photo_6319088815016364265_y.jpg",
  "photo_6319088815016364261_y.jpg",
];

const encodePhoto = (filename) => `/photos/${encodeURIComponent(filename)}`;

export default function LifeStories() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-hidden">
      {/* Hero */}
      <section className="container-px mx-auto max-w-7xl pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-mono text-xs text-primary uppercase tracking-[0.25em] mb-4">
            Beyond Code
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-heading tracking-tight">
            Life <span className="text-primary">&</span> Stories
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-secondary leading-relaxed">
            A personal collection of the things that inspire me — cinema,
            music, photography, places, people, and the little moments that
            make life interesting.
          </p>
        </motion.div>

        <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-12 md:mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <img
                src="/lifefront.png"
                alt="Life and Stories"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
      </section>

      {/* Cinema */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="text-center mb-10">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            Cinema
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading">
            Movies & shows that belong in a museum.
          </h2>

          <p className="text-secondary mt-4 max-w-xl mx-auto">
            Stories that stayed with me long after the credits rolled.
          </p>

          {/* Letterboxd */}
          <div className="mt-7">
            <a
              href="https://boxd.it/bwBl5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl
                         bg-card border border-border
                         text-heading hover:border-primary
                         hover:text-primary transition-all duration-300"
            >
              <span className="font-display font-semibold">
                Letterboxd
              </span>

              <FiExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Movie Posters */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent" />

          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...movies, ...movies].map((movie, index) => (
                <div
                  key={`${movie.name}-${index}`}
                  className="w-[150px] sm:w-[180px] md:w-[200px] flex-shrink-0 group"
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <img
                      src={movie.poster}
                      alt={movie.name}
                      className="w-full aspect-[2/3] object-cover
                                 transition-transform duration-500
                                 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-heading font-medium truncate">
                      {movie.name}
                    </p>

                    {movie.year && (
                      <p className="text-xs text-muted mt-1">
                        {movie.year}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-px mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Photography */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
            Photography
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-heading">
            Life through my <span className="text-primary">eyes.</span>
          </h2>

          <p className="text-secondary mt-5 max-w-xl mx-auto leading-relaxed">
            Frames from places, journeys, people, and moments that I wanted
            to remember.
          </p>

          {/* Pinterest */}
          <div className="mt-7">
            <a
              href="https://in.pinterest.com/aryanraj_13/_pins/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl
                         bg-card border border-border
                         text-heading hover:border-primary
                         hover:text-primary transition-all duration-300"
            >
              <span className="font-display font-semibold">
                Pinterest
              </span>

              <FiExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            xl:columns-4
            gap-5
          "
        >
          {photos.map((photo, index) => (
            <motion.div
              key={`${photo}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.03, 0.3),
              }}
              className="mb-5 break-inside-avoid"
            >
              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-border bg-card
                "
              >
                <img
                  src={encodePhoto(photo)}
                  alt={`Life and stories ${index + 1}`}
                  loading="lazy"
                  className="
                    w-full h-auto object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Hover overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-bg/50 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom */}
      <section className="container-px mx-auto max-w-3xl pb-28 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12" />

        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
          Life & Stories
        </p>

        <h2 className="font-display text-3xl sm:text-4xl text-heading font-semibold">
          There is more to life than code.
        </h2>

        <p className="text-secondary mt-5 leading-relaxed">
          These are some of the things that keep me curious, inspired, and
          grounded outside of software engineering.
        </p>
      </section>
    </div>
  );
}