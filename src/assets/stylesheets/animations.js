import { keyframes } from "styled-components";

export const scaleUp = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;
export const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;
export const rotateSpinner = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;
