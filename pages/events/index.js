import React, { useState } from "react";
import { useRouter } from "next/router";

import { fetchStaticData } from "@/utils/data-extraction";
import Eventlist from "@/components/events/event-list";
import EventFilter from "@/components/event-filter/EventFilter";

const Events = (props) => {
  let events = props.events;
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

export async function getStaticProps() {
  const filter = "all";
  const transformedData = await fetchStaticData(filter);
  console.log(transformedData);
  return {
    props: {
      events: transformedData,
    },
  };
}
