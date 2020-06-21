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

export default function BrandsPage(props) {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.brands);
  const brandsData = useSelector(state => state.quizForm.steps.brands);
  const { register, watch } = useForm({
    defaultValues: {
      brands: brandsData.selected
    }
  });

  useEffect(() => {
    if (brands.length === 0) dispatch(fetchData("brands"));
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
                Which of these brands would you choose to furnish with?
              </PageTitle>
            </Element>
            <PageDesc>Please, select one or more color mood...</PageDesc>
          </Col>
        </Row>
      </Container>
      {brands.length === 0 ? (
        <Loading />
      ) : (
        <form>
          <Container>
            <Row>
              {brands.map((brand, index) => (
                <Card
                  key={index}
                  name="brands"
                  id={brand.id}
                  value={brand.id}
                  disabled={false}
                  data={brand}
                  ref={register()}
                  onClick={() =>
                    dispatch(
                      updateQuizForm(
                        "brands",
                        watch("brands"),
                        watch("brands").length > 0
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
