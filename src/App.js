import React, { useEffect, dispatch } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import CreateRecipe from "./CreateRecipe";
import "./carousel.css";
import Footer from "./Footer";
import RecipePage from "./RecipePage";
import Ingredient from "./Ingredient";
import Register from "./Register";
import CreateReview from "./CreateReview";
import IndexPage from "./indexPage";
import Admin from "./Admin";
import RecipesIngredientsTable from "./RecipesIngredientsTable"
import UsersTable from "./UsersTable"
import ReviewsTable from "./ReviewsTable"
import RecipesTable from "./RecipesTable"
import IngredientsTable from "./IngredientsTable"

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
          <Route path="/IngredientsTable">
            <Header />
            <IngredientsTable />
            <Footer />
          </Route>
          <Route path="/UsersTable">
            <Header />
            <UsersTable />
            <Footer />
          </Route>
          <Route path="/RecipesTable">
            <Header />
            <RecipesTable />
            <Footer />
          </Route>
          <Route path="/RecipesTable">
            <Header />
            <RecipesTable />
            <Footer />
          </Route>
          <Route path="/IngredientsTable">
            <Header />
            <IngredientsTable />
            <Footer />
          </Route>
          <Route path="/RecipesIngredientsTable">
            <Header />
            <RecipesIngredientsTable />
            <Footer />
          </Route>
          <Route path="/ReviewsTable">
            <Header />
            <ReviewsTable />
            <Footer />
          </Route>
          <Route path="/admin">
            <Header />
            <Admin />
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
