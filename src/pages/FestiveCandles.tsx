import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FestiveCandles = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Diwali Diyas Set",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg",
      category: "diwali",
      fragrance: "Jasmine & Marigold",
    },
    {
      id: 2,
      name: "Christmas Pine Collection",
      price: 549,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "christmas",
      fragrance: "Pine & Cinnamon",
    },
    {
      id: 3,
      name: "Rakhi Special Lotus",
      price: 199,
      originalPrice: 249,
      image: "/placeholder.svg",
      category: "rakhi",
      fragrance: "Lotus & Sandalwood",
    },
    {
      id: 4,
      name: "Holi Colors Candle",
      price: 349,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "holi",
      fragrance: "Rose & Gulal",
    },
    {
      id: 6,
      name: "Ganesh Chaturthi Special",
      price: 399,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "ganesh",
      fragrance: "Mogra & Coconut",
    }
  ];

  const filters = [
    { id: "all", name: "All Festivals" },
    { id: "diwali", name: "Diwali" },
    { id: "christmas", name: "Christmas" },
    { id: "rakhi", name: "Raksha Bandhan" },
    { id: "holi", name: "Holi" },
    { id: "ganesh", name: "Ganesh Chaturthi" }
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
            Festive Candles Collection
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Celebrate every festival with our specially crafted candles.
            Each piece is designed to capture the essence and spirit of your favorite festivals.
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
                <h3 className="font-display font-semibold text-lg mb-2">{product.name}</h3>
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
                    {"Add to Cart"}
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
      </main>

      <Footer />
    </div>
  );
};

export default FestiveCandles;