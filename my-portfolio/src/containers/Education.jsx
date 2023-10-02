import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";
import { education } from "../constants/education";

const EducationCard = ({ education }) => {
  return (
    <div className="timeline-item bg-[#332f4a] rounded-lg shadow-md flex p-6 hover:bg-[#3b3756]">
      <div className="flex-none mr-4">
        <img
          className="w-8 h-8"
          src={education.universityIcon}
          alt="University Icon"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-">
          {education.heading}
        </h3>
        <div className="flex flex-col sm:justify-between sm:flex-row">
          <p className="text-lg">{education.university}</p>
          <p className="text-lg italic">{education.graduatedYear}</p>
        </div>
        <p className="text-lg">{education.coursework}</p>

        <p className="text-lg font-semibold">{education.grade}</p>
      </div>
    </div>
  );
};

function Education() {
  return (
    <section id="education" className="p-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", duration: 1.25, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <p className="sm:text-[18px] text-[10px] text-gray-300 uppercase tracking-wide mt-10">
          Where I have Studied so far
        </p>
        <h2 className="text-white font-black  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Education.
        </h2>
      </motion.div>

      <div className="timeline-container">
        {education.map((education, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", duration: 1.25, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <EducationCard key={`education-${index}`} education={education} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
