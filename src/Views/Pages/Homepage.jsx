import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Plan Your Perfect Trip
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Create smart itineraries, calculate time at each destination, and explore famous spots effortlessly.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Start Planning
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Travel"
          className="w-72 md:w-96"
        />
      </section>

      {/* Features */}
      <section className="px-8 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Smart Scheduling</h3>
            <p className="text-gray-600">
              Automatically calculate time spent at each tourist spot.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Top Destinations</h3>
            <p className="text-gray-600">
              Discover famous places around the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Custom Plans</h3>
            <p className="text-gray-600">
              Create and manage your personalized travel plans.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">Start Your Journey Today</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © 2026 TourPlan. All rights reserved.
      </footer>
    </div>
  );
}