import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";
import { education } from "../constants/education";

const EducationCard = ({ education }) => {
  return (
    <div className="timeline-item">
      <h3>{education.heading}</h3>
      <p>{education.coursework}</p>
      <p>{education.graduatedYear}</p>
      <p>{education.grade}</p>
    </div>
  );
};

function Education() {
  return (
    <section id="education" className="p-10">
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
          <EducationCard key={`education-${index}`} education={education} />
        ))}
      </div>
    </section>
  );
}

export default Education;
