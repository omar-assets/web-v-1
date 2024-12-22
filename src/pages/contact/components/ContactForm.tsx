import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validation/schemas';
import { FormError } from '@/components/form/FormError';
import { useFormError } from '@/hooks/useFormError';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Send, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { formError, handleFormError, clearErrors } = useFormError();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      clearErrors();
      // Submit form data
      console.log('Form submitted:', data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                We'll get back to you within 24 hours
              </p>
            </div>

            {formError && <FormError error={formError} />}

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <p>Message sent successfully! We'll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Your name"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="your@email.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="What is your message about?"
                  {...register('subject')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="How can we help you?"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}