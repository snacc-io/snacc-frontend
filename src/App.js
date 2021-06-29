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
import RecipesIngredientsTable from "./tables/RecipesIngredientsTable"
import UsersTable from "./tables/UsersTable"
import ReviewsTable from "./tables/ReviewsTable"
import RecipesTable from "./tables/RecipesTable"
import IngredientsTable from "./tables/IngredientsTable"

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
          <Route path="/:username/:recipe_name" component="params">
            <Header />
            <RecipePage/>
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
