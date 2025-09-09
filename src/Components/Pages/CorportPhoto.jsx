import React, { useState } from "react";
import Card from "./Card";
import Image from "../../assets/col/a1.jpg";
import Image1 from "../../assets/col/a2.jpg";
import Image2 from "../../assets/col/a3.jpg";
import Image3 from "../../assets/col/a4.jpg";
import Image4 from "../../assets/col/b1.jpg";
import Image5 from "../../assets/col/b2.jpg";
import Image6 from "../../assets/col/b3.jpg";
import Image7 from "../../assets/col/b4.jpg";
import Image8 from "../../assets/col/c1.jpg";
import Image9 from "../../assets/col/c2.jpg";
import Image10 from "../../assets/col/c3.jpg";
import Image11 from "../../assets/col/c4.jpg";
const sampleCards = [
  {
    id: 1,
    title: "Free Health Camp at S.D. Public School",
    description: "Organized in Bhajanpura in collaboration with Dharamshila Hospital.",
    images: [
      Image,
      Image1,
      Image2,
      Image3,
    ],
    tags: ["Health", "Community", "Event"],
    date: "March 15, 2025",
    location: "S.D. Public School, Bhajanpura, Delhi"
  },

  {
    id: 2,
    title: "Free Health Camp with BJP Leader Mr. Naresh Kumar Airan",
    description: "A free health camp organized in Pitampura, Delhi, with BJP leader Mr. Naresh Kumar Airan, offering medical checkups and health consultations to the local community.",
    images: [
      Image4,
      Image5,
      Image6,
      Image7
    ],
    tags: ["Health", "Community", "Event"],
    date: "March 12, 2025",
    location: "Pitampura, Delhi"
  },
  {
    id: 3,
    title: "Free Health Camp at Galgotias College",
    description: "A free health camp organized at Galgotias College, Greater Noida, aimed at promoting student and faculty well-being through basic medical checkups and health awareness sessions.",
    images: [
      Image8,
      Image9,
      Image10,
      Image11
    ],
    tags: ["Education", "College", "Event"],
    date: "March 10, 2025",
    location: "Galgotias College, Greater Noida"
  },

];

const CorportPhoto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImg(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              images={card.images}
              tags={card.tags}
              date={card.date}
            />
          ))}
        </div>


      </main>
    </div>
  );
};

export default CorportPhoto;
