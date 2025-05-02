import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Nama Studio', path: '/studio' },
    { label: 'Proyek', path: '/proyek' },
    { label: 'Layanan', path: '/layanan' },
    { label: 'Kontak', path: '/kontak' },
  ];

  return (
    <header className="container-custom py-6 flex justify-between items-center relative z-50">
      <div className="logo">
        <Link href="/" className="text-foreground font-medium text-lg">
          HARMONY HOUSE
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path} 
            className={`text-foreground hover-underline ${location === item.path ? 'after:w-full' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden z-50">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-foreground py-2 ${location === item.path ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
