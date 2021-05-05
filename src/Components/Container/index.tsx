import React from "react";
import styles from "./container.module.css";

interface Props {}
const Container: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
