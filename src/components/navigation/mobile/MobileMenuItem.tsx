import { Link } from 'react-router-dom';

interface MobileMenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function MobileMenuItem({ href, children, onClick }: MobileMenuItemProps) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}