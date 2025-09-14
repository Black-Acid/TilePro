import { Bath, Utensils, Home, Building, Wrench, Palette } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Bathroom Tiling",
    description: "Complete bathroom renovations including shower surrounds, floor tiles, and waterproof installations.",
    features: [
      "Shower & bathtub surrounds",
      "Floor tile installation", 
      "Waterproofing solutions",
      "Custom design layouts"
    ]
  },
  {
    icon: Utensils,
    title: "Kitchen Backsplashes",
    description: "Stunning kitchen backsplashes that combine functionality with beautiful design aesthetics.",
    features: [
      "Subway & mosaic tiles",
      "Natural stone options",
      "Custom patterns",
      "Precision cutting & fitting"
    ]
  },
  {
    icon: Home,
    title: "Floor Tiling",
    description: "Durable and beautiful floor installations for every room in your home or business.",
    features: [
      "Ceramic & porcelain",
      "Natural stone floors",
      "Luxury vinyl tiles",
      "Underfloor heating prep"
    ]
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Large-scale commercial installations for restaurants, offices, and retail spaces.",
    features: [
      "Restaurant & hospitality",
      "Office buildings",
      "Retail environments",
      "Healthcare facilities"
    ]
  },
  {
    icon: Wrench,
    title: "Tile Repair & Restoration",
    description: "Expert repair services to restore damaged tiles and refresh existing installations.",
    features: [
      "Cracked tile replacement",
      "Grout cleaning & repair",
      "Seal & waterproof renewal",
      "Color matching services"
    ]
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Professional design advice to help you choose the perfect tiles for your project.",
    features: [
      "Material selection guidance",
      "Layout & pattern design",
      "Color coordination",
      "3D visualizations"
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
