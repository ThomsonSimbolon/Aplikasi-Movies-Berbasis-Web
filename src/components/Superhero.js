import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmantImage from "../assets/images/superhero/antmant.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermancoverImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white pt-3">SUPERHERO</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmantImage} alt="antman" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANTMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="avenger" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGER</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 6 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="batman" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BATMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 10 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="robinhood" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROOBINHOOD</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 14 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermancoverImage}
                alt="spiderman"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 18 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="superman" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 22 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
