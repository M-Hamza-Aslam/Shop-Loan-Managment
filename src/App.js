import "./App.css";
import BorrowList from "./BorrowList/BorrowList";
import NewBorrow from "./NewBorrow/NewBorrow";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  //variables
  //DataForBorrowItem
  const [BorrowInfo, setBorrowInfo] = useState([
    {
      id: Math.random(),
      date: new Date(2022, 0, 22),
      name: "Hamza",
      item: "12 Eggs",
      amount: 180,
    },
    {
      id: Math.random(),
      date: new Date(2022, 2, 9),
      name: "Usman",
      item: "2 litre Meezan Oil",
      amount: 900,
    },
    {
      id: Math.random(),
      date: new Date(2019, 1, 29),
      name: "Mustafa",
      item: "1 kg Rice",
      amount: 90,
    },
    {
      id: Math.random(),
      date: new Date(2020, 3, 19),
      name: "Ahmed",
      item: "5 kg Flour",
      amount: 765,
    },
    {
      id: Math.random(),
      date: new Date(2019, 11, 19),
      name: "Saira",
      item: "Chips",
      amount: 50,
    },
    {
      id: Math.random(),
      date: new Date(2017, 8, 19),
      name: "Kashif",
      item: "Tapal Tea Box",
      amount: 165,
    },
    {
      id: Math.random(),
      date: new Date(2018, 5, 19),
      name: "Nadia",
      item: "Handsfree",
      amount: 350,
    },
    {
      id: Math.random(),
      date: new Date(2017, 10, 19),
      name: "Saboor",
      item: "Soup packet",
      amount: 400,
    },
  ]);

  //functions
  const BorrowItemInAppHandler = (BorrowItem) => {
    setBorrowInfo((prevstate) => {
      return [BorrowItem, ...prevstate];
    });
  };

  return (
    <div className="App p-5">
      <NewBorrow BorrowItemInApp={BorrowItemInAppHandler} />
      <BorrowList BorrowData={BorrowInfo} />
    </div>
  );
}

export default App;
