import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { image, name, quantity, price, description, supplier_name } = item;

  const [itemQuantity, setItemQuantity] = useState(15);
  // console.log(itemQuantity);
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  // restock input field
  const stockRef = useRef();
  const handleRestock = (e) => {
    e.preventDefault();
    let stock = stockRef.current.value;
    stockRef.current.value = " ";
    console.log(stock);
    setItemQuantity(itemQuantity + Number(stock));
  };

  return (
    <div className="itemDetails">
      <div>
        <Card className="shadow">
          <Card.Img variant="top" src={image} className="itemImg" />
          <Card.Body>
            <Card.Title className="itemTitle">{name}</Card.Title>
            <Card.Text className="itemText">Quantity: {itemQuantity}</Card.Text>
            {/*itemQuantity change hobe*/}
            <Card.Text className="itemText">Price: ${price}</Card.Text>
            <Card.Text className="itemText">
              Supplier Name: {supplier_name}
            </Card.Text>
            <Card.Text className="itemText">
              Description: {description}
            </Card.Text>
            <div className="d-flex justify-content-center">
              <button
                className="cardBtn"
                onClick={() => setItemQuantity(itemQuantity - 1)}
              >
                Delivered
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* Restock Input Field */}
      <div>
        <h1 className="text-center mt-5 mb-3">Restock The Items</h1>
        <div className=" d-flex justify-content-center mb-5">
          <div>
            <form onSubmit={handleRestock} className="d-flex">
              <input
                className="inputStyle"
                type="number"
                ref={stockRef}
                placeholder="add to stock"
              />
              <input type="submit" className="cardBtn" value="Add" />
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <Link to="/manage">
            <button className="inventoryBtn">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

// import React, { useState } from "react";

// const ItemDetails = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div id="mainArea">
//       button count: <span>{count}</span>
//       <button
//         id="mainButton"
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default ItemDetails;

// import React, { useEffect, useRef, useState } from "react";
// import { Card } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import "./ItemDetails.css";

// const ItemDetails = () => {
//   const { id } = useParams(); // useParam er {id} ta app.js er route er /inventory/:id er ":id" er      shathe match hote hobe.
//   const [item, setItem] = useState({});
//   const { image, name, quantity, price, description, supplier_name } = item;

//   const [itemQuantity, setItemQuantity] = useState(0);
//   setItemQuantity(quantity);

//   useEffect(() => {
//     const url = `http://localhost:5000/inventory/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//   }, [id]);

//   // restock input field
//   const stockRef = useRef();
//   const handleRestock = (e) => {
//     e.preventDefault();
//     let stock = stockRef.current.value;
//     console.log(stock);
//     stockRef.current.value = 0;
//   };

//   return (
//     <div>
//       <div className="w-25 m-5 mx-auto">
//         <Card className="shadow">
//           <Card.Img variant="top" src={image} className="itemImg" />
//           <Card.Body>
//             <Card.Title className="itemTitle">{name}</Card.Title>
//             <Card.Text className="itemText">Quantity: {itemQuantity}</Card.Text>
//             {/*itemQuantity change hobe*/}
//             <Card.Text className="itemText">Price: ${price}</Card.Text>
//             <Card.Text className="itemText">
//               Supplier Name: {supplier_name}
//             </Card.Text>
//             <Card.Text className="itemText">
//               Description: {description}
//             </Card.Text>
//             <div className="d-flex justify-content-center">
//               <button
//                 className="cardBtn"
//                 onClick={() => console.log(quantity - 1)}
//               >
//                 Delivered
//               </button>
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//       {/* Restock Input Field */}
//       <h1 className="text-center mt-5 mb-3">Restock The Items</h1>
//       <div className=" d-flex justify-content-center mb-5">
//         <div>
//           <form onSubmit={handleRestock} className="d-flex">
//             <input
//               className="inputStyle"
//               type="number"
//               ref={stockRef}
//               placeholder="add to stock"
//             />
//             <input type="submit" className="cardBtn" value="Add" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetails;
