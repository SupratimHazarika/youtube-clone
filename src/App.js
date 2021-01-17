import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="App__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/serch/:searchTerm">
            <h1>Search Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
