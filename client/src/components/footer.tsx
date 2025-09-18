export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="bg-gray-900 w-1.5 h-1.5 rounded-sm"></div>
                  <div className="bg-gray-900 w-1.5 h-1.5 rounded-sm"></div>
                  <div className="bg-gray-900 w-1.5 h-1.5 rounded-sm"></div>
                  <div className="bg-gray-900 w-1.5 h-1.5 rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl font-bold" data-testid="footer-company-name">
                The Tanko Tiling Company Limited
              </span>
            </div>
            <p className="text-gray-400 mb-6" data-testid="footer-company-description">
              Professional tile installation services with over 15 years of experience in residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                data-testid="footer-social-facebook"
              >
                <span className="font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                data-testid="footer-social-instagram"
              >
                <span className="font-bold">ig</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                data-testid="footer-social-linkedin"
              >
                <span className="font-bold">in</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                data-testid="footer-social-google"
              >
                <span className="font-bold">g</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-services-title">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-bathroom"
                >
                  Bathroom Tiling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-kitchen"
                >
                  Kitchen Backsplashes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-floor"
                >
                  Floor Installation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-commercial"
                >
                  Commercial Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-repair"
                >
                  Tile Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-consultation"
                >
                  Design Consultation
                </button>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-links-title">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-quote"
                >
                  Free Quote
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contact Info
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center" data-testid="footer-contact-phone">
                <span className="w-5 text-yellow-400">📞</span>
                <span className="ml-3">+233 55 686 2984</span>
              </div>
              <div className="flex items-center" data-testid="footer-contact-email">
                <span className="w-5 text-yellow-400">✉️</span>
                <span className="ml-3">info@tankotilingcompany.com</span>
              </div>
              <div className="flex items-start" data-testid="footer-contact-location">
                <span className="w-5 text-yellow-400 mt-1">📍</span>
                <span className="ml-3">
                  Kumasi, Ashanti<br />
                  & Surrounding Counties
                </span>
              </div>
              <div className="flex items-start" data-testid="footer-contact-hours">
                <span className="w-5 text-yellow-400 mt-1">🕐</span>
                <span className="ml-3">
                  Mon-Fri: 7AM-6PM<br />
                  Sat: 8AM-4PM
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400" data-testid="footer-copyright">
              © 2024 Premier Tile Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-legal-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-legal-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-legal-license"
              >
                License Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
