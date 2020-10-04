import React from "react";
import Styles from "./toggleDeg.module.css";

const ToggleDeg = ({ toggleDegree, degree }) => {
  const activeBtnClass = !degree
    ? `${Styles.tog__toggle} ${Styles.tog__toggle_active}`
    : Styles.tog__toggle;
  const btnClass = degree
    ? `${Styles.tog__toggle} ${Styles.tog__toggle_active}`
    : Styles.tog__toggle;
  const activeValClass = !degree
    ? `${Styles.tog__val} ${Styles.tog__val_active}`
    : Styles.tog__val;
  const valClass = degree
    ? `${Styles.tog__val} ${Styles.tog__val_active}`
    : Styles.tog__val;

  return (
    <div className={Styles.tog__toggles}>
      <span className={Styles.tog__icon}>°</span>
      <button className={activeBtnClass} onClick={() => toggleDegree(false)}>
        <span className={activeValClass}>C</span>
      </button>
      <button className={btnClass} onClick={() => toggleDegree(true)}>
        <span className={valClass}>F</span>
      </button>
    </div>
  );
};

export default ToggleDeg;
