import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "@emotion/styled";

import { useDarkModeContext } from "../context/darkModeContext";
import DarkIcon from "../assets/dark.svg";
import LightIcon from "../assets/light.svg";

const Button = styled.button<{ isDarkMode: boolean | null | undefined }>`
  padding: ${({ theme }) => theme.spacing(1.3)}px;
  border-radius: ${({ theme }) => theme.spacing()}px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDarkMode ? "#FFEB6C" : "#CE55FF")};
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isDarkMode ? "#F8DA00" : "#B34BDE")};
  }

  & svg {
    height: 18px;
    width: 18px;
  }
`;

export const ThemeButton = () => {
  const context = useDarkModeContext();
  return (
    <AnimatePresence exitBeforeEnter initial>
      <motion.div
        key={context.isDarkMode ? "light" : "dark"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button aria-label="Change theme"  isDarkMode={context.isDarkMode} onClick={context.toggleTheme}>
          {context.isDarkMode ? <LightIcon /> : <DarkIcon />}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
