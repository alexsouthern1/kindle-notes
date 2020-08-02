import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // warn us if we accidently mutate state (it's a safety net)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
