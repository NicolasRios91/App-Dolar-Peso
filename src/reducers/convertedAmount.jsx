const convertedAmountReducer = (state = 0, action) => {
  switch (action.type) {
    case "DOLLAR_TO_PESO":
      return (
        (action.payload.amount * action.payload.dollarValue).toFixed(2) + " $"
      );
    case "PESO_TO_DOLLAR":
      return (
        (action.payload.amount / action.payload.dollarValue).toFixed(2) + " $"
      );
    case "DEFAULT":
      return action.payload.amount + " $";
    default:
      return state + " $";
  }
};

export default convertedAmountReducer;
