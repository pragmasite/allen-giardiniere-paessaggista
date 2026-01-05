import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image descriptions (1-3 words per image)
  const imageDescriptions = {
    it: [
      "Giardino con cascata",
      "Spazio moderno",
      "Paesaggio naturale",
      "Design contemporaneo",
      "Terrazza verde",
      "Giardino minimalista",
      "Piante e fiori",
      "Realizzazione esclusiva",
      "Giardino zen",
      "Angolo relax",
      "Composizione naturale",
      "Progetto personalizzato",
      "Spazio esterno",
      "Giardino rinato",
      "Armonia botanica",
      "Terrazze esclusive",
      "Giardino elegante",
      "Paesaggio curato",
      "Spazio verde",
      "Giardino armonico",
      "Realizzazione moderna",
      "Oasi privata",
      "Progetto raffinato",
      "Giardino trasformato",
      "Bellezza naturale",
      "Spazio equilibrato",
      "Giardino perfetto",
    ],
    en: [
      "Waterfall garden",
      "Modern space",
      "Natural landscape",
      "Contemporary design",
      "Green terrace",
      "Minimalist garden",
      "Plants and flowers",
      "Exclusive realization",
      "Zen garden",
      "Relaxation area",
      "Natural composition",
      "Custom project",
      "Outdoor space",
      "Transformed garden",
      "Botanical harmony",
      "Exclusive terraces",
      "Elegant garden",
      "Curated landscape",
      "Green space",
      "Harmonic garden",
      "Modern realization",
      "Private oasis",
      "Refined project",
      "Reborn garden",
      "Natural beauty",
      "Balanced space",
      "Perfect garden",
    ],
  };

  const images = Array.from({ length: 27 }, (_, i) => ({
    src: `/images/img-${i + 1}.jpg`,
    alt: imageDescriptions[lang as keyof typeof imageDescriptions][i],
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galleria" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.gallery.title}</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        {/* Slider for 27+ images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-medium">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6">
              <p className="text-white font-serif text-2xl">{images[currentIndex].alt}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Slide Counter */}
          <div className="absolute bottom-4 right-4 bg-foreground/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-2"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square overflow-hidden rounded-lg transition-all ${
                index === currentIndex
                  ? "ring-2 ring-accent scale-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
