import React from "react";
import SocialMediaIIcons from "../commoncomponents/SocialMediaIIcons";

function Footer() {
  return (
    <section id="footer">
      <footer className=" bg-pink text-white p-4">

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section*/}
       
        <div className="md:col-span-2 lg:col-span-1 ">
        <SocialMediaIIcons />
          <p className="font-playfair font-semibold text-2xl text-yellow-400 uppercase md:text-left  text-center">
            Divyashree Bangalore Subbaraya
            <br></br>
            <a
              className="lowercase text-xl mt-4"
              href="mailto:divya.bs1996@gmail.com"
            >
              divya.bs1996@gmail.com
            </a>
          </p>
        </div>
        {/* Right Section*/}

        <div className="md:col-span-2 lg:col-span-1 md:mt-24 mt-5 md:text-right">
          <p className="font-playfair text-md text-yellow">
            Created by Divyashree using ReactJS and tailwind.
            <p className="">Copyright©2023. All Rights Reserved.</p>
          </p>
        </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
