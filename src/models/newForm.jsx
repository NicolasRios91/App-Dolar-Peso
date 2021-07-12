import React, { useState, useEffect } from "react";
import Input from "./input";
const NewForm = ({ dolarValue }) => {
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState("Pesos Argentinos");
  const [cointToConvert, setCoinToConvert] = useState("USD");
  const [amountConverted, setAmountConverted] = useState(0);

  useEffect(() => {
    let parsedDollarValue = parseFloat(dolarValue);
    coin === "Pesos Argentinos" && cointToConvert === "USD"
      ? setAmountConverted((amount / parsedDollarValue).toFixed(2) + " $")
      : coin === "USD" && cointToConvert === "Pesos Argentinos"
      ? setAmountConverted((amount * parsedDollarValue).toFixed(2) + " $")
      : setAmountConverted(amount + " $");
  }, [amount, coin, cointToConvert, dolarValue]);
  return (
    <>
      <div className="three-blocks">
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            Cantidad
          </label>
          <Input setter={setAmount}></Input>
        </div>
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            De:
          </label>
          <select
            name="coin"
            id=""
            onChange={(e) => setCoin(e.target.value)}
            defaultValue="Pesos Argentinos"
          >
            <option value="Pesos Argentinos">Peso Argentino</option>
            <option value="USD">Dolar Estadounidense</option>
          </select>
        </div>
        <div className="label-value-pair">
          <label htmlFor="" className="label-left">
            Convertir a:
          </label>
          <select
            name="coinToConvert"
            id=""
            defaultValue="USD"
            onChange={(e) => setCoinToConvert(e.target.value)}
          >
            <option value="Pesos Argentinos">Peso Argentino</option>
            <option value="USD">Dolar Estadounidense</option>
          </select>
        </div>
      </div>
      <div className="label-value-pair" id="total-value">
        <label htmlFor="" className="label-left">
          Total
        </label>

        <input type="text" readOnly defaultValue="0" value={amountConverted} />
      </div>
    </>
  );
};

export default NewForm;
