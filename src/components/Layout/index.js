import React from "react";
import {
  HeroArea,
  BgImg,
  Box,
  Title,
  StyledContainer,
  StyledRow,
  Desc,
  Info,
  Ul,
  Li,
  StyledLink
} from "./Layout.styled";
import heroImg from "../../assets/images/hero.jpg";
import { Container, Row, Col } from "styled-bootstrap-grid";
import github from "../../assets/images/social/github.svg";
import linkedin from "../../assets/images/social/linkedin.svg";
import email from "../../assets/images/social/email.svg";

export default function Layout({ children }) {
  return (
    <main>
      <HeroArea>
        <BgImg src={heroImg} alt="" />
        <Info>
          <Ul>
            <Li>
              <StyledLink
                href="https://github.com/Migggz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" aria-hidden="true" />
              </StyledLink>
            </Li>
            <Li>
              <StyledLink
                href="https://www.linkedin.com/in/maged-abdelwahab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin" aria-hidden="true" />
              </StyledLink>
            </Li>
            <Li>
              <StyledLink
                href="mailto:MagedMohammed16@GMail.Com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={email} alt="Email" aria-hidden="true" />
              </StyledLink>
            </Li>
          </Ul>
        </Info>
        <StyledContainer>
          <StyledRow>
            <Col xs={12}>
              <Box>
                <Title>
                  Interior Design <div>Style Quiz</div>
                </Title>
              </Box>
            </Col>
          </StyledRow>
        </StyledContainer>
      </HeroArea>
      <Container>
        <Row>
          <Col xs={12}>
            <Desc>
              We’ll ask a few questions to get you a personalized look that
              you’ll love!
            </Desc>
          </Col>
        </Row>
      </Container>
      {children}
    </main>
  );
}
