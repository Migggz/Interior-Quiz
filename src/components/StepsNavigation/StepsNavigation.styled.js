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
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Btn = styled(Link)`
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #333;
  transition: 0.3s ease opacity, 0.3s ease background-color;
  color: #333;
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
`;
