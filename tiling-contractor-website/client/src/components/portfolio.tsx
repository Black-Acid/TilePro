import { useState } from "react";
import { Button } from "@/components/ui/button";

import tankoProjectsImage from '@assets/Tanko Images_1757900518546.jpg';

const portfolioItems = [
  {
    id: 1,
    category: "bathroom",
    title: "Modern Checkered Bathroom",
    description: "Black and white geometric checkered tiles with precision installation",
    image: tankoProjectsImage
  },
  {
    id: 2,
    category: "floor",
    title: "Professional Floor Installation",
    description: "Expert floor tiling with meticulous attention to detail",
    image: tankoProjectsImage
  },
  {
    id: 3,
    category: "bathroom",
    title: "Contemporary Geometric Bath",
    description: "Modern black and white geometric pattern bathroom tiles",
    image: tankoProjectsImage
  },
  {
    id: 4,
    category: "floor",
    title: "Residential Floor Project",
    description: "Quality residential floor tiling with professional craftsmanship",
    image: tankoProjectsImage
  },
  {
    id: 5,
    category: "wall",
    title: "Wall Tiling Excellence",
    description: "Precision wall tile installation with perfect alignment",
    image: tankoProjectsImage
  },
  {
    id: 6,
    category: "elevation",
    title: "Elevation Tile Project",
    description: "Professional elevation tiling for enhanced building aesthetics",
    image: tankoProjectsImage
  }
];

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathrooms" },
  { value: "floor", label: "Floor Tiles" },
  { value: "wall", label: "Wall Tiles" },
  { value: "elevation", label: "Elevation Tiles" }
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
