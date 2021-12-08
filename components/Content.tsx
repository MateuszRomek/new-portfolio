import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

const Container = styled.div`
  margin-top: 5.6rem;
`;

const Title = styled.h3`
  font-size: 2.2rem;
  color: ${(props) => props.theme.text};
  margin: 0 0 2rem;
  transition-duration: 0.3s;
  transition-property: color;
  position: relative;
  padding-bottom: 1rem;

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
  margin: ${(props) => props.theme.spacing(2)}px 0;
  line-height: 2.3rem;
`;

type ContentProps = {
  title: string;
  children: React.ReactNode;
};

export const Content = ({ title, children }: ContentProps) => {
  return (
    <Container>
      <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
        <Title> {title} </Title>
      </motion.div>
      <Text>{children}</Text>
    </Container>
  );
};
