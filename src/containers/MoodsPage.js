import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { fetchData } from "../store/actions/common";
import { updateQuizForm } from "../store/actions/quizAction";
import { PageWrapper, PageTitle, PageDesc } from "../components/common.styled";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";

export default function MoodsPage(props) {
  const dispatch = useDispatch();
  const moods = useSelector(state => state.moods);
  const moodsData = useSelector(state => state.quizForm.steps.moods);
  const { register, watch } = useForm({
    defaultValues: {
      moods: moodsData.selected
    }
  });

  useEffect(() => {
    if (moods.length === 0) dispatch(fetchData("moods"));
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
                How would you describe the color mood you feel comfortable with?
              </PageTitle>
            </Element>
            <PageDesc>Please, select one or more color mood...</PageDesc>
          </Col>
        </Row>
      </Container>
      {moods.length === 0 ? (
        <Loading />
      ) : (
        <form>
          <Container>
            <Row>
              {moods.map((mood, index) => (
                <Card
                  key={index}
                  name="moods"
                  id={mood.id}
                  value={mood.id}
                  disabled={false}
                  data={mood}
                  ref={register()}
                  onClick={() =>
                    dispatch(
                      updateQuizForm(
                        "moods",
                        watch("moods"),
                        watch("moods").length > 0
                      )
                    )
                  }
                />
              ))}
            </Row>
          </Container>
        </form>
      )}
    </PageWrapper>
  );
}
