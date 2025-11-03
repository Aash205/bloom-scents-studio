import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-foreground mb-6">
            About Sparkupp Candles
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for creating moments of tranquility and joy, Sparkupp Candles
            has been illuminating homes and hearts since our founding. We believe that every
            candle tells a story, and every flame carries the power to transform spaces into
            sanctuaries of peace and celebration.
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                What started as a small home-based venture has grown into a beloved brand
                that celebrates the art of candle making. Our founder's journey began with
                a simple desire to create candles that weren't just sources of light, but
                vessels of emotion and memory.
              </p>
              <p>
                Each candle in our collection is meticulously crafted using traditional
                techniques combined with modern innovations. We source the finest natural
                waxes, premium fragrances, and sustainable materials to ensure that every
                product meets our high standards of quality and environmental responsibility.
              </p>
              <p>
                From festive celebrations to quiet moments of reflection, Sparkupp Candles
                has been part of countless special occasions. We take pride in being more
                than just a candle company – we're creators of ambiance, curators of comfort,
                and companions in your life's most precious moments.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="/placeholder.svg"
              alt="Candle making process"
              className="w-full h-64 object-cover rounded-lg shadow-card"
            />
            <img
              src="/placeholder.svg"
              alt="Our workshop"
              className="w-full h-64 object-cover rounded-lg shadow-card"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We use eco-friendly materials and sustainable practices in every step of our process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Premium ingredients and meticulous craftsmanship ensure the highest quality products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">Creativity</h3>
                <p className="text-sm text-muted-foreground">
                  Innovation and artistic expression drive our unique designs and fragrances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting local communities and building lasting relationships with our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-gradient-gold rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Commitment to the Environment
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-foreground/80">
              <div>
                <h3 className="font-semibold text-lg mb-3">Natural Ingredients</h3>
                <p className="text-sm">
                  We use soy wax, coconut wax, and other plant-based materials that are renewable and biodegradable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Recyclable Packaging</h3>
                <p className="text-sm">
                  Our containers are designed to be reused or recycled, extending their life beyond the candle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Carbon Neutral Shipping</h3>
                <p className="text-sm">
                  We offset our shipping emissions and use minimal, eco-friendly packaging materials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Behind every Sparkupp candle is a dedicated team of artisans, designers, and 
            fragrance experts who pour their passion into every creation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Team member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-semibold text-lg mb-2">Priya Sharma</h3>
                <p className="text-sm text-primary mb-2">Founder & Creative Director</p>
                <p className="text-sm text-muted-foreground">
                  Passionate about creating experiences through fragrance and design.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Team member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-semibold text-lg mb-2">Rahul Gupta</h3>
                <p className="text-sm text-primary mb-2">Master Chandler</p>
                <p className="text-sm text-muted-foreground">
                  Expert in traditional candle making with 15+ years of experience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Team member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-semibold text-lg mb-2">Anjali Singh</h3>
                <p className="text-sm text-primary mb-2">Fragrance Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Curates unique scent profiles that capture emotions and memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default About;