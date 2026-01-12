import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const typingTexts = [
  "Full Stack Web Developer",
  "Problem Solver",
  "DSA Enthusiast",
  "800+ Problems Solved",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="section-container relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Mayank Jha</span>
            </h1>

            <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="font-mono text-xl sm:text-2xl lg:text-3xl text-primary">
                <span className="text-muted-foreground">{">"}</span> {displayText}
                <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary animate-pulse ml-1" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              B.Tech IT student at BPIT (2028) • Top 15% LeetCode user • 
              Building scalable web applications and solving complex algorithmic challenges.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="neon" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="neon-outline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com/MayankJha8274"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-jha-08b25832a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Mayank_jha6789/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image / Terminal */}
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl" />
              
              {/* Terminal Window */}
              <div className="relative glass-card p-1 rounded-2xl">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500" />
                    <div className="terminal-dot bg-yellow-500" />
                    <div className="terminal-dot bg-green-500" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">mayank@portfolio ~ </span>
                  </div>
                  <div className="p-6 space-y-3 min-w-[320px] sm:min-w-[400px]">
                    <div className="code-line">
                      <span className="text-neon-purple">const</span>{" "}
                      <span className="text-primary">developer</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-muted-foreground">{"{"}</span>
                    </div>
                    <div className="code-line pl-4">
                      <span className="text-neon-green">name</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-yellow-400">"Mayank Jha"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="code-line pl-4">
                      <span className="text-neon-green">role</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-yellow-400">"Full Stack Dev"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="code-line pl-4">
                      <span className="text-neon-green">problems</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-primary">800</span>
                      <span className="text-muted-foreground">+,</span>
                    </div>
                    <div className="code-line pl-4">
                      <span className="text-neon-green">leetcode</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-yellow-400">"Top 15%"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="code-line pl-4">
                      <span className="text-neon-green">passion</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-yellow-400">"Building Dreams"</span>
                    </div>
                    <div className="code-line">
                      <span className="text-muted-foreground">{"}"}</span>
                      <span className="text-muted-foreground">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
