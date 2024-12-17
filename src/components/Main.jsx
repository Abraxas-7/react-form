import React from "react";

import Form from "./Form";
import CardList from "./CardList";

import styles from "../styles/Main.module.css";

function Main() {
  return (
    <main>
      <div className={`container row ${styles["my-container"]}`}>
        <Form />
        <CardList />
      </div>
    </main>
  );
}

export default Main;
