import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="text-2xl font-bold">Land of DP</div>
        <div className="flex gap-2 flex-wrap">
          <button className="bg-white text-black px-4 py-2 border border-black rounded">Languages</button>
          <button className="bg-white text-black px-4 py-2 border border-black rounded">Certification</button>
          <button className="bg-white text-black px-4 py-2 border border-black rounded">For Companies</button>
          <button className="bg-white text-black px-4 py-2 border border-black rounded">For Startups</button>
          <button className="bg-white text-black px-4 py-2 border border-black rounded">Profiles</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">DP Handbook</button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded">Upcoming Classes</button>
          <button className="bg-white text-black px-4 py-2 border border-black rounded">Login →</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row px-16 py-12 gap-12 items-center">
        
        {/* Left Text Div */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold mb-4">
            Up to <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1">60%</span> of success in Digital Product Development depends on Agile Communication
          </h1>
          <p className="font-bold mb-6">
            The Languages of Digital Product Creates a Structured & Standardized Terminologies for easy Implementation of Agile Communication
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Contact us</button>
        </div>

        {/* Right Image Div */}
        <div className="flex-1 h-96 flex items-center justify-center bg-gray-200 rounded overflow-hidden">
          <img
            src=""  
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default App;
