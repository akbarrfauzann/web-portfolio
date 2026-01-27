import { useState } from "react";
import { cn } from "../lib/utils";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Visual Studio Code", category: "Tools" },
  { name: "GitHub & GitLab", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Frontend", icon: Code2 },
  { name: "Backend", icon: Database },
  { name: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      className="px-4 py-24 relative bg-secondary/30 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "group px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium",
                  "border-2 transform hover:scale-105 active:scale-95",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-foreground/70 border-border hover:border-primary/30",
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive
                      ? "rotate-12 scale-110"
                      : "group-hover:rotate-12 group-hover:scale-110",
                  )}
                />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "group relative bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6",
                "border border-border hover:border-primary/50",
                "hover:-translate-y-2 cursor-default",
                "animate-in fade-in-0 slide-in-from-bottom-3",
              )}
              style={{
                animationDelay: `${index * 40}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Skill name */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Category badge */}
              <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-xl">
                {skill.category}
              </span>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  <div
                    className="w-1 h-1 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-1 h-1 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
