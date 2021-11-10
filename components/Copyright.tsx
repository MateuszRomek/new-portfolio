import styled from "@emotion/styled";
import React from "react";

const CopyrightText = styled.p`
  margin-top: ${(props) => props.theme.spacing(10)}px;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSize};
  transition-duration: 0.3s;
  transition-property: color;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Copyright = () => {
  return (
    <CopyrightText>
      © {new Date().getFullYear()} Mateusz Romek. All Rights Reserved.
    </CopyrightText>
  );
};
