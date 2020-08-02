import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie, sellCookie } from "../redux";

const CookieContainer = () => {
  const numOfCookies = useSelector(state => state.cookie.numOfCookies)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cookies - {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>Buy Cookie</button>
      <button onClick={() => dispatch(sellCookie())}>Sell Cookie</button>
    </div>
  );
};

export default CookieContainer;
