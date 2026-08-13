import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ImageLightbox from "../../../components/ImageLightbox";
import LazyVideo from "../../../components/LazyVideo";
import GumletVideo from "../../../components/GumletVideo";
import ProjectScrollReset from "../../../components/ProjectScrollReset";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const isPhotography = project.category === "Photography";
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

  return (
    <main className="min-h-screen bg-darkBg px-6 py-24 text-white md:px-10">
      <ProjectScrollReset />
      
      <div className="mx-auto max-w-7xl">

        {/* PROJECT HEADER */}
        <header className="mb-24">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-gold">
            {project.category}
          </p>

          <h1 className="font-syne text-5xl font-bold uppercase leading-none md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl font-sans text-sm leading-7 text-white/50 md:text-base">
            {project.description}
          </p>

          <p className="mt-6 font-sans text-xs uppercase tracking-[0.25em] text-white/30">
            {project.year}
          </p>
        </header>

        {/* =====================================================
            PHOTOGRAPHY
        ===================================================== */}

        {isPhotography && project.photos.length > 0 && (
          <section>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                  01
                </p>

                <h2 className="font-syne text-4xl font-bold uppercase md:text-6xl">
                  Photography
                </h2>
              </div>

              <span className="hidden font-sans text-xs uppercase tracking-[0.2em] text-white/30 md:block">
                {project.photos.length} Images
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {project.photos.map((photo, index) => (
                <div
                  key={photo.src}
                  className="group overflow-hidden bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageLightbox
                      images={project.photos}
                      initialIndex={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            VIDEOS
        ===================================================== */}

        {!isPhotography && project.videos.length > 0 && (
          <section>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                  01
                </p>

                <h2 className="font-syne text-4xl font-bold uppercase md:text-6xl">
                  {project.category}
                </h2>
              </div>

              <span className="hidden font-sans text-xs uppercase tracking-[0.2em] text-white/30 md:block">
                {project.videos.length} Films
              </span>
            </div>

            <div className="mx-auto max-w-5xl space-y-8">
              {project.videos.map((video, index) => (
  <div
    key={`${video.src}-${index}`}
    className="overflow-hidden rounded-sm bg-surface"
  >
   {video.src.includes("play.gumlet.io/embed/") ? (
  <GumletVideo
  src={video.src}
  title={video.alt}
  vertical={project.category === "Reels"}
/>
) : (
  <LazyVideo
    src={video.src}
    poster={project.cover}
    className="mx-auto block w-full max-h-[75vh] object-contain"
  />
)}

  </div>
))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}