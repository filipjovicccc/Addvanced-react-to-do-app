const Button = ({ fn, customClass, arrow }) => (
  <button onClick={fn} className={customClass}>
    <i className={arrow}></i>
  </button>
);
export default Button;
