const sellectSongReducers = (history = [], data) => {
  if (data.type == "Selected") {
    return (history = data.payload);
  }
  return history;
};

export default sellectSongReducers;
