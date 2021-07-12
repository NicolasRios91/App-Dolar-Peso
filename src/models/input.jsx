const Input = ({ setter }) => {
  return (
    <input
      type="text"
      onChange={(e) => setter(e.target.value)}
      placeholder="insert amount"
    />
  );
};

export default Input;
