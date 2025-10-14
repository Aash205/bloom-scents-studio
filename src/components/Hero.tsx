import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-candle.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Illuminate Your
                <span className="block text-primary">Sacred Moments</span>
              </h1>
              <p className="text-xl font-body text-muted-foreground max-w-lg">
                Handcrafted luxury candles and wax sachets designed to transform
                your space into a sanctuary of warmth and tranquility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Shop Collection
              </Button>
              <Button variant="elegant" size="lg" className="w-full sm:w-auto">
                Custom Candles
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-display font-semibold text-primary">Long Lasting</div>
                <div className="text-sm font-body text-muted-foreground">Luxurious Scents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-semibold text-primary">Custom Blend</div>
                <div className="text-sm font-body text-muted-foreground">Hand Crafted</div>
              </div>
              {/* <div className="text-center">
                <div className="text-2xl font-display font-semibold text-primary">100%</div>
                <div className="text-sm font-body text-muted-foreground">Natural Soy Wax</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-2xl font-display font-semibold text-primary">48hr</div>
                <div className="text-sm font-body text-muted-foreground">Burn Time</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-2xl font-display font-semibold text-primary">Hand</div>
                <div className="text-sm font-body text-muted-foreground">Crafted</div>
              </div> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-luxury">
              <img
                src={heroImage}
                alt="Luxury Candle Collection"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-card border border-border">
              <div className="text-center">
                <div className="text-lg font-display font-semibold text-foreground">Festive Sale</div>
                <div className="text-primary font-medium">Up to 30% Off</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;