import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-2">Allen</h3>
            <p className="text-sm text-primary-foreground/70">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#chi-siamo"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galleria"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#orari"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41763103173"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +41 76 310 31 73
                </a>
              </li>
              <li>
                <a
                  href="mailto:allensagl.info@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors break-all"
                >
                  allensagl.info@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/allenmaffei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Allen Giardiniere Paesaggista.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
