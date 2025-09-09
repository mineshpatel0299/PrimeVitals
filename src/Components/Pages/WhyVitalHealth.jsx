const features = [
  {
    title: "Years of Experience",
    description: "We have 5 years of experience health team.",
    icon: "🎓",
  },
  {
    title: "Advance Technology",
    description: "Your test done by advanced technology machines.",
    icon: "💻",
  },
  {
    title: "Nutrition Expert",
    description: "Healthy diet chart according to your report.",
    icon: "📋",
  },
  {
    title: "Free Sample Collection",
    description: "Free home sample collection by given your time at your door step.",
    icon: "🏠",
  },
];

const WhyVitalHealth = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4" style={{ backgroundColor: '#218ab8' }}>
      <h2 className="text-3xl font-bold text-center mb-10">Why Vital healthcare lab?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-md text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyVitalHealth;
