// import React, { useEffect, useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import FavCard from "./FavCard/FavCard";
import "./Favorite.css";
import useInventories from "../../Hooks/useInventories";

const Favorite = () => {
  const [items, setItems] = useInventories();
  const favorites = items.slice(4, 8);

  // useEffect(() => {
  //   fetch("https://murmuring-falls-31559.herokuapp.com/inventories")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, []);
  return (
    <div id="favorites" className="mb-5">
      <h1 className="text-center my-5">Favorite Among Custormers</h1>
      <Container className="favCards">
        {favorites.map((favorite) => (
          <FavCard key={favorite._id} favorite={favorite}></FavCard>
        ))}
      </Container>
    </div>
  );
};

export default Favorite;
