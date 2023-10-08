import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../commoncomponents/motions";
import UseMediaQuery from "../hooks/UseMediaQuery";

function Contact() {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 820px)");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    emailId: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;

    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: form.name,
      to_name: "Divyashree",
      from_email: form.emailId,
      to_email: "divya.bs1996@gmail.com",
      message: form.message,
    };

    emailjs
      .send(
        "service_m224ado",
        "template_2ymgtrr",
        templateParams,
        "q-dzq7MCQnCRVl07Q"
      )
      .then(
        (response) => {
          setLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you, I will get back to you soon...!");
          setForm({
            name: "",
            emailId: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          alert("Ooops... sorry, Something went wrong, please try again!");
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex bg-deep-blue max-w-screen mx-auto grid-flow-col justify-evenly"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col"
      >
        {" "}
        <p className="sm:text-[18px] text-[10px] text-gray-300 uppercase tracking-wide mt-10">
          get in touch.
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" grid grid-rows-2 mt-12  gap-8  sm:m-9 sm:p-12 z-20 lg:z-0 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="emailId"
              value={form.emailId}
              onChange={handleChange}
              placeholder="What's your emailId?"
              className="bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-4 sm:px-28 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md hover:bg-[pink]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {isAboveSmallScreens && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="absolute -z-1 mt-[20%] h-[100%] w-[100%] md:-right-1 lg:top-20 lg:mt-32 lg:relative flex justify-center items-center"
        >
          <img
            src="../assets/images/earth.gif"
            alt="Earth revolving icon"
            className="h-[80%] w-[80%] mt-14 md:mt-8"
          />
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
