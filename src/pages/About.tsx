import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import aboutPortrait from "@/assets/about-portrait.jpg";

const skills = [
  "UI/UX Design",
  "Brand Identity",
  "Typography",
  "Web Design",
  "Art Direction",
  "Illustration",
];

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
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-16"
          >
            Tentang Saya
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src={aboutPortrait}
                alt="Portrait"
                className="w-full max-w-md h-[500px] object-cover rounded-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-foreground font-body leading-relaxed">
                  Halo! Saya adalah seorang creative designer dengan pengalaman lebih dari 5 tahun dalam menciptakan desain yang bersih dan bermakna. Saya percaya bahwa desain yang baik adalah desain yang tidak hanya indah, tetapi juga fungsional.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Pendekatan saya berfokus pada kesederhanaan dan kejelasan. Setiap proyek dimulai dengan pemahaman mendalam tentang kebutuhan dan tujuan, kemudian diterjemahkan ke dalam visual yang elegan dan efektif.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Saat ini saya berbasis di Jakarta dan terbuka untuk kolaborasi kreatif dengan klien dari berbagai industri.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-body mb-4">
                  Keahlian
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-body rounded-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-body mb-4">
                  Kontak
                </h3>
                <a
                  href="mailto:hello@portfolio.com"
                  className="text-foreground font-body hover:text-accent transition-colors duration-300 underline underline-offset-4"
                >
                  hello@portfolio.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
