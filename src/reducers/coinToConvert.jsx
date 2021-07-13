const coinToConvertReducer = (state = "USD", action) => {
  switch (action.type) {
    case "SET_COIN_TO_CONVERT":
      return action.payload;
    default:
      return state;
  }
};

export default coinToConvertReducer;
