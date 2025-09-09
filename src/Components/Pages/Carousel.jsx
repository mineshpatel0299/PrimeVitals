import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
// Import images
import Image9 from "../../assets/image/9.png";

import Image11 from "../../assets/image/11.png";

import Image13 from "../../assets/image/13.png";
import Image14 from "../../assets/image/14.png";
import Image15 from "../../assets/image/15.png";
import Image16 from "../../assets/image/16.png";
import Image17 from "../../assets/image/17.png";
import Image18 from "../../assets/image/18.png";
import Image19 from "../../assets/image/19.png";
import Image20 from "../../assets/image/20.png";
import Image21 from "../../assets/image/21.png";
import Image22 from "../../assets/image/22.png";
import Image23 from "../../assets/image/23.png";
import Image24 from "../../assets/image/24.png";
import Image25 from "../../assets/image/25.png";

// Logos array
const logos = [
  { src: Image9, alt: "Clove Dental" },

  { src: Image11, alt: "GD Goenka" },

  { src: Image13, alt: "Narayana" },
  { src: Image14, alt: "CK Birla Hospital" },
  { src: Image15, alt: "Shreya Eye" },
  { src: Image16, alt: "Centre for Sight" },
  { src: Image17, alt: "Image 17" },
  { src: Image18, alt: "Image 18" },
  { src: Image19, alt: "Image 19" },
  { src: Image20, alt: "Image 20" },
  { src: Image21, alt: "Image 21" },
  { src: Image22, alt: "Image 22" },
  { src: Image23, alt: "Image 23" },
  { src: Image24, alt: "Image 24" },
  { src: Image25, alt: "Image 25" },
];
const Carrousel = () => {
  return (
    <div className="bg-white py-16 px-4">
      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 1000 }}
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
export default Carrousel;
