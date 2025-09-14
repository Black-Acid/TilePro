import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "Homeowner",
    rating: 5,
    text: "Outstanding workmanship! The bathroom renovation exceeded our expectations. Every tile was perfectly placed and the attention to detail was remarkable.",
    initials: "SM",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    name: "David Johnson", 
    role: "Business Owner",
    rating: 5,
    text: "Professional service from start to finish. The kitchen backsplash looks incredible and was completed on time and within budget.",
    initials: "DJ",
    gradient: "from-green-500 to-blue-500"
  },
  {
    id: 3,
    name: "Lisa Wong",
    role: "Interior Designer", 
    rating: 5,
    text: "We've used Premier Tile Solutions for multiple projects. Their consistency and quality are unmatched. Highly recommended!",
    initials: "LW",
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="testimonials-description">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-xl shadow-lg p-8"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${testimonial.id}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
