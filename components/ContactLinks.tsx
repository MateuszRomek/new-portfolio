import styled from "@emotion/styled";
import React from "react";

import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GhIcon from "../assets/github.svg";
import { Bar } from "./Bar";

const Link = styled.a`
  margin-top: ${(props) => props.theme.spacing(2)}px;
  display: inline-block;
`;
export const ContactLinks = () => {
  return (
    <>
      <div>
        <Link
          href="https://github.com/MateuszRomek
          "
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Bar
            icon={GhIcon}
            text="Github"
            width={160}
            smallPadding
            justifyContent="flex-start"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/mateusz-romek-487ab3158/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Bar
            icon={LinkedInIcon}
            text="LinkedIn"
            width={160}
            smallPadding
            justifyContent="flex-start"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://twitter.com/Mateusz71163582"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Bar
            icon={TwitterIcon}
            text="Twitter"
            width={160}
            smallPadding
            justifyContent="flex-start"
          />
        </Link>
      </div>
    </>
  );
};
