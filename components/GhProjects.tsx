import styled from "@emotion/styled";
import React from "react";

import GithubIcon from "../assets/github.svg";
import { Bar } from "./Bar";

const GhLink = styled.a`
  margin-top: ${(props) => props.theme.spacing(2)}px;
  display: inline-block;
`;

export const GhProjects = () => {
  const projects = [
    {
      name: "Changelog",
      link: "https://github.com/MateuszRomek/changelog",
    },
    {
      name: "Kanban Board",
      link: "https://github.com/MateuszRomek/Kanban-Board",
    },
    {
      name: "React List",
      link: "https://github.com/MateuszRomek/reactList",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div key={project.name}>
          <GhLink
            href={project.link}
            target="_blank"
            referrerPolicy="no-referrer"
            rel='noreferrer'
          >
            <Bar
              text={project.name}
              icon={GithubIcon}
              justifyContent="flex-start"
              width={185}
            />
          </GhLink>
        </div>
      ))}
    </>
  );
};
