export const DOLLAR_TO_PESO = (amount, dollarValue) => {
  return {
    type: "DOLLAR_TO_PESO",
    payload: { amount, dollarValue },
  };
};

export const PESO_TO_DOLLAR = (amount, dollarValue) => {
  return {
    type: "PESO_TO_DOLLAR",
    payload: { amount, dollarValue },
  };
};
export const DEFAULT = (amount, dollarValue) => {
  return {
    type: "DEFAULT",
    payload: { amount, dollarValue },
  };
};

export const SET_INPUT_AMOUNT = (inputAmount) => {
  return {
    type: "SET_INPUT_AMOUNT",
    payload: inputAmount,
  };
};

export const SET_BASE_COIN = (coinBaseValue) => {
  return {
    type: "SET_BASE_COIN",
    payload: coinBaseValue,
  };
};

export const SET_COIN_TO_CONVERT = (coinToConvertValue) => {
  return {
    type: "SET_COIN_TO_CONVERT",
    payload: coinToConvertValue,
  };
};

export const SET_FETCH_DATA = (fetchData) => {
  return {
    type: "SET_FETCH_DATA",
    payload: fetchData,
  };
};
