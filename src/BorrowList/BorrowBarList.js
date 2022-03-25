import BorrowBar from "./BorrowBar";
import style from "./BorrowBarList.module.css";
const BorrowBarList = (props) => {
  const MonthData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.Items.map((item) => {
    return (MonthData[item.date.getMonth()].value += item.amount);
  });
  const allamounts = MonthData.map((item) => item.value);

  const max = Math.max(...allamounts);

  return (
    <div className={`mx-3 ${style.chart}`}>
      {MonthData.map((month) => {
        return (
          <BorrowBar
            key={Math.random()}
            label={month.label}
            maxValue={max}
            value={month.value}
          ></BorrowBar>
        );
      })}
    </div>
  );
};
export default BorrowBarList;
