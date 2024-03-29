const Operators = ({ click, operand, style, disabled }) => {
  const Styles = {
    color: "#0818A8",
    fontWeight: "bold",
  };


  return (
    <button onClick={click} className={style} disabled={disabled}>
      <p style={Styles}>{operand}</p>
    </button>
  );
};
export default Operators;
