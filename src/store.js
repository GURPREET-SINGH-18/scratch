import { applyMiddleware } from "redux";
import {createStore} from "redux"
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
