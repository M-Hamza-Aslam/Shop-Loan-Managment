import style from './BorrowBar.module.css';
const BorrowBar = (props) => {
    let Barheight = Math.round((props.value/props.maxValue) *100) + '%';
  return (
    <div className={style["chart-bar"]}>
      <div className={style["chart-bar__inner"]}>
        <div className={style["chart-bar__fill"]} style={{ height: Barheight }}></div>
      </div>
      <div className={style["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};
export default BorrowBar;
