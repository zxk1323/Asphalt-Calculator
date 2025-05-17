import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Asphalt Calculator</h3>
            <p className="text-gray-300 mb-4">
              A free tool to help you calculate the amount of asphalt needed for your paving projects.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:xinke1323@gmail.com" className="text-gray-300 hover:text-white" aria-label="Email">
                <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v8a2 2 0 002 2h14a2 2 0 002-2v-8m-18 0l9 5 9-5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="#calculator" className="text-gray-300 hover:text-white">Calculator</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">About</Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">Asphalt Guide</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">Cost Estimation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">DIY Tips</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">Contractor Finder</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© {currentYear} Asphalt Calculator. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 