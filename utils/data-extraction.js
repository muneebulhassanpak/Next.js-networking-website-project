const featuredDataFinder = (data) => {
  const transformedData = data.filter((item) => item.isFeatured === true);
  return transformedData;
};

const individualEventFinder = (data, blogId) => {
  return data.filter((item) => item.id == blogId);
};

export const fetchStaticData = async (filter, blogId = "test") => {
  const response = await fetch(
    "https://next-js-blog-app-with-max-default-rtdb.firebaseio.com/blogs.json"
  );
  let data = await response.json();
  let transformedData = [];
  for (const key in data) {
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
  if (filter == "featured") {
    return featuredDataFinder(transformedData);
  } else if (filter == "all" || filter == "keys") {
    return transformedData;
  } else if (filter == "one" && blogId == "test") {
    return transformedData;
  } else if (filter == "one" && blogId != "test") {
    return individualEventFinder(transformedData, blogId);
  }
};
