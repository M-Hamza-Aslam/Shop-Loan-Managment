import BorrowItem from "./BorrowItem";
import BorrowFilter from "./BorrowFilter";
import BorrowBarList from "./BorrowBarList";
import style from "./BorrowList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useState } from "react";

const BorrowList = (props) => {
  //variables
  const [FilteredYear, setFilteredYear] = useState("All");
  let FilteredBorrows = props.BorrowData;
  // const [FilteredBorrows, setFilteredBorrows] = useState(props.BorrowData);
  //functions
  const onSubmitFilteredData = (Year) => {
    setFilteredYear(Year);
  };

  if (FilteredYear === "All") {
    FilteredBorrows = props.BorrowData;
  } else {
    FilteredBorrows = props.BorrowData.filter((data) => {
      return data.date.getFullYear().toString() === FilteredYear;
    });
  }
  // const FilteredBorrows = props.BorrowData.filter((data)=>{
  //   if (FilteredYear==="All"){
  //     return true
  //   }
  //   else{

  //   }
  // })
  return (
    <Card className={`mt-5 border-2 ${style.BorrowListCard}`}>
      {/* <Card.Header
        as="h5"
        className={`text-black ${style.BorrowListCardHeader}`}
      >
        Borrowed Item's List
      </Card.Header> */}
      <Card.Body>
        <BorrowFilter
          SubmitFilteredData={onSubmitFilteredData}
          BorrowData={props.BorrowData}
          selectedYear={FilteredYear}
        ></BorrowFilter>
        <BorrowBarList Items={FilteredBorrows}></BorrowBarList>
        {FilteredBorrows.map((Borrow) => {
          return (
            <BorrowItem
              key={Borrow.id}
              date={Borrow.date}
              name={Borrow.name}
              item={Borrow.item}
              amount={Borrow.amount}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};
export default BorrowList;
