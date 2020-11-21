import beers from "data/beerslist.json";

const beersListReducer = (state = beers, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default beersListReducer;
