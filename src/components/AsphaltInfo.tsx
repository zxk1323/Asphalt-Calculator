import Link from 'next/link';

export default function AsphaltInfo() {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What Is the Asphalt Driveway Calculator?</h2>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Our <strong>asphalt driveway cost calculator</strong> helps you accurately estimate the tonnage and cost of asphalt needed for your paving project. Whether you&apos;re planning a new driveway, road, or parking lot, our calculator provides precise estimates of asphalt tonnage and total project costs.
            </p>
            
            <p className="mb-4">
              Using the <strong>asphalt tonnage calculator</strong> is simple - enter your project dimensions and desired asphalt thickness. The calculator instantly computes the required tonnage and provides cost estimates based on current asphalt prices per ton.
            </p>
            
            <p className="mb-6">
              Our <strong>asphalt ton calculator</strong> helps contractors and DIY homeowners avoid over-ordering or under-ordering materials. Get accurate tonnage calculations and cost estimates for your driveway project in seconds.
            </p>
          </div>
        </section>
        
        <section id="how-to-use" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How to Use the Asphalt Driveway Calculator</h2>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Follow these simple steps to calculate asphalt tonnage and costs for your driveway:
            </p>
            
            <ol className="list-decimal ml-6 mb-6 space-y-2">
              <li>Choose your measurement system (Imperial or Metric)</li>
              <li>Enter your driveway or paving area dimensions</li>
              <li>Specify the asphalt thickness (typical driveway thickness ranges from 2-3 inches)</li>
              <li>Enter the current asphalt price per ton in your area</li>
              <li>Get instant tonnage calculations and cost estimates</li>
            </ol>
            
            <p className="mb-4">
              Our <strong>asphalt driveway calculator</strong> provides results in both tons and metric tons, making it useful for any project size. The calculator helps you estimate materials accurately and plan your budget effectively.
            </p>
            
            <p className="mb-4">
              For accurate tonnage calculations, use these recommended asphalt thicknesses:
            </p>
            
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li><strong>Residential driveways:</strong> 2-3 inches (typical tonnage: 1-2 tons per 100 sq ft)</li>
              <li><strong>Parking lots:</strong> 3-4 inches (typical tonnage: 2-3 tons per 100 sq ft)</li>
              <li><strong>Roads:</strong> 4-6 inches (typical tonnage: 3-4 tons per 100 sq ft)</li>
            </ul>
          </div>
        </section>
        
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How much does asphalt typically cost?</h3>
              <p className="text-gray-600">
                Asphalt prices vary by location, quality, and market conditions. As of 2023, hot mix asphalt typically costs between $85-150 per ton in the United States. For the most accurate pricing, contact local suppliers or paving contractors in your area.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How thick should asphalt be for a driveway?</h3>
              <p className="text-gray-600">
                For residential driveways, a total asphalt thickness of 2-3 inches (5-7.5 cm) over a properly prepared base is standard. This typically consists of a 1.5-2 inch base layer and a 1-1.5 inch surface layer. In colder climates or for heavier vehicles, consider using 3-4 inches (7.5-10 cm) total thickness.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How accurate is the asphalt calculator?</h3>
              <p className="text-gray-600">
                Our <strong>asphalt calculator</strong> provides highly accurate estimates based on the dimensions you enter. It uses standard asphalt density values (145 lb/ft³ or 2,322 kg/m³) for calculations. Note that actual asphalt requirements may vary slightly due to factors like ground conditions, compaction rates, and specific mix properties.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between hot mix asphalt and cold mix asphalt?</h3>
              <p className="text-gray-600">
                Hot mix asphalt is heated and mixed at temperatures between 300-350°F (150-175°C), providing durability and strength ideal for permanent paving. Cold mix asphalt contains emulsifiers allowing it to be applied at ambient temperatures, making it suitable for temporary repairs and patching. Our calculator works for both types, as the density differences are minimal.
              </p>
            </div>
          </div>
        </section>
        
        <section id="benefits" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Benefits of Using Our Asphalt Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Precise Tonnage Calculations</h3>
              <p className="text-gray-600">
                Get accurate asphalt tonnage calculations for your driveway project. Our <strong>asphalt tonnage calculator</strong> helps you order exactly what you need, preventing waste and additional costs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Driveway Cost Planning</h3>
              <p className="text-gray-600">
                Use our <strong>asphalt driveway cost calculator</strong> to accurately budget for your project. Compare contractor quotes and material prices with confidence.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Easy Tonnage Conversion</h3>
              <p className="text-gray-600">
                Our <strong>asphalt ton calculator</strong> handles all unit conversions automatically. Get results in tons or metric tons instantly, saving you time on calculations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Project Optimization</h3>
              <p className="text-gray-600">
                Experiment with different driveway dimensions and asphalt thicknesses to optimize your project for both performance and cost-effectiveness.
              </p>
            </div>
          </div>
        </section>
        
        <section id="conclusion">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Calculate Your Asphalt Needs?</h2>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              Whether you&apos;re a homeowner planning a driveway, a contractor bidding on a commercial job, or an engineer designing a roadway, our <strong>asphalt calculator</strong> provides the accurate material estimates you need. Simply enter your project dimensions above to get started.
            </p>
            
            <p className="mb-6">
              For larger or more complex projects, consider consulting with a professional paving contractor who can provide a detailed assessment of your specific needs, including base preparation, drainage considerations, and optimal asphalt thickness.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Pro Tip</h3>
              <p className="text-blue-700">
                When planning your asphalt project, it&apos;s advisable to order 5-10% more material than the calculated amount to account for waste, spillage, and potential measurement inaccuracies. Our calculator provides precise base estimates, but having a small buffer ensures you won&apos;t run short during installation.
              </p>
            </div>
            
            <p>
              Have more questions about your asphalt paving project? Explore our resource section for detailed guides on asphalt types, installation best practices, and maintenance tips, or <Link href="#" className="text-blue-600 hover:underline">contact us</Link> for personalized assistance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 