import {combineReducers, createStore} from "redux";
import storesReducer from "./store-reducers";
import gamesReducer from "./games-reducer";
import dealsReducer from "./deals-reducer";

const reducers = combineReducers({
    storesPage: storesReducer,
    gamesPage: gamesReducer,
    dealsPage: dealsReducer,
})

const store = createStore(reducers)

export default store