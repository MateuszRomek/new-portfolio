import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

import { Avatar } from "./Avatar";

const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 8rem 0 0;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.spacing(4.5)}px;
  color: ${(props) => props.theme.text};
  transition-duration: 0.3s;
  transition-property: color;
  margin: 0;
`;

const Position = styled.p`
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.theme.spacing(1)}px 0;
  font-size: ${(props) => props.theme.fontSize};
  transition-duration: 0.3s;
  transition-property: color;
`;

export const NamePosition = () => {
  return (
    <Container>
      <motion.div whileHover={{ y: 5 }} transition={{ duration: 0.2 }}>
        <Name>Mateusz Romek</Name>
        <Position>Frontend Developer</Position>
      </motion.div>
      <Avatar imgSrc="/image.png" displayName="MR" />
    </Container>
  );
};
