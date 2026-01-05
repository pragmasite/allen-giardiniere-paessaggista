import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="chi-siamo" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="text-foreground/70 mb-4 text-lg">{t.about.p1}</p>
            <p className="text-foreground/70 mb-8 text-lg">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-4">
              {[t.about.stat1, t.about.stat2, t.about.stat3].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl text-primary mb-2">
                    {[15, 200, 98][i]}+
                  </div>
                  <div className="text-xs text-muted-foreground">{stat}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4">
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg border bg-background p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-serif text-lg mb-2 text-primary">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
