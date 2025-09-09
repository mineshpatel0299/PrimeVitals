import { useEffect, useState, useRef } from "react";

const SixStepCommitment = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const componentRef = useRef(null);

  const steps = [
    { number: "01", title: "Book Free Consultation" },
    { number: "02", title: "Health Concern Discussion" },
    { number: "03", title: "Sample Collection at Home" },
    { number: "04", title: "Lab Diagnosis by Experts" },
    { number: "05", title: "Report Delivery on WhatsApp" },
    { number: "06", title: "Follow-up & Doctor Guidance" },
  ];

  // Effect for IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Reset state when component leaves viewport
          setCurrentStage(0);
          setVisibleSteps([]);
          setConnectionProgress(0);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentRef]);

  // Effect for stage-by-stage animation
  useEffect(() => {
    if (isIntersecting && currentStage < steps.length) {
      const stageTimer = setTimeout(() => {
        setCurrentStage((prev) => prev + 1);
        setVisibleSteps((prev) => [...prev, currentStage]);
        setConnectionProgress((currentStage + 1) / steps.length);
      }, 1200); // 1200ms delay between stages

      return () => clearTimeout(stageTimer);
    }
  }, [currentStage, isIntersecting, steps.length]);

  const getStageAnimation = (stepIndex) => {
    const isVisible = visibleSteps.includes(stepIndex);
    const isCurrentStage = currentStage === stepIndex + 1;

    if (!isVisible) {
      return "opacity-0 transform translate-y-8 scale-95";
    }

    if (isCurrentStage) {
      return "opacity-100 transform translate-y-0 scale-110 animate-pulse";
    }

    return "opacity-100 transform translate-y-0 scale-100";
  };

  return (
    <div ref={componentRef} className="bg-[#0c2d48] text-white py-12 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10 animate-fade-in">
        Your Health, Our 6-Step Commitment
      </h2>

      {/* Stage Indicator */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-[#0f3b60] px-4 py-2 rounded-full">
          <span className="text-sm">Stage:</span>
          <span className="text-xl font-bold text-[#5b9dbd]">
            {currentStage}/6
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto relative">
        {/* Animated dotted connecting line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-white opacity-30 hidden sm:block overflow-hidden"
          style={{
            width: `${connectionProgress * 100}%`,
            background:
              "repeating-linear-gradient(to right, white 0px, white 4px, transparent 4px, transparent 12px)",
            transition: "width 1.2s ease-out",
          }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative transition-all duration-1000 ease-out ${getStageAnimation(
              index
            )}`}
          >
            {/* Background Number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[120px] sm:text-[140px] font-black text-[#0f3b60] opacity-20 select-none leading-none">
                {step.number}
              </span>
            </div>

            {/* Circle */}
            <div
              className={`relative z-10 w-36 h-36 sm:w-40 sm:h-40 bg-[#5b9dbd] dark:bg-[#0f3b60] rounded-full flex flex-col items-center justify-center text-center text-white shadow-lg text-sm sm:text-base hover:scale-105 transition-all duration-500 ${
                currentStage === step.stage
                  ? "ring-4 ring-[#5b9dbd] ring-opacity-50"
                  : ""
              }`}
            >
              <div className="text-3xl font-bold mb-1">{step.number}</div>
              <div className="text-xs leading-tight px-2">{step.title}</div>
            </div>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <div
                className={`hidden sm:block absolute top-1/2 right-[-60px] transform -translate-y-1/2 z-20 transition-opacity duration-500 ${
                  visibleSteps.includes(index + 1) ? "opacity-100" : "opacity-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Curved arrow from last to first step */}
        <div
          className={`hidden sm:block absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${
            visibleSteps.includes(steps.length - 1)
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8 rotate-90"
          >
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
          </svg>
        </div>
      </div>

      {/* Inline styles without jsx attribute */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes stage-highlight {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .stage-highlight {
          animation: stage-highlight 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SixStepCommitment;
