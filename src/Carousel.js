import React from "react";


function Carousel() {

  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="first-slide cover"
        src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/f015544c-b38d-49fc-a1d1-7e906e042eee/5a42a8eb-5b4d-4aeb-b613-6485c8f02d57_rw_1920.jpg?h=79b30efc1cee720ee3fd5472cc882e82"
        alt="Delicious Noli"/>
      <div className="container">
        <div className="carousel-caption text-left opaque-box">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="second-slide cover "
        src="https://i.imgur.com/VkPr5BS.jpg"
        alt="Healthy Ingredients"/>
      <div className="container">
        <div className="carousel-caption opaque-box">
          <h1>ipsum dolor</h1>
          <p>Lorem ipsum dolor sit ame</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="third-slide cover"
        src="https://i.imgur.com/TQZnTpQ.jpg"
        alt="Third slide"/>
      <div className="container">
        <div className="carousel-caption text-right opaque-box">
          <h1>dolor sit amet</h1>
          <p>Lorem ipsum dolor sit ame</p>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  );
}

export default Carousel;