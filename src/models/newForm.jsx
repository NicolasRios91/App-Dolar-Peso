import React, { useEffect } from "react";
import {
  DOLLAR_TO_PESO,
  PESO_TO_DOLLAR,
  DEFAULT,
  SET_INPUT_AMOUNT,
  SET_BASE_COIN,
  SET_COIN_TO_CONVERT,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";

const NewForm = () => {
  const fetchData = useSelector((state) => state.dataReducer);
  const inputAmount = useSelector((state) => state.inputAmountReducer);
  const coinBase = useSelector((state) => state.coinBaseReducer);
  const coinToConvert = useSelector((state) => state.coinToConvertReducer);
  const convertedAmountReducer = useSelector(
    (state) => state.convertedAmountReducer
  );
  const dispatch = useDispatch();
  const parsedDollarValue = parseFloat(fetchData[1].casa.venta);

  useEffect(() => {
    coinBase === "Pesos Argentinos" && coinToConvert === "USD"
      ? dispatch(PESO_TO_DOLLAR(inputAmount, parsedDollarValue)) //setAmountConverted((amount / parsedDollarValue).toFixed(2) + " $")
      : coinBase === "USD" && coinToConvert === "Pesos Argentinos"
      ? dispatch(DOLLAR_TO_PESO(inputAmount, parsedDollarValue)) //   ? setAmountConverted((amount * parsedDollarValue).toFixed(2) + " $")
      : dispatch(DEFAULT(inputAmount, parsedDollarValue));
  }, [inputAmount, coinBase, coinToConvert, fetchData[1].casa.venta]);

  return (
    <>
      <div className="three-blocks">
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            Quantity
          </label>
          <input
            type="text"
            onChange={(e) => dispatch(SET_INPUT_AMOUNT(e.target.value))}
            placeholder="insert amount"
          />
        </div>
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            From:
          </label>
          <select
            name="coin"
            id=""
            onChange={(e) => dispatch(SET_BASE_COIN(e.target.value))}
            defaultValue="Pesos Argentinos"
          >
            <option value="Pesos Argentinos">Peso Argentino</option>
            <option value="USD">US Dollar</option>
          </select>
        </div>
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            Convert to:
          </label>
          <select
            name="coinToConvert"
            id=""
            defaultValue="USD"
            onChange={(e) => dispatch(SET_COIN_TO_CONVERT(e.target.value))}
          >
            <option value="Pesos Argentinos">Peso Argentino</option>
            <option value="USD">US Dollar</option>
          </select>
        </div>
      </div>
      <div className="label-value-pair" id="total-value">
        <label htmlFor="" className="label-left">
          Total
        </label>

        <input
          type="text"
          readOnly
          defaultValue="0"
          value={convertedAmountReducer}
        />
      </div>
    </>
  );
};

export default NewForm;
