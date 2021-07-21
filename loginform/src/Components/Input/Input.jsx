import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./input.css";
export default function Login(props) {
  const type = props.flagPath != "" ? props.type + " globalInput" : "custom";
  const placeholder = props.text;
  const value = props.value;
  const metod = props.metod;
  const hidden = props.hidden ? "password" : "text";
  const err = props.err;
  const msg =
    value != "" && err === "" ? (
      <i className="fas fa-check "></i>
    ) : (
      <span>{err}</span>
    );
  const flagPath = props.flagPath != "" ? props.flagPath : "";
  const dropDownMenu =
    flagPath == "" ? (
      <DropDownMenu metod={metod} />
    ) : props.flagPath ? (
      <img src={flagPath} />
    ) : (
      ""
    );
  return (
    <div className={type}>
      <input
        type={hidden}
        placeholder={placeholder}
        value={value}
        onChange={(e) => metod(e.target.value)}
      />
      {dropDownMenu}
      {msg}
    </div>
  );
}
