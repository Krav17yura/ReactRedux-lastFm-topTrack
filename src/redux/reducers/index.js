import {combineReducers} from "redux";
import reMain from "./reMain";
import reArtist from "./reArtist";
import reSearch from "./reSearch";



const rootReducer = combineReducers({
    reMain,
    reArtist,
    reSearch
})

export default rootReducer