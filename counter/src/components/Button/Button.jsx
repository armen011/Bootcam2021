import "./button.css";
export default function Button(props) {
  const bool = props.disable;
  const text = props.text;
  const type = bool ? "disabled" : props.type;
  return (
    <button className={type} onClick={props.metod} disabled={props.disable}>
      {text}
    </button>
  );
}
