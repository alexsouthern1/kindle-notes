import { TOGGLE_FAVOURITE_NOTE, SET_BOOK_LIST, SET_BOOK_REVIEW} from "../actionTypes"

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

export const setBookReview = bookReviewDetails => {  
  return {
    type: SET_BOOK_REVIEW,
    payload: bookReviewDetails
  }
}