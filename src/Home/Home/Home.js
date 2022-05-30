import React from "react";
import Banner from "../Banner/Banner";
import Favorite from "../Favorites/Favorite";
import GetOffer from "../GetOffer/GetOffer";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GetOffer></GetOffer>
      <Inventory></Inventory>
      <Favorite></Favorite>
    </div>
  );
};

export default Home;
