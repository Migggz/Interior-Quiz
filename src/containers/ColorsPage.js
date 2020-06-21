import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { fetchData } from "../store/actions/common";
import {
  updateQuizForm,
  updateQuizFormStatus
} from "../store/actions/quizAction";
import { PageWrapper, PageTitle, PageDesc } from "../components/common.styled";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";

export default function ColorsPage(props) {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.colors);
  const colorsData = useSelector(state => state.quizForm.steps.colors);
  const { register, watch } = useForm({
    defaultValues: {
      colors: colorsData.selected
    }
  });

  useEffect(() => {
    if (colors.length === 0) dispatch(fetchData("colors"));
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
              <PageTitle>What are you favorite accent colors?</PageTitle>
            </Element>
            <PageDesc>Please, select one or more color mood...</PageDesc>
          </Col>
        </Row>
      </Container>
      {colors.length === 0 ? (
        <Loading />
      ) : (
        <form>
          <Container>
            <Row>
              {colors.map((color, index) => (
                <Card
                  key={index}
                  name="colors"
                  id={color.id}
                  value={color.id}
                  disabled={false}
                  data={color}
                  ref={register()}
                  onClick={() => {
                    dispatch(
                      updateQuizForm(
                        "colors",
                        watch("colors"),
                        watch("colors").length > 0
                      )
                    );
                    dispatch(updateQuizFormStatus(watch("colors").length > 0));
                  }}
                />
              ))}
            </Row>
          </Container>
        </form>
      )}
    </PageWrapper>
  );
}
