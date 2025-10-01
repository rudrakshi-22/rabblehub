import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Careers } from './components/pages/Careers';
import { Blog } from './components/pages/Blog';
import { Pricing } from './components/pages/Pricing';
import { Contact } from './components/pages/Contact';
import { FAQ } from './components/pages/FAQ';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'careers':
        return <Careers />;
      case 'blog':
        return <Blog />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}