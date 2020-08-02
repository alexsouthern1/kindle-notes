import { BUY_COOKIE, SELL_COOKIE } from "./cookieTypes";


export const buyCookie = () => {
  return {
    type: BUY_COOKIE,
  };
};

export const sellCookie = () => {
  return {
    type: SELL_COOKIE
  }
}
