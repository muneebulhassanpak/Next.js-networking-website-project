import React from "react";
import Link from "next/link";
import { getFeaturedEvents } from "@/dummy-data";
import Eventlist from "@/components/events/event-list";

const FeaturedEvents = () => {
  const events = getFeaturedEvents();
  return (
    <>
      <Eventlist items={events} />
    </>
  );
};

export default FeaturedEvents;
