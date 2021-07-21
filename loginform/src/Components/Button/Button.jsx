import "./button.css";
export default function Button(props) {
  const text = props.text;
  const type = props.type;
  const metod = props.metod;
  return (
    <button className={type} onClick={() => metod()} disabled={props.disabled}>
      {text}
    </button>
  );
}
