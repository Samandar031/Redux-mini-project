import { combineReducers } from "redux";
import sellectSongReducers from "./sellectSongReducers.js";
import songListReducers from "./songListReducers";

// const songList = [
//   { name: "Uzbek", time: "2:22", authhor: "Ibragimov" },
//   { name: "Tajik", time: "2:42", authhor: "Yoldoshev" },
//   { name: "Rus", time: "2:12", authhor: "Chagayev" },
//   { name: "Usa", time: "2:42", authhor: "Hotamov" },
// ];

//

const allReducers = combineReducers({
  songListReducers,
  sellectSongReducers,
});

export default allReducers;
