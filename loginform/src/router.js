import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import { ShowUsers } from "./Components/ShowUsers/ShowUsers";

export function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginForm} />
      <Route path="/users" component={ShowUsers} />
    </BrowserRouter>
  );
}
