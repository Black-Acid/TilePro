import { useState } from "react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    category: "bathroom",
    title: "Modern Master Bathroom",
    description: "Large format porcelain tiles with frameless glass shower",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    category: "kitchen",
    title: "Classic Kitchen Backsplash",
    description: "White subway tiles with marble countertops",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    category: "bathroom",
    title: "Contemporary Guest Bath",
    description: "Geometric pattern tiles with custom vanity",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 4,
    category: "floor",
    title: "Living Room Floor",
    description: "Wood-look porcelain tiles with underfloor heating",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 5,
    category: "commercial",
    title: "Restaurant Interior",
    description: "Industrial subway tiles with custom layouts",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    category: "kitchen",
    title: "Gourmet Kitchen",
    description: "Natural stone backsplash with professional finishes",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathrooms" },
  { value: "kitchen", label: "Kitchens" },
  { value: "floor", label: "Floors" },
  { value: "commercial", label: "Commercial" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="portfolio-title">
            Our Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="portfolio-description">
            Explore our gallery of completed projects showcasing precision craftsmanship and attention to detail.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === option.value 
                  ? "custom-accent" 
                  : "bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground"
              }`}
              data-testid={`filter-${option.value}`}
            >
              {option.label}
            </Button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`portfolio-image-${item.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`portfolio-title-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm" data-testid={`portfolio-description-${item.id}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="custom-accent hover:opacity-90 px-8 py-3 rounded-full font-semibold text-lg"
            data-testid="view-more-projects-btn"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
