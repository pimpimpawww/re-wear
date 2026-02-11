import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import heroImage from "@/assets/hero-abstract.jpg";

const Index = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body"
              >
                Creative Designer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl md:text-7xl font-heading font-medium leading-[1.1] text-foreground"
              >
                Crafting
                <br />
                <span className="italic text-accent">timeless</span>
                <br />
                experiences
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground font-body text-base max-w-md leading-relaxed"
              >
                Saya adalah seorang desainer yang berfokus pada menciptakan pengalaman visual yang bersih, bermakna, dan berkesan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-body tracking-wide hover:opacity-90 transition-opacity duration-300 rounded-sm"
                >
                  Lihat Karya
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 border border-border text-foreground text-sm font-body tracking-wide hover:bg-secondary transition-colors duration-300 rounded-sm"
                >
                  Tentang Saya
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Abstract art"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
