import Input from "./input";
const Exchange = ({ coin, coinSetter, coinToConvert, coinToConvertValue }) => {
  return (
    <>
      <div className="input-values">
        <label className="form-label" htmlFor="">
          {coin}
        </label>
        <Input setter={coinSetter} />
      </div>

      <div className="input-values">
        <label className="form-label-convert" htmlFor="">
          {coinToConvert}
        </label>
        <input
          type="text"
          className="form-readonly"
          value={coinToConvertValue}
          readOnly
        />
      </div>
    </>
  );
};
export default Exchange;
