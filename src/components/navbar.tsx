export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Journals
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Books
            </a>
          </div>

          {/* Separator */}
          <div className="flex items-center">
            <span className="h-6 w-px bg-gray-300 mx-8" aria-hidden="true" />
          </div>

          {/* Right Section */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              News and Events
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Our Services
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};