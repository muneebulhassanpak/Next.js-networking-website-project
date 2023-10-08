import React from "react";
import Eventlist from "@/components/events/event-list";

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
  const response = await fetch(
    "https://next-js-blog-app-with-max-default-rtdb.firebaseio.com/blogs.json"
  );
  const data = await response.json();
  const transformedData = [];
  for (const key in data) {
    if (data[key].isFeatured == true) {
      transformedData.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        date: data[key].date,
        location: data[key].location,
        isFeatured: data[key].isFeatured,
        image: data[key].image,
      });
    }
  }
  return {
    props: {
      events: transformedData,
    },
  };
}
