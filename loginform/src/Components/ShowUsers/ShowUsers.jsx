import UserComponent from "./UserComponnent/UserComponent";
import "./showUser.css";
import { Link } from "react-router-dom";
export function ShowUsers() {
  const users = JSON.parse(localStorage.users);
  return (
    <div className="userList">
      {users.map((elm, i) => {
        return <UserComponent data={elm} />;
      })}
      <Link to="/">Registation</Link>
    </div>
  );
}
