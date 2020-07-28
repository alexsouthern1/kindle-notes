import {
  TOGGLE_FAVOURITE_NOTE,
  SET_BOOK_LIST,
  SET_BOOK_REVIEW,
} from "../actionTypes";

const initialState = {
  notes: [],
  books: [],
  dailyNotes: [],
  favNotes: [],
  bookReview: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE_NOTE: {
      let favNotes = state.favNotes;
      // if fav notes contains note, then set value to opposite (could just say false)
      // o.w. add the note to the list
      favNotes.includes(action.payload)
        ? (favNotes = favNotes.filter((note) => note !== action.payload))
        : (favNotes = [...state.favNotes, action.payload]);
      return {
        ...state,
        favNotes,
      };
    }

    case SET_BOOK_LIST: {
      return {
        ...state,
        books: [action.payload],
      };
    }

    case SET_BOOK_REVIEW: {
      return {
        ...state,
        bookReview: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
