import React from "react";
import Layout from "./components/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";
import QuizForm from "./containers/QuizForm";
function App() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12}>
            <QuizForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default App;
