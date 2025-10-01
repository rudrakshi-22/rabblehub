import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-primary-foreground">RabbleHub</h3>
            <p className="text-primary-foreground/80">
              Connecting talented professionals with amazing opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="hover:text-primary-foreground/60 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="hover:text-primary-foreground/60 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="hover:text-primary-foreground/60 transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="hover:text-primary-foreground/60 transition-colors">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-primary-foreground mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('careers')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Browse Jobs
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Career Advice
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resume Builder
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Job Alerts
                </button>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-primary-foreground mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Post a Job
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing Plans
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hire Talent
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Employer Branding
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 RabbleHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}