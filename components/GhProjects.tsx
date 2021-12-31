import styled from "@emotion/styled";
import React from "react";

import GithubIcon from "../assets/github.svg";
import { useDarkModeContext } from "../context/darkModeContext";
import { Bar } from "./Bar";

const GhLink = styled.a`
  margin-top: ${(props) => props.theme.spacing(2)}px;
  display: inline-block;

  &:hover ~ span {
    transform: translateY(5px);
  }
`;

const LinkContainer = styled.div`
  position: relative;
  width: 185px;
`;

const InProgress = styled.span<{ isDarkMode: boolean | null | undefined }>`
  display: block;
  position: absolute;
  top: ${(props) => props.theme.spacing(1.5)}px;
  right: -${(props) => props.theme.spacing(1)}px;
  border-radius: ${(props) => props.theme.spacing(0.5)}px;
  padding: ${(props) =>
    `${props.theme.spacing(0.5)}px ${props.theme.spacing(1.2)}px`};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.spacing(1.3)}px;
  font-weight: 600;
  z-index: 10;
  background-color: ${(props) => (props.isDarkMode ? "#FFEB6C" : "#CE55FF")};
  color: ${(props) => (props.isDarkMode ? "#383530" : "#FAFAFA")};
  transition: all 0.4s ease;
`;

const projects = [
  {
    name: "DB Diagram",
    link: "https://github.com/MateuszRomek/db-diagram",
    inProgress: true,
  },
  {
    name: "Detailer",
    link: "https://github.com/MateuszRomek/detaling",
    inProgress: true,
  },
  {
    name: "Kanban Board",
    link: "https://github.com/MateuszRomek/Kanban-Board",
    inProgress: false,
  },
  {
    name: "React List",
    link: "https://github.com/MateuszRomek/reactList",
    inProgress: false,
  },
];

export const GhProjects = () => {
  const context = useDarkModeContext();

  return (
    <>
      {projects.map((project) => (
        <LinkContainer key={project.name}>
          <GhLink
            href={project.link}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <Bar
              text={project.name}
              icon={GithubIcon}
              justifyContent="flex-start"
              width={185}
            />
          </GhLink>
          {project.inProgress && (
            <InProgress isDarkMode={context.isDarkMode}>DEV</InProgress>
          )}
        </LinkContainer>
      ))}
    </>
  );
};
