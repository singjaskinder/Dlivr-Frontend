import './App.css';
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import DashBoard from "./screens/DashBoard"
import AdminAccount from "./screens/AdminAccount"
import UserAccount from "./screens/UserAccount"
import Tracking from "./screens/Tracking"
import Vehicles from "./screens/Vehicles"
import Support from "./screens/Support"
import Offers from "./screens/Offers"
import VehiclesData from "./screens/VehicleData"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notification from './screens/Notification';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <div className="main_div">
          <Switch>
            <Route exact path='/dashboard' component={DashBoard} />
            <Route exact path='/adminAccount' component={AdminAccount} />
            <Route exact path='/userAccount' component={UserAccount} />
            <Route exact path='/tracking' component={Tracking} />
            <Route exact path='/vehicles' component={Vehicles} />
            <Route exact path='/vehicles/:id' component={VehiclesData} />
            <Route exact path='/support' component={Support} />
            <Route exact path='/offers' component={Offers} />
            <Route exact path='/notifications' component={Notification} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
