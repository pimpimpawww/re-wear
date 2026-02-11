import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl -z-10" />

        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body mb-6"
          >
            Multimedia & UI/UX Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.15] text-foreground mb-6"
          >
            Hi, I'm{" "}
            <span className="italic text-primary">Najwa Aulia</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-5xl">
              Multimedia & UI/UX Enthusiast
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-accent font-heading italic mb-4"
          >
            "Designing meaningful experiences through simplicity."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I help brands communicate clearly through clean and thoughtful digital design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground text-sm font-body font-medium tracking-wide hover:opacity-90 transition-all duration-300 rounded-full shadow-lg shadow-primary/20"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 border border-accent text-accent text-sm font-body font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-full"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
