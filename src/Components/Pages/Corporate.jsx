import CorportPhoto from "./CorportPhoto";

const Corporate = () => {
  const services = [
    {
      title: "Corporate Health Checkups",
      description: "Comprehensive health screening programs for employees",
      features: [
        "Customized health packages",
        "On-site sample collection",
        "Bulk pricing discounts",
        "Detailed health reports",
        "Follow-up consultations",
      ],
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Occupational Health Services",
      description:
        "Specialized health services for workplace safety and compliance",
      features: [
        "Pre-employment medicals",
        "Periodic health assessments",
        "Return-to-work evaluations",
        "Occupational hazard screening",
        "Regulatory compliance",
      ],
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Wellness Programs",
      description: "Comprehensive wellness initiatives for employee health",
      features: [
        "Health awareness campaigns",
        "Nutrition counseling",
        "Fitness assessments",
        "Mental health support",
        "Lifestyle coaching",
      ],
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Improved Employee Health",
      description:
        "Regular health checkups lead to early detection and better health outcomes",
    },
    {
      title: "Reduced Healthcare Costs",
      description: "Preventive care helps reduce long-term healthcare expenses",
    },
    {
      title: "Increased Productivity",
      description:
        "Healthy employees are more productive and have fewer sick days",
    },
    {
      title: "Better Employee Retention",
      description: "Health benefits improve employee satisfaction and loyalty",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            Corporate Health Services
          </h1>
          <p className="text-xl text-sky-800 max-w-3xl mx-auto">
            Comprehensive health solutions designed for businesses to promote
            employee wellness, ensure workplace safety, and improve
            organizational productivity.
          </p>
        </div>
        <CorportPhoto></CorportPhoto>
        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Our Corporate Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Benefits for Your Organization
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sky-800">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-sky-800 mb-2">
                Consultation
              </h3>
              <p className="text-sky-800">
                We discuss your organization's health needs and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-sky-800 mb-2">
                Customization
              </h3>
              <p className="text-sky-800">
                We design a tailored health program for your organization
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-sky-800 mb-2">
                Implementation
              </h3>
              <p className="text-sky-800">
                We execute the health program with on-site or off-site services
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-sky-800 mb-2">
                Follow-up
              </h3>
              <p className="text-sky-800">
                We provide ongoing support and health monitoring
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Invest in Your Team's Health?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today to discuss how we can help improve your
            organization's health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-sky-800 mb-4">
            Corporate Inquiries
          </h3>
          <p className="text-gray-600 mb-4">
            For corporate partnerships and bulk inquiries, please contact our
            corporate team:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-lg">
            <div>
              <strong>Email:</strong> corporate@primevitalhealth.com
            </div>
            <div>
              <strong>Phone:</strong> (555) 123-4567 ext. 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
