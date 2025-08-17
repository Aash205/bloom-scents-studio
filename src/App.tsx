import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCandles from "./pages/CustomCandles";
import FestiveCandles from "./pages/FestiveCandles";
import MouldCandles from "./pages/MouldCandles";
import JarCandles from "./pages/JarCandles";
import WaxSachets from "./pages/WaxSachets";
import CustomSachets from "./pages/CustomSachets";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/custom" element={<CustomCandles />} />
          <Route path="/festive" element={<FestiveCandles />} />
          <Route path="/mould" element={<MouldCandles />} />
          <Route path="/jar" element={<JarCandles />} />
          <Route path="/wax-sachets" element={<WaxSachets />} />
          <Route path="/custom-sachets" element={<CustomSachets />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
