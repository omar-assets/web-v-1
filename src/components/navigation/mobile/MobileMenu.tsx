import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenuItem } from './MobileMenuItem';
import { MobileMenuOverlay } from './MobileMenuOverlay';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
    onToggle();
  };

  return (
    <>
      <MobileMenuButton isOpen={isOpen} onClick={onToggle} />

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <MobileMenuOverlay onClose={onToggle} />
          
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl animate-slide-right">
            <div className="p-6 space-y-6">
              <nav className="space-y-3">
                <MobileMenuItem href={ROUTES.MARKETPLACE} onClick={onToggle}>
                  Marketplace
                </MobileMenuItem>
                <MobileMenuItem href={ROUTES.HOW_IT_WORKS} onClick={onToggle}>
                  How it Works
                </MobileMenuItem>
                <MobileMenuItem href={ROUTES.RESOURCES} onClick={onToggle}>
                  Resources
                </MobileMenuItem>
                <MobileMenuItem href={ROUTES.ABOUT} onClick={onToggle}>
                  About
                </MobileMenuItem>
              </nav>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => handleNavigation(ROUTES.LOGIN)}
                  className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 mb-3"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigation(ROUTES.REGISTER)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}