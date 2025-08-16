import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MouldCandles = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Rose Bloom Mould",
      price: 399,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "flower",
      fragrance: "Fresh Rose",
      burnTime: "6-8 hours",
      inStock: true,
      isNew: true,
      shape: "Rose"
    },
    {
      id: 2,
      name: "Buddha Meditation",
      price: 549,
      originalPrice: 649,
      image: "/placeholder.svg",
      category: "spiritual",
      fragrance: "Sandalwood & Lotus",
      burnTime: "10-12 hours",
      inStock: true,
      isNew: false,
      shape: "Buddha"
    },
    {
      id: 3,
      name: "Heart Shape Love",
      price: 299,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "romantic",
      fragrance: "Vanilla & Rose",
      burnTime: "5-6 hours",
      inStock: true,
      isNew: false,
      shape: "Heart"
    },
    {
      id: 4,
      name: "Star Constellation",
      price: 449,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "celestial",
      fragrance: "Lavender & Mint",
      burnTime: "7-9 hours",
      inStock: false,
      isNew: true,
      shape: "Star"
    },
    {
      id: 5,
      name: "Lotus Petal Peace",
      price: 499,
      originalPrice: 599,
      image: "/placeholder.svg",
      category: "spiritual",
      fragrance: "Lotus & Jasmine",
      burnTime: "8-10 hours",
      inStock: true,
      isNew: false,
      shape: "Lotus"
    },
    {
      id: 6,
      name: "Geometric Cube",
      price: 349,
      originalPrice: null,
      image: "/placeholder.svg",
      category: "modern",
      fragrance: "Eucalyptus & Tea Tree",
      burnTime: "6-8 hours",
      inStock: true,
      isNew: true,
      shape: "Cube"
    }
  ];

  const filters = [
    { id: "all", name: "All Shapes" },
    { id: "flower", name: "Floral" },
    { id: "spiritual", name: "Spiritual" },
    { id: "romantic", name: "Romantic" },
    { id: "celestial", name: "Celestial" },
    { id: "modern", name: "Modern" }
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
            Mould Candles Collection
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Beautiful shaped candles crafted with precision. Each unique form 
            tells a story and creates an artistic statement in your space.
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
                  {product.isNew && (
                    <Badge variant="default">New</Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-display font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-primary mb-2">Shape: {product.shape}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.fragrance}</p>
                <p className="text-xs text-muted-foreground mb-3">Burn time: {product.burnTime}</p>
                
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
                    disabled={!product.inStock}
                    className="gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Notify Me"}
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

        {/* Info Section */}
        <div className="mt-16 bg-gradient-gold rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Custom Mould Designs
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Have a specific shape in mind? We can create custom moulds for your unique vision. 
              Perfect for special events, corporate gifts, or personal collections.
            </p>
            <Button variant="luxury" size="lg">
              Request Custom Design
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MouldCandles;