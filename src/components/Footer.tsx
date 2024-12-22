import { Link } from 'react-router-dom';
import { LogoLink } from './ui/logo';
import { ROUTES, APP_CONFIG, COMPANY_INFO } from '@/utils/constants';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: ROUTES.ABOUT },
      { label: 'Careers', href: ROUTES.CAREERS },
      { label: 'Press', href: ROUTES.PRESS }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: ROUTES.INSIGHTS },
      { label: 'Help Center', href: ROUTES.HELP_CENTER },
      { label: 'FAQ', href: ROUTES.FAQS }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
      { label: 'Terms', href: ROUTES.TERMS },
      { label: 'Licenses', href: ROUTES.LICENSES }
    ]
  },
  {
    title: 'Contact',
    links: [
      { label: 'Support', href: ROUTES.HELP_CENTER },
      { label: 'Advisory', href: ROUTES.ADVISORY },
      { label: 'Partnerships', href: ROUTES.PARTNERSHIPS }
    ]
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-4 mb-12">
            <LogoLink 
              variant="full"
              theme="dark"
              size="xl"
              className="mb-6 inline-block"
            />
            <p className="text-gray-400 max-w-xl">
              BRiX Assets transforms institutional-grade investments into accessible opportunities 
              through innovative fractionalization technology.
            </p>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-white mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {APP_CONFIG.APP_NAME}. All rights reserved.</p>
            
            {/* Investment Disclaimer */}
            <p className="text-center md:text-right">
              Investment involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}