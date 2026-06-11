import { ArrowRight, ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chat-Now Application",
    description: "A peer-to-peer chat application built with WebSockets for Real time Messaging.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Express.js", "WebSocket", "MongoDB"],
    demoUrl: "https://chatnow-application.onrender.com/login",
    githubUrl: "https://github.com/vivek0u0705/ChatNow-Application-",
  },
  {
    id: 2,
    title: "Portfolio Website with Automated CI/CD Deployment",
    description:
      "A personal portfolio website showcasing my projects and skills, with automated CI/CD deployment using GitHub Actions.",
    image: "/projects/project2.png",
    tags: ["React ", "AWS S3", "Amazon CloudFront", "AWS IAM", "TailwindCSS", "AWS DynamoDB", "AWS Lambda"],
    demoUrl: "https://d2qpdwu496dmt8.cloudfront.net/",
    githubUrl: "https://github.com/vivek0u0705/portfolio",
  },
  {
    id: 3,
    title: "Loan Predictor and Risk Analyser",
    description:
      "Machine Learning-powered web application that predicts loan approvals, evaluates borrower default risk, and classifies applicants into risk categories using an XGBoost model.",
    image: "/projects/project3.png",
    tags: ["React.js", "Flask", "Python", "XGBoost", "Scikit-Learn", "REST API"],
    demoUrl: "https://smart-loan-approval-system.vercel.app/",
    githubUrl: "https://github.com/vivek0u0705/smart-loan-approval-system",
    codeUrl: "https://colab.research.google.com/drive/1y3-q_Llu593SocRSuhHsrtPgo_8ozcgc",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-secondary/30 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="View Code (Google Colab)"
                      >
                        <Code size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vivek0u0705?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
