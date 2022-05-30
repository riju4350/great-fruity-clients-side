import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
  const [item, setitem] = useState({});

  useEffect(() => {
    const url = `https://thawing-mountain-91486.herokuapp.com/item/${itemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setitem(data));
  }, [itemId]);
  return [item];
};

export default useItemDetails;
