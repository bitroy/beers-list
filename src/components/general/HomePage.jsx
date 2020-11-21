import React from "react";
import BeersList from "../beers/BeersList";
import AppNavBar from "../search/AppNavBar";

const HomePage = () => {
  return (
    <>
      <AppNavBar />
      <BeersList />
    </>
  );
};

export default HomePage;
