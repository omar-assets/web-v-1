import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
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
  );
}