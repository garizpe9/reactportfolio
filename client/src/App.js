// import React from "react";
// import Nav from "./component/Nav";
// import Jumbotron from "./component/Jumbotron"
 import Footer from "./component/Footer"



// function App() {
//   return (
//     <div>
//       <Nav />
//       <Jumbotron>
//       </Jumbotron>
//       <Footer />

//     </div>
//   );
// }


// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
