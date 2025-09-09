import HealthPartnerSection from "./HealthPartnerSection";
import WhyVitalHealth from "./WhyVitalHealth";
import Primewhitalhelth from "./PrimeWhitalHealth";
import SixStepCommitment from "./SixStepCommitment";
import HeroSection from "../Navbar/HeroSection";
import PartnerCarousel from "./PartnerCarousel";
import FaqSection from "./FaqSection";
import TestimonialCarousel from "./TestimonialCarousel";
import Carrousel from "./Carousel";
const Home = () => {
  return (
    <>
      <HeroSection />
      <HealthPartnerSection></HealthPartnerSection>
      <WhyVitalHealth></WhyVitalHealth>
      <Primewhitalhelth></Primewhitalhelth>
      <SixStepCommitment></SixStepCommitment>
      <PartnerCarousel></PartnerCarousel>
      <Carrousel></Carrousel>
      <FaqSection></FaqSection>
      <TestimonialCarousel></TestimonialCarousel>
    </>
  );
};
export default Home;
