import { keyframes } from "styled-components";

export const scaleUp = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;
export const slideDown = keyframes`
  from {
    transform: translateY(0);
  } to {
    transform: translateY(20px);
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
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 8%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
