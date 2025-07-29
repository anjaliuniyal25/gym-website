const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold">Brahmastra</h2>
          <p className="text-sm text-gray-300 mt-2">
            Dehradun's biggest and most trusted fitness center, <br />
            helping people of all ages unlock their true strength.
          </p>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full lg:w-2/3">
          <div>
            <h4 className="text-lime-300 font-medium mb-2">QUICK LINK</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Facilities</li>
              <li>Trainer</li>
              <li>Plans</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lime-300 font-medium mb-2">SOCIAL LINK</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>X</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lime-300 font-medium mb-2">LEGAL</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
