import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { rgba } from "../../utils/style-utils";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85px;
  box-shadow: 0 -3px 20px ${rgba("#333", 0.1)};
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 5;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767.98px) {
    justify-content: center;
  }
`;
export const Btn = styled(Link)`
  white-space: nowrap;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #333;
  transition: 0.3s ease opacity, 0.3s ease background-color;
  color: #333;
  background-color: #fff;
  &:active {
    background-color: #eee;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: auto;
      pointer-events: none;
    `}
  ${({ invert }) =>
    invert &&
    css`
      color: #fff;
      background-color: #333;
    `}
  ${({ underlined }) =>
    underlined &&
    css`
      border: 0;
      font-weight: 400;
      text-decoration: underline !important;
    `}
  @media (max-width: 767.98px) {
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: 575.98px) {
    font-size: 1.4rem;
    padding: 8px 16px;
  }
`;
export const Progress = styled.div`
  position: absolute;
  height: 4px;
  border-radius: 4px;
  width: ${({ percentage }) => percentage}%;
  left: 0;
  top: -1px;
  background-color: #dabaa3;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;
