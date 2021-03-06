import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./../StateProvider";
import { auth } from "./../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">



  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">Snacc.io</a>
      {/* <div className="header__search">
        <input className="header__searchInput" placeholder="Search for a recipe" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
        </ul>
      </div>
      <div className="header__nav">
      <Link className="navbar-brand" to="/RecipesIngredientsTable">RecipesIngredients</Link>
      <Link className="navbar-brand" to="/UsersTable">Users</Link>
      <Link className="navbar-brand" to="/RecipesTable">Recipes</Link>
      <Link className="navbar-brand" to="/IngredientsTable">Ingredients</Link>
      <Link className="navbar-brand" to="/ReviewsTable">Reviews</Link>

      <Link className="navbar-brand" to="/index">Index</Link>
        {/* <Link to={!user && '/login'}>
          <div  onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>         */}


      </div>
    </nav>
  </header>


    </div>
  );
}

export default Header;