import React from 'react';
import { Shield, Wallet, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    text: 'Secure, regulated platform'
  },
  {
    icon: Wallet,
    text: 'Flexible fractional investments'
  },
  {
    icon: LineChart,
    text: 'Expert portfolio management'
  }
];

export function CallToActionBenefits() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
      {benefits.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-2 text-gray-600">
          <Icon className="h-5 w-5 text-primary" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}