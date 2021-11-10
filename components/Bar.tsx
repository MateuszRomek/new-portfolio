import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

type ContainerProps = {
  justifyContent?: "center" | "flex-start" | "flex-end";
  width?: number;
  smallPadding?: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  padding: ${(props) =>
    props.smallPadding ? props.theme.spacing(1) : props.theme.spacing(2)}px;
  border-radius: ${(props) => props.theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.body};
  color: ${(props) => props.theme.text};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  border: none;
`;

const IconWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing(2)}px;

  & path {
    fill: ${(props) => props.theme.text};
  }
`;

type BarProps = {
  text: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
} & Pick<ContainerProps, "justifyContent" | "width" | "smallPadding">;

export const Bar = ({ text, icon: Icon, ...rest }: BarProps) => {
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
      <Container {...rest}>
        {Icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
        {text}
      </Container>
    </motion.div>
  );
};
