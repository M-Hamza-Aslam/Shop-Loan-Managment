import { Card, Row, Col } from "react-bootstrap";
import style from "./BorrowItem.module.css";
const BorrowItem = (props) => {
  return (
    <Card className={`text-center text-white m-3 ${style.Card}`}>
      <Card.Body>
        <Row>
          <Col className="col-2">
            <h4 className="pt-1">{props.name}</h4>
          </Col>
          <Col className="col-6">
            <h4 className=" h4 pt-1">{props.item}</h4>
          </Col>
          <Col className="col-2">
            <h4 className={`py-2 text-white ${style.CardPrice}`}>
              {props.amount}
            </h4>
          </Col>
          <Col className="col-2">
            <h4 className="pt-1">{props.date.toDateString()}</h4>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default BorrowItem;
