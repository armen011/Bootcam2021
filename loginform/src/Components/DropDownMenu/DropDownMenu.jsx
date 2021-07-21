export default function DropDownMenu(props) {
  const countries = require("../helper/JSONS/countryCode.json");
  const metod = props.metod;
  return (
    <div>
      <select onChange={(e) => metod(e.target.value)}>
        {countries.map((elm, index) => {
          return (
            <option value={elm.dial_code} key={index}>
              {elm.code}
            </option>
          );
        })}
        <option value="male"> Male </option>
      </select>
    </div>
  );
}
