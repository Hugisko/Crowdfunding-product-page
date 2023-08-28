import "./button.css";

const Button = ({ title, handleBtn }) => {
  return (
    <button className="btn" onClick={handleBtn}>
      {title}
    </button>
  );
};

export default Button;
