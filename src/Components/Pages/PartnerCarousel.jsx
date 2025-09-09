import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import Image1 from "../../assets/image/1.png";
import Image2 from "../../assets/image/2.png";
import Image3 from "../../assets/image/13.png";
import Image4 from "../../assets/image/4.png";
import Image5 from "../../assets/image/5.png";
import Image6 from "../../assets/image/6.png";
import Image7 from "../../assets/image/7.png";
import Image8 from "../../assets/image/8.png";

// Logos array
const logos = [
  { src: Image1, alt: "Clove Dental" },
  { src: Image2, alt: "S.D. Public School" },
  { src: Image3, alt: "GD Goenka" },
  { src: Image4, alt: "Galgotias University" },
  { src: Image5, alt: "Narayana" },
  { src: Image6, alt: "CK Birla Hospital" },
  { src: Image7, alt: "Shreya Eye" },
  { src: Image8, alt: "Centre for Sight" },
];

const PartnerCarousel = () => {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-sky-500 mb-10">
        Our Partner
      </h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-40 max-w-[160px] object-contain   transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerCarousel;
