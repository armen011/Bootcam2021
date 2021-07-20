import "./input.css";
export default function Input(props) {
  const text = props.text;
  const type = props.type;
  const metod = props.metod;
  const value = props.value;

  return (
    <label>
      {text}
      <br />
      <input
        type="text"
        min="0"
        placeholder={text}
        className={type}
        value={value}
        onChange={(e) => metod(e.target.value)}
      />
    </label>
  );
}
