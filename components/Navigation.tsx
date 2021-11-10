import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";
import React from "react";
import { Button } from "./Button";
import { ThemeButton } from "./ThemeButton";

const NavigatioContainer = styled.div`
  transition-duration: 0.2s;
  transition-property: background-color, color;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.body};
`;

const FlexNavigation = styled.nav`
  display: flex;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: ${(props) => props.theme.spacing(3)}px;
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.theme.spacing(2)}px;
`;

const initialVariants: Variants = {
  hidden: {},
  visible: {},
};

const variants: Variants = {
  hidden: { opacity: 0, x: -100, display: "none" },
  visible: { opacity: 1, x: 0, display: "inline", marginRight: 8 },
};

export const Navigation = () => {
  return (
    <NavigatioContainer>
      <FlexNavigation>
        <Title>
          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={initialVariants}
            transition={{ duration: 0.1, type: "spring", stiffness: 250 }}
          >
            M
            <motion.span style={{ pointerEvents: "none" }} variants={variants}>
              ateusz
            </motion.span>
            R
            <motion.span style={{ pointerEvents: "none" }} variants={variants}>
              omek
            </motion.span>
          </motion.div>
        </Title>

        <ThemeButton />
      </FlexNavigation>
    </NavigatioContainer>
  );
};
