const getBeersListSelector = (beersList, { searchterm }) => {
  return beersList.filter((beer) => {
    return beer.name.toLowerCase().includes(searchterm.toLowerCase());
  });
};

export default getBeersListSelector;
