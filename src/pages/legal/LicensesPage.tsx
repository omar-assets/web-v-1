import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

function LicensesPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Source Licenses
            </h1>
            <p className="text-xl text-gray-600">
              Acknowledgments and licenses for third-party software used in our platform.
            </p>
          </div>
        </div>
      </BackgroundPattern>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-12">
              <div className="prose prose-green max-w-none">
                <h2>Third-Party Software</h2>
                <p>
                  BRiX Assets uses open source software components. Below is a list of major dependencies and their licenses:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">React</h3>
                    <p className="text-gray-600 mb-2">MIT License</p>
                    <a 
                      href="https://github.com/facebook/react/blob/main/LICENSE" 
                      className="text-primary hover:text-primary-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View License
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Vite</h3>
                    <p className="text-gray-600 mb-2">MIT License</p>
                    <a 
                      href="https://github.com/vitejs/vite/blob/main/LICENSE" 
                      className="text-primary hover:text-primary-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View License
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
                    <p className="text-gray-600 mb-2">MIT License</p>
                    <a 
                      href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE" 
                      className="text-primary hover:text-primary-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View License
                    </a>
                  </div>
                </div>

                <h2 className="mt-12">License Compliance</h2>
                <p>
                  We are committed to complying with all open source license requirements. 
                  If you believe any license requirements are not being met, please contact us.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default LicensesPage;