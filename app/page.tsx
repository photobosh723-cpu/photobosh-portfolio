"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { projects, ProjectCategory } from "../data/projects";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Photography");

    useEffect(() => {
  const category = searchParams.get("category");

  if (
    category === "Photography" ||
    category === "Cinematography" ||
    category === "Commercial Ads" ||
    category === "Reels"
  ) {
    setActiveCategory(category as ProjectCategory);
  }
}, [searchParams]);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

  const categories: ProjectCategory[] = [
    "Photography",
    "Cinematography",
    "Commercial Ads",
    "Reels",
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-darkBg text-white">

      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10 md:py-8">

        <a
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="PhotoBosh"
            width={180}
            height={50}
            priority
            className="h-8 w-auto object-contain md:h-10"
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#work"
            className="font-sans text-xs uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-gold"
          >
            Work
          </a>

          <a
            href="#about"
            className="font-sans text-xs uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-gold"
          >
            About
          </a>

          <a
            href="#contact"
            className="font-sans text-xs uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-gold"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="font-sans text-xs uppercase tracking-[0.25em] text-white md:hidden"
        >
          Menu
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-darkBg md:hidden">

          <div className="flex items-center justify-between px-6 py-6">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="PhotoBosh"
                width={180}
                height={50}
                className="h-8 w-auto object-contain"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs uppercase tracking-[0.25em] text-white"
            >
              Close
            </button>

          </div>

          <div className="flex h-[calc(100vh-90px)] flex-col items-center justify-center gap-10">

            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="font-syne text-4xl uppercase tracking-tight text-white transition-colors hover:text-gold"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="font-syne text-4xl uppercase tracking-tight text-white transition-colors hover:text-gold"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-syne text-4xl uppercase tracking-tight text-white transition-colors hover:text-gold"
            >
              Contact
            </a>

          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        {/* HERO VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  poster="/hero-poster.jpg"
  disablePictureInPicture
  controlsList="nodownload"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO GLOW */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[80px]" />

<div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-white/[0.02] blur-2xl" />

<div className="absolute bottom-[10%] right-[10%] h-40 w-40 rounded-full bg-gold/[0.03] blur-[70px]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center">

          <p className="mb-6 font-sans text-sm uppercase tracking-[0.4em] text-gold">
            CINEMATIC VISUALS · PHOTOGRAPHY · FILM
          </p>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="relative text-center"
>
  <h1
    className="
      font-syne
      text-[14vw]
      font-semibold
      uppercase
      leading-[0.8]
      tracking-[-0.06em]
      text-white
      md:text-[10vw]
      lg:text-[8vw]
    "
  >
    Photo
  </h1>

  <h1
    className="
      -mt-[0.5vw]
      font-serif
      text-[14vw]
      font-normal
      italic
      leading-[0.8]
      tracking-[-0.05em]
      text-gold
      md:text-[10vw]
      lg:text-[8vw]
    "
  >
    Bosh
  </h1>

  <div className="mx-auto mt-6 h-px w-16 bg-gold/50 md:mt-8 md:w-24" />
</motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="mx-auto mt-8 max-w-xl font-sans text-sm leading-7 text-white/60 md:text-base"
          >
            Bishoy Efraim — Cinematographer & Photographer.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          WORK
      ===================================================== */}

      <section
        id="work"
        className="relative px-6 py-32 md:px-10 md:py-48"
      >

        <div className="mx-auto max-w-7xl">

          {/* WORK HEADER */}
          <div className="mb-12">

            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Selected Work
            </p>

            <div className="flex items-end justify-between gap-8">

              <h2 className="font-syne text-4xl font-bold uppercase md:text-6xl">
                Selected
                <br />

                <span className="font-serif font-normal italic text-white/60">
                  Projects
                </span>
              </h2>

              <span className="hidden font-sans text-xs uppercase tracking-[0.25em] text-white/30 md:block">
                {String(filteredProjects.length).padStart(2, "0")} Projects
              </span>

            </div>

          </div>

          {/* CATEGORY TABS */}
          <div className="mb-16 pb-3">

  <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap">

              {categories.map((category) => {

                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                   onClick={() => {
  const currentScroll = window.scrollY;

  router.push(
    `/?category=${encodeURIComponent(category)}`,
    {
      scroll: false,
    }
  );

  requestAnimationFrame(() => {
    window.scrollTo({
      top: currentScroll,
      behavior: "instant",
    });
  });
}}
                    className={`
                      whitespace-nowrap border px-5 py-3
                      font-sans text-[10px] uppercase
                      tracking-[0.2em]
                      transition-all duration-300
                      md:px-7 md:py-4 md:text-xs
                      ${
                        isActive
                          ? "border-gold bg-gold text-black"
                          : "border-white/10 bg-white/[0.02] text-white/50 hover:border-gold/50 hover:text-white"
                      }
                    `}
                  >
                    {category}
                  </button>
                );

              })}

            </div>

          </div>

          {/* PROJECTS */}
          {filteredProjects.length > 0 ? (

            <div className="grid gap-12 md:grid-cols-2">

              {filteredProjects.map((project, index) => (

                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                >

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.1 }}
transition={{
  duration: 0.5,
  delay: index * 0.05,
  ease: "easeOut",
}}
                    className="group cursor-pointer"
                  >

                    {/* PROJECT COVER */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-surface">

                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />

                    </div>

                    {/* PROJECT INFO */}
                    <div className="mt-6 flex items-start justify-between gap-6">

                      <div>

                        <h3 className="font-syne text-2xl font-semibold uppercase">
                          {project.title}
                        </h3>

                        <p className="mt-2 font-sans text-sm text-white/40">
                          {project.category}
                        </p>

                      </div>

                      <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
                        {project.year}
                      </span>

                    </div>

                  </motion.div>

                </Link>

              ))}

            </div>

          ) : (

            /* EMPTY CATEGORY */
            <div className="flex min-h-[300px] items-center justify-center border border-white/10 bg-white/[0.02]">

              <div className="text-center">

                <p className="font-syne text-2xl uppercase text-white/20 md:text-4xl">
                  No Projects Yet
                </p>

                <p className="mt-3 font-sans text-xs uppercase tracking-[0.25em] text-white/20">
                  More work coming soon
                </p>

              </div>

            </div>

          )}

        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative px-4 py-24 md:px-10 md:py-48"
      >

        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-5 md:gap-16">

          {/* PHOTO */}
          <div className="relative overflow-hidden bg-surface">

            <Image
              src="/about/bishoy.webp"
              alt="Bishoy Efraim"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 50vw, 50vw"
              className="block h-auto w-full object-cover"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.25em] text-gold md:mb-5 md:text-xs md:tracking-[0.35em]">
              About Me
            </p>

            <h2 className="font-syne text-2xl font-bold uppercase leading-none md:text-7xl">
              Bishoy
              <br />

              <span className="font-serif text-xl font-normal italic text-white/60 md:text-6xl">
                Efraim
              </span>
            </h2>

            <p className="mt-4 font-sans text-[10px] leading-5 text-white/60 md:mt-8 md:max-w-xl md:text-base md:leading-8">
              I’m Bishoy Efraim, a cinematographer and Photographer focused on
              creating cinematic visual stories through camera, movement, light,
              and atmosphere.
            </p>

            <p className="mt-3 font-sans text-[10px] leading-5 text-white/40 md:mt-5 md:max-w-xl md:text-base md:leading-8">
              My work is driven by visual storytelling, strong composition, and
              creating images that feel authentic, atmospheric, and memorable.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-10 md:gap-3">

              <span className="border border-white/10 px-2 py-1 font-sans text-[8px] uppercase tracking-[0.15em] text-white/50 md:px-4 md:py-2 md:text-xs md:tracking-[0.2em]">
                Cinematography
              </span>

              <span className="border border-white/10 px-2 py-1 font-sans text-[8px] uppercase tracking-[0.15em] text-white/50 md:px-4 md:py-2 md:text-xs md:tracking-[0.2em]">
                Photography
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative border-t border-white/10 px-6 py-32 md:px-10 md:py-48"
      >

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-gold">
            Get In Touch
          </p>

          <h2 className="font-syne text-5xl font-bold uppercase leading-none md:text-8xl">
            Let’s
            <br />

            <span className="font-serif font-normal italic text-white/60">
              Work Together
            </span>
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/201279494312"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-darkBg p-8 transition-colors hover:bg-surface"
            >

              <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/30">
                WhatsApp
              </p>

              <p className="mt-5 font-syne text-lg text-white transition-colors group-hover:text-gold">
                +20 127 949 4312
              </p>

            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/photo_bosh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-darkBg p-8 transition-colors hover:bg-surface"
            >

              <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/30">
                Instagram
              </p>

              <p className="mt-5 font-syne text-lg text-white transition-colors group-hover:text-gold">
                @photo_bosh
              </p>

            </a>

            {/* BEHANCE */}
            <a
              href="https://www.behance.net/beshoephraim"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-darkBg p-8 transition-colors hover:bg-surface"
            >

              <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/30">
                Behance
              </p>

              <p className="mt-5 font-syne text-lg text-white transition-colors group-hover:text-gold">
                Beshoephraim
              </p>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}