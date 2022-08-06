import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddImage.css";
import { Link } from "react-router-dom";
const AddImage = () => {
  return (
    <>
      <Container fluid className="container-xl">
        <Row>
          <Col>
            <Link to="/">
              <div className="main-image"></div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddImage;
