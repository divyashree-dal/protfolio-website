import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// TODO: Add insta link and fb
function SocialMediaIIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/divyashree-b-s-22081996/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/divyashree-b-s-22081996/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/divyashree-dal"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

export default SocialMediaIIcons;
