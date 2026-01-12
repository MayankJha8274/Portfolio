import { Code, Database, Layout, Brain, Server, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "primary",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "WebRTC"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "neon-green",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "DSA & Problem Solving",
    icon: Brain,
    color: "primary",
    skills: ["Data Structures", "Algorithms", "LeetCode", "GFG", "Coding Ninjas", "HackerRank"],
  },
  {
    title: "Languages",
    icon: Code,
    color: "secondary",
    skills: ["C++", "C", "JavaScript"],
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    color: "neon-green",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Cloudinary", "Passport.js"],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/30 hover:border-primary",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/30 hover:border-secondary",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]",
    },
    "neon-green": {
      bg: "bg-neon-green/10",
      text: "text-neon-green",
      border: "border-neon-green/30 hover:border-neon-green",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.3)]",
    },
  };
  return colors[color] || colors.primary;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-primary font-mono mb-4">
            {"<Skills />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`glass-card p-6 rounded-xl border ${colors.border} ${colors.shadow} transition-all duration-300 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold font-display">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono ${colors.bg} ${colors.text} border border-transparent hover:border-current transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text font-display">800+</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary font-display">Top 15%</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono">LeetCode Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neon-green font-display">6+</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text font-display">2028</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono">Graduating Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
