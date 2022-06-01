import React from "react";
import useInventories from "../../Hooks/useInventories";
// import ManageItem from "./ManageItem";
import { Link } from "react-router-dom";
// import img from "../../images/carrot.png";

const ManageInventories = () => {
  const [items, setItems] = useInventories();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://murmuring-falls-31559.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center my-5">Manage Inventories</h1>
      <div className="row">
        {items.map((item) => (
          // <ManageItem key={item._id} item={item}></ManageItem>
          <div
            className="col-sm-12 col-md-6 col-lg-4  p-4 border "
            key={item._id}
          >
            <img src={item.image} style={{ width: "100%" }} alt="" />
            <h2>{item.name}</h2>
            <h5>Description: {item.description}</h5>
            <h5>Price: ${item.price}</h5>
            <button
              className="cardBtn"
              style={{ background: "red" }}
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/add">
          <button className="cardBtn" style={{ margin: "50px 0" }}>
            Add New Items
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;

/*
<div key={item._id}>
  <h5>
  {item.name}{" "}
  <button onClick={() => handleDelete(item._id)}>X</button>
  </h5>
</div>
*/
