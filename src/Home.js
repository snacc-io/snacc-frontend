import React from "react";
import "./Home.css";
import Recipe from "./components/Recipe";
import Carousel from "./components/Carousel";

function Home() {
  return (
  <div className="home">
    <div className="home__container">

    <main role="main">


      <Carousel />


      <div className="container marketing">

        <Recipe
          id="12321341"
          title="Some tasty recipe"
          titleBlurb="A delicious thing to eat"
          description="Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum "
          rating={5}
          image="https://pro2-bar-s3-cdn-cf2.myportfolio.com/f015544c-b38d-49fc-a1d1-7e906e042eee/da35d5f8-d217-42cc-b476-0b5d00432f38_rw_1920.jpg?h=20522ef0c56e2136041cd851a0586b0b"
        />
        <hr className="featurette-divider"/>

        <Recipe
          id="12321341"
          title="Some tasty recipe"
          titleBlurb="A delicious thing to eat"
          description="Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum "
          rating={5}
          image="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/1eff550b-2fe8-43a0-bc5c-d1771d4a4840_rw_1920.jpg?h=1270724a86b5a957115c200af1d66551"
        />
        <hr className="featurette-divider"/>


        <Recipe
          id="12321341"
          title="Some tasty recipe"
          titleBlurb="A delicious thing to eat"
          description="Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum "
          rating={5}
          image="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/270a969f-c4c4-4a61-8ea4-f0a308811442_rw_1920.jpg?h=2b6c0827ce273ba7505d19874e962191"
        />
        <hr className="featurette-divider"/>

      </div>
    </main>

    </div>
  </div>
  );
}

export default Home;

