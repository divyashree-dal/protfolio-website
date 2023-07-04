import React from "react";
// TODO: Add insta link and fb 
function SocialMediaIIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/divyashree-b-s-22081996/" target="_blank" rel="noreferrer"
      >
        <img src="../assets/images/linkedin.png" alt="linkedin icon" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/divyashree-b-s-22081996/" target="_blank" rel="noreferrer"
      >
        <img src="../assets/images/instagram.png" alt="Instagram icon" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/divyashree-dal" target="_blank" rel="noreferrer"
      >
        <img src="../assets/images/github.png" alt="Github icon" className="h-8 w-8" />
      </a>
    </div>
  );
}

export default SocialMediaIIcons;
