import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "styled-bootstrap-grid";
import {
  PageWrapper,
  PageTitle,
  PageDesc,
  Section,
  SectionTitle
} from "../components/common.styled";
import ShowCard from "../components/ShowCard";
import { Element, scroller } from "react-scroll";

export default function ResultsPage() {
  const state = useSelector(state => state);
  const quizSteps = state.quizForm.steps;

  useEffect(() => {
    scroller.scrollTo("pageScrollHandler", {
      duration: 500,
      smooth: true,
      offset: -20
    });
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <Element name="pageScrollHandler">
              <PageTitle>
                Seems Great ! Take a look what you've chosen
              </PageTitle>
            </Element>
            <PageDesc>Perfecto...</PageDesc>
            {Object.keys(quizSteps).map((key, index) => (
              <Section key={key + "--" + index}>
                <SectionTitle>{key.toUpperCase()}</SectionTitle>
                <Row>
                  {quizSteps[key].selected.map((itemId, i) => {
                    const ItemById = state[key].find(
                      el => el.id === parseInt(itemId)
                    );
                    return (
                      <Col key={itemId + i} col={6} md={4} lg={3}>
                        <ShowCard data={ItemById} />
                      </Col>
                    );
                  })}
                </Row>
              </Section>
            ))}
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}
