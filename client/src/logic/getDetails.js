import { get } from "./fetch";

export const getBooks = async () => {
  return await get("/library/getbooks");
}

export const getNotesDetails = async (payload) => {
  return await get(`/bookreview?bookTitle=${payload.title}`);
}

export const getFavouriteFlag = async (payload) => {
  return await get(`/favourite?id=${payload.id}`);
}