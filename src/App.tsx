import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { HarborTracker } from "@/components/sections/harbor-tracker";
import { MenuPreview } from "@/components/sections/menu-preview";
import { Heritage } from "@/components/sections/heritage";
import { Footer } from "@/components/sections/footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
          <Navbar />
          <Hero />
          <div id="tracker">
            <HarborTracker />
          </div>
          <MenuPreview />
          <Heritage />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
