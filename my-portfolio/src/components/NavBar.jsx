import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow-50" : ""
      } hover:text-pink-50 transition duration-500 `}
      href={`${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function NavBar({ selectedPage, setSelectedPage }) {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav className="z-40 w-full fixed top-0 ">
      <div className="flex h-screen">
        <div className="w-1/7 border-r flex flex-col">
          <div className="border-b p-8 font-semibold">DS</div>
        </div>

        <div className="flex-1">
        {isAboveSmallScreens && (
          <div className="flex justify-evenly items-center border-b p-8">
           
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
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </>
            
          </div>
          )}
        </div>

        <div className="w-1/7 border-l flex flex-col">
          <div className="border-b p-8">Right Section</div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
