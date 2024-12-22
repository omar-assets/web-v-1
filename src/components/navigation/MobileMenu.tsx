import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={onToggle} />
          
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <a 
                  href={ROUTES.MARKETPLACE}
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                >
                  Marketplace
                </a>
                <a 
                  href={ROUTES.HOW_IT_WORKS}
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                >
                  How it Works
                </a>
                <a 
                  href={ROUTES.RESOURCES}
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                >
                  Resources
                </a>
                <a 
                  href={ROUTES.ABOUT}
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                >
                  About
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    navigate(ROUTES.LOGIN);
                    onToggle();
                  }}
                  className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 mb-3"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    navigate(ROUTES.REGISTER);
                    onToggle();
                  }}
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