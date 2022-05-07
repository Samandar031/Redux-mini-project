// import { connect } from "react-redux";

const songListReducers = (history = [], data) => {
  return [
    { name: "Uzbek", time: "2:22", authhor: "Ibragimov" },
    { name: "Tajik", time: "2:42", authhor: "Yoldoshev" },
    { name: "Rus", time: "2:12", authhor: "Chagayev" },
    { name: "Usa", time: "2:42", authhor: "Hotamov" },
  ];
};

export default songListReducers;
