import { GraduationCap, Target, Rocket, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-primary font-mono mb-4">
            {"<About />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Editor Style Bio */}
          <div className="glass-card p-1 rounded-2xl order-2 lg:order-1">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">about.tsx</span>
              </div>
              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">01</span>
                  <span>
                    <span className="text-neon-purple">// </span>
                    <span className="text-muted-foreground">Hey there! 👋</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">02</span>
                  <span className="text-muted-foreground" />
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">03</span>
                  <span>
                    <span className="text-foreground">I'm a </span>
                    <span className="text-primary">B.Tech IT student</span>
                    <span className="text-foreground"> at Bhagwan</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">04</span>
                  <span className="text-foreground">Parshuram Institute of Technology,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">05</span>
                  <span className="text-foreground">graduating in 2028.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">06</span>
                  <span className="text-muted-foreground" />
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">07</span>
                  <span>
                    <span className="text-foreground">My passion lies in </span>
                    <span className="text-secondary">full-stack</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">08</span>
                  <span>
                    <span className="text-secondary">development</span>
                    <span className="text-foreground"> and solving complex</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">09</span>
                  <span className="text-foreground">algorithmic challenges.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">10</span>
                  <span className="text-muted-foreground" />
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">11</span>
                  <span>
                    <span className="text-foreground">With </span>
                    <span className="text-neon-green">800+ problems</span>
                    <span className="text-foreground"> solved across</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">12</span>
                  <span className="text-foreground">LeetCode, GFG, and Coding Ninjas,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">13</span>
                  <span className="text-foreground">I continuously sharpen my skills.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">14</span>
                  <span className="text-muted-foreground" />
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">15</span>
                  <span>
                    <span className="text-neon-purple">export default </span>
                    <span className="text-primary">ReadyToCollaborate</span>
                    <span className="text-muted-foreground">;</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="glass-card p-6 rounded-xl group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.4)] transition-all duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    B.Tech in Information Technology at Bhagwan Parshuram Institute of Technology, Delhi (2024-2028)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl group hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:shadow-[0_0_15px_hsl(var(--neon-purple)/0.4)] transition-all duration-300">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Development Focus</h3>
                  <p className="text-muted-foreground text-sm">
                    Full-stack web development using modern technologies like React, Node.js, Express, and MongoDB to build scalable applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl group hover:border-neon-green/50 hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neon-green/10 text-neon-green group-hover:shadow-[0_0_15px_hsl(var(--neon-green)/0.4)] transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                  <p className="text-muted-foreground text-sm">
                    Top 15% on LeetCode with 800+ problems solved. Strong foundation in Data Structures & Algorithms.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.4)] transition-all duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">My Goal</h3>
                  <p className="text-muted-foreground text-sm">
                    To build impactful, scalable software that solves real-world problems and makes a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
