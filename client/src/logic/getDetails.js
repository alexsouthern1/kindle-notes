import { get } from "./fetch";

export const getBooks = async () => {
  return await get("/library/getBooks");
}