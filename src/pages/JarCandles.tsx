import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import productsData from "@/data/JarCandles.json";

// ✅ Same glob as Festive (works with nested /assets)
const images = import.meta.glob("@/assets/**/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const PLACEHOLDER = "/placeholder.svg";

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  categories: string[];  // normalized
  category?: string;     // backward-compatible
  fragrance: string;
  size?: string;
};

const JarCandles = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // ✅ Map image URLs and normalize categories just like Festive
  const products: Product[] = useMemo(() => {
    return (productsData as any[]).map((p) => {
      const key = `/src/assets/${String(p.image).replace(/^\/+/, "")}`;
      const src = images[key] ?? PLACEHOLDER;

      const categories: string[] = Array.isArray(p.categories)
        ? p.categories
        : p.category
          ? [p.category]
          : [];

      return { ...p, image: src, categories };
    });
  }, []);

  const filters = [
    { id: "all", name: "All Jars" },
  ];

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.categories.includes(selectedFilter));

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

        {/* Products (same square media area as Festive) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group transition-all duration-300 hover:shadow-luxury">
              {/* Square media area */}
              <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  fetchPriority="low"
                />

                {/* Top-right action */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-display font-semibold text-lg mb-1 line-clamp-2">
                  {product.name}
                </h3>
                {product.size && (
                  <p className="text-sm text-primary mb-1">{product.size}</p>
                )}
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                  {product.fragrance}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
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

export default JarCandles;
