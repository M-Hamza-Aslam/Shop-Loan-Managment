import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import style from "./BorrowForm.module.css";
import { useState } from "react";

const BorrowForm = (props) => {
  //variables
  const [B_Name, setName] = useState("");
  const [B_Item, setItem] = useState("");
  const [B_Amount, setAmount] = useState("");
  const [B_Date, setDate] = useState("");

  const [NameValid, setNameValid] = useState(true);
  const [ItemValid, setItemValid] = useState(true);
  const [AmountValid, setAmountValid] = useState(true);
  const [DateValid, setDateValid] = useState(true);

  //functions
  const NameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setNameValid(true);
    }
    setName(event.target.value);
  };
  const ItemChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setItemValid(true);
    }
    setItem(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAmountValid(true);
    }
    setAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDateValid(true);
    }
    setDate(event.target.value);
  };
  const CancelFormHandler = () => {
    props.showForm(false);
  };
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    if (
      B_Name.trim().length === 0 ||
      B_Date.trim().length === 0 ||
      B_Amount.trim().length === 0 ||
      B_Item.trim().length === 0
    ) {
      if (B_Name.trim().length === 0) {
        setNameValid(false);
      }
      if (B_Date.trim().length === 0) {
        setDateValid(false);
      }
      if (B_Amount.trim().length === 0) {
        setAmountValid(false);
      }
      if (B_Item.trim().length === 0) {
        setItemValid(false);
      }
      return;
    }
    const NewBorrowItem = {
      id: Math.random(),
      date: new Date(B_Date),
      name: B_Name,
      item: B_Item,
      amount: +B_Amount,
    };
    props.GetBorrowItem(NewBorrowItem);
    props.showForm(false);
    setName("");
    setAmount("");
    setDate("");
    setItem("");
  };
  //component
  return (
    <Form>
      <Row>
        <Col className="gy-2">
          <Form.Control
            value={B_Name}
            placeholder="Name"
            onChange={NameChangeHandler}
            className={!NameValid && "border-3 border-danger"}
          />
        </Col>
        <Col className="gy-2">
          <Form.Control
            value={B_Item}
            placeholder="Item"
            onChange={ItemChangeHandler}
            className={!ItemValid && " border-3 border-danger"}
          />
        </Col>
      </Row>
      <Row>
        <Col className="gy-2">
          <Form.Control
            value={B_Amount}
            placeholder="Amount"
            onChange={AmountChangeHandler}
            className={!AmountValid && "border-3 border-danger"}
          />
        </Col>
        <Col className="gy-2">
          <Form.Control
            value={B_Date}
            type="date"
            placeholder="date"
            onChange={DateChangeHandler}
            className={!DateValid && "border-3 border-danger"}
          />
        </Col>
      </Row>
      <div className="text-center">
        <Button
          className={`my-3 mx-2 text-center ${style.BorrowFormButton} `}
          type="submit"
          onClick={SubmitFormHandler}
        >
          Add in List
        </Button>
        <Button
          className={`my-3 mx-2 text-center ${style.BorrowFormCancelButton} `}
          type="button"
          onClick={CancelFormHandler}
        >
          Close
        </Button>

        {(!NameValid || !DateValid || !AmountValid || !ItemValid) && (
          <p className="text-danger">Invalid Input(s)!</p>
        )}
      </div>
    </Form>
  );
};
export default BorrowForm;
