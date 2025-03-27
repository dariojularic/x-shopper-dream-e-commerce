import "./Button.css"

interface ButtonProps {
  value: string;
  type: string;
  handleClick: () => void;
}

function Button({value, type, handleClick}: ButtonProps) {
  return <button className={`btn ${type}`} onClick={handleClick}>{value}</button>
}

export default Button;
