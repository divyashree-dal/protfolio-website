import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { navLinks } from "../constants/navLinks";

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
  const isAboveSmallScreens = UseMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = scrolled ? "" : "bg-[#FF45A4]";

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
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img src="../assets/images/menu-icon.svg" alt="menu icon" />
          </button>
        )}

        {/* Mobile Menu*/}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 bg-[#E6E6FA] w-[50%] pb-5">
            <div className="flex justify-end right-0">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/images/close-icon.svg" alt="close icon" />
              </button>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center text-2xl text-deep-blue">
              {navLinks.map((navlink) => (
                <Link
                  page={navlink.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
