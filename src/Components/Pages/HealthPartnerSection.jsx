import React from "react";
import healthImg from "../../assets/health.png"; 


const HealthPartnerSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            YOUR FAMILY'S HEALTH PARTNER
          </h2>
          <p className="text-gray-700 mb-6">
            At Vital Health Care Lab, we prioritize the health and well-being of your family.
            Our state-of-the-art facility offers a comprehensive range of diagnostic services
            designed to provide accurate and timely results.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🔬</span>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Health Screenings</h4>
                <p className="text-gray-600">
                  Proactive evaluations to catch potential health issues early.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🧪</span>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Laboratory Testing</h4>
                <p className="text-gray-600">
                  A wide array of tests, from routine blood work to specialized diagnostics.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end gap-4">
          <img src={healthImg} alt="Health Check" className="w-1/2 rounded-lg shadow-md" />
          {/* <img src={labImg} alt="Lab Test" className="w-1/2 rounded-lg shadow-md" /> */}
        </div>
      </div>
    </section>
  );
};

export default HealthPartnerSection;
