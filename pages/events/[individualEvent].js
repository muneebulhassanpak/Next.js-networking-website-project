import React from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import EventContent from "@/components/event-detail/event-content";

const IndividualEvent = () => {
  const { query } = useRouter();
  const eventId = query.individualEvent;
  const event = getEventById(eventId);
  if (!event) return;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default IndividualEvent;
