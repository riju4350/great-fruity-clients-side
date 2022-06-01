// import React, { useState, useEffect } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import Item from "../../Home/Item/Item";
import "./Inventories.css";
import useInventories from "../../Hooks/useInventories";
// groceryProduct.json
const Inventories = () => {
  const [items, setItems] = useInventories();
  // useEffect(() => {
  //   fetch("https://murmuring-falls-31559.herokuapp.com/inventories")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, []);
  return (
    <div>
      <h1 className="text-center my-5">My All Items</h1>

      <Container className="itemCards">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </Container>
    </div>
  );
};

export default Inventories;
