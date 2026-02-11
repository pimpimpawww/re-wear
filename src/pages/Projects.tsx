import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Image } from "lucide-react";

const projects = [
  {
    title: "SmartBudget – Personal Finance App",
    category: "UI/UX Case Study",
    description:
      "A minimalist mobile app designed to help young adults manage their personal finances with clarity and ease. Focused on reducing complexity through intuitive dashboard design and clear expense tracking features.",
    button: "View Case Study",
  },
  {
    title: "Elfan AI Academy – Landing Page Redesign",
    category: "Web Design",
    description:
      "A modern and conversion-focused landing page for an AI education platform. Designed with clean layout, strong visual hierarchy, and responsive structure.",
    button: "View Project",
  },
  {
    title: "Youth Digital Campaign Visual",
    category: "Creative Multimedia",
    description:
      "A digital campaign concept combining warm earthy tones and modern typography to create an engaging and approachable visual identity.",
    button: "View Details",
  },
  {
    title: "Product Showcase Animation",
    category: "Motion Graphics",
    description:
      "A short motion graphic animation using smooth transitions and 3D effects to present product packaging in an elegant and premium style.",
    button: "Watch Animation",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-16"
          >
            Selected Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Image className="w-10 h-10 text-primary mx-auto" />
                    <p className="text-xs text-muted-foreground font-body">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs tracking-[0.15em] uppercase text-primary font-body font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-medium text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent hover:text-primary transition-colors duration-300 pt-2 group/btn">
                    {project.button}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
