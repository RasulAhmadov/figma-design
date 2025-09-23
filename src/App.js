import React from "react";
import Sekil1 from "./assets/sekil1.png";
import Sekil2 from "./assets/sekil2.png";
import Sekil3 from "./assets/sekil3.png";
import Sekil4 from "./assets/sekil4.png";
import Sekil5 from "./assets/sekil5.png";
import Sekil6 from "./assets/sekil6.png";
import Sekil7 from "./assets/sekil7.png";
import Sekil8 from "./assets/sekil8.png";
import Sekil9 from "./assets/sekil9.png";
import Sekil10 from "./assets/sekil10.png";
import Sekil11 from "./assets/sekil11.png";
import Sekil12 from "./assets/sekil12.png";
import Sekil13 from "./assets/sekil13.png";
import Sekil14 from "./assets/sekil14.png";
import Sekil15 from "./assets/sekil15.png";
import Sekil16 from "./assets/sekil16.png";
import Sekil17 from "./assets/sekil17.png";
import Sekil18 from "./assets/sekil18.png";
import Sekil19 from "./assets/sekil19.png";
import Sekil20 from "./assets/sekil20.png";
import Sekil21 from "./assets/sekil21.png";
import Sekil22 from "./assets/sekil22.png";
import Sekil25 from "./assets/sekil25.png";
import Sekil26 from "./assets/sekil26.png";
import Sekil27 from "./assets/sekil27.png";
import Sekil28 from "./assets/sekil28.png";
import Sekil29 from "./assets/sekil29.png";
import Sekil30 from "./assets/sekil30.png";
import Sekil31 from "./assets/sekil31.png";
import Sekil32 from "./assets/sekil32.png";


