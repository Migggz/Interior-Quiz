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

export default function FurnituresPage(props) {
  const dispatch = useDispatch();
  const furnitures = useSelector(state => state.furnitures);
  const furnituresData = useSelector(state => state.quizForm.steps.furnitures);
  const { register, watch } = useForm({
    defaultValues: {
      furnitures: furnituresData.selected
    }
  });

  useEffect(() => {
    if (furnitures.length === 0) dispatch(fetchData("furnitures"));
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
                Which of these furniture products would you choose for your
                home?
              </PageTitle>
            </Element>
            <PageDesc>Please, select one or more color mood...</PageDesc>
          </Col>
        </Row>
      </Container>
      {furnitures.length === 0 ? (
        <Loading />
      ) : (
        <form>
          <Container>
            <Row>
              {furnitures.map((furniture, index) => (
                <Card
                  key={index}
                  name="furnitures"
                  id={furniture.id}
                  value={furniture.id}
                  disabled={false}
                  data={furniture}
                  ref={register()}
                  onClick={() =>
                    dispatch(
                      updateQuizForm(
                        "furnitures",
                        watch("furnitures"),
                        watch("furnitures").length > 0
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
