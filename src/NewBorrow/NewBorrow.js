import BorrowForm from "./BorrowForm";
import { Card, Button } from "react-bootstrap";
import style from "./NewBorrow.module.css";
import { useState } from "react";

const NewBorrow = (props) => {
  //variables
  const [ShowForm, setShowForm] = useState(false);
  //functions
  const GetBorrowItemHandler = (BorrowItem) => {
    props.BorrowItemInApp(BorrowItem);
  };
  const ShowFromButtonHandler = () => {
    setShowForm(true);
  };
  return (
    <div>
      {!ShowForm ? (
        <div className={`text-center w-100% py-4  ${style.ShowForm}`}>
          <Button
            className={`p-3 ${style.ShowFormButton}`}
            onClick={ShowFromButtonHandler}
          >
            Add New Data
          </Button>
        </div>
      ) : (
        <Card className={`border-2 ${style.NewBorrowCard}`}>
          {/* <Card.Header
            as="h5"
            className={`text-black ${style.NewBorrowCardHeader}`}
          >
            New Borrow Data
          </Card.Header> */}
          <Card.Body>
            <BorrowForm
              showForm={setShowForm}
              GetBorrowItem={GetBorrowItemHandler}
            />
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default NewBorrow;
