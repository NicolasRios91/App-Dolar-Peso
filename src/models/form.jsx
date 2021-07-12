import React, { useState, useEffect } from "react";
import Exchange from "./exchange";
const Form = ({ dolarValue }) => {
  const [pesos, setPesos] = useState(0);
  const [pesosToDollars, setpesosToDollars] = useState(0);
  const [dollars, setDollars] = useState(0);
  const [dollarsToPesos, setDollarsToPesos] = useState(0);

  useEffect(() => {
    let parsedDollarValue = parseFloat(dolarValue);

    pesos === ""
      ? setpesosToDollars(0)
      : setpesosToDollars(parseFloat(pesos / parsedDollarValue).toFixed(2));
    dollars === ""
      ? setDollarsToPesos(0)
      : setDollarsToPesos(parseFloat(dollars * parsedDollarValue).toFixed(2));
  }, [pesos, dollars, dolarValue]);

  return (
    <>
      <div className="app-form">
        <Exchange
          coin="Convertir Pesos"
          coinSetter={setPesos}
          coinToConvert="Dolares"
          coinToConvertValue={pesosToDollars}
        ></Exchange>
      </div>
      <div className="app-form">
        <Exchange
          coin="Convertir Dolares"
          coinSetter={setDollars}
          coinToConvert="Pesos"
          coinToConvertValue={dollarsToPesos}
        ></Exchange>
      </div>
    </>
  );
};

export default Form;
