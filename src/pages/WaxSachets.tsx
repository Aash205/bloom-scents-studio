import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WaxSachets = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Rose Garden Mix",
      price: 199,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "floral",
      fragrance: "Rose, Jasmine & Peony",
      duration: "2-3 months",
      pack: "Set of 6"
    },
    {
      id: 2,
      name: "Ocean Breeze Collection",
      price: 249,
      originalPrice: 299,
      image: "/placeholder.svg",
      category: "sea",
      fragrance: "Sea Salt & Aqua",
      duration: "3-4 months",
      pack: "Set of 8"
    },
    {
      id: 3,
      name: "Lavender Dreams",
      price: 179,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "floral",
      fragrance: "Pure Lavender",
      duration: "2-3 months",
      pack: "Set of 4"
    },
    {
      id: 4,
      name: "Forest Fresh Pack",
      price: 229,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "forest",
      fragrance: "Pine, Cedar & Eucalyptus",
      duration: "4-5 months",
      pack: "Set of 6"
    },
    {
      id: 5,
      name: "Tropical Paradise",
      price: 199,
      originalPrice: 249,
      image: "/placeholder.svg",
      category: "sea",
      fragrance: "Coconut & Pineapple",
      duration: "3 months",
      pack: "Set of 5"
    },
    {
      id: 6,
      name: "Mystic Forest",
      price: 269,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "forest",
      fragrance: "Sandalwood & Moss",
      duration: "4-6 months",
      pack: "Set of 10"
    },
    {
      id: 7,
      name: "Cherry Blossom",
      price: 219,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "floral",
      fragrance: "Cherry Blossom & Vanilla",
      duration: "3 months",
      pack: "Set of 6"
    },
    {
      id: 8,
      name: "Mediterranean Coast",
      price: 289,
      originalPrice: 329,
      image: "/placeholder.svg",
      category: "sea",
      fragrance: "Sea Breeze & Lemon",
      duration: "3-4 months",
      pack: "Set of 12"
    }
  ];

  const filters = [
    { id: "all", name: "All Sachets" },
    { id: "floral", name: "Floral" },
    { id: "sea", name: "Sea Breeze" },
    { id: "forest", name: "Forest Fresh" }
  ];

  const filteredProducts = selectedFilter === "all"
    ? products
    : products.filter(product => product.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Wax Sachets Collection
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Transform your wardrobes, drawers, and small spaces with our aromatic wax sachets.
            Long-lasting fragrance without the flame, perfect for enclosed spaces.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
          <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className="whitespace-nowrap"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-display font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-primary mb-2">{product.pack}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.fragrance}</p>
                <p className="text-xs text-muted-foreground mb-3">Lasts: {product.duration}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"

                    className="gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />

                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found for the selected filter.
            </p>
          </div>
        )}

        {/* Custom Sachets CTA */}
        <div className="mt-16 bg-gradient-gold rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Customizable Wax Sachets
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Create your perfect scent combination! Choose from our premium fragrances,
              select your theme, and add a personal message for a truly unique experience.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <a href="/custom-sachets">Customize Your Sachets</a>
            </Button>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold mb-2">Wardrobes</h4>
              <p className="text-sm text-muted-foreground">
                Hang sachets in your wardrobe for fresh-smelling clothes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold mb-2">Drawers</h4>
              <p className="text-sm text-muted-foreground">
                Place in drawers to keep linens and clothes fragrant
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold mb-2">Cars</h4>
              <p className="text-sm text-muted-foreground">
                Natural air freshener for your vehicle interior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold mb-2">Gym Bags</h4>
              <p className="text-sm text-muted-foreground">
                Keep your sports gear smelling fresh and clean
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaxSachets;