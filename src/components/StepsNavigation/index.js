import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Wrapper, Inner, Btn } from "./StepsNavigation.styled";

export default function StepsNavigation({ nextBtnRoute, prevBtnRoute }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <Inner>
              <Btn disabled={!prevBtnRoute} to={prevBtnRoute || "#"}>
                Previous Step
              </Btn>
              <Btn disabled={!nextBtnRoute} to={nextBtnRoute || "#"}>
                Next Step
              </Btn>
            </Inner>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
