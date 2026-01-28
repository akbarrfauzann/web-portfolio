import { useState } from "react";
import { Code, Layout, SearchCheck } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Front-End Development",
    description:
      "Building modern and responsive user interfaces using React, Tailwind CSS, and Next.js.",
  },
  {
    icon: SearchCheck,
    title: "QA Manual Testing",
    description:
      "Performing thorough black-box testing to ensure application functionality, stability, and optimal user experience.",
  },
  {
    icon: Code,
    title: "Web Solutions",
    description:
      "Delivering end-to-end web solutions optimized for performance, scalability, and SEO.",
  },
];

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="about" className="px-4 py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Description */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-foreground">
              Front-End Developer & QA Manual Tester
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A graduate of SMK Wikrama Bogor with a major in Software
              Engineering, passionate about detailed learning and pursuing a
              career as a Front-End Developer.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have hands-on internship experience as a Web Developer and
              Mobile Developer, as well as experience as a QA Manual tester.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The combination of coding and testing skills enables me to build
              applications that are not only visually appealing, but also
              technically robust and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="cosmic-button"
              >
                Get In Touch
              </a>

              <a
                href="/public/Muhammad Akbar Fauzan Susetyo - CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-primary px-6 py-2 text-center font-medium text-primary transition-all duration-300 hover:bg-primary hover:shadow-[0_0_20px_rgba(74,106,89,0.5)] hover:scale-105 active:scale-95 hover:text-primary-foreground"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                </span>
              </a>
            </div>
          </div>

          {/* Right: Services */}
          <div className="grid gap-5 animate-fade-in-delay-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative cursor-default rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                  style={{
                    animation: `fade-in 0.5s ease-out forwards ${
                      0.4 + index * 0.1
                    }s`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary">
                      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>

                    <div>
                      <h4 className="mb-2 text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 rounded-b-2xl bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                  {isHovered && (
                    <div className="absolute top-4 right-4 animate-pulse">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
