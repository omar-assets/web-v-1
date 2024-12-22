import { lazy } from 'react';
import { ROUTES } from '@/utils/constants';

// Lazy load components
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const FAQsPage = lazy(() => import('../pages/FAQsPage'));
const HowItWorksPage = lazy(() => import('../pages/HowItWorksPage'));
const MarketplacePage = lazy(() => import('../pages/MarketplacePage'));
const ResourcesPage = lazy(() => import('../pages/ResourcesPage'));
const InsightsPage = lazy(() => import('../pages/insights/InsightsPage'));
const HelpCenterPage = lazy(() => import('../pages/help/HelpCenterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/error/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/legal/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/legal/TermsPage'));
const LicensesPage = lazy(() => import('../pages/legal/LicensesPage'));
const CareersPage = lazy(() => import('../pages/careers/CareersPage'));
const PressPage = lazy(() => import('../pages/press/PressPage'));
const AdvisoryPage = lazy(() => import('../pages/advisory/AdvisoryPage'));
const PartnershipsPage = lazy(() => import('../pages/partnerships/PartnershipsPage'));

// Public routes accessible to all users
export const publicRoutes = [
  { path: ROUTES.HOME, component: HomePage },
  { path: ROUTES.ABOUT, component: AboutPage },
  { path: ROUTES.CONTACT, component: ContactPage },
  { path: ROUTES.FAQS, component: FAQsPage },
  { path: ROUTES.HOW_IT_WORKS, component: HowItWorksPage },
  { path: ROUTES.MARKETPLACE, component: MarketplacePage },
  { path: ROUTES.RESOURCES, component: ResourcesPage },
  { path: ROUTES.INSIGHTS, component: InsightsPage },
  { path: ROUTES.HELP_CENTER, component: HelpCenterPage },
  { path: ROUTES.LOGIN, component: LoginPage },
  { path: ROUTES.REGISTER, component: RegisterPage },
  { path: ROUTES.PRIVACY_POLICY, component: PrivacyPolicyPage },
  { path: ROUTES.TERMS, component: TermsPage },
  { path: ROUTES.LICENSES, component: LicensesPage },
  { path: ROUTES.CAREERS, component: CareersPage },
  { path: ROUTES.PRESS, component: PressPage },
  { path: ROUTES.ADVISORY, component: AdvisoryPage },
  { path: ROUTES.PARTNERSHIPS, component: PartnershipsPage },
  { path: ROUTES.NOT_FOUND, component: NotFoundPage }
];

// Protected routes requiring authentication
export const protectedRoutes = [
  { path: ROUTES.DASHBOARD, component: DashboardPage }
];