import { ExternalLink, Github, MapPin, Video, CheckSquare } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "FaceTrack Meet",
    description: "AI-powered video conferencing with real-time facial recognition attendance system.",
    longDescription: "Revolutionary video conferencing platform that solves manual attendance tracking. Features real-time peer-to-peer video calls using WebRTC and Socket.io, with automated facial recognition attendance powered by TensorFlow.js and face-api.",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.io", "TensorFlow.js", "face-api", "MongoDB Atlas"],
    icon: Video,
    color: "neon-green",
    features: [
      "Real-time P2P video calls with WebRTC",
      "Facial recognition with TensorFlow.js",
      "Automated attendance tracking",
      "Socket.io for real-time communication",
    ],
    liveLink: "https://meet-track-gfjrb5dl4-mayank-jhas-projects-cb150424.vercel.app",
    githubLink: "https://github.com/MayankJha8274/MeetTrack-AI",
  },
  {
    title: "WanderLust",
    description: "A property listing platform with secure authentication, image uploads, and geolocation features.",
    longDescription: "Full-featured property listing platform enabling users to discover and list properties. Features secure authentication using Passport.js, session handling, image upload via Cloudinary + Multer, and geolocation using OpenCage API.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC", "Passport.js", "Cloudinary"],
    icon: MapPin,
    color: "primary",
    features: [
      "Secure authentication with Passport.js",
      "Image upload via Cloudinary + Multer",
      "Geolocation using OpenCage API",
      "MVC architecture pattern",
    ],
    liveLink: "https://major-project-1-f6xe.onrender.com/",
    githubLink: "https://github.com/MayankJha8274/Major-Project-1",
  },
  {
    title: "TaskHub",
    description: "MERN-based task manager with AI chatbot, email reminders, and analytics dashboard.",
    longDescription: "Comprehensive task management solution built on the MERN stack. Features an AI chatbot for productivity insights, automated email reminders using Nodemailer + cron jobs, and a full analytics dashboard with charts and metrics.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Nodemailer", "Chart.js"],
    icon: CheckSquare,
    color: "secondary",
    features: [
      "AI chatbot for productivity insights",
      "Email reminders with Nodemailer + cron",
      "Analytics dashboard with charts",
      "Secure user authentication",
    ],
    liveLink: "https://task-hub-hvdo.onrender.com",
    githubLink: "https://github.com/MayankJha8274/Task-Hub",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/30 group-hover:border-primary",
      gradient: "from-primary/20 to-transparent",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/30 group-hover:border-secondary",
      gradient: "from-secondary/20 to-transparent",
    },
    "neon-green": {
      bg: "bg-neon-green/10",
      text: "text-neon-green",
      border: "border-neon-green/30 group-hover:border-neon-green",
      gradient: "from-neon-green/20 to-transparent",
    },
  };
  return colors[color] || colors.primary;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-primary font-mono mb-4">
            {"<Projects />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.title}
                className={`glass-card rounded-2xl overflow-hidden border ${colors.border} group transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--${project.color === 'primary' ? 'neon-cyan' : project.color === 'secondary' ? 'neon-purple' : 'neon-green'})/0.2)]`}
              >
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  {/* Project Visual */}
                  <div className={`lg:w-2/5 p-8 bg-gradient-to-br ${colors.gradient}`}>
                    <div className="h-full min-h-[250px] flex items-center justify-center">
                      <div className={`p-8 rounded-2xl ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-20 h-20" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${colors.bg} ${colors.text}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 font-mono">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')} ${colors.text}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-muted/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="neon-outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                      <Button variant="glass" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
