import image from '../assets/demo.png'

const Testimonials = () => {
  return (
    <section
      className="testimonials min-h-[605px] bg-[#11151d] py-10 px-4"
      id="testimonials"
    >
      <h2 className="text-4xl md:text-5xl italic font-medium text-center text-white pt-4">
        TESTIMONIALS
      </h2>
      <p className="text-lg text-center text-white">What Our Members</p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center">
        <div className="relative w-[260px] h-[278px] text-center rounded-2xl border border-white bg-[#42371933] px-6 pt-14 pb-6">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2">
            <img
              src={image}
              alt="image"
              className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white"
            />
          </div>
          <h3 className="mt-2 text-white font-bold text-lg">Anjali Mehta</h3>
          <p className="text-sm text-gray-300 mb-4">Student</p>
          <p className="text-sm text-gray-200">
            “Brahmastra The Gym is the best thing that happened to my health.
            The trainers are friendly yet push you hard enough to grow. The
            atmosphere is always motivating, and the results speak for
            themselves!”
          </p>
        </div>

        <div className="relative w-[260px] h-[278px] text-center rounded-2xl border border-white bg-[#42371933] px-6 pt-14 pb-6">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2">
            <img
              src={image}
              alt="image"
              className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white"
            />
          </div>
          <h3 className="mt-2 text-white font-bold text-lg">Anjali Mehta</h3>
          <p className="text-sm text-gray-300 mb-4">Student</p>
          <p className="text-sm text-gray-200">
            “Brahmastra The Gym is the best thing that happened to my health.
            The trainers are friendly yet push you hard enough to grow. The
            atmosphere is always motivating, and the results speak for
            themselves!”
          </p>
        </div>

       <div className="relative w-[260px] h-[278px] text-center rounded-2xl border border-white bg-[#42371933] px-6 pt-14 pb-6">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2">
            <img
              src={image}
              alt="image"
              className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white"
            />
          </div>
          <h3 className="mt-2 text-white font-bold text-lg">Anjali Mehta</h3>
          <p className="text-sm text-gray-300 mb-4">Student</p>
          <p className="text-sm text-gray-200">
            “Brahmastra The Gym is the best thing that happened to my health.
            The trainers are friendly yet push you hard enough to grow. The
            atmosphere is always motivating, and the results speak for
            themselves!”
          </p>
        </div>

        <div className="relative w-[260px] h-[278px] text-center rounded-2xl border border-white bg-[#42371933] px-6 pt-14 pb-6">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2">
            <img
              src={image}
              alt="image"
              className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white"
            />
          </div>
          <h3 className="mt-2 text-white font-bold text-lg">Anjali Mehta</h3>
          <p className="text-sm text-gray-300 mb-4">Student</p>
          <p className="text-sm text-gray-200">
            “Brahmastra The Gym is the best thing that happened to my health.
            The trainers are friendly yet push you hard enough to grow. The
            atmosphere is always motivating, and the results speak for
            themselves!”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
