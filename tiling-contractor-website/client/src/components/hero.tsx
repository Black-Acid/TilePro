import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Expert Tile Installation 
              <span className="text-yellow-400">&nbsp;& Design</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed" data-testid="hero-description">
              Transform your space with precision-crafted tile work. From elegant bathrooms to stunning kitchen backsplashes, we deliver exceptional results that last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="custom-accent hover:opacity-90 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                data-testid="hero-get-quote-btn"
              >
                Get Free Quote
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all bg-transparent"
                data-testid="hero-view-work-btn"
              >
                View Our Work
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional tile installation in modern bathroom" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
