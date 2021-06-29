import React, { useEffect, dispatch } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Login from "./UI/Login";
import { auth } from "./firebase";
import CreateRecipe from "./UI/CreateRecipe";
import "./components/carousel.css";
import Footer from "./components/Footer";
import RecipePage from "./UI/RecipePage";
import Ingredient from "./UI/Ingredient";
import Register from "./UI/Register";
import CreateReview from "./UI/CreateReview";
import IndexPage from "./UI/indexPage";


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
          <Route path="/index">
            <Header />
            <IndexPage />
            <Footer />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
            <Footer />
          </Route>
          <Route path="/ingredient">
            <Header />
            <Ingredient />
            <Footer />
          </Route>
          <Route path="/CreateReview">
            <Header />
            <CreateReview />
            <Footer />
          </Route>
          <Route path="/CreateRecipe">
            <Header />
            <CreateRecipe />
            <Footer />
          </Route>
          <Route path="/recipe">
            <Header />
            <RecipePage
              id="12321341"
              title="Some tasty recipe"
              titleBlurb="A delicious thing to eat"
              description="Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum "
              rating={5}
              image="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/1eff550b-2fe8-43a0-bc5c-d1771d4a4840_rw_1920.jpg?h=1270724a86b5a957115c200af1d66551"
            />
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
