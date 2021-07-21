import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import { ShowUsers } from "./Components/ShowUsers/ShowUsers";
import { Router } from "./router";
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
