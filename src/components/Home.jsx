import img from '../assets/home.png';



const Home = () => {
  return (
    <div>
      <section
        className="w-full h-screen bg-cover bg-center relative "
        id="home"
        style={{backgroundImage:`url(${img})`}}
      >
        <div className=" relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">UNLOCK YOUR INNER STRENGTH</h1>
          <p className="text-sm sm:text-base md:text-lg mt-6 max-w-xl">
            Train With Purpose.Sweat With Pride.Welcome To Brahmastra.The Gym-
            <br />
            Where Legends Train.
          </p>
          <button className="bg-lime-300 text-black text-sm sm:text-base px-6 py-3 mt-8 rounded-xl font-semibold hover:bg-lime-400 transition duration-300">
            Explore Our GYM
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
