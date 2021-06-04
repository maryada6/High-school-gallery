import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderPart from "./components/header"
import FooterPart from "./components/footer"
import Kodai1 from "./pages/kodai"
import Kadam from "./pages/kadam"
import Sports from "./pages/sports"
import Farewell from "./pages/farewell"
import Error  from "./pages/error"


function App() {
  return (
    <Router>
      <HeaderPart/>
      <Switch>
        <Route exact path="/">
          <Kodai1/>
        </Route>
        <Route path="/kadam">
          <Kadam />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/farewell">
          <Farewell />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <FooterPart/>
    </Router>
  );
}

export default App;
