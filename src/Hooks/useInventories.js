import { useEffect, useState } from "react";

const useInventories = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventories") //"https://thawing-mountain-91486.herokuapp.com/service"
      //url change hobe
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return [items, setitems];
};

export default useInventories;
