import React from "react";
import { FaUsers, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";

// Component for individual milestone card
const MilestoneCard = ({ icon: Icon, description }) => (
  <div className="w-60 justify-center shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200">
    <div className="bg-gradient-to-r from-pink-400  to-indigo-600  shadow-lg text-white rounded-full p-4 mb-4">
      <Icon className="text-3xl" />
    </div>
    <p className="font-semibold text-lg dark:text-slate-300 text-slate-600">
      {description}
    </p>
  </div>
);

const Timeline = () => {
  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-10 font-bold">
              The{" "}
              <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
          <p className="text-sm lg:text-base dark:text-slate-300 text-slate-500 max-w-3xl mx-auto">
            Founded in 2020, BAOIAM emerged from a bold vision to connect
            traditional education with real-world skills. Our founders, fueled
            by a deep passion for learning and a commitment to accessibility,
            set out to create a platform that empowers individuals to steer
            their own career journeys.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-10 md:gap-16">
          <MilestoneCard
            icon={FaUsers}
            description="Over 50,000 students enrolled worldwide."
          />
          <MilestoneCard
            icon={FaBuilding}
            description="Collaborations with leading companies."
          />
          <MilestoneCard
            icon={FaChalkboardTeacher}
            description="100+ industry experts as mentors."
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
