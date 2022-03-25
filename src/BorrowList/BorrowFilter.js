import "bootstrap/dist/css/bootstrap.min.css";
import style from "./BorrowFilter.module.css";
const BorrowFilter = (props) => {
  //variables
  let years = props.BorrowData.map((B_obj) => {
    return B_obj.date.getFullYear();
  });
  years = [...new Set(years)].sort();
  // var FilteredData = props.BorrowData;
  //functions
  const DropdownHandler = (event) => {
    // if (event.target.value === "All") {
    //   FilteredData = props.BorrowData;
    // } else {
    //   const Filtered = props.BorrowData.filter((data) => {
    //     return data.date.getFullYear().toString() === event.target.value;
    //   });
    //   FilteredData = Filtered;
    // }
    props.SubmitFilteredData(event.target.value);
  };
  return (
    <div className="text-center p-2">
      <p
        className={`d-inline-block badge text-wrap fs-5 mx-4 w-25 ${style.Filter} `}
      >
        Filter
      </p>
      <select
        value={props.selectedYear}
        id="select1"
        onChange={DropdownHandler}
        className="d-inline-block p-1 w-25"
      >
        <option value="All">All</option>
        {years.map((year) => {
          return (
            <option value={year} key={Math.random()}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default BorrowFilter;
