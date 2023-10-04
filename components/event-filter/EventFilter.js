import React, { useRef } from "react";
import styles from "./EventFilter.module.css";

import Button from "../ui/button";

const EventFilter = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    props.onSearch(yearRef.current.value, monthRef.current.value);
  };
  return (
    <form onSubmit={formSubmissionHandler} className={styles["event-form"]}>
      <div className={styles["event-form__controls"]}>
        <label htmlFor="month">Year</label>
        <select
          name="month"
          id="month"
          ref={yearRef}
          className={styles["select"]}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className={styles["event-form__controls"]}>
        <label htmlFor="year">Month</label>
        <select
          name="year"
          id="year"
          ref={monthRef}
          className={styles["select"]}
        >
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
      <div className={styles["unique"]}>
        <Button>Filter</Button>
      </div>
    </form>
  );
};

export default EventFilter;
