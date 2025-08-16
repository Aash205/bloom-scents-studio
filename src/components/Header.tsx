import { ShoppingCart, Search, Heart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-display font-bold text-foreground">
              Sparkupp Candles
            </h1>
            <span className="text-sm font-body text-muted-foreground">
              Luxury & Custom
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/festive" className="font-body text-foreground hover:text-primary transition-colors">
              Festive Candles
            </a>
            <a href="/mould" className="font-body text-foreground hover:text-primary transition-colors">
              Mould Candles
            </a>
            <a href="/jar" className="font-body text-foreground hover:text-primary transition-colors">
              Jar Candles
            </a>
            <a href="/wax-sachets" className="font-body text-foreground hover:text-primary transition-colors">
              Wax Sachets
            </a>
            <a href="/custom" className="font-body text-foreground hover:text-primary transition-colors">
              Custom Candles
            </a>
            <a href="/about" className="font-body text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;