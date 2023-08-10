import React from "react";
import SocialMediaIIcons from "../commoncomponents/SocialMediaIIcons";

function Footer() {
  return (
    <section id="footer">
      <footer className="h-64 bg-pink pt-10">
        <div className="w-10/12 mx-auto">
          <SocialMediaIIcons />
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-yellow-400 uppercase text-left">
              Divyashree Bangalore Subbaraya
              <br></br>
              <a
                className="lowercase text-xl mt-4"
                href="mailto:divya.bs1996@gmail.com"
              >
                divya.bs1996@gmail.com
              </a>
            </p>
            <p className="font-playfair text-md text-yellow">
              Created by Divyashree using ReactJS and tailwind.
              <p className="mt-4">Copyright©2023. All Rights Reserved.</p>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
