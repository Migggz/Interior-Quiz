import React from "react";
import { useImage } from "react-image";
import { StyledImg } from "./SuspenseImage.styled";

export default function SuspenseImage({ src: srcImg, alt }) {
  const { src } = useImage({
    srcList: srcImg
  });

  return <StyledImg src={src} alt={alt} />;
}
