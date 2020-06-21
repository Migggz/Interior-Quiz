import styled from "styled-components";
import { Container, Row } from "styled-bootstrap-grid";
import { rgba } from "../../utils/style-utils";

export const HeroArea = styled.header`
  height: 400px;
  position: relative;
  margin-bottom: 100px;
  box-shadow: 0 3px 10px ${rgba("#000", 0.2)};
  @media (max-width: 991.98px) {
    margin-bottom: 85px;
    height: 250px;
  }
  @media (max-width: 575.98px) {
    margin-bottom: 85px;
    height: 200px;
    box-shadow: none;
  }
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
  @media (max-width: 991.98px) {
    object-position: center 90%;
  }
`;
export const Box = styled.div`
  padding: 40px;
  box-shadow: 0 3px 40px ${rgba("#333", 0.1)};
  position: absolute;
  bottom: -50px;
  background: #fff;
  &::after,
  &::before {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
  }
  &::after {
    border-right: 2px solid #333;
    border-bottom: 2px solid #333;
    right: -20px;
    bottom: -20px;
  }
  &::before {
    border-left: 2px solid #333;
    border-top: 2px solid #333;
    top: -20px;
    left: -20px;
  }
  @media (max-width: 991.98px) {
    padding: 30px;
    &::before,
    &::after {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 767.98px) {
    padding: 30px;
    left: 50%;
    transform: translateX(-50%);
    &::before,
    &::after {
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 575.98px) {
    padding: 30px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      right: -12px;
      bottom: -12px;
    }
    &::before {
      left: -12px;
      top: -12px;
    }
  }
`;
export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 1;
  white-space: nowrap;
  div {
    text-align: right;
  }
  @media (max-width: 991.98px) {
    line-height: 1.1;
    font-size: 3.8rem;
  }
  @media (max-width: 767.98px) {
    font-size: 3.2rem;
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
  margin-bottom: 60px;
  @media (max-width: 991.98px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767.98px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;
export const Info = styled.nav`
  position: absolute;
  top: 15px;
  left: 15px;
  border: 3px solid #333;
`;
export const Ul = styled.ul`
  display: flex;
`;
export const Li = styled.li`
  display: flex;
`;
export const StyledLink = styled.a`
  display: block;
  padding: 5px 15px;
  background-color: #fff;
  transition: 0.15s ease background-color;
  img {
    filter: invert(0.2);
    transition: 0.15s ease filter;
    display: block;
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  &:hover {
    background-color: #333;
    img {
      filter: invert(1);
    }
  }
`;
