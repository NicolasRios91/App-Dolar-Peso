const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
