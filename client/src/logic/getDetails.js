import { get } from "./fetch";

export const getBooks = async () => {
  return await get("/library/getbooks");
}

export const getNotesDetails = async (payload) => {
  return await get(`/bookreview?bookTitle=${payload.title}`);
}

export const getFavouriteNotes = async (payload) => {
  return await get(`/favourite`);
}

export const getMasteryNotes = async (payload) => {
  return await get(`/mastery`);
}