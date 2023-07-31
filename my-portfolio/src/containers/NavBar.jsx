import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";

//  DS icon
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow-100" : ""
      } hover:text-yellow-600 transition duration-500 `}
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

  return (
    <nav className="z-40 w-full fixed top-0">
      <div className="flex h-[90px]">
        {/* Left Side Icon */}
        {isAboveSmallScreens ? (
          <div className=" w-1/7 border-r flex flex-col h-screen">
            <div
              className={` ${
                scrolled ? "" : "bg-[#FF45A4]"
              } border-b p-8 font-semibold`}
            >
              DS
            </div>
          </div>
        ) : (
          <div
            className={`${scrolled ? "" : "bg-[#FF45A4]"} p-8 font-semibold`}
          >
            DS
          </div>
        )}

        {/* Middle Menu */}
        <div className="flex-1">
          {isAboveSmallScreens ? (
            <div
              className={` ${
                scrolled ? "" : "bg-[#FF45A4]"
              } flex justify-evenly items-center border-b p-8`}
            >
              <>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="Education"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </>
            </div>
          ) : (
            <>
              <div
                className={`${
                  scrolled ? "" : "bg-[#FF45A4] p-8"
                }  font-semibold`}
              ></div>
            </>
          )}
        </div>

        {/* Right Menu */}
        {isAboveSmallScreens ? (
          <div className=" w-1/7 border-l flex flex-col h-screen">
            <div
              className={`${
                scrolled ? "" : "bg-[#FF45A4]"
              } border-b p-8 font-semibold`}
            >
              DS
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={` ${
                scrolled ? "rounded-full bg-[#FF45A4]" : "bg-[#FF45A4]"
              } p-8`}
            >
              <img src="../assets/images/menu-icon.svg" alt="menu icon" />
            </button>
          </div>
        )}

        {/* Mobile Menu*/}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue-200 w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/images/close-icon.svg" alt="close icon" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Education"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div>
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
