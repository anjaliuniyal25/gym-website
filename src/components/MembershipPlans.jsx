const MembershipPlans = () => {
  return (
    <div>
      <section
        id="membershipPlans"
        className="min-h-[607px] px-4 py-16 text-white"
         style={{
          background:
            "radial-gradient(33.92% 54.78% at 48.32% 50.08%, #28281c 13.46%, #121d33 100%)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium italic text-center mb-4">
          MEMBERSHIP PLANS
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-center mb-12 px-2 sm:px-4">
          Flexible, Transparent, And Designed For Every Fitness Level. Whether
          <br />
          You’re Just Starting Or Levelling Up, We've Got A Plan That Fits.
        </p>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="bg-white/5 rounded-xl px-6 py-8 w-72 text-left">
            <h3 className="text-2xl font-semibold text-white mb-1">Basic Plan</h3>
            <p className="text-sm text-gray-300 mb-3">Perfect for Beginners</p>
            <p className="text-lg font-bold text-white mb-2">Price: ₹999/month</p>
            <p className="text-base text-white mb-4">
              Start your fitness journey with guided support.
            </p>
            <ul className="list-none pl-0 text-sm text-gray-300 space-y-2">
              <li>• Full Gym Access (6 AM - 12 PM)</li>
              <li>• Free Introductory Fitness Consultation</li>
              <li>• Personalized Diet Plan</li>
              <li>• Access to Fitness App</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl px-6 py-8 w-72 text-left">
            <h3 className="text-2xl font-semibold text-white mb-1">
              Standard Plan
            </h3>
            <p className="text-sm text-gray-300 mb-3">Perfect for Beginners</p>
            <p className="text-lg font-bold text-white mb-2">Price: ₹999/month</p>
            <p className="text-base text-white mb-4">
              Start your fitness journey with guided support.
            </p>
            <ul className="list-none pl-0 text-sm text-gray-300 space-y-2">
              <li>• Full Gym Access (6 AM - 12 PM)</li>
              <li>• Free Introductory Fitness Consultation</li>
              <li>• Personalized Diet Plan</li>
              <li>• Access to Fitness App</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl px-6 py-8 w-72 text-left">
            <h3 className="text-2xl font-semibold text-white mb-1">Premium Plan</h3>
            <p className="text-sm text-gray-300 mb-3">Perfect for Beginners</p>
            <p className="text-lg font-bold text-white mb-2">Price: ₹999/month</p>
            <p className="text-base text-white mb-4">
              Start your fitness journey with guided support.
            </p>
            <ul className="list-none pl-0 text-sm text-gray-300 space-y-2">
              <li>• Full Gym Access (6 AM - 12 PM)</li>
              <li>• Free Introductory Fitness Consultation</li>
              <li>• Personalized Diet Plan</li>
              <li>• Access to Fitness App</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPlans;
