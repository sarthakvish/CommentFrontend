import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {commentCreateReducer, commentDeleteReducer, commentsListReducer} from "./reducers/commentsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  commentsReducer: commentsListReducer,
  commentCreate: commentCreateReducer,
  commentDelete: commentDeleteReducer,
});



const initialState = {
};

const allEnhancers = compose(
  applyMiddleware(/*reduxPromise,*/ thunk)
  //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(allEnhancers)
);
