import About from "./About";
import SongOverview from "./SongOverview";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Footer from "./Footer";

function App() {

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <SongOverview />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
