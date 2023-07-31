import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  programmingLang,
  databases,
  versionControl,
  frameworks,
  webdevstack,
} from "../constants/technologies";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Technologies() {
  const [expandedAccordion, setExpandedAccordion] = useState("accordion1");

  const handleAccordionToggle = (accordionId) => {
    if (expandedAccordion === accordionId) {
      // If the clicked accordion is already expanded, close it by setting the state to null
      setExpandedAccordion(null);
    } else {
      // If a different accordion is expanded, set the state to the clicked accordion's ID
      setExpandedAccordion(accordionId);
    }
  };
  return (
    <section id="technologies">
      <p className="sm:text-[18px] text-[10px] text-gray-300 uppercase tracking-wide mt-10">
        Skills practiced so far.
      </p>
      <h2 className="text-white font-black  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Technologies.
      </h2>

      <div className="flex flex-col justify-center items-center space-y-10 mt-10">
        <div
          className={`w-9/12 ${
            expandedAccordion === "accordion1" && "bg-deep-blue"
          }`}
        >
          <Accordion
            expanded={expandedAccordion === "accordion1"}
            onChange={() => handleAccordionToggle("accordion1")}
            className="bg-gradient-rainbow rounded-s-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Web development</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-deep-blue">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-14">
                {webdevstack.map((tech) => (
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
        </div>

        <div
          className={`w-9/12 ${
            expandedAccordion === "accordion2" && "bg-deep-blue"
          }`}
        >
          <Accordion
            expanded={expandedAccordion === "accordion2"}
            onChange={() => handleAccordionToggle("accordion2")}
            className="bg-gradient-rainbow rounded-s-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Databases</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-deep-blue">
              <div className="flex flex-row flex-wrap justify-center gap-10">
                {databases.map((tech) => (
                  <div className="relative w-[100px] h-[100px] rounded-full">
                    <img
                      key={tech.id}
                      className="w-full h-full object-contain animate-spin-slow"
                      src={tech.icon}
                      alt="Technology Icon"
                    />
                    <span className="text-white text-center ml-5">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div
          className={`w-9/12 ${
            expandedAccordion === "accordion3" && "bg-deep-blue"
          }`}
        >
          <Accordion
            expanded={expandedAccordion === "accordion3"}
            onChange={() => handleAccordionToggle("accordion3")}
            className="bg-gradient-rainbow rounded-s-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Programming Languages</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-deep-blue">
              <div className="flex flex-row flex-wrap justify-center gap-10">
                {programmingLang.map((tech) => (
                  <div className=" relative w-[100px] h-[100px] rounded-full mt-5">
                    <img
                      key={tech.id}
                      className="w-full h-full object-contain animate-spin-slow"
                      src={tech.icon}
                      alt="Technology Icon"
                    />
                    <span className="text-white text-center ml-5">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div
          className={`w-9/12 ${
            expandedAccordion === "accordion4" && "bg-deep-blue"
          }`}
        >
          <Accordion
            expanded={expandedAccordion === "accordion4"}
            onChange={() => handleAccordionToggle("accordion4")}
            className="bg-gradient-rainbow rounded-s-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Version Control Systems</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-deep-blue">
              <div className="flex flex-row flex-wrap justify-center gap-10">
                {versionControl.map((tech) => (
                  <div className=" relative w-[100px] h-[100px] rounded-full mt-7">
                    <img
                      key={tech.id}
                      className="w-full h-full object-contain animate-spin-slow"
                      src={tech.icon}
                      alt="Technology Icon"
                    />
                    <span className="text-white text-center ml-5">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div
          className={`w-9/12 ${
            expandedAccordion === "accordion5" && "bg-deep-blue"
          }`}
        >
          <Accordion
            expanded={expandedAccordion === "accordion5"}
            onChange={() => handleAccordionToggle("accordion5")}
            className="bg-[#bab7ff]"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
             
            >
              <Typography>Frameworks</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-deep-blue">
              <div className="flex flex-row flex-wrap justify-center gap-10">
                {frameworks.map((tech) => (
                  <div className=" relative w-[100px] h-[100px] rounded-full mt-5 mb-5">
                    <img
                      key={tech.id}
                      className="w-full h-full object-contain animate-spin-slow"
                      src={tech.icon}
                      alt="Technology Icon"
                    />
                    <span className="text-white text-center ml-5">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
