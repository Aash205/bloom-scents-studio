import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-10 py-16">
        {/* Added larger horizontal gap */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Sparkupp</h3>
            <p className="font-body text-background/80">
              Crafting moments of serenity through luxury candles and aromatic experiences.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-primary"
                asChild
              >
                <a
                  href="https://www.instagram.com/sparkuppcandles/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
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
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 font-body text-background/80">
                <Mail className="h-4 w-4" />
                <span>sparkuppcandles@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 font-body text-background/80">
                <Phone className="h-4 w-4" />
                <span>+91 9819280642</span>
              </div>
              <div className="flex items-center space-x-3 font-body text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Kandivali West, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-body text-background/60">
            © 2024 Sparkupp. All rights reserved. Made with ♥ for candle lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
