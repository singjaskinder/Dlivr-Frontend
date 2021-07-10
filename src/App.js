import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashBoard from "./screens/DashBoard";
import AdminAccount from "./screens/AdminAccount";
import UserAccount from "./screens/UserAccount";
import Tracking from "./screens/Tracking";
import Job from "./screens/Order";
import Vehicles from "./screens/Vehicles";
import Offer from "./screens/Offer";
import VehiclesData from "./screens/VehicleData";
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Notification from "./screens/Notification";
import CreateAdmin from "./screens/CreateAdmin";
import SupportListing from "./screens/SupportListing";
import SupportConversation from "./screens/SupportConversation";
import Login from "./screens/Login";
import DriverDetails from "./screens/DriverDetails";
import UserDetails from "./screens/UserDetails";
import AdminDetails from "./screens/AdminDetails";
import Drivers from "./screens/Drivers";
import Dashboard from "./screens/DashBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProtectedRoute({ path, component: Component, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("token"))
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        return <Component {...props} />;
      }}
    />
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        {/* <Navbar /> */}
        <Sidebar />
        <div className="main_div">
          <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute
              exact
              path="/adminAccount"
              component={AdminDetails}
            />
            <ProtectedRoute
              exacts
              path="/adminAccount/create"
              component={CreateAdmin}
            />
            <ProtectedRoute
              exact
              path="/adminAccount/:Adminid"
              component={AdminAccount}
            />
            <ProtectedRoute exact path="/userAccount" component={UserAccount} />
            <ProtectedRoute
              exact
              path="/userAccount/:user/:id"
              component={UserDetails}
            />
            <ProtectedRoute exact path="/tracking" component={Tracking} />
            <ProtectedRoute exact path="/tracking/:job" component={Job} />
            <ProtectedRoute exact path="/vehicles" component={Vehicles} />
            <ProtectedRoute
              exact
              path="/vehicles/:id"
              component={VehiclesData}
            />
            <ProtectedRoute exact path="/support" component={SupportListing} />
            <ProtectedRoute
              exact
              path="/support/conversation"
              component={SupportConversation}
            />
            <ProtectedRoute exact path="/offer" component={Offer} />
            <ProtectedRoute
              exact
              path="/notifications"
              component={Notification}
            />
            <ProtectedRoute exact path="/driver" component={DriverDetails} />
            <ProtectedRoute exact path="/driver/:id" component={Drivers} />
          </Switch>
        </div>
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
