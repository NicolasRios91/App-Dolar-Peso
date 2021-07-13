const coinBaseReducer = (state = "Pesos Argentinos", action) => {
  switch (action.type) {
    case "SET_BASE_COIN":
      return action.payload;
    default:
      return state;
  }
};

export default coinBaseReducer;
