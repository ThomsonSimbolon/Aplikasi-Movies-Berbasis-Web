import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-white-50">
      <Container>
        <footer className="p-3">
          <p style={{ textAlign: "center", margin: 0 }}>
            &copy; 2024 Your Website. All rights reserved ~ The Movies.
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
