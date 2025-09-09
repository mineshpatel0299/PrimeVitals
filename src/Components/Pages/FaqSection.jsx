import { useState } from "react";
import Faq from "../../assets/faq.jpg"; // Adjust this path to your project
import CountUp from "react-countup";
const faqData = [
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling us or visiting our website.",
  },
  {
    question: "How long do test results take?",
    answer:
      "Test results typically take 24–48 hours, depending on the type of test.",
  },
  {
    question: "What safety measures do you have in place?",
    answer:
      "We follow all CDC guidelines including sanitization, PPE usage, and social distancing.",
  },
];

const FaqSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Statistics data
  const stats = [
    { value: 23, suffix: "k+", label: "Samples Tested" },
    { value: 94, suffix: "+", label: "Health Packages" },
    { value: 47, suffix: "", label: "Collection Centers" },
    { value: 92, suffix: "%", label: "Customer Satisfaction" },
  ];

  return (
    <>
      <section
        className="relative w-screen min-h-screen bg-cover bg-center px-4 md:px-20 text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${Faq})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 max-w-4xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">F.A.Q.</h2>
          <p className="text-lg font-semibold mb-4">
            Have Any Questions? Feel Free To Ask.
          </p>
          <p className="text-sm text-pink-400 mb-8">
            If you have any inquiries about our services, health topics, or
            anything else, don't hesitate to reach out. Your health is our
            priority!
          </p>

          <div className="space-y-4 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-lg font-medium focus:outline-none"
                >
                  <span>{`${index + 1 < 10 ? "0" + (index + 1) : index + 1}. ${
                    item.question
                  }`}</span>
                </button>
                <div
                  className={`px-4 pb-4 text-base text-gray-700 transition-all duration-700 ease-in-out ${
                    hoveredIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2196c9] text-white py-30 ">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </span>

              <span className="text-lg mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
