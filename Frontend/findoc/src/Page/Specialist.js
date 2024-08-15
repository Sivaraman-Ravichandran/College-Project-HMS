import React from "react";
import SpecialistCard from "../Component/SpecialListCard";
import "./Specialist.css";
import NavBar from "./NavBar";
import Footer from '../Component/Footer';
const specialties = [
  {
    id: 1,
    name: "Cardiology",
    image: "https://graph.org/file/b2604b071aa65ad5a20c5.jpg",
  },
  {
    id: 2,
    name: "Neurologists",
    image: "https://graph.org/file/380920a503494ce80d40b.jpg",
  },
  {
    id: 3,
    name: "Orthopedics",
    image: "https://graph.org/file/289f1e9675148e90e56a0.jpg",
  },
  {
    id: 4,
    name: "Nephrologists",
    image: "https://graph.org/file/e093423f28976123f4fce.jpg",
  },
  {
    id: 5,
    name: "Dermatology",
    image: "https://graph.org/file/31c4fab9194c4ec8369aa.jpg",
  },

  {
    id: 6,
    name: "Pediatrics",
    image: "https://graph.org/file/1f71f6e418640118f37c9.jpg",
  },
  {
    id: 7,
    name: "Oncology",
    image: "https://graph.org/file/398c164929296e09d5e4d.jpg",
  },
  {
    id: 8,
    name: "Psychiatry",
    image: "https://graph.org/file/0c98071018b3cc5def5e3.jpg",
  },
  {
    id: 9,
    name: "Gastroenterology",
    image: "https://graph.org/file/a2af6908194ade97e8aa1.jpg",
  },
  {
    id: 10,
    name: "Endocrinology",
    image: "https://graph.org/file/4ee3e0bd68cecfa91c525.jpg",
  },
  // Add more specialties as needed
];

const SpecialistPage = () => {
  return (
    <>
     <NavBar/>
    <div className="specialist-page">
      <div className="specialty-cards">
        {specialties.map((specialty) => (
          <SpecialistCard
            key={specialty.name}
            specialty={specialty.name}
            image={specialty.image}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SpecialistPage;
