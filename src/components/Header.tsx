import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
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
      <div className="container mx-auto px-4 sm:px-6">
        {/* keep this wrapper relative so mobile menu can anchor under it */}
        <div className="relative">
          {/* Mobile: flex. Desktop+: 3-col grid (left / center / right) */}
          <div className="py-3 sm:py-4">
            <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
              {/* Logo (left) */}
              <div className="flex items-center gap-2 md:justify-self-start">
                <h1 className="text-2xl font-display font-bold text-foreground leading-none">
                  <Link
                    to="/"
                    className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    SparkUpp Candles
                  </Link>
                </h1>
              </div>

              {/* Desktop Navigation (center) */}
              <nav className="hidden md:flex items-center gap-8 lg:gap-10 md:justify-self-center">
                <Link to="/festive" className={navLink}>
                  Festive Candles
                </Link>
                <Link to="/mould" className={navLink}>
                  Mould Candles
                </Link>
                <Link to="/jar" className={navLink}>
                  Jar Candles
                </Link>
                <Link to="/wax-sachets" className={navLink}>
                  Wax Sachets
                </Link>
                {/* <Link to="/about" className={navLink}>
                  About
                </Link> */}
              </nav>

              {/* Action Buttons (right) */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:justify-self-end">
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
            <div className="flex flex-col space-y-3 px-4 py-5">
              <Link to="/festive" className={navLink} onClick={() => setIsOpen(false)}>
                Festive Candles
              </Link>
              <Link to="/mould" className={navLink} onClick={() => setIsOpen(false)}>
                Mould Candles
              </Link>
              <Link to="/jar" className={navLink} onClick={() => setIsOpen(false)}>
                Jar Candles
              </Link>
              <Link
                to="/wax-sachets"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Wax Sachets
              </Link>
              {/* <Link to="/about" className={navLink} onClick={() => setIsOpen(false)}>
                About
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;