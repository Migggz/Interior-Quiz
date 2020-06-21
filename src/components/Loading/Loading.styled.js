import styled from "styled-components";
import { rotateSpinner } from "../../assets/stylesheets/animations";

export const Spinner = styled.div`
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  color: #333;
  position: absolute;
  left: calc(50% - 25px);
  top: 35%;
  transform: translateX(-50%);
  display: inline-block;
  border: 4px solid #ddd;
  border-radius: 50%;
  border-right-color: #333;
  animation: ${rotateSpinner} 1s linear infinite;
`;
