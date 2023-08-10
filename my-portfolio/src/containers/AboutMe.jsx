import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="about"
      className="md:flex md:justify-center md:items-center gap-14 md:h-full py-2"
    >
      {/* IMAGE SECTION */}
      <div className=" m-22 md:flex md:justify-center md:items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            alt="profile"
            className="w-full max-w-[400px] shadow-lg rounded-full overflow-hidden border-2 border-[#FF45A4]"
            src="../assets/images/1.png"
          />
        </motion.div>
      </div>
      {/* ABOUT TEXT */}
      <div className="h-full w-[400px] mt-16 md:mt-25 object-cover">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-sans z-10 text-center md:text-start">
            About {""}
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[90px] before:z-[-1]"
            >
              Me
            </span>
          </p>
          <p className="mt-10 mb-7 text-4xl font-sans font-semibold text-center md:text-start italic">
            Full Stack Developer
          </p>
          <p className="mt-10 mb-5 text-sm text-center md:text-left italic">
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful." -
            Albert Schweitzer
          </p>
          <p className=" mb-5 text-sm text-center md:text-left">
            Hello there! I'm a passionate and driven full stack developer with
            an insatiable thirst for all things tech. My journey in the world of
            programming began with a spark of curiosity that has now evolved
            into an unwavering enthusiasm for creating innovative solutions. I
            believe in constant learning and strive to stay at the cutting edge
            of technology, always on the lookout for new challenges to embrace.
          </p>

          <p className="mt-5  mb-5 text-sm text-center md:text-left">
            With a focus on full stack development, I specialize in crafting
            exceptional user experiences using the power of React, Redux, and
            Nodejs.
          </p>
          <p className="mt-5  mb-5 text-sm text-center md:text-left">
            Thank you for taking the time to explore my portfolio. I hope that
            my work reflects the dedication, creativity, and enthusiasm that
            define my journey as a full stack developer. Let's connect and
            create something extraordinary together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
