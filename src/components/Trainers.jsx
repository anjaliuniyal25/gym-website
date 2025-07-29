import trainer from "../assets/trainer.png";

const Trainers = () => {
  return (
    <div>
      <section
        id="trainers"
        className="text-white text-center px-6 py-12"
        style={{
          background: "radial-gradient(44.41% 50% at 50% 50%, #5e5b30 0%, #12151d 100%)",
        }}
      
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-semibold mb-4">
          MEET OUR TRAINERS
        </h2>
        <p className="text-base sm:text-lg mb-10">Certified.Motivating.Results-Driven.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-2">
          <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
          <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
             <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
            <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
           <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
           <div className="bg-[#151b2a59] rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-300">
            <div
              className=" bg-cover h-[300px] w-full rounded-lg mb-4"
              style={{ backgroundImage: `url(${trainer})` }}
            ></div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Reuben Etomet</h3>
            <p className="text-sm sm:text-base font-medium">PERSONAL TRAINER</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
