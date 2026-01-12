import { Mail, Phone, MapPin, Github, Linkedin, Code2, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/MayankJha8274",
    color: "primary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/mayank-jha-08b25832a/",
    color: "secondary",
  },
  {
    name: "LeetCode",
    icon: Code2,
    link: "https://leetcode.com/u/Mayank_jha6789/",
    color: "neon-green",
  },
  {
    name: "Codolio",
    icon: ExternalLink,
    link: "https://codolio.com/profile/Mayank%20jha",
    color: "primary",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-primary font-mono mb-4">
            {"<Contact />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Info Cards */}
          <div className="space-y-4">
            <a
              href="mailto:mayankjha8274@gmail.com"
              className="glass-card p-6 rounded-xl flex items-center gap-4 group hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.2)] transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-mono">Email</div>
                <div className="text-foreground font-medium">mayankjha8274@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+918287457165"
              className="glass-card p-6 rounded-xl flex items-center gap-4 group hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.2)] transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-mono">Phone</div>
                <div className="text-foreground font-medium">+91 8287457165</div>
              </div>
            </a>

            <div className="glass-card p-6 rounded-xl flex items-center gap-4 group hover:border-neon-green/50 hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.2)] transition-all duration-300">
              <div className="p-3 rounded-lg bg-neon-green/10 text-neon-green group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-mono">Location</div>
                <div className="text-foreground font-medium">Delhi, India</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-6 rounded-xl">
            <h4 className="text-sm font-mono text-muted-foreground mb-4">{"// social_links"}</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Terminal Style */}
          <div className="glass-card p-1 rounded-xl">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">availability.sh</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">$</span>
                  <span className="text-foreground">check --availability</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="text-neon-green">✓</span> Open to full-time opportunities
                </div>
                <div className="text-muted-foreground">
                  <span className="text-neon-green">✓</span> Available for freelance projects
                </div>
                <div className="text-muted-foreground">
                  <span className="text-neon-green">✓</span> Interested in internships
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
