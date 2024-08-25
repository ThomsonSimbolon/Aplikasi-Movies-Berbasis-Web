import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NOBAR GRATIS</div>
            <div className="title">TANPA KARCIS</div>
            <div className="introButton mt-4 tex t-center">
              <Button variant="dark text-uppercase shadow" href="#trending">
                GET STARTED
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
