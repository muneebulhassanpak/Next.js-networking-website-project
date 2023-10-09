import React from "react";
import Eventlist from "@/components/events/event-list";
import { fetchStaticData } from "@/utils/data-extraction";

const FeaturedEvents = (props) => {
  const events = props.events;
  return (
    <>
      <Eventlist items={events} />
    </>
  );
};

export default FeaturedEvents;

export async function getStaticProps() {
  const filter = "featured";
  const transformedData = await fetchStaticData(filter);
  return {
    props: {
      events: transformedData,
    },
    revalidate: 43200,
  };
}
