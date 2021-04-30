import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./screens/Login";
import AddAdmin from "./screens/AddAdmin";
import UserDetails from "./screens/UserDetails";
import AdminAccount from "./screens/AdminAccount";
import DriverDetails from "./screens/DriverDetails";
import Dashboard from "./screens/Dashboard";
const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <h1>React Application</h1>
      <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/driver" component={DriverDetails}/>
      <Route path="/user" component={UserDetails}/>
      <Route path="/addadmin" component={AddAdmin}/>
      <Route path="/adminacc" component={AdminAccount }/>
      <Route path="/dashboard" component={Dashboard}/>
      {/* <Redirect from="/" to="welcome" />  */}
    </Switch>
  </Router>
    </div>
  );
}

export default App;
