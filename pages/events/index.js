import React, { useState } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import Eventlist from "@/components/events/event-list";
import EventFilter from "@/components/event-filter/EventFilter";

const Events = () => {
  let events = getAllEvents();
  const router = useRouter();
  const getSearchParameters = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventFilter onSearch={getSearchParameters} />
      <Eventlist items={events} />
    </>
  );
};

export default Events;
