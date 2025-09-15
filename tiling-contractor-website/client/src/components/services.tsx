import { Bath, Utensils, Home, Building, Layers, Square } from "lucide-react";

const services = [
  {
    icon: Square,
    title: "Wall Tiles",
    description: "Professional wall tile installation for interior and exterior applications with precision and style.",
    features: [
      "Interior wall tiling",
      "Bathroom wall installation", 
      "Kitchen backsplash tiles",
      "Geometric pattern designs"
    ]
  },
  {
    icon: Home,
    title: "Floor Tiles",
    description: "Expert floor tiling services for residential and commercial spaces with durable materials.",
    features: [
      "Ceramic floor tiles",
      "Porcelain installations",
      "Pattern floor designs",
      "Waterproof floor solutions"
    ]
  },
  {
    icon: Utensils,
    title: "Kitchen Tiles",
    description: "Specialized kitchen tiling including countertops, backsplashes, and floor installations.",
    features: [
      "Kitchen backsplashes",
      "Countertop tiling",
      "Kitchen floor tiles",
      "Heat-resistant materials"
    ]
  },
  {
    icon: Building,
    title: "Elevation Tiles",
    description: "External building elevation tiling for enhanced aesthetics and weather protection.",
    features: [
      "External wall cladding",
      "Weather-resistant tiles",
      "Architectural facades",
      "Building exterior design"
    ]
  },
  {
    icon: Bath,
    title: "Bathroom Tiling",
    description: "Complete bathroom tile solutions including walls, floors, and shower installations.",
    features: [
      "Shower wall tiling",
      "Bathroom floor tiles",
      "Waterproof installations",
      "Modern geometric designs"
    ]
  },
  {
    icon: Layers,
    title: "Custom Tile Projects",
    description: "Bespoke tile installations tailored to your specific design requirements and vision.",
    features: [
      "Custom pattern design",
      "Mixed material projects",
      "Artistic tile layouts",
      "Precision craftsmanship"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="services-title">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
            We specialize in all aspects of tile installation, from residential bathrooms to commercial spaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-testid={`service-card-${index}`}
              >
                <div className="w-16 h-16 custom-primary rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span data-testid={`service-feature-${index}-${featureIndex}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
