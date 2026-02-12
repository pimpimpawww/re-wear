import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
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
            Get to Know Me
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-16"
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              <div 
                className="w-full rounded-2xl shadow-lg border border-border overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                <img 
                  src="/najwa-portrait.jpg" 
                  alt="Najwa Aulia - Multimedia & UI/UX Designer" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-foreground font-body leading-relaxed text-base">
                Najwa Aulia is a multimedia student with a strong passion for UI/UX design and digital creativity. With one year of experience working as a teacher in a private elementary school, she developed strong communication skills, empathy, and responsibility.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-base">
                She focuses on creating clean, user-centered digital experiences that balance aesthetics and functionality. Her design approach emphasizes simplicity, clarity, and thoughtful visual hierarchy.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-base">
                Najwa enjoys designing landing pages, building interactive websites, and exploring motion graphics. She believes that great design is not only visually appealing but also solves real user problems.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-base">
                She is detail-oriented, creative, and continuously learning to grow in the digital industry.
              </p>

              <div className="pt-4">
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-body mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["UI/UX Design", "Web Design", "Motion Graphics", "Brand Identity", "Figma", "Adobe Suite"].map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="px-4 py-2 bg-card text-foreground text-sm font-body rounded-full border border-border shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
