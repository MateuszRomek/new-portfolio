import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <CopyrightText>
        {t('common:copyright', {year:new Date().getFullYear() })}
    </CopyrightText>
  );
};

