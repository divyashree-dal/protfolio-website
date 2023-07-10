import React from "react";
import { motion } from "framer-motion";

function AboutMe({ setSelectedPage }) {
  return (
    <section id="about" className="md:flex md:justify-center md:items-center gap-14 md:h-full py-10">
      {/* IMAGE SECTION */}
      <div className=" m-22 md:flex md:justify-center md:items-center ">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3}}
          transition={{ delay:0.4, duration: 0.5}}
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
      <div className="h-full w-[400px] mt-16 md:mt-32 object-cover">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.4, duration: 0.6 }}
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
          <p className="mt-10 mb-5 text-sm text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et
            orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium
            mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut
            nonummy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
