import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

const Btn = styled.button`
  padding: ${(props) => props.theme.spacing(1)}px
    ${(props) => props.theme.spacing(2)}px;
  border: none;
  color: ${(props) => props.theme.text};
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  margin: 0 ${(props) => props.theme.spacing(1)}px;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: 0.2s ease;
    transform-origin: center;
    width: 0;
  }

  &:hover {
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Button: React.FC = ({ children }) => {
  return <Btn>{children}</Btn>;
};
