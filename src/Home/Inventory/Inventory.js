import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./Inventory.css";
import useInventories from "../../Hooks/useInventories";
const Inventory = () => {
  const [items, setItems] = useInventories();
  const items6 = items.slice(0, 6);
  return (
    <div id="inventory">
      <h1 className="text-center my-5">Inventory</h1>

      <Container className="itemCards">
        {items6.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </Container>
      <div className="d-flex justify-content-center my-5">
        <Link to="/manage">
          <button className="inventoryBtn">Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
