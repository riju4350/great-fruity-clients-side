import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  const { _id, name, image, quantity, price, supplier_name, description } =
    item;
  const navigate = useNavigate();
  const navigateToItemDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <>
      <Card className="shadow">
        <Card.Img variant="top" src={image} className="itemImg" />
        <Card.Body>
          <Card.Title className="itemTitle">{name}</Card.Title>
          <Card.Text className="itemText">Quantity: {quantity}</Card.Text>
          <Card.Text className="itemText">Price: ${price}</Card.Text>
          <Card.Text className="itemText">
            Supplier Name:{supplier_name}
          </Card.Text>
          <Card.Text className="itemText">Description: {description}</Card.Text>
          <div className="d-flex justify-content-center">
            <button
              className="cardBtn"
              onClick={() => navigateToItemDetails(_id)}
            >
              Update
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
