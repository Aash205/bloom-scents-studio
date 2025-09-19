import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JarCandles = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Classic Mason Jar",
      price: 449,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "mason",
      fragrance: "Vanilla & Cinnamon",
      size: "Large (400g)"
    },
    {
      id: 2,
      name: "Amber Glass Elegance",
      price: 599,
      originalPrice: 699,
      image: "/placeholder.svg",
      category: "amber",
      fragrance: "Sandalwood & Bergamot",
      size: "Extra Large (500g)"
    },
    {
      id: 3,
      name: "Ceramic White Jar",
      price: 549,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "ceramic",
      fragrance: "Lavender & Eucalyptus",
      size: "Medium (300g)"
    },
    {
      id: 4,
      name: "Vintage Apothecary",
      price: 649,
      originalPrice: 749,
      image: "/placeholder.svg",
      category: "vintage",
      fragrance: "Rose & Patchouli",
      size: "Extra Large (600g)"
    },
    {
      id: 5,
      name: "Minimalist Clear Glass",
      price: 399,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "clear",
      fragrance: "Fresh Linen",
      size: "Small (250g)"
    },
    {
      id: 6,
      name: "Rustic Wood Lid Jar",
      price: 499,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "rustic",
      fragrance: "Cedar & Pine",
      size: "Large (450g)"
    }
  ];

  const filters = [
    { id: "all", name: "All Jars" },
    { id: "mason", name: "Mason Jars" },
    { id: "amber", name: "Amber Glass" },
    { id: "ceramic", name: "Ceramic" },
    { id: "vintage", name: "Vintage Style" },
    { id: "clear", name: "Clear Glass" },
    { id: "rustic", name: "Rustic" }
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
            Jar Candles Collection
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Elegant container candles designed for long-lasting fragrance and reusable beauty.
            Each jar becomes a decorative piece even after the candle burns down.
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
                <p className="text-sm text-primary mb-2">{product.size}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.fragrance}</p>

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
                    "Add to Cart"
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

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-display font-semibold text-lg mb-3">
                Long Burn Time
              </h3>
              <p className="text-muted-foreground">
                Our jar candles burn for 30-65 hours, giving you extended fragrance enjoyment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-display font-semibold text-lg mb-3">
                Reusable Containers
              </h3>
              <p className="text-muted-foreground">
                Beautiful jars that can be repurposed as planters, storage, or decorative pieces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-display font-semibold text-lg mb-3">
                Premium Wax Blend
              </h3>
              <p className="text-muted-foreground">
                Made with high-quality soy and coconut wax for clean, even burning.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JarCandles;