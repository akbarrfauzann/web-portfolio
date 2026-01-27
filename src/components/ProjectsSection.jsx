import { ExternalLink, Github } from "lucide-react";

const isValidLink = (url) => url && url !== "#";

const projects = [
  {
    id: 1,
    title: "Public Complaint Information System",
    description:
      "A web-based system that allows citizens to submit and track public complaints efficiently with an admin management dashboard.",
    image: "/projects/pengaduan.png",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akbarrfauzann/public-complaints",
  },
  {
    id: 2,
    title: "Boston Celtics E-commerce Landing Page",
    description:
      "An e-commerce website featuring product listings, shopping cart functionality, and a modern UI inspired by the Boston Celtics brand.",
    image: "/projects/boston.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://akbarrfauzann.github.io/ecommerce-boston/",
    githubUrl: "https://github.com/akbarrfauzann/ecommerce-boston",
  },
  {
    id: 3,
    title: "Movie Website",
    description:
      "A movie discovery platform that fetches real-time data from a public API, allowing users to explore popular and trending movies.",
    image: "/projects/movies.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoUrl: "https://akbarrfauzann.github.io/movie-app/",
    githubUrl: "https://github.com/akbarrfauzann/movie-app",
  },
  {
    id: 4,
    title: "Hotel Landing Page",
    description:
      "A responsive hotel landing page designed to showcase rooms, facilities, and booking information with a clean user interface.",
    image: "/projects/hotel.png",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akbarrfauzann/hotel",
  },
  {
    id: 5,
    title: "Travel Agency Website",
    description:
      "A travel agency website that highlights destinations, travel packages, and booking features with a modern and responsive design.",
    image: "/projects/travels.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoUrl: "https://akbarrfauzann.github.io/travels/",
    githubUrl: "https://github.com/akbarrfauzann/travels",
  },
  {
    id: 6,
    title: "Adidas Landing Page",
    description:
      "A product landing page inspired by Adidas branding, focused on visual presentation, responsiveness, and clean UI interactions.",
    image: "/projects/adidas.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://akbarrfauzann.github.io/adidas-design/",
    githubUrl: "https://github.com/akbarrfauzann/adidas-design",
  },
  {
    id: 7,
    title: "Moezmarket E-commerce Mobile App",
    description:
      "A mobile e-commerce application that enables users to browse products, manage carts, and place orders with smooth state management.",
    image: "/projects/moezmarket.png",
    tags: ["Flutter", "Dart", "GetX"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mx-auto max-w-2xl mb-12">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center space-x-3">
                  {/* Demo */}
                  <a
                    href={
                      isValidLink(project.demoUrl) ? project.demoUrl : undefined
                    }
                    target={isValidLink(project.demoUrl) ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-disabled={!isValidLink(project.demoUrl)}
                    title={
                      isValidLink(project.demoUrl)
                        ? "Live Demo"
                        : "Demo not available"
                    }
                    className={
                      isValidLink(project.demoUrl)
                        ? "text-foreground/80 hover:text-primary transition-colors"
                        : "text-muted-foreground opacity-50 pointer-events-none cursor-not-allowed"
                    }
                  >
                    <ExternalLink size={20} />
                  </a>

                  {/* GitHub */}
                  <a
                    href={
                      isValidLink(project.githubUrl)
                        ? project.githubUrl
                        : undefined
                    }
                    target={
                      isValidLink(project.githubUrl) ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    aria-disabled={!isValidLink(project.githubUrl)}
                    title={
                      isValidLink(project.githubUrl)
                        ? "GitHub Repository"
                        : "Repository not available"
                    }
                    className={
                      isValidLink(project.githubUrl)
                        ? "text-foreground/80 hover:text-primary transition-colors"
                        : "text-muted-foreground opacity-50 pointer-events-none cursor-not-allowed"
                    }
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
