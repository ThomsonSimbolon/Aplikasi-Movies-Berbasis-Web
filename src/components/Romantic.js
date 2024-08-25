import { Card, Col, Container, Row, Image } from "react-bootstrap";
import akronImage from "../assets/images/romantic/akron.jpeg";
import gitImage from "../assets/images/romantic/gita.jpg";
import francineImage from "../assets/images/romantic/francine.jpeg";
import teatricalImage from "../assets/images/romantic/teatrical.jpeg";
import koreaImage from "../assets/images/romantic/korea.jpg";
import thorImage from "../assets/images/romantic/thor.jpg";

const Romantic = () => {
  return (
    <div className="pb-3">
      <Container>
        <h1 className="text-white pt-3">ROMANTIC</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="romantic">
            <Card className="movieImage">
              <Image src={akronImage} alt="acron" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ACRON</Card.Title>
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
              <Image src={gitImage} alt="gita" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    GITA CINTA DAN SMA
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 12 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={francineImage} alt="francine" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">FRANCINE</Card.Title>
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
              <Image src={teatricalImage} alt="teatrical" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TEATRICAL</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 24 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={koreaImage} alt="korea" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">KOREA</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 30 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thorImage} alt="thor" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THOR</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider a natural lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 36 mins ago
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

export default Romantic;
