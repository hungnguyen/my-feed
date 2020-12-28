const initState = {
  data: [
    {
      id: "business",
      name: "Business",
    },
    {
      id: "entertainment",
      name: "Entertainment",
    },
    {
      id: "general",
      name: "General",
    },
    {
      id: "health",
      name: "Health",
    },
    {
      id: "science",
      name: "Science",
    },
    {
      id: "sports",
      name: "Sports",
    },
    {
      id: "technology",
      name: "Technology",
    },
  ],
};

const categories = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categories;
