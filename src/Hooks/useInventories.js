import { useEffect, useState } from "react";

const useInventories = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-falls-31559.herokuapp.com/inventories") //"https://thawing-mountain-91486.herokuapp.com/service"
      //url change hobe
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return [items, setitems];
};

export default useInventories;
