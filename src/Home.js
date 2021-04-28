import React from "react";
import "./Home.css";
import Recipe from "./Recipe";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="#todo"
          alt="background logo"
        />

        <div className="home__row">
          <Recipe
            id="12321341"
            title="Some tasty recipe"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Recipe
            id="49538094"
            title="Some other tasty recipe"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Recipe
            id="4903850"
            title="My grandma's favorite recipe"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Recipe
            id="23445930"
            title="The tastiest quinoa you've ever made"
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Recipe
            id="3254354345"
            title="Worst chicken nuggets in the world"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Recipe
            id="90829332"
            title="Best flatbread"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
