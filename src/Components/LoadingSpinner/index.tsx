import React, { ReactElement } from "react";
import styles from "./spinner.module.css";

function Spinner(): ReactElement {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
