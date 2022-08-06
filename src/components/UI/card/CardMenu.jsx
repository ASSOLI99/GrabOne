import { Card } from "react-bootstrap";
import "./CardMenu.css";
const CardMenu = (props) => {
  return (
    <Card className="w-full cardWithImage border-0">
      <span className="loveElement">
        <i className="bi bi-suit-heart"></i>
      </span>
      <div className="img-handler">
        <Card.Img variant="top" src={`${props.cardImage}`} />
      </div>
      <Card.Body className="pb-0">
        <Card.Title className="text-dark fs-6">
          Luxury 5-Star Auckland Stay at Cordis
        </Card.Title>
        <Card.Text className="mb-1 main-text">Cordis</Card.Text>
        <Card.Text className="mt-0 mb-0 text-dark">Auckland</Card.Text>
        <div className="d-flex justify-content-between align-items-end">
          <p className="text-secondary">71 bought</p>
          <div className="main-text d-flex flex-column align-items-end">
            <small className="fw-normal mb-0 ">from</small>
            <p className="fs-2 fst-normal my-0">$155</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CardMenu;
