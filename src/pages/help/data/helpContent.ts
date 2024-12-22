import { Book, Shield, DollarSign, Clock, Users, Settings } from 'lucide-react';

export const helpCategories = [
  {
    icon: Book,
    title: 'Platform Launch',
    articles: [
      'Early Access Program Details',
      'Launch Timeline and Milestones',
      'Pre-registration Benefits',
      'Waitlist Information'
    ],
    description: 'Learn about our upcoming launch and how to get early access'
  },
  {
    icon: DollarSign,
    title: 'Investment Features',
    articles: [
      'Understanding Fractional Investments',
      'Investment Minimums and Limits',
      'Asset Classes Overview',
      'Portfolio Management Tools'
    ],
    description: 'Explore our innovative investment features and capabilities'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    articles: [
      'Regulatory Framework',
      'Investment Protection',
      'Security Infrastructure',
      'Privacy Measures'
    ],
    description: 'Learn about our security measures and regulatory compliance'
  }
];

export const sidebarTopics = [
  'Platform Launch',
  'Early Access',
  'Investment Features',
  'Security',
  'Registration',
  'Contact Us'
];

export const supportInfo = {
  email: {
    title: 'Email Support',
    description: 'Get pre-launch assistance via email',
    availability: 'Response within 24 hours',
    action: 'support@brixasset.com'
  },
  waitlist: {
    title: 'Join Waitlist',
    description: 'Secure your early access spot',
    availability: 'Limited spots available',
    action: 'Join Now'
  },
  updates: {
    title: 'Launch Updates',
    description: 'Stay informed about our progress',
    availability: 'Regular updates',
    action: 'Subscribe'
  }
};

export const launchFAQs = [
  {
    question: 'When is the platform launching?',
    answer: 'BRiX Assets is scheduled to launch in early 2025. We\'re currently in the final stages of development and regulatory approval.'
  },
  {
    question: 'How can I get early access?',
    answer: 'Join our waitlist to secure priority access. Early adopters will receive exclusive benefits and reduced fees for the first year.'
  },
  {
    question: 'What are the minimum investment requirements?',
    answer: 'The platform will launch with a minimum investment of $100, allowing broader access to institutional-grade investments.'
  },
  {
    question: 'Is the platform regulated?',
    answer: 'Yes, we are in the process of obtaining all necessary regulatory approvals and will be fully compliant with SEC regulations at launch.'
  }
];