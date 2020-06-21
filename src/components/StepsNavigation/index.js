import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Wrapper, Inner, Btn, Progress } from "./StepsNavigation.styled";
import { useDispatch } from "react-redux";
import { resetForm } from "../../store/actions/quizAction";
export default function StepsNavigation({ nextBtn, prevBtn, percentage }) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Progress percentage={percentage} />
      <Container>
        <Row>
          <Col xs={12}>
            <Inner>
              <Btn disabled={!prevBtn.status} to={prevBtn.route || "#"}>
                Previous Step
              </Btn>
              {nextBtn.status === "restart-quiz" ? (
                <Btn
                  underlined={"true"}
                  to={nextBtn.route}
                  onClick={() => dispatch(resetForm())}
                >
                  Restart Quiz!
                </Btn>
              ) : (
                <Btn
                  invert={nextBtn.status === "show-results" ? 1 : 0}
                  disabled={!nextBtn.status}
                  to={nextBtn.route || "#"}
                >
                  {nextBtn.status === "show-results"
                    ? "Show Results!"
                    : "Next Step"}
                </Btn>
              )}
            </Inner>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
