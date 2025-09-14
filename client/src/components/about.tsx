import { Award, Clock, DollarSign, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We stand behind our work with a comprehensive warranty on all installations."
  },
  {
    icon: Clock,
    title: "On-Time Completion", 
    description: "We respect your schedule and complete projects within the agreed timeline."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with detailed estimates and no hidden costs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="about-title">
              Why Choose Premier Tile Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
              With over 15 years of experience in professional tile installation, we bring unmatched expertise and attention to detail to every project.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`about-feature-${index}`}>
                    <div className="w-12 h-12 custom-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2" data-testid={`about-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`about-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional tile installer at work" 
              className="rounded-2xl shadow-xl w-full"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
