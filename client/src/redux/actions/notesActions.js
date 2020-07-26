import { TOGGLE_FAVOURITE_NOTE, SET_BOOK_LIST} from "../actionTypes"

export const toggleFavouriteNote = note => {
  return {
    type: TOGGLE_FAVOURITE_NOTE,
    payload: note
  }
}

export const setBookList = books => {
  return {
    type: SET_BOOK_LIST,
    payload: books
  }
}