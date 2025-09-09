import React from "react";
import AboutImage from "../../assets/about.png";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Paragraph */}
        <div className="flex flex-col md:flex-row items-stretch bg-white p-6 md:p-10 rounded-lg shadow-lg mb-12">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 md:mr-8 mb-6 md:mb-0 h-64 md:h-auto overflow-hidden rounded-lg">
            <img
              src={AboutImage}
              alt="Vital Health"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full md:w-1/2 flex items-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
              At{" "}
              <span className="font-semibold text-sky-800">
                Vital Health Care Lab
              </span>
              , we are committed to providing accurate, efficient, and
              compassionate diagnostic services. Our state-of-the-art facility
              uses advanced technology to ensure precise test results, while our
              experienced team of professionals ensures the highest level of
              care. We prioritize patient comfort, offering a supportive
              environment for all procedures. With a strong focus on quality
              control and confidentiality, we guarantee reliable results and
              protect your personal information. Whether for routine tests or
              specialized screenings,{" "}
              <span className="font-semibold text-sky-800">
                Vital Health Care Lab
              </span>{" "}
              is your trusted partner in healthcare, delivering timely and
              accurate diagnostics to support your health needs.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            About Prime Vital Health Care Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing the highest quality diagnostic
            services with accuracy, reliability, and patient care at the
            forefront of everything we do.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide accurate, reliable, and timely diagnostic services that
              empower healthcare providers and patients with the information
              they need for better health outcomes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading diagnostic laboratory, recognized for excellence
              in medical testing, innovation, and patient care across the
              region.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Accuracy
              </h3>
              <p className="text-gray-600">
                Precise and reliable test results you can trust.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Timeliness
              </h3>
              <p className="text-gray-600">
                Fast turnaround times for quick diagnosis.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Care</h3>
              <p className="text-gray-600">
                Compassionate care for every patient.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-8">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our team of experienced medical professionals, technicians, and
            support staff work together to ensure the highest standards of
            diagnostic excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Medical Directors
              </h3>
              <p className="text-gray-600">
                Board-certified pathologists and medical professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lab Technicians
              </h3>
              <p className="text-gray-600">
                Skilled technicians with advanced certifications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support Staff
              </h3>
              <p className="text-gray-600">
                Dedicated team ensuring smooth operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
