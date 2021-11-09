import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const RoundedAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
`;

type AvatarProps = {
  imgSrc?: string;
  displayName: string;
};

export const Avatar = ({ imgSrc, displayName }: AvatarProps) => {
  return (
    <motion.div
      whileHover={{
        rotate: "5deg",
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <RoundedAvatar>
        {imgSrc ? (
          <Image
            objectFit="contain"
            src={imgSrc}
            width={120}
            height={120}
            alt="Avatar"
          />
        ) : (
          displayName
        )}
      </RoundedAvatar>
    </motion.div>
  );
};
