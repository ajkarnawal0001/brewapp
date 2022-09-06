
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { updateReducer } from "./Redux/reducer";

const rootReducer = combineReducers({
    updateReducer
})

const composedEnhancer =
 (typeof window !== "undefined" &&
         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
            compose;

const enhencer = composedEnhancer(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhencer);


