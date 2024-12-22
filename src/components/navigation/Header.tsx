import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoLink } from '../ui/logo';
import { NavLink } from './NavLink';
import { NavDropdown } from './dropdown/NavDropdown';
import { MobileMenu } from './MobileMenu';
import { UserMenu } from './UserMenu';
import { useAuthContext } from '../auth/AuthProvider';
import { ROUTES } from '@/utils/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : ''
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <LogoLink 
            size="lg"
            variant="full"
            className="transition-opacity hover:opacity-90"
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href={ROUTES.MARKETPLACE}>Marketplace</NavLink>
            <NavLink href={ROUTES.HOW_IT_WORKS}>How it Works</NavLink>
            <NavDropdown 
              label="Resources" 
              items={[
                { label: 'Resources', href: ROUTES.RESOURCES },
                { label: 'Insights', href: ROUTES.INSIGHTS },
                { label: 'Help Center', href: ROUTES.HELP_CENTER },
                { label: 'FAQ', href: ROUTES.FAQS }
              ]} 
            />
            <NavLink href={ROUTES.ABOUT}>About</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <button 
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate(ROUTES.REGISTER)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </nav>
      </div>
    </header>
  );
}