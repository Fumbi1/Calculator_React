const Number = ({ click, digit,  style }) => {
  const Styles = {
    color: "#EADACC"
  };


  return (
    <div onClick={click} className={style}>
      <p style={Styles}>{digit}</p>
    </div>
  );
};

export default Number;
