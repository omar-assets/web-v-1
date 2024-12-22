import { SEO } from '@/components/seo/SEO';
import { ContactHero } from './components/ContactHero';
import { ContactOptions } from './components/ContactOptions';
import { ContactForm } from './components/ContactForm';
import { ContactOffices } from './components/ContactOffices';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

export function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with our team to learn more about our investment opportunities and platform capabilities."
      />
      <ErrorBoundary>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactOffices />
      </ErrorBoundary>
    </>
  );
}

export default ContactPage;