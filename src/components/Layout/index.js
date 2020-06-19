import React from "react";
import {
  HeroArea,
  BgImg,
  Box,
  Title,
  StyledContainer,
  StyledRow,
  Desc
} from "./Layout.styled";
import heroImg from "../../assets/images/hero.jpg";
import { Container, Row, Col } from "styled-bootstrap-grid";

export default function Layout({ children }) {
  return (
    <main>
      <HeroArea>
        <BgImg src={heroImg} alt="" />
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
