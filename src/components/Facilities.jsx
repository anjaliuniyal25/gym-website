import img1 from '../assets/image1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';



const Facilities = () => {
  return (
    <div>
      <section
        id="facilities"
        class="min-h-screen px-4 py-16 text-white text-center"
        style={{
        background: "linear-gradient(127.06deg, #33401d 3.98%, #181f30 97.69%)"
      }}
      >
        <h2 class="text-5xl italic font-medium mb-4">FACILITIES SECTION</h2>
        <p class="text-lg mb-10 text-white">
          Modern, Hygienic, And Built For Performance.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-[1100px] mx-auto">
          <div
            class="relative h-[400px] bg-cover bg-center border-2 border-gray-300 rounded-xl"
            style={{backgroundImage:`url(${img1})`}}
          >
            <span class="absolute bottom-4 left-4 text-white text-[40px] font-bold italic z-10 text-left">
              ZUMBA & YOGA STUDIO
            </span>
          </div>

          <div
            class="relative h-[400px] bg-cover bg-center border-2 border-gray-300 rounded-xl"
          style={{backgroundImage:`url(${img2})`}}
          >
            <span class="absolute bottom-4 left-4 text-white text-[40px] font-bold italic z-10 text-left">
              FUNCTIONAL TRAINING ZONE
            </span>
          </div>

          <div
            class="relative h-[400px] bg-cover bg-center border-2 border-gray-300 rounded-xl"
           style={{backgroundImage:`url(${img3})`}}
          >
            <span class="absolute bottom-4 left-4 text-white text-[40px] font-bold italic z-10 text-left">
              ADVANCED CARDIO &<br />
              STRENGTH EQUIPMENT
            </span>
          </div>

          <div
            class="relative h-[400px] bg-cover bg-center border-2 border-gray-300 rounded-xl"
            style={{backgroundImage:`url(${img4})`}}
          >
            <span class="absolute bottom-4 left-4 text-white text-[40px] font-bold italic z-10 text-left">
              CROSSFIT AND HIIT ARENA
            </span>
          </div>

          <div
            class="relative h-[400px] bg-cover bg-center border-2 border-gray-300 rounded-xl"
          style={{backgroundImage:`url(${img5})`}}
          >
            <span class="absolute bottom-4 left-4 text-white text-[40px] font-bold italic z-10 text-left">
              BOXING
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
