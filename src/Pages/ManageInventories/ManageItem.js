import React from "react";
import "./ManageItem.css";
import { Card } from "react-bootstrap";
const ManageItem = ({ item }) => {
  const { name, img, description, quantity, price } = item;
  return (
    <div>
      <Card className="shadow">
        <Card.Img variant="top" src={img} className="itemImg" />
        <Card.Body>
          <Card.Title className="itemTitle">{name}</Card.Title>
          <Card.Text className="itemText">Description: {description}</Card.Text>
          <Card.Text className="itemText">Quantity: ${quantity}</Card.Text>
          <Card.Text className="itemText">Price: ${price}</Card.Text>
          {/* <div className="d-flex justify-content-center">
            <button className="cardBtn" onClick={() => handleDelete(_id)}>
              Delete
            </button>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageItem;
