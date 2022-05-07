import React from "react";

import { connect } from "react-redux";

class SongDetail extends React.Component {
  constructor(props, obj) {
    super(props);
    this.obj = obj;
  }

  render() {
    return <div>SongDetail</div>;
  }
}

const getMyState = (state) => {
  return state;
};

export default connect(getMyState)(SongDetail);
