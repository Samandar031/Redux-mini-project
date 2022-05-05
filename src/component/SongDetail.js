import React from "react";

class SongDetail extends React.Component {
  render() {
    return <div>SongDetail</div>;
  }
}

export default SongDetail;

class SongDetail extends React.Component {
  constructor(props, obj) {
    super(props);
    this.obj = obj;
  }
}
