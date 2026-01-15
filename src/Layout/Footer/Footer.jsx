const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-3 gap-20">

        {/* Column 1 */}
        <div>
          <h4 className="text-xl mb-6 font-light">Useful links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">The company</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
            <li><a href="#" className="hover:text-white">Communication</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl mb-6 font-light">Representations</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Product Production & Packaging</a></li>
            <li><a href="#" className="hover:text-white">Quality control</a></li>
            <li><a href="#" className="hover:text-white">Supply Chain</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl mb-6 font-light">Information</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy & Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between text-sm text-gray-400">
        
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/images/Plain.Europack.Logo_.white_.png"
            alt="Europack"
            className="h-8"
          />
          <span>Industrial Solutions S.A. | Est. 1972</span>
        </div>

        {/* Copyright */}
        <div>
          © Copyright 2026 Europack | Created by ADS Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
