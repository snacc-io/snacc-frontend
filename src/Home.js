import React from "react";
import "./Home.css";
import Recipe from "./Recipe";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

         <main role="main">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="first-slide cover"
        src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/f015544c-b38d-49fc-a1d1-7e906e042eee/5a42a8eb-5b4d-4aeb-b613-6485c8f02d57_rw_1920.jpg?h=79b30efc1cee720ee3fd5472cc882e82"
        alt="Delicious Noli"/>
      <div class="container">
        <div class="carousel-caption text-left opaque-box">
          <h1>Noli Cannoli</h1>
          <p>We produce delicious and healthy, gluten free cannoli for you to
            enjoy!</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="second-slide cover "
        src="https://i.imgur.com/VkPr5BS.jpg"
        alt="Healthy Ingredients"/>
      <div class="container">
        <div class="carousel-caption opaque-box">
          <h1>Delicious freshness</h1>
          <p>Our handcrafted cannoli are made of the freshest, most wholesome ingredients on the market.</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="third-slide cover"
        src="https://i.imgur.com/TQZnTpQ.jpg"
        alt="Third slide"/>
      <div class="container">
        <div class="carousel-caption text-right opaque-box">
          <h1>Gluten Free & Natural</h1>
          <p>Everything produced in our home bakery is made from completely gluten free goodness.</p>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>




<div class="container marketing">



  
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">Classic Cannoli: <span class="text-muted">Try the delicous OG Italian desert</span></h2>
      <p class="lead">This scrumptious crunchy traditional Italian snack is packed with chocolate chips, lemon zest & a creamy vanilla filling</p>
    </div>
    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto square-500"
        src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/f015544c-b38d-49fc-a1d1-7e906e042eee/da35d5f8-d217-42cc-b476-0b5d00432f38_rw_1920.jpg?h=20522ef0c56e2136041cd851a0586b0b"
        alt="snack"/>
    </div>
  </div>

  <hr class="featurette-divider"/>
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">Choconnoli: <span class="text-muted">Rated by many as our best cannoli</span></h2>
      <p class="lead">You will be blown away by the incredible chocolatey goodness 
        and delectible crunch of this premium cannoli! The chocolate cream filling surrounded with a crunchy, chocolate coated exterior, will fulfill the fantasies of any chocolate lover!</p>
    </div>
    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto square-500"
        src="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/62bf2fca-c4dc-424f-81de-9a8beed2086a_rw_1920.jpg?h=f1a8a8eaa2323170e7b328af2831ad15"
        alt="snack"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading">Holiday Spice Cannoli: <span class="text-muted">Try the pumpkin spice craze, now in cannoli form!</span></h2>
      <p class="lead">This scrumptious festive cannoli with hints of holiday spirit and mom's home baked pumkin pie, will make anyone happy inside this holiday season!</p>
    </div>
    <div class="col-md-5 order-md-1">
      <img class="featurette-image img-fluid mx-auto square-500"
        src="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/1eff550b-2fe8-43a0-bc5c-d1771d4a4840_rw_1920.jpg?h=1270724a86b5a957115c200af1d66551"
        alt="snack"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">Lemon Zest Cannoli: <span class="text-muted">The delicious taste of Italian summers, here for your enjoyment!</span></h2>
      <p class="lead">The zesty goodness of this lemon infused cannoli will make you feel like you're walking on a sunny day, even in the
         dark rainy gloom of a Wilsonville winter's day.</p>
    </div>
    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto square-500"
        src="https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/270a969f-c4c4-4a61-8ea4-f0a308811442_rw_1920.jpg?h=2b6c0827ce273ba7505d19874e962191"
        alt="Generic placeholder image"/>
    </div>
  </div>

</div>




</main>

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
