import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logo from 'figma:asset/11868b530f0fa30d3aaa4bf55e37f099ca50c00c.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Careers', path: 'careers' },
    { name: 'Blog', path: 'blog' },
    { name: 'Pricing', path: 'pricing' },
    { name: 'FAQ', path: 'faq' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center"
            onClick={() => onNavigate('home')}
          >
            <img src={logo} alt="RabbleHub" className="h-35 md:h-40" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`${
                  currentPage === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                } transition-colors`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Post a Job</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.path
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full">Post a Job</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}