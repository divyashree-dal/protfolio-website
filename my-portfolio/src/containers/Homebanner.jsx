import React from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SocialMediaIIcons from "../commoncomponents/SocialMediaIIcons";
import { Tooltip } from "@mui/material";

function Homebanner({ setSelectedPage }) {
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");

  const handleDownload = () => {
    const fileUrl = "../assets/files/Divyashree Bangalore Subbaraya Resume.pdf";
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + fileUrl;
    link.download = "DivyashreeResume.pdf";
    link.click();
  };

  return (
    <>
      <section
        id="home"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-36 flex justify-center md:order-2">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-12 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[800px] before:h-full before:border-2 before:border-blue-200 before:z-[-1] "
            >
              <img
                alt="profile"
                className=" hover:filter hover:saturate-200  transition duration-500 z-10 w-full h-full max-w-[400px] rounded-t-[400px] md:max-w-[600px] "
                src="../assets/images/profile-image.jpg"
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-[600px]"
              src="../assets/images/profile-image.jpg"
            />
          )}
        </div>

        {/* Text SECTION */}
        <div className="z-30 basis-4/5 mt-20 md:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair text-center md:text-start">
              Divyashree Bangalore Subbaraya
            </p>
            <p className="mt-10 mb-5 text-sm text-center md:text-start">
              Crafting Seamless Digital Experiences from Concept to Deployment
            </p>
          </motion.div>

          {/* Action Calls - contact me and resume download*/}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
              <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              :bg-blue-400hover hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>          

            <Tooltip
              title="Click here to download my professional resume in PDF format"
              placement="bottom"
            >
              <button
                className="bg-gradient-rainblue rounded-sm py-0.5 pr-0.5 font-semibold "
                onClick={handleDownload}
              >
                <div className="bg-deep-blue hover:text-red-600 transition duration-500 w-full h-full flex items-center justify-center px-10">
                  Download Resume
                </div>
              </button>
            </Tooltip>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIIcons />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Homebanner;
