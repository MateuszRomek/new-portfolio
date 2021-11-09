import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { useDarkModeContext } from "../context/darkModeContext";

const Link = styled.a<{ isDarkMode: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(2)}px;
  border-radius: ${(props) => props.theme.spacing(1)}px;
  transition-duration: 0.3s;
  transition-property: filter, color;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.body};
  color: ${(props) => props.theme.text};
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  border: none;
  width: 100%;
`;

type BarLinkProps = {
  text: string;
  href: string;
};

export const BarLink = ({ text, href }: BarLinkProps) => {
  const context = useDarkModeContext();

  return (
    <motion.div
      whileHover={{
        y: 3,
        cursor: "pointer",
        filter: "contrast(0.85)",
      }}
      whileTap={{
        y: 5,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Link href={href} isDarkMode={context.isDarkMode}>
        {text}
      </Link>
    </motion.div>
  );
};
