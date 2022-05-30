import React from "react";
import { Card } from "react-bootstrap";
import "./FavCard.css";
const FavCard = ({ favorite }) => {
  const { name, image, price } = favorite;
  return (
    <>
      <Card className="shadow">
        <Card.Img variant="top" src={image} className="itemImg" />
        <Card.Body>
          <Card.Title className="itemTitle">{name}</Card.Title>
          <Card.Text className="itemText">Price: ${price}</Card.Text>
          <div className="d-flex justify-content-center">
            <button className="cardBtn">See more</button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default FavCard;
