import styled from "styled-components";
import { fadeIn } from "../assets/stylesheets/animations";

export const PageWrapper = styled.section`
  min-height: 100vh;
  padding-bottom: 114px;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;
export const PageTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.2;
  @media (max-width: 767.98px) {
    font-size: 2.2rem;
  }
`;
export const PageDesc = styled.p`
  margin-bottom: 30px;
  font-size: 1.4rem;
  color: #999;
  text-align: center;
  font-style: italic;
`;
export const Section = styled.section`
  border-bottom: 1px solid #ededed;
  margin-bottom: 30px;
`;
export const SectionTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-right: 15px;
  @media (max-width: 575.98px) {
    font-size: 2rem;
  }
`;
