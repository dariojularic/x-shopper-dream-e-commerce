import "./Button.css"

function Button({value, type}) {
  return <button className={`btn ${type}`}>{value}</button>
}

export default Button;
