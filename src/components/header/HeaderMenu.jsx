import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import "./HeaderMenu.css";
const HeaderMenu = () => {
  return (
    <>
      <Container fluid className="container-xl">
        <Row>
          <Col sm={3} className="d-none d-xl-block">
            <div className="side-bar bg-white p-2">
              <h2>Discover</h2>
              <hr />
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
              <p>
                <Link
                  className="justify-content-between d-flex text-black text-decoration-none"
                  to="/we"
                >
                  <span>Featured Auckland deals</span>
                  <span>185</span>
                </Link>
              </p>
            </div>
          </Col>
          <Col sm>
            <Link to="/card" className="text-decoration-none">
              <CardMenu
                cardImage={"5d1bda1df52b87ffd1e830018694f197eb10b027.jpg"}
              />
            </Link>
          </Col>
          <Col sm>
            <Link to="/card" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HeaderMenu;
