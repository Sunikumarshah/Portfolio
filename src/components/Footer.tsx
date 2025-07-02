import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sunil Shah 
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current animate-pulse" size={16} />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © 2024 Sunil shah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;