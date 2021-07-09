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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notification from "./screens/Notification";
import CreateAdmin from "./screens/CreateAdmin";
import SupportListing from "./screens/SupportListing";
import SupportConversation from "./screens/SupportConversation";
import Login from "./screens/Login";
import DriverDetails from "./screens/DriverDetails";
import UserDetails from "./screens/UserDetails";
import AdminDetails from "./screens/AdminDetails";
import Drivers from "./screens/Drivers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/adminAccount" component={AdminDetails} />
            <Route exact path="/adminAccount/create" component={CreateAdmin} />
            <Route
              exact
              path="/adminAccount/:Adminid"
              component={AdminAccount}
            />
            <Route exact path="/userAccount" component={UserAccount} />
            <Route
              exact
              path="/userAccount/:user/:id"
              component={UserDetails}
            />
            <Route exact path="/tracking" component={Tracking} />
            <Route exact path="/tracking/:job" component={Job} />
            <Route exact path="/vehicles" component={Vehicles} />
            <Route exact path="/vehicles/:id" component={VehiclesData} />
            <Route exact path="/support" component={SupportListing} />
            <Route
              exact
              path="/support/conversation"
              component={SupportConversation}
            />
            <Route exact path="/offer" component={Offer} />
            <Route exact path="/notifications" component={Notification} />
            <Route exact path="/driver" component={DriverDetails} />
            <Route exact path="/driver/:id" component={Drivers} />
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
