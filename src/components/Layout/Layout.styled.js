import styled from "styled-components";
import { Container, Row } from "styled-bootstrap-grid";
import { rgba } from "../../utils/style-utils";

export const HeroArea = styled.header`
  height: 400px;
  position: relative;
  margin-bottom: 100px;
`;

export const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 75%;
  user-select: none;
  pointer-events: none;
`;
export const Box = styled.div`
  padding: 40px;
  box-shadow: 0 3px 40px ${rgba("#333", 0.1)};
  position: absolute;
  bottom: -50px;
  background: #fff;
  &::after {
    content: "";
    height: 60px;
    width: 60px;
    border-right: 2px solid #333;
    border-bottom: 2px solid #333;
    position: absolute;
    right: -20px;
    bottom: -20px;
  }
  &::before {
    content: "";
    height: 60px;
    width: 60px;
    border-left: 2px solid #333;
    border-top: 2px solid #333;
    position: absolute;
    top: -20px;
    left: -20px;
  }
`;
export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 1;
  div {
    text-align: right;
  }
`;
export const StyledContainer = styled(Container)`
  height: 100%;
`;
export const StyledRow = styled(Row)`
  height: 100%;
`;
export const Desc = styled.p`
  font-size: 1.8rem;
  color: #aaa;
  font-weight: 600;
`;
