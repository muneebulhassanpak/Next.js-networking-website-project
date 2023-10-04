import React from "react";

import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import Eventlist from "@/components/events/event-list";
import Button from "@/components/ui/button";

const FilteredEvents = () => {
  const router = useRouter();
  let events = getAllEvents();

  const { filteredEvents } = router.query;

  if (!filteredEvents) {
    return (
      <section>
        <p className="message">Loading</p>;
      </section>
    );
  }

  const year = +filteredEvents[0];
  const month = +filteredEvents[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2022 ||
    year < 2021 ||
    month > 11 ||
    month < 0
  ) {
    return (
      <section>
        <p className="message"> Incorrect parameters, please adjust them</p>;
        <Button href="/events">All Events</Button>
      </section>
    );
  }

  const NarrowedEvents = events.filter((event) => {
    const constructedDate = new Date(event.date);
    return (
      constructedDate.getFullYear() == parseInt(year) &&
      constructedDate.getMonth() == parseInt(month)
    );
  });

  return <Eventlist items={NarrowedEvents} />;
};

export default FilteredEvents;
