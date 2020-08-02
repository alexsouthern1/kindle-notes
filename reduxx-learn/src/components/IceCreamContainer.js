import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux"

const IceCreamContainer = () => {
  const numOfIceCreams  = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  );
};

export default IceCreamContainer;
