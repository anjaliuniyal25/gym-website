import img from '../assets/about.png'

const About = () => {
  return (
    <div>
      <section
        className="w-full h-screen flex items-center text-white"
        style={{   background: "linear-gradient(211.9deg, #181f30 65.31%, #323f1d 88.89%)"}}
     
      >
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start space-y-5">
            <button className="bg-lime-300 text-black px-4 py-2 rounded font-semibold w-fit p-2 mb-7">
              About Us
            </button>

            <h2 className="text-4xl font-bold">BUILT FOR EVERYBODY</h2>

            <p className="text-lg">
              Brahmastra The Gym isn’t just a fitness center — it’s a lifestyle
              hub for every age, every goal, and every strength level. Whether
              you’re stepping into a gym for the first time or pushing your
              limits as an athlete, our community and coaches are here to
              support your journey.
            </p>

            <button className="border-2 border-lime-300 text-lime-300 px-4 py-2 rounded w-fit hover:bg-lime-300 hover:text-black transition">
              Read More
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={img}
              alt="Gym Image"
              className="h-72 w-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
