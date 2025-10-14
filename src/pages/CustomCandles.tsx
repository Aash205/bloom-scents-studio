import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomCandles = () => {
  const [selectedContainer, setSelectedContainer] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const containers = [
    { id: "mason-jar", name: "Mason Jar", price: 299, image: "/placeholder.svg" },
    { id: "ceramic-mould", name: "Ceramic Mould", price: 399, image: "/placeholder.svg" },
    { id: "glass-tumbler", name: "Glass Tumbler", price: 249, image: "/placeholder.svg" },
    { id: "tea-cup", name: "Tea Cup Mould", price: 199, image: "/placeholder.svg" }
  ];

  const fragrances = [
    { id: "lavender", name: "Lavender Dreams", notes: "Calming, floral, peaceful" },
    { id: "vanilla", name: "Vanilla Spice", notes: "Sweet, warm, comforting" },
    { id: "sandalwood", name: "Sandalwood Mystic", notes: "Woody, spiritual, grounding" },
    { id: "rose", name: "Rose Garden", notes: "Romantic, elegant, fresh" },
    { id: "citrus", name: "Citrus Burst", notes: "Energizing, fresh, uplifting" },
    { id: "jasmine", name: "Night Jasmine", notes: "Exotic, sensual, mysterious" }
  ];

  const themes = [
    { id: "minimalist", name: "Minimalist", description: "Clean, simple design" },
    { id: "festive", name: "Festive", description: "Colorful, celebratory elements" },
    { id: "romantic", name: "Romantic", description: "Soft colors, elegant details" },
    { id: "nature", name: "Nature", description: "Earthy tones, natural textures" }
  ];

  const calculatePrice = () => {
    const containerPrice = containers.find(c => c.id === selectedContainer)?.price || 0;
    const customizationFee = (selectedFragrance && selectedTheme) ? 100 : 0;
    const messageFee = customMessage ? 50 : 0;
    return containerPrice + customizationFee + messageFee;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Create Your Perfect Candle
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Design a unique candle that reflects your style. Choose your container,
            fragrance, theme, and add a personal touch with a custom message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="container" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="container">Container</TabsTrigger>
                <TabsTrigger value="fragrance">Fragrance</TabsTrigger>
                <TabsTrigger value="theme">Theme</TabsTrigger>
                <TabsTrigger value="message">Message</TabsTrigger>
              </TabsList>

              <TabsContent value="container" className="space-y-4">
                <h3 className="text-xl font-display font-semibold">Choose Your Container</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {containers.map((container) => (
                    <Card
                      key={container.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${selectedContainer === container.id ? 'ring-2 ring-primary' : ''
                        }`}
                      onClick={() => setSelectedContainer(container.id)}
                    >
                      <CardContent className="p-4">
                        <img
                          src={container.image}
                          alt={container.name}
                          className="w-full h-32 object-cover rounded-md mb-3"
                        />
                        <h4 className="font-semibold">{container.name}</h4>
                        <p className="text-primary font-medium">₹{container.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fragrance" className="space-y-4">
                <h3 className="text-xl font-display font-semibold">Select Fragrance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {fragrances.map((fragrance) => (
                    <Card
                      key={fragrance.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${selectedFragrance === fragrance.id ? 'ring-2 ring-primary' : ''
                        }`}
                      onClick={() => setSelectedFragrance(fragrance.id)}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{fragrance.name}</h4>
                        <p className="text-sm text-muted-foreground">{fragrance.notes}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="theme" className="space-y-4">
                <h3 className="text-xl font-display font-semibold">Pick a Theme</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <Card
                      key={theme.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
                        }`}
                      onClick={() => setSelectedTheme(theme.id)}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{theme.name}</h4>
                        <p className="text-sm text-muted-foreground">{theme.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="message" className="space-y-4">
                <h3 className="text-xl font-display font-semibold">Add Personal Message</h3>
                <Card>
                  <CardContent className="p-4">
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Enter your personal message (optional)"
                      className="w-full p-3 border rounded-md resize-none h-24"
                      maxLength={100}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      {customMessage.length}/100 characters
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview & Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Custom Candle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Live Preview</p>
                </div>

                <div className="space-y-2">
                  {selectedContainer && (
                    <div className="flex justify-between">
                      <span>Container:</span>
                      <span className="font-medium">
                        {containers.find(c => c.id === selectedContainer)?.name}
                      </span>
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
                  {customMessage && (
                    <div>
                      <span>Message:</span>
                      <p className="text-sm bg-muted p-2 rounded mt-1">{customMessage}</p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Price:</span>
                    <span className="text-primary">₹{calculatePrice()}</span>
                  </div>
                </div>

                <Button
                  className="w-full"
                  disabled={!selectedContainer || !selectedFragrance || !selectedTheme}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Delivery Info</h4>
                <p className="text-sm text-muted-foreground">
                  Custom candles take 3-5 business days to craft.
                  Free delivery on orders above ₹500.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomCandles;