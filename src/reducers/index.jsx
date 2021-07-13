import convertedAmountReducer from "./convertedAmount";
import coinBaseReducer from "./coinBase";
import coinToConvertReducer from "./coinToConvert";
import inputAmountReducer from "./inputAmount";
import dataReducer from "./data";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  convertedAmountReducer: convertedAmountReducer,
  coinBaseReducer: coinBaseReducer,
  coinToConvertReducer: coinToConvertReducer,
  inputAmountReducer: inputAmountReducer,
  dataReducer: dataReducer,
});

export default allReducers;
