import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

const Title = styled.h3`
  font-size: ${(props) => props.theme.spacing(3)}px;
  color: ${(props) => props.theme.text};
  margin: 0;
  transition-duration: 0.3s;
  transition-property: color;
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing(1)}px;
  margin-bottom: ${(props) => props.theme.spacing(2)}px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: ${(props) => props.theme.spacing(0.5)}px;
    background-color: ${(props) => props.theme.text};
    transition-duration: 0.4s;
  }

  &:hover::after {
    width: 0;
  }
`;

const Text = styled.div`
  transition-duration: 0.3s;
  transition-property: color;
  color: ${(props) => props.theme.text};
  font-weight: 300;
  padding-left: ${(props) => props.theme.spacing(1)}px;
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;

type ContentProps = {
  title: string;
  children: React.ReactNode;
};

export const Content = ({ title, children }: ContentProps) => {
  return (
    <div>
      <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
        <Title> {title} </Title>
      </motion.div>
      <Text>{children}</Text>
    </div>
  );
};
