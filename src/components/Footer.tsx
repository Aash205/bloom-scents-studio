import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Lumière</h3>
            <p className="font-body text-background/80">
              Crafting moments of serenity through luxury candles and aromatic experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Festive Candles
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Mould & Jar Collection
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Wax Sachets
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Custom Candles
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Support</h4>
            <nav className="space-y-2">
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Return Policy
              </a>
              <a href="#" className="block font-body text-background/80 hover:text-primary transition-colors">
                Shipping Info
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 font-body text-background/80">
                <Mail className="h-4 w-4" />
                <span>hello@lumiere.com</span>
              </div>
              <div className="flex items-center space-x-3 font-body text-background/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 font-body text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Craft Street, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-body text-background/60">
            © 2024 Lumière. All rights reserved. Made with ♥ for candle lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;