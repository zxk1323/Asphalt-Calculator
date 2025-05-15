import Header from '../components/Header';
import Footer from '../components/Footer';
import AsphaltCalculator from '../components/AsphaltCalculator';
import AsphaltInfo from '../components/AsphaltInfo';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asphalt Calculator - Estimate Materials and Costs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Quickly calculate the amount of asphalt needed for your paving project
          </p>
          <div className="flex justify-center">
            <a 
              href="#calculator" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Start Calculating
            </a>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Asphalt Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <svg 
                  className="w-8 h-8 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Calculations</h3>
              <p className="text-gray-600">
                Get precise volume and weight calculations for your asphalt project using standard industry density values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <svg 
                  className="w-8 h-8 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Estimation</h3>
              <p className="text-gray-600">
                Easily estimate material costs by entering the price per ton of asphalt for better budget planning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unit Conversion</h3>
              <p className="text-gray-600">
                Switch between imperial and metric units with ease. Get results in cubic feet, cubic yards, cubic meters, pounds, tons, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 calculator-container">
        <h2 className="text-3xl font-bold text-center mb-12">Asphalt Calculator</h2>
        <AsphaltCalculator />
      </section>
      
      {/* Information Section with SEO Content */}
      <AsphaltInfo />
      
      <Footer />
    </main>
  );
}
