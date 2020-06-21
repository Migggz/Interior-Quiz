import styled from "styled-components";

export const Wrapper = styled.article`
  border: 2px solid #333;
  background-color: #333;
  margin-bottom: 30px;
`;
export const StyledImg = styled.img`
  display: block;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  background-color: #fff;
  pointer-events: none;
  @media (max-width: 575.98px) {
    min-height: 130px;
    max-height: 130px;
  }
`;
export const CardTitle = styled.h4`
  margin-bottom: 0;
  line-height: 1;
  text-align: center;
  color: #fff;
  margin-bottom: 15px;
  padding: 0 5px;
  @media (max-width: 575.98px) {
    font-size: 1.2rem;
  }
`;
