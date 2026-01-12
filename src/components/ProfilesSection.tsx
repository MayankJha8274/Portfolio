import { useEffect, useState, useRef } from "react";
import { ExternalLink, Code2, Github, Trophy } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    icon: Code2,
    stat: "Top 15%",
    description: "Competitive programming & algorithm practice",
    color: "primary",
    link: "https://leetcode.com/u/Mayank_jha6789/",
  },
  {
    name: "GitHub",
    icon: Github,
    stat: "Active",
    description: "Open source contributions & projects",
    color: "secondary",
    link: "https://github.com/MayankJha8274",
  },
  {
    name: "Codolio",
    icon: Trophy,
    stat: "Profile",
    description: "Coding achievements & portfolio",
    color: "neon-green",
    link: "https://codolio.com/profile/Mayank%20jha",
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

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const ProfilesSection = () => {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-primary font-mono mb-4">
            {"<CodingProfiles />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Coding <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track my progress across competitive programming platforms
          </p>
        </div>

        {/* Main Stats */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl mb-12 text-center">
          <div className="flex flex-col items-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text font-display mb-4">
              <AnimatedCounter target={800} />+
            </div>
            <div className="text-xl sm:text-2xl text-muted-foreground font-mono">
              Problems Solved Across All Platforms
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                LeetCode
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                GeeksforGeeks
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
                Coding Ninjas
              </span>
            </div>
          </div>
        </div>

        {/* Profile Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => {
            const colors = getColorClasses(profile.color);
            const Icon = profile.icon;

            return (
              <a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-6 rounded-xl border ${colors.border} ${colors.shadow} transition-all duration-300 group block`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                <h3 className="text-xl font-bold font-display mb-1">{profile.name}</h3>
                <div className={`text-2xl font-bold ${colors.text} font-mono mb-2`}>
                  {profile.stat}
                </div>
                <p className="text-sm text-muted-foreground">{profile.description}</p>
              </a>
            );
          })}
        </div>

        {/* Achievements Display */}
        <div className="mt-12 glass-card p-1 rounded-2xl max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">achievements.sh</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-neon-green font-mono">$</span>
                <span className="text-foreground font-mono">cat achievements.log</span>
              </div>
              <div className="space-y-4 mt-4">
                {/* GDG Achievement */}
                <div className="border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        🥈 2nd Position - DSA Contest
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Data Structures and Algorithms contest organized by Google Developer Groups (GDG) Coderush at BPIT
                      </p>
                      <a
                        href="https://drive.google.com/file/d/1HRb6iLe2gBTruYHD9bWI_Y850cFtD3iG/view?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* LeetCode Achievement */}
                <div className="border border-border/50 rounded-lg p-4 hover:border-secondary/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        LeetCode Global Rating
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Achieved a global rating of <span className="text-secondary font-semibold">1665</span> on LeetCode
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-neon-green font-mono">$</span>
                <span className="text-foreground font-mono">_</span>
                <span className="w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
