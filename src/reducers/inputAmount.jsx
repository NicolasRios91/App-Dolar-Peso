const inputAmountReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_INPUT_AMOUNT":
      return (state = action.payload);
    default:
      return state;
  }
};

export default inputAmountReducer;
