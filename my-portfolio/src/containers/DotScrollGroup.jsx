import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollTop from "../commoncomponents/ScrollTop";

export default function DotScrollGroup({ selectedPage, setSelectedPage }) {
  const selectedStyles = `relative bg-yellow-200 before:absolute before:w-4 before:h-4 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-400"
        } w-2 h-2 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-50"
        } w-2 h-2 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />

      <AnchorLink
        className={`${
          selectedPage === "education" ? selectedStyles : "bg-gray-50"
        } w-2 h-2 rounded-full`}
        href="#education"
        onClick={() => setSelectedPage("education")}
      />

      <AnchorLink
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-gray-50"
        } w-2 h-2 rounded-full`}
        href="#experience"
        onClick={() => setSelectedPage("experience")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-gray-50"
        } w-2 h-2 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
      <div>
      <ScrollTop />
      </div>
    </div>
    
  );
}
