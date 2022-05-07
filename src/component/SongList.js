import React from "react";
import selectSongAction from "../actions/actions";

import reactRedux, { connect } from "react-redux"; // provider bilan connect qilish uchun

const SongList = (props) => {
  console.log(props);
  const renderList = () => {
    return props.songListReducers.map((val) => {
      return (
        <div>
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <img
                  className="right floated mini ui image"
                  src="/images/avatar/large/elliot.jpg"
                />
                <div className="header">Elliot Fu</div>
                <div className="meta">Friends of Veronika</div>
                <div className="description">
                  Elliot requested permission to view your contact details
                </div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div
                    onClick={() => {
                      selectSongAction(val);
                    }}
                    className="ui basic green button"
                  >
                    Approve
                  </div>
                  <div className="ui basic red button">Decline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="ui cards container">{renderList()}</div>
    </div>
  );
};

const getMyState = (state) => {
  return state;
};

export default connect(getMyState)(SongList);

// const connectedA = (getMyState, {}) => {
//   return function (SongList) {
//     <SongList props=(getMyState(store.getState()))/>
//   };
// };

// export default reactRedux.connect;
