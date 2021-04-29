import React, { useEffect, dispatch } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import CreateRecipe from "./CreateRecipe"
import './carousel.css';
import Footer from "./Footer"
import RecipePage from "./RecipePage"



function App() {

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/CreateRecipe">
            <Header />
            <CreateRecipe />
            <Footer />
          </Route>
          <Route path="/Recipe">
            <Header />
            <RecipePage />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
