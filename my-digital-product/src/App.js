// src/App.js
import React from "react";

function App() {
  const languages = [
    {
      title: "The Language of User Story",
      features: [
        "Agile Communication",
        "Effective Communication",
        "Standardized & Structured Terminologies",
        "Precise Digital Product Analysis",
      ],
    },
    {
      title: "The Language of Money Digitization",
      features: [
        "Agile Communication",
        "Effective Communication",
        "Standardized & Structured Terminologies",
        "Precise Digital Product Analysis",
      ],
    },
    {
      title: "The Language of Management in Digitization",
      features: [
        "Agile Communication",
        "Effective Communication",
        "Standardized & Structured Terminologies",
        "Precise Digital Product Analysis",
      ],
    },
    {
      title: "The Language of Data in Digitization",
      features: [
        "Agile Communication",
        "Effective Communication",
        "Standardized & Structured Terminologies",
        "Precise Digital Product Analysis",
      ],
    },
    {
      title: "The Language of Revenue Generation",
      features: [
        "Agile Communication",
        "Effective Communication",
        "Standardized & Structured Terminologies",
        "Precise Digital Product Analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Learn the Language of <span className="text-yellow-300">Digital Product Development</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Up to <span className="font-semibold">60% of success</span> in Digital Product Development depends on <span className="font-semibold">Agile Communication</span>.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-yellow-300 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Contact Us
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Try Free Courses
          </button>
        </div>
      </header>

      {/* Languages Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Explore 5 Key Languages of Digital Products
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{lang.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {lang.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            View All Languages
          </button>
        </div>
      </section>

      {/* Platform Section */}
      <section className="bg-indigo-50 py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700">Digital Product Simulation Platform</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
          Learn how the language of digitization creates <span className="font-semibold">structured and standardized terminologies</span> for easy Agile Communication implementation.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Details
        </button>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; 2025 Digital Product Academy. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
