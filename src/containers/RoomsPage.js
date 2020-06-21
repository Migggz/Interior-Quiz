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

export default function RoomsPage(props) {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms);
  const routerAction = useSelector(state => state.router.action);
  const roomsData = useSelector(state => state.quizForm.steps.rooms);
  const { register, watch } = useForm({
    defaultValues: {
      rooms: roomsData.selected
    }
  });

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchData("rooms"));
    if (routerAction === "PUSH") {
      scroller.scrollTo("pageScrollHandler", {
        duration: 500,
        smooth: true,
        offset: -20
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <Element name="pageScrollHandler">
              <PageTitle>
                which of these rooms you would love to live in?
              </PageTitle>
            </Element>
            <PageDesc>Please, you have to select 3 rooms...</PageDesc>
          </Col>
        </Row>
      </Container>
      {rooms.length === 0 ? (
        <Loading />
      ) : (
        <form>
          <Container>
            <Row>
              {rooms.map((room, index) => (
                <Card
                  key={index}
                  name="rooms"
                  id={room.id}
                  value={room.id}
                  disabled={
                    roomsData.selected.length >= 3 &&
                    roomsData.selected.indexOf(String(room.id)) === -1
                  }
                  data={room}
                  ref={register()}
                  onClick={() =>
                    dispatch(
                      updateQuizForm(
                        "rooms",
                        watch("rooms"),
                        watch("rooms").length === 3
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
