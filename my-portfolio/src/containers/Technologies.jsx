import React, { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordions } from "../constants/technologyAccordions";

const AccordionsCard = ({ techAccordion }) => {
  const [expandedAccordion, setExpandedAccordion] = useState("accordion1");

  const handleAccordionToggle = (accordionId) => {
    if (expandedAccordion === accordionId) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(accordionId);
    }
  };

  const summaryIdContent = `panel${techAccordion.id}-content`;
  const summaryIdHeader = `panel${techAccordion.id}-header`;

  return (
    <div
      className={`w-9/12 ${
        expandedAccordion === `${techAccordion.accordionId}` && "bg-deep-blue"
      } `}
    >
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
        <Accordion
          expanded={expandedAccordion === techAccordion.accordionId}
          onChange={() => handleAccordionToggle(techAccordion.accordionId)}
          style={{ backgroundColor: "#332f4a", borderRadius: "2%", marginBottom:"25px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={summaryIdContent}
            id={summaryIdHeader}
          >
            <Typography variant="h6" className="text-white">
              {techAccordion.typoName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-deep-blue">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-14">
              {techAccordion.devStack.map((tech) => (
                <div className=" w-16 h-16 rounded-full mx-auto relative ">
                  <img
                    key={tech.id}
                    className="w-full h-full object-contain animate-spin-slow"
                    src={tech.icon}
                    alt="Technology Icon"
                  />
                  <span className="text-white text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </div>
  );
};

function Technologies() {
  return (
    <section id="technologies">
      <p className="sm:text-[18px] text-[10px] text-gray-300 uppercase tracking-wide mt-10">
        Skills practiced so far.
      </p>
      <h2 className="text-white font-black  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Technologies.
      </h2>

      <div className="flex flex-col justify-center items-center space-y-10 mt-10 mb-14">
        {accordions.map((techAccordion, index) => (
          <AccordionsCard
            key={`techAccordion-${index}`}
            techAccordion={techAccordion}
          />
        ))}
      </div>
    </section>
  );
}

export default Technologies;
