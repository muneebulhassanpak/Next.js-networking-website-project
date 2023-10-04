import React from "react";
import Link from "next/link";

import styles from "./eventItem.module.css";
import Button from "../ui/button";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

const EventItem = ({
  id,
  title,
  description,
  location,
  date,
  image,
  altText,
}) => {
  const transformedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const transformedDescription = description.slice(0, 150);
  return (
    <li className={styles["item-container"]}>
      <div className={styles["itemImageDiv"]}>
        <img src={`/${image}`} alt={altText} className={styles["itemImage"]} />
      </div>
      <div className={styles["itemContent"]}>
        <h2>{title}</h2>
        <p>{transformedDescription}...</p>
        <p className={styles["itemDate"]}>
          <DateIcon className="icon" />
          {transformedDate}
        </p>
        <address className={styles["itemAddress"]}>
          <AddressIcon className="icon" />
          {location}
        </address>
        <div>
          <Button href={`/events/${id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
