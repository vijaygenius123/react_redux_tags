import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
