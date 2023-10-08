import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { navLinks } from "../constants/navLinks";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "lg:text-[#FFBD0C] text-[#FF4500]" : ""
      } lg:hover:text-[#FFBD0C] hover:text-[#FF4500] transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function NavBar({ scrolled, selectedPage, setSelectedPage }) {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 820px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300 `;
  const navbarBackground = scrolled ? "" : "bg-pink";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <button
          onClick={() => window.location.reload()}
          className="font-playfair text-3xl font-bold"
        >
          DS
        </button>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.id}
                page={navlink.page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <>
            <button
              className="absolute right-10"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isMenuToggled
                    ? "rotate-45 translate-y-1 group-hover:opacity-100 bg-deep-blue z-10"
                    : " group-hover:opacity-100 bg-white"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuToggled
                    ? "-rotate-45 -translate-y-1 group-hover:opacity-100 bg-deep-blue z-10"
                    : "group-hover:opacity-100 bg-white"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuToggled
                    ? "opacity-0"
                    : "group-hover:opacity-100 bg-white"
                }`}
              />
            </button>
          </>
        )}

        {/* Mobile Menu*/}

        {!isAboveSmallScreens && isMenuToggled && (
           
          <div className="absolute right-0 top-0 bg-[#E6E6FA] w-[60%] pb-5 -z-10 rounded-tl-2xl rounded-bl-2xl">
            <motion.div
           initial={{ x: "100%" }}
           animate={{ x: 0 }}
           exit={{ x: "100%" }}
           transition={{ type: "spring", stiffness: 120, damping: 10 }}
         >
            <div className="flex justify-center right-0 p-5"></div>
              <div className=" flex flex-col gap-5 items-center justify-center text-xl text-deep-blue">
                {navLinks.map((navlink) => (
                  <Link
                    page={navlink.page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
              </motion.div>
          </div>
        
        )}
      </div>
    </nav>
  );

  /**
   *
   */
}

export default NavBar;
