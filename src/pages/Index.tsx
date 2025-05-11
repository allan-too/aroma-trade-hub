
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="coffee-container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              A New Way to Trade Coffee
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-coffee-100 animate-slide-in">
              Connect directly with coffee producers and buyers around the world. 
              Fair prices, exceptional quality, and complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" className="text-lg px-8 bg-white text-coffee-800 hover:bg-coffee-100">
                  Get Started
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-coffee-100">
        <div className="coffee-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-800">Why Coffee Exchange?</h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              Our platform revolutionizes how coffee is traded, benefiting both growers and buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-coffee-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coffee-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Fair Prices</h3>
              <p className="text-coffee-600">
                Direct trade means farmers earn more for their hard work, while buyers pay fair market rates without unnecessary markups.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-coffee-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coffee-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Quality Assurance</h3>
              <p className="text-coffee-600">
                Every batch is verified for quality, with transparent ratings, reviews, and certifications you can trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-coffee-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-coffee-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Global Connections</h3>
              <p className="text-coffee-600">
                Connect with growers and buyers across the world, opening new markets and discovering unique coffee varieties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="coffee-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-800">How It Works</h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              Our platform simplifies the coffee trading process for everyone involved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Create an Account</h3>
              <p className="text-coffee-600">
                Sign up as a buyer or seller and complete your profile to get started.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">List or Browse</h3>
              <p className="text-coffee-600">
                Sellers list their coffee lots while buyers browse available offerings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Connect & Negotiate</h3>
              <p className="text-coffee-600">
                Use our messaging system to discuss details and finalize the transaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-coffee-800">Secure Payment</h3>
              <p className="text-coffee-600">
                Our escrow system ensures safe transactions and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="coffee-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Coffee Business?</h2>
            <p className="text-xl mb-8 text-coffee-200">
              Join thousands of coffee growers and buyers already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" className="text-lg px-8 bg-white text-coffee-800 hover:bg-coffee-100">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-coffee-100">
        <div className="coffee-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-800">What Our Users Say</h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              Hear from the coffee growers and buyers who use our platform every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coffee-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Maria Rodriguez</h4>
                  <p className="text-sm text-coffee-500">Coffee Farmer, Colombia</p>
                </div>
              </div>
              <p className="text-coffee-600">
                "Coffee Exchange has transformed our small farm's business. We now sell directly to buyers around the world and earn 30% more than before."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coffee-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-coffee-800">David Chen</h4>
                  <p className="text-sm text-coffee-500">Roastery Owner, Canada</p>
                </div>
              </div>
              <p className="text-coffee-600">
                "The quality and variety of coffee available here is outstanding. Direct communication with growers ensures we get exactly what we need."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coffee-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Aisha Mwangi</h4>
                  <p className="text-sm text-coffee-500">Coffee Cooperative, Kenya</p>
                </div>
              </div>
              <p className="text-coffee-600">
                "The platform is easy to use and has opened up new markets for our cooperative. The secure payment system gives us peace of mind."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
