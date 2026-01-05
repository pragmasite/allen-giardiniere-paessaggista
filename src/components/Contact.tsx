import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
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
    <section id="contatti" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 items-start"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="rounded-lg border bg-background p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">{t.contact.phone}</h3>
                  <a
                    href="tel:+41763103173"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    +41 76 310 31 73
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">{t.contact.email}</h3>
                  <a
                    href="mailto:allensagl.info@gmail.com"
                    className="text-primary hover:text-accent transition-colors font-medium break-all"
                  >
                    allensagl.info@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">{t.contact.address}</h3>
                  <p className="text-foreground/70">
                    Via Pedmúnt 32<br />
                    6513 Monte Carasso<br />
                    Svizzera
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href="tel:+41763103173">
                <Phone className="h-5 w-5 mr-2" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-medium border h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.8426066045347!2d8.996778!3d46.18902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785b6c5d5d5d5d5%3A0x0!2sVia%20Pedm%C3%BAnt%2032%2C%206513%20Monte%20Carasso!5e0!3m2!1sit!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
