const searchReducer = (
  state = {
    searchterm: "",
  },
  action
) => {
  switch (action.type) {
    case "SEARCH_FOR_BEER":
      return {
        ...state,
        searchterm: action.searchterm,
      };
    default:
      return state;
  }
};

export default searchReducer;
