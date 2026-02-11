import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Stationery Brand",
    category: "Brand Identity",
    year: "2024",
    image: project1,
  },
  {
    title: "Interior Concept",
    category: "Space Design",
    year: "2024",
    image: project2,
  },
  {
    title: "Packaging Design",
    category: "Packaging",
    year: "2023",
    image: project3,
  },
  {
    title: "Ceramic Collection",
    category: "Product Design",
    year: "2023",
    image: project4,
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
            Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-16"
          >
            Karya Terpilih
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-sm mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-medium text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-body">
                    {project.year}
                  </span>
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
