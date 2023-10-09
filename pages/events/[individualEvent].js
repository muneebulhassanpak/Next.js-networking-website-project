import React from "react";

import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import EventContent from "@/components/event-detail/event-content";
import { fetchStaticData } from "@/utils/data-extraction";

const IndividualEvent = (props) => {
  const event = props.event;
  if (!event) return <p className="message">Loading</p>;
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

export async function getStaticProps(context) {
  const { params } = context;
  const blogId = params.individualEvent;
  const filter = "one";
  const transformedData = await fetchStaticData(filter, blogId);
  console.log(transformedData);
  return {
    props: {
      event: transformedData[0],
    },
    revalidate: 7200,
   
  };
}

export async function getStaticPaths() {
  const filter = "one";
  const transformedData = await fetchStaticData(filter);
  const keys = transformedData.map((item) => ({
    params: { individualEvent: item.id },
  }));

  return {
    paths: keys,
    fallback: false,
  };
}
