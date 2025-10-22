import { useState } from "react";
import { ShoppingCart, Search, Heart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // underline-on-hover utility for nav links
  const navLink =
    "relative font-body text-foreground transition-colors hover:text-primary " +
    "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary " +
    "after:transition-all after:content-[''] hover:after:w-full focus-visible:after:w-full focus-visible:outline-none";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* keep this wrapper relative so mobile menu can anchor under it */}
        <div className="relative">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-display font-bold text-foreground">
                <a href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm">
                  Sparkupp Candles
                </a>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <a href="/festive" className={navLink}>
                Festive Candles
              </a>
              <a href="/mould" className={navLink}>
                Mould Candles
              </a>
              <a href="/jar" className={navLink}>
                Jar Candles
              </a>
              <a href="/wax-sachets" className={navLink}>
                Wax Sachets
              </a>
              <a href="/about" className={navLink}>
                About
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((s) => !s)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu (slide-down) */}
          <nav
            id="mobile-menu"
            className={[
              "md:hidden overflow-hidden border-t border-border bg-background",
              "transition-[max-height,opacity] duration-300 ease-in-out",
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col space-y-4 p-4">
              <a href="/festive" className={navLink} onClick={() => setIsOpen(false)}>
                Festive Candles
              </a>
              <a href="/mould" className={navLink} onClick={() => setIsOpen(false)}>
                Mould Candles
              </a>
              <a href="/jar" className={navLink} onClick={() => setIsOpen(false)}>
                Jar Candles
              </a>
              <a href="/wax-sachets" className={navLink} onClick={() => setIsOpen(false)}>
                Wax Sachets
              </a>
              <a href="/about" className={navLink} onClick={() => setIsOpen(false)}>
                About
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
