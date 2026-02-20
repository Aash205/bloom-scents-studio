import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-28">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold leading-none">Sparkupp</h3>
            <p className="font-body text-background/80 max-w-md">
              Crafting moments of serenity through luxury candles and aromatic experiences.
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-primary"
                asChild
              >
                <a
                  href="https://www.instagram.com/spark._upp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sparkupp on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:justify-self-center">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/festive"
                className="block font-body text-background/80 hover:text-primary transition-colors"
              >
                Festive Candles
              </Link>
              <Link
                to="/mould"
                className="block font-body text-background/80 hover:text-primary transition-colors"
              >
                Mould Collection
              </Link>
              <Link
                to="/jar"
                className="block font-body text-background/80 hover:text-primary transition-colors"
              >
                Jar Collection
              </Link>
              <Link
                to="/wax-sachets"
                className="block font-body text-background/80 hover:text-primary transition-colors"
              >
                Wax Sachets
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:justify-self-end">
            <h4 className="text-lg font-display font-semibold">Contact</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 font-body text-background/80">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:sparkuppcandles@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sparkuppcandles@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 font-body text-background/80">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="tel:+919819280642"
                  className="hover:text-primary transition-colors"
                >
                  +91 9819280642
                </a>
              </div>

              <div className="flex items-start gap-3 font-body text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Kandivali West, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="font-body text-background/60">
            © 2024 Sparkupp. All rights reserved. Made with ♥ for candle lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;