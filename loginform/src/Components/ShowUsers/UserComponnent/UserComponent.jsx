import "./usercomponent.css";
export default function (props) {
  const data = props.data;
  return (
    <ul className="user">
      <li>{data.name}</li>
      <li>{data.surname}</li>
      <li>{data.phone}</li>
      <li>{data.email}</li>
    </ul>
  );
}
