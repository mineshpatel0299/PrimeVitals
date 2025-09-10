"use client"

import BackgroundVideo from "../../assets/video.mp4"
import MobileVideo from "../../assets/videomobile.mp4"
import { useNavigate } from "react-router-dom"
import { FlipWords } from "../ui/flip-words"

const HeroSection = () => {
  const navigate = useNavigate()
  const words = ["TRUST", "COMPASSION", "EXPERTISE"]

  const handleClick = () => {
    navigate("/packages")
  }

  const handlebook = () => {
    navigate("/contact")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-[80%_center]"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-right"
      >
        <source src={MobileVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-white px-4 mx-auto w-full sm:max-w-4xl flex sm:block">
        <div className="w-full text-left sm:w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-6">Care that begins with</h1>

          {/* Mobile-friendly word rotation */}
          <div className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white min-h-[3rem] xs:min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] flex items-center overflow-hidden">
            <FlipWords words={words} className="leading-tight whitespace-nowrap" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 mt-4">
            Trusted Diagnostics. Faster Results. Accurate Reports.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base sm:px-8 sm:py-3 sm:text-lg rounded-full font-medium transition duration-300 w-fit"
              onClick={handlebook}
            >
              Book a Test
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-500 transition duration-300 w-fit"
              onClick={handleClick}
            >
              View Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