function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-start gap-6 bg-white shadow px-6 py-3">
        <h1 className="text-xl font-bold text-gray-800">Land of DP</h1>
        <button className="text-gray-800 hover:text-blue-600">Languages</button>
        <button className="text-gray-800 hover:text-blue-600">Certification</button>
        <button className="text-gray-800 hover:text-blue-600">For Companies</button>
        <button className="text-gray-800 hover:text-blue-600">For Startups</button>
        <button className="text-gray-800 hover:text-blue-600">Profiles</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
          DP Handbook
        </button>
        <button className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-500 transition">
          Upcoming Classes
        </button>
        <button className="ml-auto text-gray-800 border px-3 py-1 rounded hover:bg-gray-100">
          Login →
        </button>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-800 leading-relaxed text-center">
            Up to{" "}
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white font-bold">
              60%
            </span>{" "}
            of success in Digital Product Development depends on Agile Communication
          </h2>
          <p className="text-gray-900 font-semibold text-center">
            The Languages of Digital Product creates a structured & standardized terminology for easy implementation of Agile Communication
          </p>
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition w-fit mx-auto">
            Contact us
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={Sekil1} alt="Açıqlama" className="h-100 w-full rounded-lg object-cover" />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <img src={Sekil2} alt="Açıqlama" className="h-100 w-full rounded-lg object-cover" />
        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-800 leading-relaxed">
            Get big picture of a Digital Product by Learning 5 languages
          </h2>
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition w-fit">
            View all
          </button>
        </div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-800 leading-relaxed">
            Try Free courses on the Language of User Story of a Digital Product
          </h2>
          <p className="text-gray-700 text-center">
            Get first steps in Digital Product Development.
          </p>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-500 transition w-fit mx-auto">
            Try it
          </button>
        </div>
        <img src={Sekil3} alt="Açıqlama" className="h-100 w-full rounded-lg object-cover" />
      </div>

      {/* Languages Section */}
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">LANGUAGES OF DIGITALIZATION</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Agile Communication, Effective Communication, Standardized and Structured Terminologies, Precises Digital Product Analysis
        </p>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-10 mb-10 items-center">
          <div className="flex items-center gap-4">
            <img src={Sekil4} alt="Açıqlama" className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-gray-800">The Language Of Money Digitization</h3>
              <p className="text-sm text-gray-600">
                Agile Communication, Effective Communication, Standardized and Structured Terminologies, Precises Digital Product Analysis
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={Sekil5} alt="Açıqlama" className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-gray-800">The Language of User Story</h3>
              <p className="text-sm text-gray-600">
                Agile Communication, Effective Communication, Standardized and Structured Terminologies, Precises Digital Product Analysis
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-10 items-center mb-12">
          <div className="flex items-center gap-4">
            <img src={Sekil6} alt="Açıqlama" className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-gray-800">The Language of UX/UI</h3>
              <p className="text-sm text-gray-600">
                Agile Communication, Effective Communication, Standardized and Structured Terminologies, Precises Digital Product Analysis
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={Sekil7} alt="Açıqlama" className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-gray-800">The Language of Agile Teams</h3>
              <p className="text-sm text-gray-600">
                Agile Communication, Effective Communication, Standardized and Structured Terminologies, Precises Digital Product Analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Languages Button */}
      <div className="flex justify-center my-12">
        <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          View all languages
        </button>
      </div>

      {/* Digital Product Simulation Platform Section */}
      <div className="bg-white shadow rounded-lg p-6 mx-10 my-12 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-gray-800">Digital Product Simulation Platform</h2>
        <div className="relative w-[817px] h-[500px] bg-gray-200 flex items-center justify-center">
          <img src={Sekil8} alt="Açıqlama" className="h-160 w-160 rounded-lg object-cover" />
          <div className="absolute text-white font-bold text-xl text-center">
            The language of Digitization Creates a Structured
          </div>
        </div>
        <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-500 transition">
          Details
        </button>
      </div>

      {/* 12 Cell Grid Section */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 px-10 py-12 border border-gray-300">
        {[Sekil9,  Sekil10, Sekil11, Sekil12, Sekil13, Sekil14, Sekil15, Sekil16, Sekil17, Sekil18, Sekil19,Sekil20].map((img, index) => (
          <div
            key={index}
            className="w-full h-[216px] bg-gray-200 flex items-center justify-center border border-gray-300"
          >
            <img src={img} alt={`Açıqlama ${index}`} className="h-60 w-60 rounded-lg object-cover"/>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-8">Benefits of the Language of Digital Product</h2>
        <div className="flex justify-center gap-6">
          {/* First rectangle */}
          <div className="w-[927px] h-[323px] bg-white shadow rounded p-6 flex flex-col justify-center gap-2">
            <ul className="list-disc list-inside font-semibold text-gray-800">
              <li>Information Flow Accuracy</li>
              <li>API Documentation Accuracy</li>
              <li>User Story Documentation Accuracy</li>
              <li>Digital Services Analysis Accuracy</li>
            </ul>
          </div>
          {/* Second rectangle */}
          <div className="w-[513px] h-[322px] bg-white shadow rounded p-6 flex flex-col justify-center gap-2">
            <ul className="list-disc list-inside font-semibold text-gray-800">
              <li>Information Flow Accuracy</li>
              <li>API Documentation Accuracy</li>
              <li>User Story Documentation Accuracy</li>
              <li>Digital Services Analysis Accuracy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OUR ALUMNI Section */}
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-8">OUR ALUMNI</h2>
        <div className="flex justify-center gap-6">
          {[Sekil21, Sekil22,  Sekil25, Sekil26].map((img, index) => (
            <div key={index} className="w-[220px] h-[251px] bg-gray-200 border border-gray-300 flex items-center justify-center">
              <img src={img} alt={`Alumni ${index}`} className="h-full w-full object-cover rounded"/>
            </div>
          ))}
        </div>
      </div>

      {/* OUR PARTNERS Section */}
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-4">OUR PARTNERS</h2>
        <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* CONTACT US Section */}
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
        <div className="flex flex-col items-center gap-2 mb-6">
          {[Sekil27, Sekil28, Sekil29, Sekil30, Sekil31].map((img, index) => (
            <div key={index} className="w-[612px] h-[48px] bg-gray-200 rounded flex items-center justify-center">
              <img src={img} alt={`Contact ${index}`} className="h-full w-full object-cover"/>
            </div>
          ))}
        </div>
         <img src={Sekil32} alt="Contact Image" className="w-full h-full object-cover" />
      </div>

    </div>
  );
}

export default App;
