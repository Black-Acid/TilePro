import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 custom-primary rounded-lg flex items-center justify-center mr-3">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-white w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-white w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-white w-1.5 h-1.5 rounded-sm"></div>
                <div className="bg-white w-1.5 h-1.5 rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground" data-testid="company-name">
              Premier Tile Solutions
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="custom-accent hover:opacity-90 px-6 py-2 rounded-full font-semibold transition-all"
              data-testid="nav-get-quote"
            >
              Get Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white border-t border-border transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-4 py-4 space-y-3">
          <button 
            onClick={() => scrollToSection("home")} 
            className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            data-testid="mobile-nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("services")} 
            className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            data-testid="mobile-nav-services"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")} 
            className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            data-testid="mobile-nav-portfolio"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            data-testid="mobile-nav-about"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full custom-accent text-center py-2 rounded-full font-semibold"
            data-testid="mobile-nav-get-quote"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
