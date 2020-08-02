import { BUY_COOKIE, SELL_COOKIE } from "./cookieTypes";

const initialState = {
  numOfCookies: 100,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - 1,
      };
    case SELL_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies + 1
      }
    default:
      return state;
  }
};

export default cookieReducer;
