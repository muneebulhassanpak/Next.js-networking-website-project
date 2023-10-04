import React from "react";
import styles from "./event-list.module.css";
import EventItem from "./eventItem";
import Button from "../ui/button";
import MessageModal from "../MessageModal/MessageModal";

const Eventlist = ({ items }) => {
  return (
    <section className={styles["events-section"]}>
      <ul>
        {items.length == 0 && (
          <MessageModal>
            <p className="message">😕 No events to show</p>
            <Button href="/events">All Events</Button>
          </MessageModal>
        )}
        {items.length > 0 &&
          items.map((item) => (
            <EventItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              date={item.date}
              image={item.image}
              altText={item.title}
            />
          ))}
      </ul>
    </section>
  );
};

export default Eventlist;
