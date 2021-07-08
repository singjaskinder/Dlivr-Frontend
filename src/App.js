import "./App.css";
import Dashboard from "./screens/Dashboard";
import CreateAdmin from "./screens/CreateAdmin";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import SupportListing from "./screens/SupportListing";
import SupportConversation from "./screens/SupportConversation";

function App() {
  return (
    <div className="App">
      {/* <SupportConversation /> */}
      {/* <SupportListing /> */}
      {/* <CreateAdmin/> */}
      <Dashboard />
      <CssBaseline />
    </div>
  );
}

export default App;
