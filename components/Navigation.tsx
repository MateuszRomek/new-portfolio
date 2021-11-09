import styled from "@emotion/styled";
import React from "react";
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
  font-size: ${(props) => props.theme.spacing(3)}px;
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.theme.spacing(1.5)}px;
`;
export const Navigation = () => {
  return (
    <NavigatioContainer>
      <FlexNavigation>
        <Title>MR</Title>
        <ThemeButton />
      </FlexNavigation>
    </NavigatioContainer>
  );
};
