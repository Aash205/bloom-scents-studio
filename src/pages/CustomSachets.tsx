import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CustomSachets = () => {
  const [selectedSize, setSelectedSize] = useState("small");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const shapes = {
    small: [
      { id: "heart", name: "Heart", price: 50 },
      { id: "flower", name: "Flower", price: 45 },
      { id: "star", name: "Star", price: 40 },
      { id: "butterfly", name: "Butterfly", price: 55 },
      { id: "leaf", name: "Leaf", price: 45 },
      { id: "circle", name: "Circle", price: 35 }
    ],
    big: [
      { id: "rose", name: "Rose", price: 85 },
      { id: "lotus", name: "Lotus", price: 90 },
      { id: "mandala", name: "Mandala", price: 95 },
      { id: "paisley", name: "Paisley", price: 80 },
      { id: "elephant", name: "Elephant", price: 100 }
    ]
  };

  const fragrances = [
    { id: "lavender", name: "Lavender Dreams", category: "floral" },
    { id: "rose", name: "Rose Garden", category: "floral" },
    { id: "jasmine", name: "Jasmine Nights", category: "floral" },
    { id: "ocean", name: "Ocean Breeze", category: "sea" },
    { id: "aqua", name: "Aqua Fresh", category: "sea" },
    { id: "pine", name: "Pine Forest", category: "forest" },
    { id: "eucalyptus", name: "Eucalyptus Mint", category: "forest" },
    { id: "sandalwood", name: "Mystic Sandalwood", category: "forest" },
    { id: "vanilla", name: "Warm Vanilla", category: "sweet" },
    { id: "coconut", name: "Tropical Coconut", category: "sweet" }
  ];

  const themes = [
    { id: "festive", name: "Festive Collection", colors: ["Gold", "Red", "Green"] },
    { id: "romantic", name: "Romantic Vibes", colors: ["Pink", "Purple", "White"] },
    { id: "nature", name: "Nature's Touch", colors: ["Green", "Brown", "Beige"] },
    { id: "modern", name: "Modern Minimalist", colors: ["Black", "White", "Grey"] },
    { id: "vintage", name: "Vintage Charm", colors: ["Cream", "Gold", "Bronze"] }
  ];

  const selectedShapeData = shapes[selectedSize as keyof typeof shapes]?.find(s => s.id === selectedShape);
  const basePrice = selectedShapeData?.price || 0;
  const totalPrice = basePrice * quantity;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link to="/wax-sachets" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Wax Sachets
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Customize Sachets</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Create Your Perfect Wax Sachets
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Design custom wax sachets with your favorite shapes, fragrances, and themes. 
            Perfect for gifts or personal spaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customization Form */}
          <div className="space-y-6">
            {/* Size Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["small", "big"].map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => {
                        setSelectedSize(size);
                        setSelectedShape("");
                      }}
                      className="h-16 text-center"
                    >
                      <div>
                        <div className="font-semibold capitalize">{size}</div>
                        <div className="text-sm text-muted-foreground">
                          {shapes[size as keyof typeof shapes]?.length} shapes available
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shape Selection */}
            {selectedSize && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Shape</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {shapes[selectedSize as keyof typeof shapes]?.map((shape) => (
                      <Button
                        key={shape.id}
                        variant={selectedShape === shape.id ? "default" : "outline"}
                        onClick={() => setSelectedShape(shape.id)}
                        className="h-20 flex flex-col justify-center"
                      >
                        <div className="font-medium">{shape.name}</div>
                        <div className="text-sm text-muted-foreground">₹{shape.price}</div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Fragrance Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Fragrance</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedFragrance} onValueChange={setSelectedFragrance}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fragrance" />
                  </SelectTrigger>
                  <SelectContent>
                    {fragrances.map((fragrance) => (
                      <SelectItem key={fragrance.id} value={fragrance.id}>
                        <div className="flex items-center gap-2">
                          <span>{fragrance.name}</span>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {fragrance.category}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Pick Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {themes.map((theme) => (
                    <Button
                      key={theme.id}
                      variant={selectedTheme === theme.id ? "default" : "outline"}
                      onClick={() => setSelectedTheme(theme.id)}
                      className="w-full justify-between h-auto p-4"
                    >
                      <div className="text-left">
                        <div className="font-medium">{theme.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Colors: {theme.colors.join(", ")}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Message */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Message (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="message">Add a custom message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your personal message..."
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      className="mt-1"
                      maxLength={100}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {personalMessage.length}/100 characters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity */}
            <Card>
              <CardHeader>
                <CardTitle>Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Label htmlFor="quantity">Number of sachets:</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-20"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Summary */}
          <div className="space-y-6">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Preview */}
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">🕯️</div>
                  <h3 className="font-semibold text-lg mb-2">Your Custom Sachet</h3>
                  {selectedShapeData && (
                    <p className="text-muted-foreground">
                      {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)} {selectedShapeData.name}
                    </p>
                  )}
                </div>

                {/* Order Details */}
                <div className="space-y-3">
                  {selectedSize && (
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="capitalize font-medium">{selectedSize}</span>
                    </div>
                  )}
                  {selectedShapeData && (
                    <div className="flex justify-between">
                      <span>Shape:</span>
                      <span className="font-medium">{selectedShapeData.name}</span>
                    </div>
                  )}
                  {selectedFragrance && (
                    <div className="flex justify-between">
                      <span>Fragrance:</span>
                      <span className="font-medium">
                        {fragrances.find(f => f.id === selectedFragrance)?.name}
                      </span>
                    </div>
                  )}
                  {selectedTheme && (
                    <div className="flex justify-between">
                      <span>Theme:</span>
                      <span className="font-medium">
                        {themes.find(t => t.id === selectedTheme)?.name}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                  {personalMessage && (
                    <div className="border-t pt-3">
                      <span className="text-sm text-muted-foreground">Message:</span>
                      <p className="text-sm font-medium mt-1">"{personalMessage}"</p>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Unit Price:</span>
                    <span>₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span>×{quantity}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    size="lg" 
                    className="w-full gap-2"
                    disabled={!selectedShape || !selectedFragrance || !selectedTheme}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart - ₹{totalPrice}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full gap-2">
                    <Heart className="h-4 w-4" />
                    Save to Wishlist
                  </Button>
                </div>

                {/* Estimated Delivery */}
                <div className="text-center text-sm text-muted-foreground border-t pt-4">
                  <p>Estimated delivery: 5-7 business days</p>
                  <p>Custom orders may take additional 2-3 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomSachets;