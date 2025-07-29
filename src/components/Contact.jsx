import map from '../assets/map.png'


const Contact = () => {
  return (
    <section className="py-16 px-6 bg-[#1a212e]" id="contact">
      <h2 className="text-white text-4xl font-semibold text-center">
        READY TO TRANSFORM?
      </h2>
      <p className="text-center text-gray-300 mt-2">
        Your Fitness Journey Begins Now. Get Stronger, Healthier,
        <br />
        And More Confident With Brahmastra The Gym.
      </p>

      <div className="  flex flex-col lg:flex-row justify-around items-start mt-10 gap-10">
        {/* Contact Info */}
        <div className="max-w-md text-white ">
          <h3 className="text-3xl font-bold mb-6">Our Contact Detail</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <i className="bx bxs-phone pr-2"></i>
              <strong className="text-[#d7fc00]">Call Us</strong>
              <br />
              +91 79064 10142
            </div>
            <div>
              <i className="bx bxs-envelope pr-2"></i>
              <strong className="text-[#d7fc00]">Email Us</strong>
              <br />
              Brahmastrathegym@gmail.com
            </div>
            <div>
              <i className="bx bxs-time pr-2"></i>
              <strong className="text-[#d7fc00]">Working Hours</strong>
              <br />
              Mon-Sat 09:00AM - 10:00PM
            </div>
            <div>
              <i className="bx bx-current-location pr-2"></i>
              <strong className="text-[#d7fc00]">Location</strong>
              <br />
              153-C Rajpur Road, opposite Pacific Mall,
              <br />
              Dehra Dun, India 248001
            </div>
          </div>
          <img
            src={map}
            alt="Map"
            className="w-full h-[300px] mt-6 object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md bg-black/5 border border-white/20 rounded-xl p-6">
          <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-[#d7fc00]">
                Name
              </label>
              <input
                type="text"
                placeholder="Rahul"
                required
                className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="text-[#d7fc00]">
                Contact
              </label>
              <input
                type="text"
                placeholder="+91 8790411231"
                required
                className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-[#d7fc00]">
                Email
              </label>
              <input
                type="email"
                placeholder="rahul@gmail.com"
                required
                className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="text-[#d7fc00]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-[#d7fc00]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter a message"
                className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-md mt-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#d4ff00] text-black font-bold py-2 px-4 rounded-md hover:bg-[#dcded6] transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
