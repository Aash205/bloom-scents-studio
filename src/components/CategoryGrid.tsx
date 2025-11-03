import { Button } from "@/components/ui/button";
// import festiveImage from "@/assets/festive-candles.jpg";
import festiveImage from "@/assets/diwali/Circle_Urli.png";
import jarImage from "@/assets/jar/mason_jar.png";
import mouldImage from "@/assets/mould/pastel_pillar.png";
import sachetsImage from "@/assets/diwali/Ladoo_Candles.png";

const categories = [
  {
    id: 1,
    title: "Festive Candles",
    description: "Celebrate special occasions with our curated collection",
    image: festiveImage,
    items: "24 Products",
    link: "/festive"
  },
  {
    id: 2,
    title: "Mould Candles",
    description: "Beautiful shaped candles for every occasion",
    image: mouldImage,
    items: "15 Products",
    link: "/mould"
  },
  {
    id: 3,
    title: "Jar Candles",
    description: "Elegant container candles for long burning",
    image: jarImage,
    items: "18 Products",
    link: "/jar"
  },
  {
    id: 4,
    title: "Wax Sachets",
    description: "Aromatic sachets for wardrobes and drawers",
    image: sachetsImage,
    items: "12 Products",
    link: "/wax-sachets"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections, each designed to bring
            warmth and elegance to your living spaces.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  {/* <span className="text-sm font-body text-primary font-medium">
                    {category.items}
                  </span> */}
                  <Button variant="outline" size="sm" asChild>
                    <a href={category.link}>Explore</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Candle CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-gold rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Create Your Perfect Candle
            </h3>
            <p className="text-lg font-body text-foreground/80 mb-6 max-w-2xl mx-auto">
              Design a unique candle that reflects your style. Choose your fragrance, 
              container, and add a personal message for that special touch.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <a href="/custom">Start Customizing</a>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CategoryGrid;